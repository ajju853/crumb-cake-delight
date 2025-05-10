
import React, { useEffect, useState } from 'react';

interface BokehProps {
  count?: number;
}

interface BokehPoint {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'bokeh' | 'crumb';
  delay: number;
}

const Bokeh: React.FC<BokehProps> = ({ count = 20 }) => {
  const [points, setPoints] = useState<BokehPoint[]>([]);
  
  useEffect(() => {
    // Generate bokeh and crumb points
    const newPoints: BokehPoint[] = [];
    for (let i = 0; i < count; i++) {
      newPoints.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 15 + 5,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.random() > 0.7 ? 'crumb' : 'bokeh',
        delay: Math.random() * 5
      });
    }
    
    setPoints(newPoints);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {points.map((point) => (
        <div
          key={point.id}
          className={point.type === 'bokeh' ? 'bokeh' : 'crumb'}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            opacity: point.opacity,
            backgroundColor: point.type === 'bokeh' 
              ? `rgba(255, 194, 209, ${point.opacity})` 
              : `rgba(166, 124, 82, ${point.opacity + 0.2})`,
            animationDelay: `${point.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default Bokeh;
