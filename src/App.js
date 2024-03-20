import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Product";

// vvvvv alternatywna wersja vvvvvv
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// http://example.com ->nazwa omeny
// product -> path
// http://example.com /product

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <Products /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
