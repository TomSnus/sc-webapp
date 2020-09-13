
// import Card from './Card';
import React, { PropTypes } from 'react'
import equal from 'fast-deep-equal'
import ImageCard from './Card'

class CardList extends React.Component {
    state = { cardsArray: [] }

    constructor (props) {
      super(props)
      this.updateCards = this.updateCards.bind(this)
    }

    componentDidMount () {
      this.updateCards()
    }

    componentDidUpdate (prevProps) {
      if (!equal(this.props.images, prevProps.images)) {
        this.updateCards()
      }
    }

    updateCards () {
      // this.props.dispatch(actions.fetchAllSites())
      this.setState({
        cardsArray: this.props.images.map(robot => (
          <ImageCard
            id={robot.Id}
            created={robot.Created}
            labels={robot.Labels}
            repoTags={robot.RepoTags}
            size={robot.Size}
            container={robot.Containers}
            repoDigests={robot.RepoDigests}
            virtualSize={robot.VirtualSize}
            parentId={robot.ParentId}
          />
        ))
      })
    }

    render () {
      return (<div>{this.state.cardsArray}</div>)
    }
}
export default CardList
