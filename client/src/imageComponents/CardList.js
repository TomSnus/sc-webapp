
// import Card from './Card';
import React, { Component, PropTypes } from 'react';
import equal from 'fast-deep-equal'
import ImageCard from './Card';


class CardList extends React.Component {
    state = { cardsArray: [] }

    constructor(props) {
        super(props);
        this.updateCards = this.updateCards.bind(this);

    }

    componentDidMount() {
        this.updateCards();
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.images, prevProps.images)) {
            this.updateCards();
        }
    };

    updateCards() {
        // this.props.dispatch(actions.fetchAllSites())
        this.setState({
            cardsArray: this.props.images.map(robot => (
                <ImageCard
                    name={robot.Id}
                    email={robot.Created}
                    id={robot.Labels} />
            )),
        });
    }


    render() {
        return (<div>{this.state.cardsArray}</div>);
    }
}
export default CardList;