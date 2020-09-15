
// import Card from './Card';
import React, { PropTypes } from 'react'
import equal from 'fast-deep-equal'
import ContainerCard from './Card.jsx'

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
      if (!equal(this.props.containers, prevProps.containers)) {
        this.updateCards()
      }
    }

    updateCards () {
      // this.props.dispatch(actions.fetchAllSites())
      this.setState({
        cardsArray: this.props.containers.map(container => (
          <ContainerCard
            id={container.Id}
            image={container.Image}
            imageId={container.ImageID} 
            names={container.Names}
            command={container.Command}
            created={container.Created}
            state={container.State}
            status={container.Status}
            ports={container.Ports}
            labels={container.Labels}
            hostconfig={container.HostConfig}
            networksettings={container.NetworkSettings}
          />
        ))
      })
    }

    render () {
      return (<div>{this.state.cardsArray}</div>)
    }
}
export default CardList
