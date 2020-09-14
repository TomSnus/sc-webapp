
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
        cardsArray: this.props.images.map(container => (
          <ImageCard
            id={container.Id}
            created={container.Created}
            labels={container.Labels}
            repoTags={container.RepoTags}
            size={container.Size}
            container={container.Containers}
            repoDigests={container.RepoDigests}
            virtualSize={container.VirtualSize}
            parentId={container.ParentId}
          />
        ))
      })
    }

    render () {
      return (<div>{this.state.cardsArray}</div>)
    }
}
export default CardList
