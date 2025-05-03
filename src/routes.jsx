import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "profile/",
    element: <h1>Welcome to profile page!</h1>
  }
];

export default routes;
