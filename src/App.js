import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import DinnerBook from "./pages/DinnerBook";
import RoomBook from "./pages/RoomBook";
import ServicesBook from "./pages/ServicesBook";
import OrderFood from "./pages/OrderFood";
import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import HeaderCartBtn from "./pages/HeaderCartBtn";

function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Root/>,children: [
      {index: true, element: <Home/>},
      {path: 'bookDinner', element: <DinnerBook/>},
      {path: 'bookRoom', element: <RoomBook/>},
      {path: 'services', element: <ServicesBook/>},
      {path: 'foods', element: <OrderFood/>},
      {path: 'login', element: <Login/>},
      {path: '#', element: <HeaderCartBtn/>},
    ]}
  ]) 
  return <RouterProvider router={router}/>
}

export default App;
