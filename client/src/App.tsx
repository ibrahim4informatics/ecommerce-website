import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/dashboard/Index"
import Users from "./pages/dashboard/Users";
function App() {


  const routes = createBrowserRouter([
    {
      path:"/dashboard", 
      element:<Index/>,
      children:[
        {path:"users", element:<Users/>}
      ]
    }
  ]);
  return (
    <RouterProvider router={routes} />
  )
}

export default App
