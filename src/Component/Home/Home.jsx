import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';

const Home = () => {
  const tShirt = useLoaderData()
  console.log(tShirt);
  return (
    <div className='outlet-container'>
      <h3>This is a Home: {tShirt.length}</h3>
      {
        tShirt.map(tshirt =>
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
          ></TShirt>)
      }
    </div>
  );
};

export default Home;