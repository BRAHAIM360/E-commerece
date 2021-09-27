import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { mobile } from "../responsive";





const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})} 
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d8d1d1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;

  

`;

const Wraper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slidIndex*-100}vw);
  
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgConainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {
  const [SlideIndex, setSlidIndex] = useState(0);
  const sliderItems = useSelector(state => state.sliderItems.value);
  const handleClick = (direction) => {
      if(direction==="left"){
          setSlidIndex(SlideIndex >0 ? SlideIndex-1 : sliderItems.length-1)
          console.log('right')
      }else
      {
        setSlidIndex(SlideIndex <sliderItems.length-1 ? SlideIndex+1 : 0)
        console.log('left')
      }
  };
 
  const animation=()=>{
    setSlidIndex(SlideIndex <sliderItems.length-1 ? SlideIndex+1 : 0)
    console.log(SlideIndex)
  }
  setTimeout(animation, 5000)

 
 

  const renderSlide = () => {
  

    return sliderItems.map((item) => {
      
      return (
        <Slide key={item.id} bg={item.bg}>
          <ImgConainer>
            <Image src={item.img} />
          </ImgConainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      );
    });
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wraper slidIndex={SlideIndex}>{renderSlide()}</Wraper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
