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
const useStyles = theme => ({
  root: {
    maxWidth: 345,
    border: '1px solid red'
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
    backgroundColor: red[500]
  }
})

class ImageCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hover: false }
    this.expanded = false
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter () {
    this.setState({ hover: true })
  }

  handleMouseLeave () {
    this.setState({ hover: false })
  }

  handleClick () {
    const { cardId, cardClicked } = this.props
    this.props.onClick(cardId, cardClicked)
    this.setState({ hover: false })
  }

  runContainer (id) {
    fetch('/operations/createContainer/?id='+id)
  }

  getIdFormatted (id) {
    return id.substring(id.indexOf(':') + 1, id.indexOf(':') + 13)
  }

  render () {
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
            <b>RepoTags:</b> {this.props.repoTags}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <PlayCircleOutlineIcon
            onClick={this.runContainer(this.props.id)}
             />
          </IconButton>
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
                <b>Labels:</b> {this.props.labels}
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
    )
  }
}

export default withStyles(useStyles)(ImageCard)
