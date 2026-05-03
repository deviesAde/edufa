import React from "react";
import { cn } from "@/lib/utils";

/**
 * FlippingCard Component
 * A 3D flipping card component that shows front and back content on hover.
 */
export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
  accentColor = "#0f59bc",
}) {
  return (
    <div
      className="group/flipping-card [perspective:1000px]"
      style={{
        "--height": `${height}px`,
        "--width": `${width}px`,
        "--accent-color": accentColor,
      }}
    >
      <div
        className={cn(
          "relative rounded-[3rem] border-2 border-white/40 shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] group-hover/flipping-card:-translate-y-2",
          "h-[var(--height)] w-[var(--width)]",
          className
        )}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 h-full w-full rounded-[inherit] backdrop-blur-xl [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)] overflow-hidden border border-white/20"
          style={{ backgroundColor: `${accentColor}15` }} // 15 is hex for ~8% opacity
        >
          <div className="[transform:translateZ(70px)_scale(.95)] h-full w-full">
            {frontContent}
          </div>
        </div>
        
        {/* Back Face */}
        <div 
          className="absolute inset-0 h-full w-full rounded-[inherit] backdrop-blur-2xl [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden border border-white/30"
          style={{ backgroundColor: `${accentColor}cc` }} // cc is hex for ~80% opacity
        >
          <div className="[transform:translateZ(70px)_scale(.95)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
