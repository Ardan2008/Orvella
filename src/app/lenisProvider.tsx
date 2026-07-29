"use client";

import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const ReactLenis = dynamic(
  () => import("lenis/react").then((mod) => mod.ReactLenis),
  { ssr: false }
);

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}