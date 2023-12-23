import { lazy } from "react";
import { routes } from "../../shared/routes";

const About = lazy(() => import('./about.page'))

export const AboutRoute = {
  view: About,
  route: routes.about
}