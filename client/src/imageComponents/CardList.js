
// import Card from './Card';
import equal from 'fast-deep-equal'
import React from 'react'
import Title from './../Title'
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
        <Title>All Images </Title>
          <div >
          {this.state.cardsArray.map(col =>
         <div><div key={col.name}>{col}</div><br/></div>
               )}
          </div>
        </div>
      )
    }
}
export default CardList
