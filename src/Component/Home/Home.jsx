import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';

const Home = () => {
  const tShirts = useLoaderData()
  const [cart, setCart] =useState([])

  const handlerBuyProduct = (tshirt) =>{
    console.log(tshirt);
  }
  console.log(tShirts);
  return (
    <div className='md:flex'>
      <div className='outlet-container w-9/12 grid md:grid-cols-3 gap-4'>
        {
          tShirts.map(tshirt =>
            <TShirt
              key={tshirt._id}
              tshirt={tshirt}
              handlerBuyProduct = {handlerBuyProduct}
            ></TShirt>)
        }
      </div>
      <div className='w-3/12 bg-teal-200 pt-6'>
        <h1 className='text-indigo-600 text-2xl text-center'>Order Summery</h1>
      </div>
    </div>
  );
};

export default Home;