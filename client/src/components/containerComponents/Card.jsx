/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Collapse from '@material-ui/core/Collapse'
import { red } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ImageIcon from '@material-ui/icons/Image'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import clsx from 'clsx'
import React from 'react'
import {formatJSON}  from '../../util/StringFormatter.jsx'
import { confirmAlert } from 'react-confirm-alert';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import 'react-confirm-alert/src/react-confirm-alert.css';
import CommitDialog from './CommitDialog'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackAlert from '../../util/SnackBarUtil'

const useStyles = theme => ({
  root: {
    maxWidth: 345,
    border: '2px solid '+theme.palette.secondary.main,
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
})

class ContainerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
    this.state = { showComponent: false };
    this.state = { open: false };
    this.state = {snackMessage: ""}
    this.expanded = false
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this._onCommitClick = this._onCommitClick.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hover: true })
  }

  handleMouseLeave() {
    this.setState({ hover: false })
  }

  handleClick() {
    const { cardId, cardClicked } = this.props
    this.props.onClick(cardId, cardClicked)
    this.setState({ hover: false })
  }

  getIdFormatted(id) {
    return id.substring(id.indexOf(':') + 1, id.indexOf(':') + 13)
  }

  _onCommitClick() {
    this.setState({
      showComponent: true,
    });
  }

  closeDialog = (severity, message) => {
    console.log(severity)
    this.setState({
      showComponent: false,
      severity:severity,
      open:true,
      snackMessage:message,
    });
  };

  handleSnackClose = () => {
    this.setState({
      open:false,
    });  };

  render() {
    const { classes } = this.props
    const handleExpandClick = () => {
      this.setState({
        expanded: !this.state.expanded
      })
    }
    var t = new Date(this.props.created * 1000)
    var formattedDate = t.toISOString()
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <ImageIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={this.getIdFormatted(this.props.id)}
          subheader={formattedDate}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Image:</b> {this.props.image}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <div>
        <IconButton onClick={this._onCommitClick} onClose={this.showSnack} ><SaveOutlinedIcon /></IconButton>
          {this.state.showComponent ?
             <CommitDialog
             container={this.props}
             handleClose={this.closeDialog} /> :
            null
        }
        </div>
        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleSnackClose} >
          <SnackAlert severity={this.state.severity}  onClose={this.handleSnackClose}>
            {this.state.snackMessage}
          </SnackAlert>
        </Snackbar>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: true
            })}
            onClick={handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Additional Information:</Typography>
            <Typography paragraph>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Command:</b> {this.props.command}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Labels:</b> {formatJSON(this.props.labels)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>State:</b> {this.props.state}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Status:</b> {this.props.status}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Ports:</b> {formatJSON(this.props.ports)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Host config:</b> {formatJSON(this.props.hostconfig)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Network settings:</b> {formatJSON(this.props.networksettings)}
              </Typography>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

export default withStyles(useStyles)(ContainerCard
)
