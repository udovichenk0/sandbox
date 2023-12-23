import { lazy } from "react";
import { routes } from "../../shared/routes";

const Home = lazy(() => import('./home.page'))

export const HomeRoute = {
  view: Home,
  route: routes.home
}