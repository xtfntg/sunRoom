import { useFrame } from "@react-three/fiber";

const Animate = ({ controls, lerping, to, target }) => {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      /* console.log("Lerping...");
      console.log("Camera position:", camera.position);
      console.log("Target position:", controls.current.target); */
      camera.position.lerp(to, delta * 2);
      controls.current.target.lerp(target, delta * 2);
    }
  });
};
export default Animate;
