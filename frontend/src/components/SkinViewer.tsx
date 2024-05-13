'use client';

import React, { useEffect, useLayoutEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SkinViewer, WalkingAnimation } from 'skinview3d';

export const defaultProps = {
	walk: false,
	control: true,
};

export type MinecraftSkinViewerProperties = {
	skin?: string;
	width?: number;
	height?: number;
	walk?: boolean;
	control?: boolean;
	background?: string;
	cape?: string;
} & typeof defaultProps;

export const MinecraftSkinViewer = ({
	skin = 'http://localhost:3000/assets/images/71587fdb702f359a.png',
	width = 300,
	height = 300,
	walk = true,
	control = true,
	background = 'http://localhost:3000/assets/images/wp6005486.webp',
	cape = 'http://localhost:3000/assets/images/cape.png',
}: MinecraftSkinViewerProperties) => {
	const canvas = React.useRef<HTMLCanvasElement>(null);
	const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
	useIsomorphicLayoutEffect(() => {
		// @ts-ignore
		const skinViewer = new SkinViewer({
			skin,
			width,
			height,
			canvas: canvas.current as HTMLCanvasElement,
			cape,
		});

		if (control) {
			skinViewer.controls.enablePan = false;
			skinViewer.controls.enableZoom = false;
			skinViewer.controls.enableRotate = true;
		}
		skinViewer.autoRotate = true;

		// Animations
		skinViewer.animation = new WalkingAnimation();
		skinViewer.animation.speed = 20;
		skinViewer.fov = 80;
		// skinViewer.nameTag = new NameTagObject('OldestAnarchy', {
		// 	textStyle: 'cyan',
		// });
		// const rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
		// const run = skinViewer.animations.add(skinview3d.RunningAnimation);
		// Set the speed of an animation
		// run.speed = 3;
		// Pause single animation
		// run.paused = true;
		// Pause all animations!
		// skinViewer.animations.paused = true;

		return () => {
			skinViewer.dispose();
		};
	}, [skin, width, height, control, walk, background, cape]);

	return <canvas ref={canvas} />;
};

MinecraftSkinViewer.defaultProps = defaultProps;
