import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SimpleContainer from "./layout";
import VerticalLinearStepper from "./stepper";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <SimpleContainer>
          <VerticalLinearStepper />
        </SimpleContainer>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;