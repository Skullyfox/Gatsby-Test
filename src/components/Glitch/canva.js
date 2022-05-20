import React, { lazy, Suspense } from 'react';

const LazyGlitch = lazy(() => import('./glitch'));
const isBrowser = () => typeof window !== 'undefined';

const Canvas =  () => isBrowser() ? (
<Suspense fallback="Chargement">
  <LazyGlitch text="COMING SOON" />
</Suspense>) : <canvas />

export default Canvas