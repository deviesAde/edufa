import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function InteractiveGlobe({ className }) {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
        let width = 0;
        
        const onResize = () => {
             if (canvasRef.current) {
                 width = canvasRef.current.offsetWidth;
             }
        }
        window.addEventListener('resize', onResize);
        onResize();

        // Approximate coordinates for the branches
        const locations = [
            { lat: 3.5852, lng: 98.6722, size: 0.05 }, // Medan
            { lat: -6.8723, lng: 107.5436, size: 0.05 }, // Cimahi
            { lat: -5.1476, lng: 119.4327, size: 0.08 }, // Makassar
            { lat: -8.6500, lng: 115.2166, size: 0.05 }, // Denpasar
            { lat: -2.9909, lng: 104.7565, size: 0.05 }, // Palembang
            { lat: -0.9470, lng: 100.3658, size: 0.05 }, // Padang
            { lat: 0.5070, lng: 101.4477, size: 0.05 }, // Pekanbaru
            { lat: -5.3971, lng: 105.2667, size: 0.05 }, // Lampung
            { lat: -6.1200, lng: 106.1502, size: 0.05 }, // Serang
            { lat: -6.2088, lng: 106.8456, size: 0.08 }, // Jakarta
            { lat: -6.5583, lng: 107.7661, size: 0.04 }, // Subang
            { lat: -1.8465, lng: 109.9721, size: 0.04 }, // Ketapang
            { lat: -6.7320, lng: 108.5523, size: 0.04 }, // Cirebon
            { lat: -7.7955, lng: 110.3694, size: 0.06 }, // Yogyakarta
            { lat: -6.9666, lng: 110.4166, size: 0.06 }, // Semarang
            { lat: -3.7928, lng: 102.2607, size: 0.04 }, // Bengkulu
            { lat: -7.2504, lng: 112.7688, size: 0.08 }, // Surabaya
            { lat: -0.0227, lng: 109.3333, size: 0.05 }, // Pontianak
            { lat: -3.4544, lng: 115.9866, size: 0.05 }, // Batulicin
        ];

        const markers = locations.map(loc => ({
            location: [loc.lat, loc.lng],
            size: loc.size
        }));

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1, // dark mode
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3], // gray
            markerColor: [2.5, 2, 0.2], // edufa-yellow glow 
            glowColor: [0.1, 0.1, 0.15],
            markers: markers,
            onRender: (state) => {
                // Focus strictly around Indonesia longitudinally (e.g. phi offset to center 115 degrees eq to 2 radians)
                state.phi = phi + 2; 
                phi += 0.003;
                state.width = width * 2;
                state.height = width * 2;
            }
        });

        setTimeout(() => {
            if (canvasRef.current) canvasRef.current.style.opacity = '1';
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [])

    return (
        <div style={{ width: '100%', maxWidth: 600, aspectRatio: 1 }} className={className}>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                }}
            />
        </div>
    );
}
