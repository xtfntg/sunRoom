import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Sky } from "@react-three/drei";
import { Peng } from "./assets/Peng";
import Annotation from "./assets/Annotations";
import annotations from "./annotations.json";
import Animate from "./assets/Animate";
import Buttons from "./assets/Buttons";



function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lerping, setLerping] = useState(false);
  const [to, setTo] = useState();
  const [target, setTarget] = useState();
  const [selected, setSelected] = useState(-1);

  const ref = useRef();

  function gotoAnnotation(idx) {
    setTo(annotations[idx].camPos);
    setTarget(annotations[idx].lookAt);
    setSelected(idx);
    setLerping(true);
  }
  const toggleAnimation = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <>
      <Canvas
        camera={{ position: [43, 15, -46] }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
      >
        <fog attach="fog" args={["#2b2b2b", 0, 140]} />
        <OrbitControls
          ref={ref}
          target={[8, 2, 3]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          enableDamping={true}
          dampingFactor={0.25}
        />
        <Sky sunPosition={[50, 100, 50]} />
        <Environment
          background
          near={1}
          far={1000}
          resolution={256}
         
          intensity={0.01} // 通过减少光照强度来让环境更暗
        />
        {/* <LogCameraPosition controls={ref} /> */}

        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <directionalLight
          position={[10, 10, 10]}
          intensity={10}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Peng isPlaying={isPlaying} />
        <Annotation selected={selected} gotoAnnotation={gotoAnnotation} />
        <Animate
          controls={ref}
          lerping={lerping}
          to={to}
          target={target}
        ></Animate>
      </Canvas>
      <div className="absolute top-80 left-4 z-10 bg-rose-400 bg-opacity-80 text-white py-2 px-4 rounded hover:bg-rose-700 transition duration-300">
        <button onClick={toggleAnimation}>{isPlaying ? "关窗" : "开窗"}</button>
      </div>
      <Buttons gotoAnnotation={gotoAnnotation} />
    </>
  );
}

export default App;

