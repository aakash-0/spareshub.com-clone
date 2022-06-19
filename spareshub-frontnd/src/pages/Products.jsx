import { Box, Flex, Heading, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import FilterComponent from '../components/FilterComponent';
import ProductSimple from '../components/ProductSimple';
import { fetchData } from '../redux/products/action';

function Products() {
  const products = useSelector((store)=>store.ecommmerceData.products);
  const dispatch = useDispatch();
  const [data,setData] = useState([]);
  const [order,setOrder] = useState("");
  useEffect(()=>{
    if(products?.length === 0){
      dispatch(fetchData())
    }
    setData(products)

  },[products])

  useEffect(()=>{
    if(order=="ASC"){
      let sortdata = data.sort((a,b)=>{
        return a.price-b.price;
        
      })
      setData([...sortdata])
     
    }
    else if(order=="DESC"){
        let sortdata = data.sort((a,b)=>{
        return b.price-a.price;
        
      })
      setData([...sortdata])
    }
  },[order])
  console.log(data,"data");
  const handelChange=(e)=>{
    setOrder(e.target.value);
    
  }
  return (
    <Box>
        <Box  p ="1rem 2rem" zIndex={-10}>
        <Text fontSize="2xl" zIndex={-10} >Sort</Text>
        <Select onChange={handelChange} placeholder='Sort-by-price'>
            <option value='ASC'>low-to-heigh</option>
            <option value='DESC'>high-to-low</option>
        </Select>
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap={"wrap"} justifyContent="space-around">
          {
              data?.map(e=>{
                return <Link to={`/product/product/${e._id}`}>
                <ProductSimple key={e.id} image={e.Image} name={e.name} price={e.price}/>
                </Link>
                
              })
            }

          </Flex>
            </Box>
    </Box>
  )
}

export default Products