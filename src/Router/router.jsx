/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";
import PageAccueil from "../Pages/PageAccueil";
import PageProgrammation from "../Pages/PageProgrammation";
import PageActualites from "../Pages/PageActualites";
import PageNotFound from "../Pages/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAccueil />,
  },
  {
    path: "/Programmation",
    element: <PageProgrammation />,
  },
  {
    path: "/Actualites",
    element: <PageActualites />,
  },
  {
    path: "*", 
  element: <PageNotFound />
}
]);

export default router;
