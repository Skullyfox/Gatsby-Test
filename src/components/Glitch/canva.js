import React, { lazy } from 'react';

const LazyGlitch = lazy(() => import('./glitch'));
const isBrowser = () => typeof window !== 'undefined';

const Canvas =  () => isBrowser() ? <LazyGlitch /> : <canvas />

export default Canvas