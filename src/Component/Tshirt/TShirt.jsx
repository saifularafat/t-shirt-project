import React from 'react';

const TShirt = ({ tshirt }) => {
    const {gender, name, picture, price, _id} = tshirt

    return (
        <div>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default TShirt;