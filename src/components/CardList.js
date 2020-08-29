import React from 'react';
import Card from './Card'


const CardList = ({robots}) => {
    const cardComponent = robots.map((cardItem)=> {
        return (
            <Card  
                key={cardItem.id} 
                id={cardItem.id} 
                name={cardItem.name} 
                email={cardItem.email} 
                />
        ); 
    });
    
    return (
        <div>
            {/* <Card  id={robots[0].id} name={robots[0].name} email={robots[0].emailId} />
            <Card  id={robots[1].id} name={robots[1].name} email={robots[1].emailId} />
            <Card  id={robots[2].id} name={robots[2].name} email={robots[2].emailId} /> */}
          {cardComponent}
        </div>
    );

}

export default CardList;