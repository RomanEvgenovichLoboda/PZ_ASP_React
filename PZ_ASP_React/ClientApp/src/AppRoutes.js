import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { ChangeData } from "./components/ChangeData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/change-data',
    element: <ChangeData />
  }
];

export default AppRoutes;
