import { Box } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import {useSelector} from 'react-redux'
import CarouselMap from './CarouselMap'
const Nouvetes = () => {
    const Product = useSelector(state => state.ProductdALL.ProductAll)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 608, itemsToShow: 3 },
        { width: 700, itemsToShow: 4 },
        { width: 800, itemsToShow: 5 },
      ];
      
    return (
        <div className="mt-10">
            <p>Nouveaux Produits</p>
              <Carousel className="px-10" breakPoints={breakPoints}>
                
            {Product.slice(1).reverse().map((el)=><CarouselMap el={el}/>)}
        
            </Carousel>
        </div>
    )
}

export default Nouvetes
