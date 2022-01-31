import { HomePage } from "../Pages/HomePge/HomePage";
import { RegistrationModal } from "../ModalWindows/Registration";
import { LoginModal } from "../ModalWindows/LoginModal";
import { UserPage } from "../Pages/UserPage/UserPage";
import { useRoutes } from "react-router-dom";
import { CreateCollectionModal } from "../ModalWindows/CreateCollectionModal";
import { CollectionPage } from "../Pages/CollectionPage/CollectionPage";

export const RouteComponents = () => {
  const routes = useRoutes([
    { path: "/registration", element: <RegistrationModal /> },
    { path: "/user-page", element: <UserPage /> },
    { path: "/home-page", element: <HomePage /> },
    { path: "/", element: <></> },
    { path: "/login", element: <LoginModal /> },
    { path: "/create-collection", element: <CreateCollectionModal /> },
    { path: "/collection-page/:id", element: <CollectionPage /> },
  ]);
  return routes;
};
