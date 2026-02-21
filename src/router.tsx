import { lazy, Suspense } from "react";
import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingFallback from "@/components/LoadingFallback";

const LazyHomePage = lazy(() => import("@/pages/HomePage"));
const LazyPostDetail = lazy(() => import("@/pages/PostDetail"));
const LazyNotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const rootRoute = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <LazyHomePage />
    </Suspense>
  ),
});

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/post/$postId",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <LazyPostDetail />
    </Suspense>
  ),
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <LazyNotFoundPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, postRoute, notFoundRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router, RouterProvider };
