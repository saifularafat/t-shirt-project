import React from 'react';

const TShirt = ({ tshirt, handlerBuyProduct}) => {
    // console.log(object);
    const { gender, name, picture, price, _id } = tshirt

    return (
        <div className='border border-teal-500 p-4 rounded-xl shadow-lg text-center'>
            <img src={picture} alt="" className='h-64 rounded-xl inline-flex w-10/12' />
            <div className='text-left font-semibold mt-4'>
                <p className='text-2xl'>{name}</p>
                <p className='text-xl'>Price: <span className='text-red-700 font-extrabold text-2xl'>${price}</span></p>
                <p className='text-xl'>Gender: {gender}</p>
            </div>
            <button onClick={() =>handlerBuyProduct(_id)} className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default TShirt;