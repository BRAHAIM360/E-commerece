import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
// import {popularProducts}from "../data"
import Product from './Product'

const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

function Products() {
    const popularProducts= useSelector(state => state.popularProducts.value)
   
   
    return (
        <Container>
           
             {popularProducts.map(product=>(
                <Product key={product.id} item={product} />
            )

            )} 
        </Container>
    )
}

export default Products
