import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import DraftsIcon from "@material-ui/icons/Drafts";
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

import Home from "./components/Home";
import Inbox from "./components/Inbox";
import ResetPassword from "./components/ResetPassword";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import { colors } from '@material-ui/core';

const pathIds = {
  home: "home",
  inbox: "inbox",
  resetPassword: "reset-password",
  error404: "error-404",
  register: "register"
};

const pathRouting = {
  home: "/home",
  inbox: "/inbox",
  resetPassword: "/reset-password",
  pageNotFound: "/page-not-found",
  register: "/register"
};

const pageRoutes = {
  [pathIds.home]: {
    path: pathRouting.home,
    sidebarName: "Homepage",
    icon: DashboardRoundedIcon,
    component: Home,
    color: 'red',
  },
  [pathIds.inbox]: {
    path: pathRouting.inbox,
    sidebarName: "Inbox",
    icon: ImageRoundedIcon,
    color: 'blue',
    component: Inbox
  },
  [pathIds.resetPassword]: {
    path: pathRouting.resetPassword,
    sidebarName: "Reset Password",
    icon: DraftsIcon,
    noRender: false,
    component: ResetPassword,
    color: 'yellow',
  },
  [pathIds.error404]: {
    path: pathRouting.pageNotFound,
    sidebarName: "Page Not Found",
    icon: ErrorOutlineRoundedIcon,
    component: PageNotFound, 
    color: 'grey',
  },
  [pathIds.register]: {
    path: pathRouting.register,
    sidebarName: "Register",
    icon: DraftsIcon,
    noRender: true,
    component: Register
  }
};

export { pageRoutes, pathIds, pathRouting };
