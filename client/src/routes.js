import Dashboard from "@material-ui/icons/Dashboard";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import Home from "./components/Home";
import Inbox from "./components/Inbox";
import ResetPassword from "./components/ResetPassword";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";

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
    icon: Dashboard,
    component: Home
  },
  [pathIds.inbox]: {
    path: pathRouting.inbox,
    sidebarName: "Inbox",
    icon: InboxIcon,
    component: Inbox
  },
  [pathIds.resetPassword]: {
    path: pathRouting.resetPassword,
    sidebarName: "Reset Password",
    icon: DraftsIcon,
    noRender: false,
    component: ResetPassword
  },
  [pathIds.error404]: {
    path: pathRouting.pageNotFound,
    sidebarName: "Page Not Found",
    icon: Dashboard,
    component: PageNotFound
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
