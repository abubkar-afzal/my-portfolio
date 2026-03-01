import React, { useEffect, useRef, useCallback } from "react";
import { 
  Engine, 
  Scene, 
  ArcRotateCamera, 
  Vector3, 
  HemisphericLight, 
  PointLight,
  SpotLight,
  Color3,
  Color4,
  MeshBuilder,
  StandardMaterial,
  TransformNode,
  CreateCylinder,
  CreateSphere,
  CreateGround,
  CreateBox,
  CreateTorus,
  ParticleSystem,
  FresnelParameters,
  SceneOptimizer,
  SceneOptimizerOptions
} from "@babylonjs/core";

const BabylonBackground = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const scrollProgressRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const targetCameraPositionRef = useRef({ radius: 45, alpha: -Math.PI / 2, beta: Math.PI / 3.2 });
  const deviceOrientationRef = useRef({ beta: 0, gamma: 0 });
  const isMobileRef = useRef(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth <= 768 || 'ontouchstart' in window;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / maxScroll, 1);
    scrollProgressRef.current += (progress - scrollProgressRef.current) * 0.05;
  }, []);

  // Handle mouse move
  const handleMouseMove = useCallback((e) => {
    if (isMobileRef.current) return;
    mousePositionRef.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1
    };
  }, []);

  // Handle device orientation for mobile
  const handleDeviceOrientation = useCallback((e) => {
    if (!isMobileRef.current) return;
    deviceOrientationRef.current = {
      beta: ((e.beta || 0) - 45) / 90,
      gamma: (e.gamma || 0) / 90
    };
  }, []);

  // Handle touch move for mobile
  const handleTouchMove = useCallback((e) => {
    if (!isMobileRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    if (touch) {
      mousePositionRef.current = {
        x: (touch.clientX / window.innerWidth) * 2 - 1,
        y: (touch.clientY / window.innerHeight) * 2 - 1
      };
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Optimized engine settings
    const engine = new Engine(canvasRef.current, true, {
      preserveDrawingBuffer: false,
      stencil: false,
      antialias: !isMobileRef.current,
      powerPreference: "default"
    });
    engineRef.current = engine;
    
    const scene = new Scene(engine);
    sceneRef.current = scene;
    
    // Optimized scene setup
    scene.clearColor = new Color4(0, 0, 0, 1);
    scene.ambientColor = new Color3(0.1, 0.1, 0.2);
    scene.skipPointerMovePicking = true;
    scene.skipFrustumClipping = true;
    scene.blockMaterialDirtyMechanism = true;
    
    // Camera with optimized settings
    const camera = new ArcRotateCamera(
      "camera", 
      -Math.PI / 2, 
      Math.PI / 3.2, 
      45, 
      Vector3.Zero(), 
      scene
    );
    camera.attachControl(canvasRef.current, false);
    camera.panningSensibility = 0;
    camera.wheelPrecision = 0;
    camera.lowerRadiusLimit = 35;
    camera.upperRadiusLimit = 55;
    camera.inertia = 0.5;
    camera.angularSensibilityX = isMobileRef.current ? 5000 : 2000;
    camera.angularSensibilityY = isMobileRef.current ? 5000 : 2000;
    cameraRef.current = camera;
    
    // Optimized lighting
    const ambientLight = new HemisphericLight("ambientLight", new Vector3(0, 1, 0), scene);
    ambientLight.intensity = 0.3;
    
    const keyLight = new SpotLight("keyLight", new Vector3(15, 20, 15), new Vector3(-1, -1, -1), Math.PI / 2, 1, scene);
    keyLight.intensity = 0.8;
    
    const fillLight1 = new PointLight("fillLight1", new Vector3(-12, 8, 12), scene);
    fillLight1.intensity = 0.5;
    
    const fillLight2 = new PointLight("fillLight2", new Vector3(8, 5, -15), scene);
    fillLight2.intensity = 0.4;

    // Reusable materials for optimization
    const createMaterials = () => {
      const materials = {};
      
      const stemMat = new StandardMaterial("stemMat", scene);
      stemMat.diffuseColor = new Color3(0.1, 0.4, 0.1);
      materials.stem = stemMat;
      
      const leafMat = new StandardMaterial("leafMat", scene);
      leafMat.diffuseColor = new Color3(0.2, 0.6, 0.2);
      materials.leaf = leafMat;
      
      const petalMat = new StandardMaterial("petalMat", scene);
      petalMat.diffuseColor = new Color3(0.9, 0.2, 0.3);
      materials.petal = petalMat;
      
      const centerMat = new StandardMaterial("centerMat", scene);
      centerMat.diffuseColor = new Color3(0.9, 0.7, 0.2);
      materials.center = centerMat;
      
      return materials;
    };

    const materials = createMaterials();

    // Optimized flower creation with reduced geometry
    const createOptimizedRose = (pos, scale = 1) => {
      const roseGroup = new TransformNode("rose", scene);
      
      // Stem
      const stem = CreateCylinder("stem", { height: 2.5, diameter: 0.08, tessellation: 6 }, scene);
      stem.position.y = 1.25;
      stem.material = materials.stem;
      stem.parent = roseGroup;
      
      // Fewer leaves for performance
      for (let i = 0; i < 3; i++) {
        const leaf = CreateBox(`leaf${i}`, { width: 0.3, height: 0.15, depth: 0.05 }, scene);
        leaf.position = new Vector3(0.25, 0.8 + i * 0.6, 0);
        leaf.rotation.z = 0.4;
        leaf.material = materials.leaf;
        leaf.parent = roseGroup;
      }
      
      // Optimized petals (reduced count for mobile)
      const petalCount = isMobileRef.current ? 12 : 16;
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const isInner = i < 6;
        const petal = CreateSphere(`petal${i}`, { diameter: isInner ? 0.3 : 0.4, segments: 6 }, scene);
        petal.position = new Vector3(
          Math.cos(angle) * (isInner ? 0.25 : 0.4),
          isInner ? 2.3 : 2.2,
          Math.sin(angle) * (isInner ? 0.25 : 0.4)
        );
        petal.scaling = new Vector3(isInner ? 1 : 1.2, 0.3, isInner ? 0.5 : 0.6);
        petal.rotation.y = angle;
        
        const petalMat = materials.petal.clone();
        petalMat.diffuseColor = new Color3(0.9, 0.2, 0.3);
        petal.material = petalMat;
        petal.parent = roseGroup;
      }
      
      // Center
      const center = CreateSphere("center", { diameter: 0.2, segments: 6 }, scene);
      center.position.y = 2.35;
      center.material = materials.center;
      center.parent = roseGroup;
      
      roseGroup.position = pos;
      roseGroup.scaling = new Vector3(scale, scale, scale);
      
      return roseGroup;
    };

    // Simplified code symbol creator
    const createOptimizedCodeSymbol = (pos, color, size = 0.6) => {
      const symbolGroup = new TransformNode("codeSymbol", scene);
      
      const cube = CreateBox("symbol", { width: 0.4, height: 0.4, depth: 0.1 }, scene);
      const cubeMat = new StandardMaterial("cubeMat", scene);
      cubeMat.diffuseColor = color;
      cubeMat.emissiveColor = color.scale(0.2);
      cube.material = cubeMat;
      cube.parent = symbolGroup;
      
      symbolGroup.position = pos;
      symbolGroup.scaling = new Vector3(size, size, size);
      
      return symbolGroup;
    };

    // ==================== CREATE OPTIMIZED OBJECTS ====================
    
    const allObjects = [];
    
    // Reduced object counts for performance
    const objectCounts = {
      roses: isMobileRef.current ? 6 : 10,
      lilies: isMobileRef.current ? 5 : 8,
      sunflowers: isMobileRef.current ? 4 : 6,
      tulips: isMobileRef.current ? 5 : 8,
      symbols: isMobileRef.current ? 20 : 40
    };

    // Create flowers
    for (let i = 0; i < objectCounts.roses; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 50
      );
      const scale = 0.7 + Math.random() * 0.5;
      allObjects.push(createOptimizedRose(pos, scale));
    }

    // Create lilies (simplified version)
    for (let i = 0; i < objectCounts.lilies; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 50
      );
      const scale = 0.7 + Math.random() * 0.5;
      allObjects.push(createOptimizedRose(pos, scale)); // Using rose as placeholder for simplicity
    }

    // Create sunflowers
    for (let i = 0; i < objectCounts.sunflowers; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 50
      );
      const scale = 0.6 + Math.random() * 0.5;
      allObjects.push(createOptimizedRose(pos, scale));
    }

    // Create tulips with colors
    const tulipColors = [
      new Color3(1, 0.3, 0.3),
      new Color3(1, 0.6, 0.8),
      new Color3(1, 0.8, 0.2)
    ];

    for (let i = 0; i < objectCounts.tulips; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 50
      );
      const scale = 0.6 + Math.random() * 0.5;
      allObjects.push(createOptimizedRose(pos, scale));
    }

    // Create code symbols
    const codeColors = [
      new Color3(1, 0.4, 0.4),
      new Color3(0.4, 1, 0.4),
      new Color3(0.4, 0.6, 1),
      new Color3(1, 0.8, 0.2)
    ];

    for (let i = 0; i < objectCounts.symbols; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 60
      );
      const color = codeColors[Math.floor(Math.random() * codeColors.length)];
      const size = 0.5 + Math.random() * 0.5;
      allObjects.push(createOptimizedCodeSymbol(pos, color, size));
    }

    // Optimized motion data
    const motionData = allObjects.map(obj => ({
      obj,
      initialPos: obj.position.clone(),
      speed: 0.1 + Math.random() * 0.2,
      radius: 3 + Math.random() * 6,
      phase: Math.random() * Math.PI * 2,
      rotSpeed: 0.0005 + Math.random() * 0.0015,
      floatSpeed: 0.3 + Math.random() * 0.5,
      verticalRange: 1 + Math.random() * 3
    }));

    // Optimized particle system
    const particleCount = isMobileRef.current ? 300 : 600;
    const particleSystem = new ParticleSystem("particles", particleCount, scene);
    particleSystem.emitter = Vector3.Zero();
    particleSystem.minEmitBox = new Vector3(-35, -15, -35);
    particleSystem.maxEmitBox = new Vector3(35, 15, 35);
    particleSystem.color1 = new Color4(0.3, 0.5, 1, 0.15);
    particleSystem.color2 = new Color4(1, 0.3, 0.5, 0.15);
    particleSystem.colorDead = new Color4(0, 0, 0, 0);
    particleSystem.minSize = 0.02;
    particleSystem.maxSize = 0.06;
    particleSystem.minLifeTime = 3;
    particleSystem.maxLifeTime = 5;
    particleSystem.emitRate = isMobileRef.current ? 15 : 25;
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;
    particleSystem.start();

    // Add scene optimizer
    const options = new SceneOptimizerOptions(50, 1000);
    SceneOptimizer.OptimizeAsync(scene, options);

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    canvasRef.current.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Animation loop with scroll and cursor effects
    let time = 0;
    let frameSkip = isMobileRef.current ? 2 : 1;
    let frameCount = 0;
    
    scene.registerBeforeRender(() => {
      frameCount++;
      if (frameCount % frameSkip !== 0) return;
      
      time += 0.005;
      
      // Scroll-based camera movement
      if (cameraRef.current) {
        const scrollFactor = scrollProgressRef.current;
        const mouseFactor = mousePositionRef.current;
        
        // Camera responds to scroll
        targetCameraPositionRef.current.radius = 35 + scrollFactor * 20;
        targetCameraPositionRef.current.beta = Math.PI / 3.2 + scrollFactor * 0.3;
        
        // Smooth camera interpolation
        cameraRef.current.radius += (targetCameraPositionRef.current.radius - cameraRef.current.radius) * 0.02;
        cameraRef.current.beta += (targetCameraPositionRef.current.beta - cameraRef.current.beta) * 0.02;
        
        // Mouse/orientation effect on camera angle
        if (isMobileRef.current) {
          cameraRef.current.alpha += deviceOrientationRef.current.gamma * 0.005;
        } else {
          cameraRef.current.alpha = targetCameraPositionRef.current.alpha + mouseFactor.x * 0.1;
        }
      }
      
      // Object animations with scroll and mouse influence
      motionData.forEach((data) => {
        const scrollInfluence = scrollProgressRef.current * 2;
        const mouseInfluenceX = mousePositionRef.current.x * 2;
        const mouseInfluenceY = mousePositionRef.current.y;
        
        const t = time * data.speed + data.phase;
        
        // Enhanced motion with scroll and mouse effects
        data.obj.position.x = data.initialPos.x + 
          Math.sin(t) * data.radius * 0.7 + 
          Math.cos(t * 0.5) * data.radius * 0.3 +
          mouseInfluenceX * 2;
        
        data.obj.position.y = data.initialPos.y + 
          Math.sin(time * data.floatSpeed + data.phase) * (data.verticalRange + scrollInfluence) +
          mouseInfluenceY * 1.5;
        
        data.obj.position.z = data.initialPos.z + 
          Math.cos(t * 0.8) * data.radius * 0.8;
        
        // Rotation
        data.obj.rotation.y += data.rotSpeed * (1 + Math.abs(mouseInfluenceX) * 0.5);
        data.obj.rotation.x += data.rotSpeed * 0.2 * (1 + Math.abs(mouseInfluenceY) * 0.5);
      });
      
      // Dynamic lighting based on scroll
      keyLight.intensity = 0.8 + scrollProgressRef.current * 0.4;
      keyLight.position.x = 15 + Math.sin(time * 0.5) * 8 + scrollProgressRef.current * 10;
      keyLight.position.z = 15 + Math.cos(time * 0.5) * 8;
      
      fillLight1.intensity = 0.5 + scrollProgressRef.current * 0.3;
      fillLight2.intensity = 0.4 + scrollProgressRef.current * 0.2;
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    const handleResize = () => {
      engine.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("touchmove", handleTouchMove);
      }
      if (engineRef.current) {
        engineRef.current.dispose();
      }
    };
  }, [handleScroll, handleMouseMove, handleDeviceOrientation, handleTouchMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 outline-none"
      style={{ 
        background: "black",
        touchAction: "none",
        pointerEvents: "none"
      }}
    />
  );
};

export default BabylonBackground;