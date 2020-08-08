const CardList = ({ robots }) => {
    const cardsArray = robots.map(robot => (
      <Card
        name={robot.name}
        email={robot.email}
        id={robot.id} />
    ));
  
    return (
      <div>
        {cardsArray}
      </div>
    );
  };

  export default CardList;