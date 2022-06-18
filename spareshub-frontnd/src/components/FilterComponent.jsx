import { Box, Select, Text } from '@chakra-ui/react'
import React from 'react'

function FilterComponent() {
  return (
    <Box>
        <Text fontSize="2xl" >Sort</Text>
        <Select placeholder='Sort-by-price'>
            <option value='ASC'>ascending</option>
            <option value='DESC'>descending</option>
        </Select>


    </Box>
  )
}

export default FilterComponent