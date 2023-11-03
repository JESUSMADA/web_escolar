import { Outlet } from "react-router-dom";
import AppLayout from "../../layout/AppLayout";
import SubjectScreen from "./SubjectScreen";
import SequenceScreen from "./SequenceScreen";


const AppRoutes = {
  path: "app",
  element: <AppLayout><Outlet /></AppLayout>,
  children: [
    {
      path: "",
      element: <div><h1>App</h1></div>,
    },
    {
      path: "subject/:id/activities",
      element: <SubjectScreen />,
    },
    {
      path: "subject/:id/sequence",
      element: <SequenceScreen />
    },
    {
      path: "subject/:id/mail",
      element: <div>Mail</div>,
    },
    {
      path: "subject/:id/material",
      element: <div>Material</div>,
    },

  ],
}

export default AppRoutes;