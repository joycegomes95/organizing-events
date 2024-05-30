import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { AddEvent } from "./pages/addEvent/addEvente";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },{
    path: "/addEvent",
    element: <AddEvent />
  }
])

export {router}