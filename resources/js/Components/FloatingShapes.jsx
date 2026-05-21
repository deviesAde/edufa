import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
    const shapes = [
        { color: 'bg-edufa-yellow/20', size: 'w-12 h-12', top: '10%', left: '5%', duration: 15, delay: 0 },
        { color: 'bg-edufa-blue/10', size: 'w-24 h-24', top: '20%', right: '10%', duration: 20, delay: 2 },
        { color: 'bg-edufa-yellow/15', size: 'w-16 h-16', bottom: '15%', left: '15%', duration: 18, delay: 5 },
        { color: 'bg-edufa-blue/5', size: 'w-32 h-32', bottom: '10%', right: '5%', duration: 25, delay: 1 },
        { color: 'bg-edufa-yellow/10', size: 'w-8 h-8', top: '50%', left: '2%', duration: 12, delay: 3 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full blur-xl ${shape.color} ${shape.size}`}
                    style={{
                        top: shape.top,
                        left: shape.left,
                        right: shape.right,
                        bottom: shape.bottom,
                        willChange: 'transform, opacity'
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        delay: shape.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
