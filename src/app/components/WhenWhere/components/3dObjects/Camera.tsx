import { PerspectiveCameraProps, useThree } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useLayoutEffect, useRef } from "react";
import "./style.css";
import { useSmoothTransform } from "./use-smooth-transform";
interface CameraProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}
export function Camera({ mouseX, mouseY, ...props }: CameraProps) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef<PerspectiveCameraProps>(null);
  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

export const spring = { stiffness: 600, damping: 30 };

export const mouseToLightRotation = (v: any) => (-1 * v) / 140;
