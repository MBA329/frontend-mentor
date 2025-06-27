import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout";
import Home from "../pages/Home";
import Crew from "../pages/Crew";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index:true,element:<Home/>
      },
      {path:"/crew",element:<Crew/>},
    ]
  }
])

export default router;