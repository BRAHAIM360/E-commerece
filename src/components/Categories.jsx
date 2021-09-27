import styled from "styled-components";
import CategorieItem from "./CategorieItem";
// import {categories} from "../data"
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container =styled.div`
display: flex;
padding: 2px;
justify-content: space-between;
${mobile({  padding:"0px", flexDirection:"column"})} 

`;

function Categories() {
    const categories=useSelector(state=>state.categories.value)
   
    return (
        <Container>
            {categories.map(item=>(
                <CategorieItem item={item} key={item.id}/>
            )

            )}
        </Container>
    )
}

export default Categories
