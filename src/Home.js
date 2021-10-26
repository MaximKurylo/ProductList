import React from 'react';
import data from './data';
import Itemcard from './Itemcard';


const Home = () => {
    return (
        <>
            <h1 className='text-center mt-3' >All products</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center' >
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard
                                img={item.img}
                                name={item.name}
                                label={item.label}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })}

                </div>
            </section>
        </>
    )
}

export default Home;