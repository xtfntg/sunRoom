import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
export function Peng({ isPlaying }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/peng.glb");

  console.log({ animations });

  const { actions } = useAnimations(animations, group);

  // 播放所有动画
  useEffect(() => {
    if (!actions || !animations || Object.keys(actions).length === 0) return;

    console.log("Actions: ", actions); // 检查 actions
    console.log("Animations: ", animations); // 检查 animations
    console.log("isPlaying: ", isPlaying); // 检查 isPlaying 状态
    // 停止所有动画
    Object.values(actions).forEach((action) => {
      action.stop(); // 确保每次播放之前停止所有动画
    });

  
    // 组件卸载时停止动画
    return () => {
      Object.values(actions).forEach((action) => {
        action.fadeOut(0.5);
      });
    };
  }, [isPlaying, animations, actions]);

  return (
    <group ref={group} dispose={null}>
      <group>
        <group name="pian" position={[1.262, 0.1, -1.162]}>
          <mesh
            name="mesh_0"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={materials["jianGou2.001"]}
          />
          <mesh
            name="mesh_0_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_1.geometry}
            material={materials.felt}
          />
        </group>
        <group name="jianGou">
          <mesh
            name="mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_1.geometry}
            /*         material={materials.jianGou2} */
          >
            <meshStandardMaterial
              color="#888" // 灰色
              metalness={0.2} // 金属感
              roughness={0.8} // 粗糙度
            />
          </mesh>
          <mesh
            name="mesh_1_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_1.geometry}
            material={materials.laGan}
          />
          <mesh
            name="mesh_1_2"
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_2.geometry}
            material={materials.flltgrey}
            material-transparent={true}
            material-opacity={0.2}
            material-depthWrite={false}
          />
          <mesh
            name="mesh_1_3"
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_3.geometry}
            material={materials.jianGou3}
          />
          <mesh
            name="mesh_1_4"
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_4.geometry}
            material={materials.jianGou4}
          />
          <mesh
            name="mesh_1_5"
            castShadow
            receiveShadow
            geometry={nodes.mesh_1_5.geometry}
            material={materials.jianGou5}
          />
        </group>
        <group
          name="Glass004"
          position={[39.825, 0.101, -36.655]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            name="mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2.geometry}
            material={materials.GlassLian}
          />
          <mesh
            name="mesh_2_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_1.geometry}
            material={materials.blackLian}
          />
        </group>
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.coast}
          position={[-5.644, -2.862, 54.028]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.56, 1, 0.515]}
        />
        <group
          name="Glass002"
          position={[34.885, 2.498, -32.975]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            name="mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.mesh_4.geometry}
            material={materials.GlassLian}
            material-transparent={true}
            material-opacity={0.2}
            material-depthWrite={false}
          />
          <mesh
            name="mesh_4_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_4_1.geometry}
            material={materials.blackLian}
          />
        </group>
        <group
          name="Glass001"
          position={[0.319, 2.511, -3.836]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            name="mesh_5"
            castShadow
            receiveShadow
            geometry={nodes.mesh_5.geometry}
            material={materials.GlassLian}
          />
          <mesh
            name="mesh_5_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_5_1.geometry}
            material={materials.blackLian}
          />
        </group>
        <group name="Glass005" position={[31.453, 4.93, -25.77]}>
          <mesh
            name="mesh_6"
            castShadow
            receiveShadow
            geometry={nodes.mesh_6.geometry}
            material={materials.GlassDing}
          />
          <mesh
            name="mesh_6_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_6_1.geometry}
            material={materials.blackDing}
          />
        </group>
        <group name="Glass007" position={[6.46, 0, 0]}>
          <mesh
            name="mesh_7"
            castShadow
            receiveShadow
            geometry={nodes.mesh_7.geometry}
            material={materials.GlassDing}
          />
          <mesh
            name="mesh_7_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_7_1.geometry}
            material={materials.blackDing}
          />
        </group>
        <group name="Glass003" position={[2.793, 4.93, -25.77]}>
          <mesh
            name="mesh_8"
            castShadow
            receiveShadow
            geometry={nodes.mesh_8.geometry}
            material={materials.GlassDing}
          />
          <mesh
            name="mesh_8_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_8_1.geometry}
            material={materials.blackDing}
          />
        </group>
        <group name="Glass006" position={[8.343, 4.93, -25.77]}>
          <mesh
            name="mesh_9"
            castShadow
            receiveShadow
            geometry={nodes.mesh_9.geometry}
            material={materials.GlassDing}
          />
          <mesh
            name="mesh_9_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_9_1.geometry}
            material={materials.blackDing}
          />
        </group>
        <group name="Glass008" position={[13.893, 4.93, -25.77]}>
          <mesh
            name="mesh_10"
            castShadow
            receiveShadow
            geometry={nodes.mesh_10.geometry}
            material={materials.GlassDing}
          />
          <mesh
            name="mesh_10_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_10_1.geometry}
            material={materials.blackDing}
          />
        </group>
        <group name="Glass009" position={[19.444, 4.93, -25.77]}>
          <mesh
            name="mesh_11"
            castShadow
            receiveShadow
            geometry={nodes.mesh_11.geometry}
            material={materials.GlassDing}
          />
          <mesh
            name="mesh_11_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_11_1.geometry}
            material={materials.blackDing}
          />
        </group>
        <group name="Glass010" position={[24.994, 4.93, -25.77]}>
          <mesh
            name="mesh_12"
            castShadow
            receiveShadow
            geometry={nodes.mesh_12.geometry}
            material={materials.GlassDing}
            material-transparent={true}
            material-opacity={0.2}
            material-depthWrite={false}
          />
          <mesh
            name="mesh_12_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_12_1.geometry}
            material={materials.blackDing}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/penga.glb");
