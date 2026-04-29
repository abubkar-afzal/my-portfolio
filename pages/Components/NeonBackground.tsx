import React, { useEffect, useRef } from "react";

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  blurIntensity: number;
}

const NeonBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // Neon colors from your variables
  const colors = [
    "#ee4242", // mahroon
    "#00f953", // green
    "#0064f9", // blue
    "#f900f1", // pink
    "#eddb1a", // yellow
    "#ffffff", // white
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let balls: Ball[] = [];

    // Initialize balls
    const initBalls = () => {
      const ballCount = 4;
      const newBalls: Ball[] = [];
      for (let i = 0; i < ballCount; i++) {
        newBalls.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 20.5,
          vy: (Math.random() - 0.5) * 20.5,
          radius: 100 + Math.random() * 80,
          color: colors[i % colors.length],
          blurIntensity: 0.5 + Math.random() * 2.3,
        });
      }
      return newBalls;
    };

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      balls = initBalls();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Apply blur filter
    const applyBlur = (ctx: CanvasRenderingContext2D, intensity: number) => {
      ctx.filter = `blur(${intensity}px)`;
    };

    const resetBlur = (ctx: CanvasRenderingContext2D) => {
      ctx.filter = "none";
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear with transparency for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      // Update and draw each ball
      for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];

        // Update position
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Bounce off walls
        if (ball.x + ball.radius > width) {
          ball.x = width - ball.radius;
          ball.vx *= -1;
        }
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx *= -1;
        }
        if (ball.y + ball.radius > height) {
          ball.y = height - ball.radius;
          ball.vy *= -1;
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy *= -1;
        }

        ctx.save();
        
        // Apply high blur for background effect
        const blurAmount = 35 + ball.blurIntensity * 20;
        applyBlur(ctx, blurAmount);
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius + 40, 0, Math.PI * 2);
        const gradientOuter = ctx.createRadialGradient(
          ball.x, ball.y, ball.radius * 0.2,
          ball.x, ball.y, ball.radius + 40
        );
        gradientOuter.addColorStop(0, ball.color + "30");
        gradientOuter.addColorStop(1, ball.color + "00");
        ctx.fillStyle = gradientOuter;
        ctx.fill();

        // Middle layer
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius + 20, 0, Math.PI * 2);
        const gradientMid = ctx.createRadialGradient(
          ball.x, ball.y, ball.radius * 0.3,
          ball.x, ball.y, ball.radius + 20
        );
        gradientMid.addColorStop(0, ball.color + "60");
        gradientMid.addColorStop(1, ball.color + "10");
        ctx.fillStyle = gradientMid;
        ctx.fill();

        // Core ball
        resetBlur(ctx);
        applyBlur(ctx, blurAmount * 0.6);
        
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        const gradientCore = ctx.createRadialGradient(
          ball.x - ball.radius * 0.3, ball.y - ball.radius * 0.3, ball.radius * 0.1,
          ball.x, ball.y, ball.radius
        );
        gradientCore.addColorStop(0, ball.color + "aa");
        gradientCore.addColorStop(0.7, ball.color + "60");
        gradientCore.addColorStop(1, ball.color + "20");
        ctx.fillStyle = gradientCore;
        ctx.fill();

        resetBlur(ctx);
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 outline-none"
      style={{
        background: "#000000",
        touchAction: "none",
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
};

export default NeonBackground;