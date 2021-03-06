/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Collapse from '@material-ui/core/Collapse'
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
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { formatJSON } from '../util/StringFormatter.jsx'
import CreateContainerDialog from './CreateContainerDialog'
import CreateFeatureImageDialog from './CreateFeatureImageDialog'

const useStyles = theme => ({
  root: {
    //maxWidth: 345,
    border: '2px solid ' + theme.palette.secondary.main,
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.highest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  menuItem: {
    marginBottom: '5px',
  },
  menuButton: {
    height: '30px',
  }
})

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      showMenu: false,
    }
    this.expanded = false
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.onStartClick = this.onStartClick.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onCreateFeatureClick = this.onCreateFeatureClick.bind(this);
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      console.log(event.target)
      this.setState({ showMenu: false }, () => {
        //document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: !this.state.showMenu }, () => {
      //document.addEventListener('click', this.closeMenu);
    });
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
  onStartClick() {
    this.setState({
      showComponent: true,
    });
  }

  onCreateFeatureClick() {
    this.setState({
      showFeatureComponent: true,
    });
  }

  closeDialog = (severity, message) => {
    console.log(severity)
    this.setState({
      showComponent: false,
      showFeatureComponent: false,
      severity: severity,
      open: true,
      snackMessage: message,
    });
  };

  runContainer(image) {
    confirmAlert({
      title: 'Confirm',
      message: 'Do you want to start container: ' + image.repoTags,
      buttons: [
        {
          label: 'Yes',
          onClick: () => fetch('/operations/createContainer/?id=' + image.id)
        },
        {
          label: 'No',
        }
      ]
    });
  }

  getIdFormatted(id) {
    console.log(id)
    return id.substring(id.indexOf(':') + 1, id.indexOf(':') + 13)
  }

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
      <div>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <ImageIcon />
              </Avatar>
            }
            action={
              <div>
                <IconButton onClick={this.showMenu} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
                {
                  this.state.showMenu
                    ? (
                      <div className="menu"
                        ref={(element) => {
                          this.dropdownMenu = element;
                        }}><div>
                          <div className={classes.menuItem}>
                            <button className={classes.menuButton}> Remove </button>
                          </div><div>
                            <button onClick={this.onCreateFeatureClick} onClose={this.showSnack} className={classes.menuButton}> Create Feature Image </button>
                            {this.closeMenu}
                            {this.state.showFeatureComponent ?
                
                               <CreateFeatureImageDialog 
                                image={this.props.repoTags}
                                handleClose={this.closeDialog} />
                              :
                              null
                            }
                          </div></div>
                      </div>
                    )
                    : (
                      null
                    )
                }
              </div>
            }

            title={this.getIdFormatted(this.props.id)}
            subheader={formattedDate}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>RepoTags:</b> {this.props.repoTags}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            {/* <IconButton aria-label="share"
            onClick={() => this.runContainer(this.props)}
          >
            <PlayCircleOutlineIcon
            />
          </IconButton> */}
            <div>
              <IconButton onClick={this.onStartClick} onClose={this.showSnack} ><PlayCircleOutlineIcon /></IconButton>
              {this.state.showComponent ?
                <CreateContainerDialog
                  image={this.props}
                  handleClose={this.closeDialog} /> :
                null
              }
            </div>
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
                  <b>Parent Id:</b> {this.props.parentId}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Labels:</b>{formatJSON(this.props.labels)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Repo digests:</b> {this.props.repoDigests}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Size:</b> {this.props.size}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Virual size:</b> {this.props.virtualSize}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Containers:</b> {this.props.containers}
                </Typography>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export default withStyles(useStyles)(ImageCard)

