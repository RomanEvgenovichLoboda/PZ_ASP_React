import { FetchData } from "./components/FetchData";
import { ChangeData } from "./components/ChangeData";

const AppRoutes = [
  
  {
    path: '/',
    element: <FetchData />
  },
  {
    path: '/change-data',
    element: <ChangeData />
  }
];

export default AppRoutes;
