import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import type React from "react";
import { ObjectLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type ModelProps = {
	modelPath: string;
};

const _Model: React.FC<ModelProps> = ({ modelPath }) => {
	const object = useLoader(ObjectLoader, modelPath);
	return <primitive object={object} scale={1} />;
};

const ObjectViewer: React.FC<ModelProps> = () => {
	const gltf = useLoader(GLTFLoader, "/models/duck.glb");
	return (
		<Canvas camera={{ position: [9, 1, 2] }} style={{ height: "90vh" }}>
			<Environment
				files="./img/venice_sunset_1k.hdr"
				background
				backgroundBlurriness={1}
			/>
			<directionalLight position={[3.3, 1.0, 4.4]} />
			<primitive object={gltf.scene} position={[0, 0, 0]} />
			<OrbitControls target={[0, 1, 0]} />
			<axesHelper args={[5]} />
			{/* <Stats /> */}
		</Canvas>
	);
};

export { ObjectViewer };
