import { Link, Outlet, RootRoute, Route, Router, RouterProvider } from "@tanstack/react-router";

// const router = createHistoryRouter({routes: [
//   { path: '/', route: routes.home },
//   { path: '/about', route: routes.about },
// ]})
// const history = createBrowserHistory()
// router.setHistory(history)



const rootRoute = new RootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/">Michal</Link>{' '}
        <Link to="/" search={{ sayHi: 'Thomas' }}>
          Thomas
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  validateSearch: (search) => {
    return { sayHi: 'Michal' };
  },
  loader: ({ context }) => console.log(context),
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});
const routeTree = rootRoute.addChildren([indexRoute]);
const router = new Router({ routeTree });
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
