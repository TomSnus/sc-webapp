import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import DraftsIcon from "@material-ui/icons/Drafts";
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import LiveHelpRoundedIcon from '@material-ui/icons/LiveHelpRounded';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

import Home from "./components/Home";
import Images from "./components/Images";
import Containers from "./components/Containers";
import Convert from "./components/Convert";
import FAQ from "./components/FAQ";
import { colors } from '@material-ui/core';

const pathIds = {
  home: "home",
  images: "images",
  containers: "containers",
  error404: "error-404",
  faq: "faq"
};

const pathRouting = {
  home: "/home",
  images: "/images",
  containers: "/containers",
  convert: "/convert",
  pageNotFound: "/page-not-found",
  faq: "/faq"
};

const pageRoutes = {
  [pathIds.home]: {
    path: pathRouting.home,
    sidebarName: "Dashboard",
    icon: DashboardRoundedIcon,
    component: Home,
    color: 'red',
  },
  [pathIds.images]: {
    path: pathRouting.images,
    sidebarName: "Images",
    icon: ImageRoundedIcon,
    color: 'blue',
    component: Images
  },
  [pathIds.containers]: {
    path: pathRouting.containers,
    sidebarName: "Containers",
    icon: ListAltRoundedIcon,
    noRender: false,
    component: Containers,
    color: 'yellow',
  },
  [pathIds.error404]: {
    path: pathRouting.convert,
    sidebarName: "Convert",
    icon: DirectionsBikeIcon,
    component: Convert,
    noRender: false,
    color: 'grey',
  },
  [pathIds.convert]: {
    path: pathRouting.convert,
    sidebarName: "Page Not Found",
    icon: ErrorOutlineRoundedIcon,
    component: Convert,
    noRender: false,
    color: 'yellow',
  },
  [pathIds.faq]: {
    path: pathRouting.faq,
    sidebarName: "FAQ",
    icon: LiveHelpRoundedIcon,
    noRender: false,
    component: FAQ
  }
};

export { pageRoutes, pathIds, pathRouting };
