import React, { lazy, Suspense } from 'react';

const LazyCardsDetail = lazy(() => import('./CardsDetail'));

const CardsDetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardsDetail {...props} />
  </Suspense>
);

export default CardsDetail;
