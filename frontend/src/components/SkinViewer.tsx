'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SkinViewer, WalkingAnimation } from 'skinview3d';

export const defaultProps = {
  walk: false,
  control: true,
};

export type MinecraftSkinViewerProps = {
  skin?: string;
  width?: number;
  height?: number;
  walk?: boolean;
  control?: boolean;
  background?: string;
  cape?: string;
} & typeof defaultProps;

export const MinecraftSkinViewer = ({
  skin = 'https://s.namemc.com/i/71587fdb702f359a.png',
  width = 300,
  height = 300,
  walk = false,
  control = true,
  background = 'https://wallpapercave.com/wp/wp6005486.jpg',
  cape = 'https://livzmc.net/banner/?=paeieAeheGekpmec',
}: MinecraftSkinViewerProps) => {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useLayoutEffect(() => {
    const skinViewer = new SkinViewer({
      skin,
      width,
      height,
      background,
      canvas: canvas.current as HTMLCanvasElement,
      cape,
    });

    if (control) {
      skinViewer.controls.enablePan = false;
      skinViewer.controls.enableZoom = true;
      skinViewer.controls.enableRotate = true;
    }

    // Animations
    if (walk) {
      skinViewer.animation = new WalkingAnimation();
    }
    // const rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
    // const run = skinViewer.animations.add(skinview3d.RunningAnimation);
    // Set the speed of an animation
    // run.speed = 3;
    // Pause single animation
    // run.paused = true;
    // Pause all animations!
    // skinViewer.animations.paused = true;

    return () => {
      // if (control) {
      //   skinViewer.dispose();
      // }

      skinViewer.dispose();
    };
  }, [skin, width, height, control, walk, background, cape]);

  return <canvas ref={canvas} />;
};

MinecraftSkinViewer.defaultProps = defaultProps;
