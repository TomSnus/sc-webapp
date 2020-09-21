
// import Card from './Card';
import React, { PropTypes } from 'react'
import equal from 'fast-deep-equal'
import ImageCard from './Card'
import Title from './../Title'
class CardBoard extends React.Component {
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

    render () {
      return (<div>
        <Title>Favorites </Title>
          <div>
          {this.state.cardsArray}
          </div>
        </div>
      )
    }
}
export default CardBoard
