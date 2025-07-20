import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import EventCreatePage from "./pages/EventCreatePage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventEditPage from "./pages/EventEditPage";
import EventsListPage from "./pages/EventsListPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <EventsListPage />,
      },
      {
        path: "/create",
        element: <EventCreatePage />,
      },
      {
        path: "/event/:id",
        element: <EventDetailsPage />,
      },
      {
        path: "/edit/:id",
        element: <EventEditPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
