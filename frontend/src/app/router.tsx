import { createBrowserRouter } from "react-router";
import GamePage from "../features/game/pages/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GamePage />,
  },
]);
