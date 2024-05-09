import React, {
  lazy,
  Suspense,
  ElementType,
  ComponentType,
} from 'react';

const buildLazyElement = (
  OfflineLoader: ComponentType|undefined,
  RefreshLoader: ComponentType|undefined,
  imp: Promise<{default: ComponentType<any>}>,
) => lazy(async() => {
  try {
    return await imp;
  } catch (e) {
    if (OfflineLoader && ! window.navigator.onLine) {
      return {default: OfflineLoader};
    }
    if (RefreshLoader) {
      window.setTimeout(() => window.location.reload(), 1000,);
      return {default: RefreshLoader};
    }
    throw e;
  }
},);

const buildRoute = (  LazyElement: ComponentType|ElementType,  Loader: ElementType,  url: string,) => {
  return {
    path: url,
    exact: true,
    element: <Suspense fallback={<Loader/>}><LazyElement/></Suspense>,
  };
};

export default (
  Loader: ElementType,
  RefreshLoader: ComponentType|undefined = undefined,
  OfflineLoader: ComponentType|undefined = undefined,
) => [
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/code-of-conduct/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/code-of-conduct/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/contributing/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/contributing/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/faq/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/faq/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/home/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/imprint/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/imprint/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/license/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/license/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/not-found/index.tsx',),);
      return buildRoute(LazyElement, Loader, '*');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/quick-start/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/quick-start/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/support/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/support/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/contributing/contributors/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/contributing/contributors/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/contributing/sponsors/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/contributing/sponsors/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/autowiring/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/autowiring/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/logging/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/logging/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/middlewares/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/middlewares/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/results/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/results/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/routes/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/routes/');;
    })(),
    (() => {
      const LazyElement = buildLazyElement(OfflineLoader, RefreshLoader, import('./pages/usage/storage/index.tsx',),);
      return buildRoute(LazyElement, Loader, '/usage/storage/');;
    })(),
];
