import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../Layout/Layout";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ReadPages from "../components/ReadPages/ReadPages";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "listed_books",
        element: <ListedBooks />,
      },
      {
        path: "read_pages",
        element: <ReadPages />,
      },
      {
        path:"/book/:id",
        element:<BookDetails/>,
        loader: () => fetch("../books.json"), //do not load all data.load only what you need
      }
    ],
  },
]);
