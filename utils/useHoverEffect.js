/* eslint-disable no-new */
/* eslint-disable new-cap */
import hoverEffect from 'hover-effect';
import { useEffect } from 'react';

export const useHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    new hoverEffect({
      parent: el.current,
      image1: img1,
      image2: img2,
      displacementImage: './smoke.png',
      intencity: 1,
    });
  }, [el, img1, img2]);
};
