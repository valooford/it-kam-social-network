import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader';

export default function withSuspense(Component) {
  function ComponentWithSuspense(props) {
    return <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>;
  }
  return ComponentWithSuspense;
}