import {Card} from '@material-ui/core';


const ImageCardList
dList = ({ robots }) => {
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
  export default ImageCardList;