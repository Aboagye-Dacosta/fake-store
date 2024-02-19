import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import GlobalStyle from "./globalcss";

function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
