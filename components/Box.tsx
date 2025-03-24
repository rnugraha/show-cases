import React from "react";

export default function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial
        attach="material"
        args={[{ color: "#00ff00", wireframe: true }]}
      />
    </mesh>
  );
}
