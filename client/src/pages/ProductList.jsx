import { useLocation } from 'react-router-dom'
import { useState } from "react"

import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"


const Container = styled.div`

`
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
    ${mobile({margin:"0px 20px", display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({marginRight:"0px"})}
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option``


const ProductList = () => {
    const location = useLocation();
    const category=location.pathname.split("/")[2]
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) =>{
        const value=e.target.value;
        setFilter({
            ...filter,
            [e.target.name]:value })
    }
    // console.log(filter)
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={(e) =>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (Asc)</Option>
                    <Option value="desc">Price (Desc)</Option>
                </Select>
            </Filter>            
        </FilterContainer>
        <Products  category={category} filter={filter} sort={sort}/> 
        <Newsletter />
        <Footer />       
    </Container>
  )
}

export default ProductList