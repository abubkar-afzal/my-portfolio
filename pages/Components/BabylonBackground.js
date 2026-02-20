import React, { useEffect, useRef } from "react";
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
  Vector2
} from "@babylonjs/core";

const BabylonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      antialias: true
    });
    
    const scene = new Scene(engine);
    
    // Deep black background
    scene.clearColor = new Color4(0, 0, 0, 1);
    scene.ambientColor = new Color3(0.1, 0.1, 0.2);
    
    // Camera
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
    
    // Lighting
    const ambientLight = new HemisphericLight("ambientLight", new Vector3(0, 1, 0), scene);
    ambientLight.intensity = 0.3;
    ambientLight.diffuse = new Color3(0.4, 0.4, 0.5);
    ambientLight.groundColor = new Color3(0.1, 0.1, 0.15);
    
    const keyLight = new SpotLight("keyLight", new Vector3(15, 20, 15), new Vector3(-1, -1, -1), Math.PI / 2, 1, scene);
    keyLight.intensity = 0.8;
    keyLight.diffuse = new Color3(1, 0.95, 0.9);
    
    const fillLight1 = new PointLight("fillLight1", new Vector3(-12, 8, 12), scene);
    fillLight1.intensity = 0.5;
    fillLight1.diffuse = new Color3(0.6, 0.7, 1);
    
    const fillLight2 = new PointLight("fillLight2", new Vector3(8, 5, -15), scene);
    fillLight2.intensity = 0.4;
    fillLight2.diffuse = new Color3(1, 0.7, 0.6);

    // ==================== FLOWER CREATION FUNCTIONS ====================
    
    const createRealisticRose = (pos, scale = 1) => {
      const roseGroup = new TransformNode("rose", scene);
      
      // Stem
      const stem = CreateCylinder("stem", { height: 2.5, diameter: 0.08 }, scene);
      stem.position.y = 1.25;
      const stemMat = new StandardMaterial("stemMat", scene);
      stemMat.diffuseColor = new Color3(0.1, 0.4, 0.1);
      stem.material = stemMat;
      stem.parent = roseGroup;
      
      // Thorns
      for (let i = 0; i < 5; i++) {
        const thorn = CreateCylinder(`thorn${i}`, { height: 0.1, diameter: 0.03 }, scene);
        thorn.position = new Vector3(0.1, 0.5 + i * 0.4, 0);
        thorn.rotation.z = 0.3;
        thorn.material = stemMat;
        thorn.parent = roseGroup;
      }
      
      // Leaves
      const leafMat = new StandardMaterial("leafMat", scene);
      leafMat.diffuseColor = new Color3(0.2, 0.6, 0.2);
      
      for (let i = 0; i < 4; i++) {
        const leaf = CreateBox(`leaf${i}`, { width: 0.3, height: 0.15, depth: 0.05 }, scene);
        leaf.position = new Vector3(0.25, 0.8 + i * 0.4, 0);
        leaf.rotation.z = 0.4;
        leaf.rotation.y = i * 0.5;
        leaf.material = leafMat;
        leaf.parent = roseGroup;
      }
      
      // Rose flower head
      const petalMat = new StandardMaterial("petalMat", scene);
      petalMat.diffuseColor = new Color3(0.9, 0.2, 0.3);
      petalMat.specularColor = new Color3(0.3, 0.1, 0.1);
      petalMat.emissiveColor = new Color3(0.1, 0, 0);
      petalMat.fresnelParameters = new FresnelParameters();
      
      // Inner petals
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const petal = CreateSphere(`petal${i}`, { diameter: 0.3 }, scene);
        petal.position = new Vector3(
          Math.cos(angle) * 0.25,
          2.3,
          Math.sin(angle) * 0.25
        );
        petal.scaling = new Vector3(1, 0.3, 0.5);
        petal.rotation.y = angle;
        petal.rotation.x = 0.2;
        petal.material = petalMat;
        petal.parent = roseGroup;
      }
      
      // Outer petals
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const petal = CreateSphere(`petalOuter${i}`, { diameter: 0.4 }, scene);
        petal.position = new Vector3(
          Math.cos(angle) * 0.4,
          2.2,
          Math.sin(angle) * 0.4
        );
        petal.scaling = new Vector3(1.2, 0.2, 0.6);
        petal.rotation.y = angle;
        petal.rotation.x = 0.3;
        petal.material = petalMat;
        petal.parent = roseGroup;
      }
      
      // Center
      const center = CreateSphere("center", { diameter: 0.2 }, scene);
      center.position.y = 2.35;
      const centerMat = new StandardMaterial("centerMat", scene);
      centerMat.diffuseColor = new Color3(0.9, 0.7, 0.2);
      center.material = centerMat;
      center.parent = roseGroup;
      
      roseGroup.position = pos;
      roseGroup.scaling = new Vector3(scale, scale, scale);
      
      return roseGroup;
    };

    const createRealisticLily = (pos, scale = 1) => {
      const lilyGroup = new TransformNode("lily", scene);
      
      const stem = CreateCylinder("stem", { height: 2.8, diameter: 0.06 }, scene);
      stem.position.y = 1.4;
      const stemMat = new StandardMaterial("stemMat", scene);
      stemMat.diffuseColor = new Color3(0.1, 0.5, 0.1);
      stem.material = stemMat;
      stem.parent = lilyGroup;
      
      const leafMat = new StandardMaterial("leafMat", scene);
      leafMat.diffuseColor = new Color3(0.2, 0.7, 0.2);
      
      for (let i = 0; i < 3; i++) {
        const leaf = CreateBox(`leaf${i}`, { width: 0.4, height: 0.1, depth: 0.1 }, scene);
        leaf.position = new Vector3(0.3, 0.8 + i * 0.6, 0);
        leaf.rotation.z = 0.5;
        leaf.rotation.y = 0.2;
        leaf.material = leafMat;
        leaf.parent = lilyGroup;
      }
      
      const trumpet = CreateCylinder("trumpet", { height: 0.8, diameterTop: 0.4, diameterBottom: 0.2 }, scene);
      trumpet.position.y = 2.6;
      trumpet.rotation.x = 0.2;
      const trumpetMat = new StandardMaterial("trumpetMat", scene);
      trumpetMat.diffuseColor = new Color3(1, 1, 1);
      trumpet.material = trumpetMat;
      trumpet.parent = lilyGroup;
      
      const petalMat = new StandardMaterial("petalMat", scene);
      petalMat.diffuseColor = new Color3(1, 1, 1);
      
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const petal = CreateSphere(`petal${i}`, { diameter: 0.35 }, scene);
        petal.position = new Vector3(
          Math.cos(angle) * 0.35,
          2.7,
          Math.sin(angle) * 0.35
        );
        petal.scaling = new Vector3(0.8, 0.2, 1.2);
        petal.rotation.y = angle;
        petal.rotation.x = 0.4;
        petal.material = petalMat;
        petal.parent = lilyGroup;
      }
      
      const center = CreateSphere("center", { diameter: 0.15 }, scene);
      center.position.y = 2.8;
      const centerMat = new StandardMaterial("centerMat", scene);
      centerMat.diffuseColor = new Color3(1, 0.6, 0.1);
      center.material = centerMat;
      center.parent = lilyGroup;
      
      lilyGroup.position = pos;
      lilyGroup.scaling = new Vector3(scale, scale, scale);
      
      return lilyGroup;
    };

    const createRealisticSunflower = (pos, scale = 1) => {
      const sunflowerGroup = new TransformNode("sunflower", scene);
      
      const stem = CreateCylinder("stem", { height: 3, diameter: 0.15 }, scene);
      stem.position.y = 1.5;
      const stemMat = new StandardMaterial("stemMat", scene);
      stemMat.diffuseColor = new Color3(0.1, 0.5, 0.1);
      stem.material = stemMat;
      stem.parent = sunflowerGroup;
      
      const leafMat = new StandardMaterial("leafMat", scene);
      leafMat.diffuseColor = new Color3(0.2, 0.7, 0.2);
      
      for (let i = 0; i < 4; i++) {
        const leaf = CreateBox(`leaf${i}`, { width: 0.6, height: 0.15, depth: 0.1 }, scene);
        leaf.position = new Vector3(0.4, 1.0 + i * 0.6, 0);
        leaf.rotation.z = 0.6;
        leaf.rotation.y = i * 0.3;
        leaf.material = leafMat;
        leaf.parent = sunflowerGroup;
      }
      
      const headBase = CreateSphere("headBase", { diameter: 0.8 }, scene);
      headBase.position.y = 3.2;
      headBase.scaling = new Vector3(1, 0.3, 1);
      const baseMat = new StandardMaterial("baseMat", scene);
      baseMat.diffuseColor = new Color3(0.4, 0.3, 0.1);
      headBase.material = baseMat;
      headBase.parent = sunflowerGroup;
      
      const petalMat = new StandardMaterial("petalMat", scene);
      petalMat.diffuseColor = new Color3(1, 0.9, 0.2);
      
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2;
        const petal = CreateSphere(`petal${i}`, { diameter: 0.4 }, scene);
        petal.position = new Vector3(
          Math.cos(angle) * 0.7,
          3.2,
          Math.sin(angle) * 0.7
        );
        petal.scaling = new Vector3(1.2, 0.2, 0.4);
        petal.rotation.y = angle;
        petal.rotation.x = 0.2;
        petal.material = petalMat;
        petal.parent = sunflowerGroup;
      }
      
      for (let i = 0; i < 30; i++) {
        const seedAngle = (i / 30) * Math.PI * 2;
        const seedRadius = 0.2 + Math.sin(i * 5) * 0.1;
        const seed = CreateSphere(`seed${i}`, { diameter: 0.08 }, scene);
        seed.position = new Vector3(
          Math.cos(seedAngle) * seedRadius,
          3.25,
          Math.sin(seedAngle) * seedRadius
        );
        const seedMat = new StandardMaterial(`seedMat${i}`, scene);
        seedMat.diffuseColor = new Color3(0.2, 0.1, 0);
        seed.material = seedMat;
        seed.parent = sunflowerGroup;
      }
      
      sunflowerGroup.position = pos;
      sunflowerGroup.scaling = new Vector3(scale, scale, scale);
      
      return sunflowerGroup;
    };

    const createRealisticTulip = (pos, color, scale = 1) => {
      const tulipGroup = new TransformNode("tulip", scene);
      
      const stem = CreateCylinder("stem", { height: 2.2, diameter: 0.07 }, scene);
      stem.position.y = 1.1;
      const stemMat = new StandardMaterial("stemMat", scene);
      stemMat.diffuseColor = new Color3(0.1, 0.5, 0.1);
      stem.material = stemMat;
      stem.parent = tulipGroup;
      
      const leafMat = new StandardMaterial("leafMat", scene);
      leafMat.diffuseColor = new Color3(0.2, 0.6, 0.2);
      
      for (let i = 0; i < 2; i++) {
        const leaf = CreateBox(`leaf${i}`, { width: 0.5, height: 0.1, depth: 0.1 }, scene);
        leaf.position = new Vector3(0.3, 0.8 + i * 0.6, 0);
        leaf.rotation.z = 0.7;
        leaf.rotation.y = 0.3;
        leaf.material = leafMat;
        leaf.parent = tulipGroup;
      }
      
      const cup = CreateCylinder("cup", { height: 0.8, diameterTop: 0.6, diameterBottom: 0.3 }, scene);
      cup.position.y = 2.2;
      cup.rotation.x = 0.1;
      const cupMat = new StandardMaterial("cupMat", scene);
      cupMat.diffuseColor = color;
      cup.material = cupMat;
      cup.parent = tulipGroup;
      
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2;
        const innerPetal = CreateSphere(`innerPetal${i}`, { diameter: 0.25 }, scene);
        innerPetal.position = new Vector3(
          Math.cos(angle) * 0.2,
          2.4,
          Math.sin(angle) * 0.2
        );
        innerPetal.scaling = new Vector3(0.8, 0.4, 0.4);
        innerPetal.rotation.y = angle;
        innerPetal.rotation.x = 0.3;
        innerPetal.material = cupMat;
        innerPetal.parent = tulipGroup;
      }
      
      const center = CreateSphere("center", { diameter: 0.15 }, scene);
      center.position.y = 2.4;
      const centerMat = new StandardMaterial("centerMat", scene);
      centerMat.diffuseColor = new Color3(0.9, 0.8, 0.1);
      center.material = centerMat;
      center.parent = tulipGroup;
      
      tulipGroup.position = pos;
      tulipGroup.scaling = new Vector3(scale, scale, scale);
      
      return tulipGroup;
    };

    // ==================== 3D CODE SYMBOLS ====================
    
    const createCodeSymbol = (pos, symbol, color, size = 0.6) => {
      const symbolGroup = new TransformNode("codeSymbol", scene);
      
      if (symbol === '{ }' || symbol === '{}') {
        const leftBrace = CreateTorus("leftBrace", { thickness: 0.05, diameter: 0.3 }, scene);
        leftBrace.position = new Vector3(-0.2, 0, 0);
        leftBrace.rotation.x = Math.PI / 2;
        leftBrace.rotation.z = 0.2;
        const leftMat = new StandardMaterial("leftMat", scene);
        leftMat.diffuseColor = color;
        leftMat.emissiveColor = color.scale(0.3);
        leftBrace.material = leftMat;
        leftBrace.parent = symbolGroup;
        
        const rightBrace = CreateTorus("rightBrace", { thickness: 0.05, diameter: 0.3 }, scene);
        rightBrace.position = new Vector3(0.2, 0, 0);
        rightBrace.rotation.x = Math.PI / 2;
        rightBrace.rotation.z = -0.2;
        rightBrace.material = leftMat;
        rightBrace.parent = symbolGroup;
      }
      
      else if (symbol === '< >') {
        const leftAngle = CreateBox("leftAngle", { width: 0.2, height: 0.2, depth: 0.1 }, scene);
        leftAngle.position = new Vector3(-0.2, 0, 0);
        leftAngle.rotation.z = 0.2;
        const angleMat = new StandardMaterial("angleMat", scene);
        angleMat.diffuseColor = color;
        leftAngle.material = angleMat;
        leftAngle.parent = symbolGroup;
        
        const rightAngle = CreateBox("rightAngle", { width: 0.2, height: 0.2, depth: 0.1 }, scene);
        rightAngle.position = new Vector3(0.2, 0, 0);
        rightAngle.rotation.z = -0.2;
        rightAngle.material = angleMat;
        rightAngle.parent = symbolGroup;
      }
      
      else if (symbol === '( )') {
        const leftParen = CreateTorus("leftParen", { thickness: 0.05, diameter: 0.25 }, scene);
        leftParen.position = new Vector3(-0.2, 0, 0);
        leftParen.scaling = new Vector3(0.5, 1, 0.5);
        leftParen.rotation.x = Math.PI / 2;
        const parenMat = new StandardMaterial("parenMat", scene);
        parenMat.diffuseColor = color;
        leftParen.material = parenMat;
        leftParen.parent = symbolGroup;
        
        const rightParen = CreateTorus("rightParen", { thickness: 0.05, diameter: 0.25 }, scene);
        rightParen.position = new Vector3(0.2, 0, 0);
        rightParen.scaling = new Vector3(0.5, 1, 0.5);
        rightParen.rotation.x = Math.PI / 2;
        rightParen.material = parenMat;
        rightParen.parent = symbolGroup;
      }
      
      else if (symbol === '=>') {
        const line = CreateBox("line", { width: 0.4, height: 0.05, depth: 0.05 }, scene);
        const arrowMat = new StandardMaterial("arrowMat", scene);
        arrowMat.diffuseColor = color;
        line.material = arrowMat;
        line.parent = symbolGroup;
        
        const arrowHead = CreateCylinder("arrowHead", { height: 0.15, diameterTop: 0, diameterBottom: 0.15 }, scene);
        arrowHead.position = new Vector3(0.25, 0, 0);
        arrowHead.rotation.z = Math.PI / 2;
        arrowHead.material = arrowMat;
        arrowHead.parent = symbolGroup;
      }
      
      else {
        const cube = CreateBox("symbol", { width: 0.4, height: 0.4, depth: 0.1 }, scene);
        const cubeMat = new StandardMaterial("cubeMat", scene);
        cubeMat.diffuseColor = color;
        cubeMat.emissiveColor = color.scale(0.2);
        cube.material = cubeMat;
        cube.parent = symbolGroup;
        
        for (let i = 0; i < 3; i++) {
          const dot = CreateBox(`dot${i}`, { width: 0.05, height: 0.05, depth: 0.02 }, scene);
          dot.position = new Vector3(-0.1 + i * 0.1, 0, 0.06);
          const dotMat = new StandardMaterial("dotMat", scene);
          dotMat.diffuseColor = new Color3(1, 1, 1);
          dot.material = dotMat;
          dot.parent = symbolGroup;
        }
      }
      
      symbolGroup.position = pos;
      symbolGroup.scaling = new Vector3(size, size, size);
      
      return symbolGroup;
    };

    // ==================== CREATE ALL OBJECTS ====================
    
    const flowers = [];
    const codeSymbols = [];
    const allObjects = [];

    // Create Roses (12)
    for (let i = 0; i < 12; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 60
      );
      const scale = 0.7 + Math.random() * 0.5;
      const rose = createRealisticRose(pos, scale);
      flowers.push(rose);
      allObjects.push(rose);
    }

    // Create Lilies (10)
    for (let i = 0; i < 10; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 60
      );
      const scale = 0.7 + Math.random() * 0.5;
      const lily = createRealisticLily(pos, scale);
      flowers.push(lily);
      allObjects.push(lily);
    }

    // Create Sunflowers (8)
    for (let i = 0; i < 8; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 60
      );
      const scale = 0.6 + Math.random() * 0.5;
      const sunflower = createRealisticSunflower(pos, scale);
      flowers.push(sunflower);
      allObjects.push(sunflower);
    }

    // Create Tulips (10)
    const tulipColors = [
      new Color3(1, 0.3, 0.3),
      new Color3(1, 0.6, 0.8),
      new Color3(1, 0.8, 0.2),
      new Color3(0.8, 0.3, 1),
      new Color3(1, 0.4, 0.1)
    ];

    for (let i = 0; i < 10; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 60
      );
      const color = tulipColors[Math.floor(Math.random() * tulipColors.length)];
      const scale = 0.6 + Math.random() * 0.5;
      const tulip = createRealisticTulip(pos, color, scale);
      flowers.push(tulip);
      allObjects.push(tulip);
    }

    // Create Code Symbols (60)
    const codeSymbolsList = [
      '{ }', '< >', '( )', '[ ]', '=>', '//', '/*', '*/', 
      'for', 'if', 'else', 'while', 'class', 'func', 'const',
      'let', 'return', 'import', 'async', 'await', 'try', 'catch'
    ];

    const codeColors = [
      new Color3(1, 0.4, 0.4),
      new Color3(0.4, 1, 0.4),
      new Color3(0.4, 0.6, 1),
      new Color3(1, 0.8, 0.2),
      new Color3(1, 0.4, 0.8),
      new Color3(0.4, 1, 0.8),
      new Color3(1, 0.6, 0.2),
      new Color3(0.8, 0.4, 1)
    ];

    for (let i = 0; i < 60; i++) {
      const pos = new Vector3(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 70
      );
      const symbol = codeSymbolsList[Math.floor(Math.random() * codeSymbolsList.length)];
      const color = codeColors[Math.floor(Math.random() * codeColors.length)];
      const size = 0.5 + Math.random() * 0.5;
      const codeSymbol = createCodeSymbol(pos, symbol, color, size);
      codeSymbols.push(codeSymbol);
      allObjects.push(codeSymbol);
    }

    // Store initial positions and create motion parameters
    const motionData = allObjects.map(obj => ({
      obj,
      initialPos: obj.position.clone(),
      speed: 0.2 + Math.random() * 0.3,
      radiusX: 5 + Math.random() * 10,
      radiusY: 3 + Math.random() * 8,
      radiusZ: 5 + Math.random() * 10,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      phaseZ: Math.random() * Math.PI * 2,
      rotSpeed: 0.001 + Math.random() * 0.003,
      floatSpeed: 0.5 + Math.random() * 1,
      verticalRange: 2 + Math.random() * 5
    }));

    // Particle system
    const particleSystem = new ParticleSystem("particles", 1000, scene);
    particleSystem.emitter = Vector3.Zero();
    particleSystem.minEmitBox = new Vector3(-40, -20, -40);
    particleSystem.maxEmitBox = new Vector3(40, 20, 40);
    particleSystem.color1 = new Color4(0.3, 0.5, 1, 0.2);
    particleSystem.color2 = new Color4(1, 0.3, 0.5, 0.2);
    particleSystem.colorDead = new Color4(0, 0, 0, 0);
    particleSystem.minSize = 0.02;
    particleSystem.maxSize = 0.08;
    particleSystem.minLifeTime = 4;
    particleSystem.maxLifeTime = 8;
    particleSystem.emitRate = 40;
    particleSystem.blendMode = ParticleSystem.BLENDMODE_ADD;
    particleSystem.gravity = new Vector3(0, 0, 0);
    particleSystem.start();

    // Animation loop - INFINITE FLOATING
    let time = 0;
    
    scene.registerBeforeRender(() => {
      time += 0.01;
      
      // Infinite floating animation for all objects
      motionData.forEach((data, index) => {
        // Complex 3D floating motion
        data.obj.position.x = data.initialPos.x + 
          Math.sin(time * data.speed + data.phaseX) * data.radiusX +
          Math.cos(time * data.speed * 0.7 + data.phaseX) * data.radiusX * 0.5;
        
        data.obj.position.y = data.initialPos.y + 
          Math.sin(time * data.floatSpeed + data.phaseY) * data.verticalRange +
          Math.cos(time * data.speed * 0.5 + data.phaseY) * 2;
        
        data.obj.position.z = data.initialPos.z + 
          Math.cos(time * data.speed * 0.8 + data.phaseZ) * data.radiusZ +
          Math.sin(time * data.speed * 1.2 + data.phaseZ) * data.radiusZ * 0.5;
        
        // Rotation
        data.obj.rotation.y += data.rotSpeed;
        data.obj.rotation.x += data.rotSpeed * 0.3;
        data.obj.rotation.z += data.rotSpeed * 0.1;
        
        // Subtle scale pulse for flowers
        if (index < flowers.length) {
          const pulse = 1 + Math.sin(time * 2 + index) * 0.02;
          data.obj.scaling.x = pulse * (0.7 + (index % 5) * 0.1);
          data.obj.scaling.y = pulse * (0.7 + (index % 5) * 0.1);
          data.obj.scaling.z = pulse * (0.7 + (index % 5) * 0.1);
        }
      });
      
      // Move lights for dynamic lighting
      keyLight.position.x = 15 + Math.sin(time * 0.5) * 10;
      keyLight.position.z = 15 + Math.cos(time * 0.5) * 10;
      fillLight1.position.x = -12 + Math.sin(time * 0.7) * 8;
      fillLight2.position.z = -15 + Math.cos(time * 0.9) * 12;
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
      engine.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 outline-none pointer-events-none"
      style={{ 
        background: "black",
      }}
    />
  );
};

export default BabylonBackground;