import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';
import { NavLink } from "react-router-dom";
import Dashboard from './Dashboard';


export function mainListItems({ routes }) {
  const classes = Dashboard.useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {routes.map(({ path, noRender, sidebarName, ...prop }, index) => {
          if (noRender) return null;
          return (
            <NavLink to={path} key={`route-${index}}`}>
              <ListItem button>
                <ListItemIcon >
                <Avatar className={classes.avatar} style={{ backgroundColor: "#ff6f00" }}>
                <prop.icon />
                    </Avatar>
                </ListItemIcon>
                <ListItemText primary={sidebarName} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </div>
  );
}
// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" onClick={() => this.props.itemSelected()}/>
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Orders" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Customers" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <LayersIcon />
//       </ListItemIcon>
//       <ListItemText primary="Integrations" />
//     </ListItem>
//   </div>
// );

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Additional references</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Documentation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Feature request" />
    </ListItem>
  </div>
);
