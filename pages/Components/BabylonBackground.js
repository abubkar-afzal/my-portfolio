import React, { useEffect, useRef } from "react";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3, PointsCloudSystem } from "@babylonjs/core";

const BabylonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);
    scene.clearColor = new Color3(0.02, 0.02, 0.02); // Matches your dark theme

    // Camera that doesn't move with mouse (fixed background)
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, Vector3.Zero(), scene);
    
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Create a Particle-like Point Cloud System for "Stars/Orbs"
    const pcs = new PointsCloudSystem("pcs", 2, scene);
    
    const constructParticle = (particle, i, s) => {
      particle.position = new Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      // Colors matching your Maroon/Green theme subtly
      particle.color = i % 2 === 0 ? new Color3(0.5, 0.05, 0.1) : new Color3(0.1, 0.4, 0.2);
    };

    pcs.addPoints(1500, constructParticle);
    pcs.buildMeshAsync();

    // Animation Logic
    scene.registerBeforeRender(() => {
      pcs.mesh.rotation.y += 0.001; // Slow, lovely rotation
      pcs.mesh.rotation.x += 0.0005;
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    const handleResize = () => engine.resize();
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
      style={{ background: "radial-gradient(circle, #0f0f0f 0%, #050505 100%)" }}
    />
  );
};

export default BabylonBackground;