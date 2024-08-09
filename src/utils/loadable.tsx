import React, { Suspense, lazy, ComponentType } from "react";

interface LoadableProps {
  fallback: React.ReactNode;
}

export function loadable<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  { fallback }: LoadableProps
): React.FC {
  const LazyComponent = lazy(importFunc);

  return (props: React.ComponentProps<T> | {}) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...(props as React.ComponentProps<T>)} />
    </Suspense>
  );
}
