/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAcceuil />,
  },
  {
    path: "/Détail",
    element: <PageSingIn />,
  },
  {
    path: "/tableauBordbenevole",
    element: <PageDetailVolontaire />,
  },
  {
    path: "/signup",
    element: <PageSignUp />,
  },
  {
    path: "/listebenevoles",
    element: <PageListeVolonataire />,
  },
  {
    path: "/pageadmindetailbenevole/:idBenevole",
    element: <PageAdminDetailbenevole />,
  },{
    path: "/tableaudebordadmin",
    element: <PageTableauDeBordAdmin />,
  },{
    path: "/missions",
    element: <PageAdminMissions />,
  }
]);

export default router;
