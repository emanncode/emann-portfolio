"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticProps {
  children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
