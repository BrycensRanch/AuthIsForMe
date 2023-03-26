import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MinecraftBackground = () => {
	const containerReference = useRef(null);
	const [loading, setLoading] = useState(true);

	const loadModel = gltf => {
		gltf.scene.scale.set(10, 10, 10);
		containerReference.current.add(gltf.scene);
		setLoading(false);
	};

	const init = () => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();

		renderer.setSize(window.innerWidth, window.innerHeight);
		containerReference.current.append(renderer.domElement);

		const loader = new GLTFLoader();
		loader.load('/minecraft/giant_tree/giant_tree.gltf', loadModel);

		camera.position.z = 50;

		const animate = () => {
			requestAnimationFrame(animate);

			containerReference.current.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

		animate();
	};

	useState(init);

	return (
		// eslint-disable-next-line tailwindcss/no-custom-classname
		<div className="minecraft-background" ref={containerReference}>
			{loading && <div>Loading...</div>}
		</div>
	);
};

export default MinecraftBackground;
