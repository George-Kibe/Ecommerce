import { useState } from "react"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:turquoise;
    position:relative;
    overflow:hidden;
   
`
const Arrow =styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    margin:auto;
    opacity:0.6;
    z-index:2;
`

const Wrapper = styled.div`
    display:flex;
    height:100%;
    transition:all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`
const Slide= styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props => props.bg};
    ${mobile({flexDirection:"column"})}
    
`
const ImageContainer=styled.div`
    height:100%;
    flex:1;
`
const Image = styled.img`
    height:80%;
    ${mobile({height:"50vh", width:"70vw"})}
`
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
    ${mobile({padding:"5px"})}
`
const Title =styled.h1`
    font-size:50px;
    ${mobile({fontSize:"20px", margin:"0px", textAlign:"center"})}
`
const Description=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:2px
    ${mobile({fontSize:"12px", margin:"0px"})}
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color;transparent;
    cursor:pointer;
    ${mobile({padding:"2px"})}
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }   
  return (
    <Container>
        <Arrow direction="left" onClick={() =>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(            
                <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.image} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() =>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider