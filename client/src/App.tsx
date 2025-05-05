import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/dashboard/Index"
function App() {


  const routes = createBrowserRouter([
    {
      path:"/dashboard", 
      element:<Index/>,
    }
  ]);
  return (
    <RouterProvider router={routes} />
  )
}

export default App
