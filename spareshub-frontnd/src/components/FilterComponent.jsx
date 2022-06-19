import { Box, Select, Text } from '@chakra-ui/react'
import React from 'react'

function FilterComponent() {
  return (
    <Box zIndex={-5}>
        <Text fontSize="2xl" zIndex={-5}>Sort</Text>
        <Select placeholder='Sort-by-price' zIndex={-2}>
            <option value='ASC'>ascending</option>
            <option value='DESC'>descending</option>
        </Select>


    </Box>
  )
}

export default FilterComponent