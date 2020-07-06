import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    boxShadow: "1px 3px 1px #9E9E9E"
  }
}));

export default function SimpleList({ routes }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {routes.map(({ path, noRender, sidebarName, ...prop }, index) => {
          if (noRender) return null;

          return (
            <NavLink to={path} key={`route-${index}}`}>
              <ListItem button
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}>
                <ListItemIcon>
                  <Avatar className={classes.avatar}>
                    <prop.icon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText className={classes.sidebarTitle} primary={sidebarName} />
              </ListItem>
              <Divider />
            </NavLink>
          );
        })}
      </List>
    </div>
  );
}