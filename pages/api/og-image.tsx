import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1a0000 0%, #2d0000 25%, #1a0000 50%, #2d0000 75%, #1a0000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Decorative neon glow effects */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 30%, rgba(238,66,66,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,105,255,0.15) 0%, transparent 50%)',
          }}
        />
        
        {/* Animated border lines */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '2px solid rgba(238,66,66,0.3)',
            borderRadius: '20px',
          }}
        />
        
        {/* Profile Icon/Image Placeholder */}
        <div
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ee4242, #ff0000c0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            boxShadow: '0 0 60px rgba(238,66,66,0.6)',
            border: '3px solid rgba(255,255,255,0.2)',
          }}
        >
          <span style={{ fontSize: 85 }}>👨‍💻</span>
        </div>
        
        {/* Name */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '15px',
            textShadow: '0 2px 10px rgba(238,66,66,0.5)',
            letterSpacing: '-0.02em',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Hafiz Abubakar Afzal
        </div>
        
        {/* Title with neon effect - FIXED: Removed duplicate color property */}
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            marginBottom: '25px',
            fontWeight: '600',
            textShadow: '0 0 10px rgba(238,66,66,0.8)',
            background: 'linear-gradient(135deg, #ee4242, #ff6b6b)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Developer & Designer
        </div>
        
        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: '#cccccc',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.5,
            marginBottom: '30px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Creating amazing digital experiences through code and design
        </div>
        
        {/* Tech Stack Tags */}
        <div
          style={{
            display: 'flex',
            gap: '15px',
            marginTop: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['React', 'Next.js', 'TypeScript', 'UI/UX', 'Node.js'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 20px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50px',
                fontSize: '16px',
                color: '#ee4242',
                border: '1px solid rgba(238,66,66,0.3)',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#888888',
            textAlign: 'center',
            width: '100%',
            left: 0,
          }}
        >
          hafizabubakarafzal.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        'Content-Type': 'image/png',
      },
    }
  );
}