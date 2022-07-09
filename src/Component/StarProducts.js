import React from 'react';
import "../styles/StarProduct.css"

const StarProducts = ({ starProduct }) => {
    return (
        <div className='starProduct'>
            <div>
                <a href={starProduct[0].url}>
                    <img src={starProduct[0].image} />
                </a>
            </div>

            <div>
            <a href={starProduct[1].url}>
                        <img src={starProduct[1].image} />
                    </a>
                    <a href={starProduct[2].url}>
                        <img src={starProduct[2].image} />
                    </a>
                    <a href={starProduct[3].url}>
                        <img src={starProduct[3].image} />
                    </a>
               
            </div>

        </div>
    )
}

export default StarProducts