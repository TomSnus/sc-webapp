
// import Card from './Card';
import React, { PropTypes } from 'react'
import equal from 'fast-deep-equal'
import ImageCard from './Card'
import Title from '../Title'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = theme => ({
  image: {
    display: 'inline-block',
    padding: 5,

  },
  paper: {
    flex: -1,
    overflow: 'auto',
    flexDirection: 'row',
  },
})

class CardBoard extends React.Component {
  state = { cardsArray: [] }
  constructor(props) {
    super(props)
    this.updateCards = this.updateCards.bind(this)
  }

  componentDidMount() {
    this.updateCards()
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.images, prevProps.images)) {
      this.updateCards()
    }
  }

  updateCards() {
    this.setState({
      cardsArray: this.props.images.map(image => (
        <ImageCard
          id={image.Id}
          created={image.Created}
          labels={image.Labels}
          repoTags={image.RepoTags}
          size={image.Size}
          container={image.Containers}
          repoDigests={image.RepoDigests}
          virtualSize={image.VirtualSize}
          parentId={image.ParentId}
        />
      ))
    })
  }

  render() {
    const { classes } = this.props
    return (<div>
      <Title>Favorites </Title>
      <div className={classes.paper} >
        {this.state.cardsArray.map(col =>
          <div className={classes.image} key={col.name}>{col}</div>
        )}
      </div>
    </div>
    )
  }
}
export default withStyles(useStyles)(CardBoard)
