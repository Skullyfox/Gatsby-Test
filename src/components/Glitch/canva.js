import React, { lazy, Suspense } from 'react';

const LazyGlitch = lazy(() => import('./glitch'));
//const isBrowser = () => typeof window !== 'undefined';

//const Canvas =  () => isBrowser() ? <LazyGlitch /> : <canvas />

const Canvas = () => {
 return(
   <Suspense fallback={<div>Chargement...</div>}>
    <LazyGlitch />
   </Suspense>
 )
}

export default Canvas