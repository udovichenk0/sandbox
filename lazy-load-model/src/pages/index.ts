import { createRoutesView } from "atomic-router-react";
import { AboutRoute } from "./about";
import { HomeRoute } from "./home";

const routes = [HomeRoute, AboutRoute]

export const RouteView = createRoutesView({routes})