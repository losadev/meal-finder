import React, { useState } from 'react'
import { Category } from '../types'
import { Heading, Link, SkeletonText, VStack } from '@chakra-ui/react'

type Props = {
  categories: Category[]
  loading: boolean
  selectedCategory: Category
  setSelectedCategory: (category:Category) => void
}

const selectedProps = {
  backgroundColor: "blue.400",
  color: "white",
  fontWeight: "bold"
}

const SideNav = ({categories, loading, selectedCategory, setSelectedCategory}: Props) => {
  
  return loading ? <SkeletonText noOfLines={8} spacing={"6"} skeletonHeight={"2"}></SkeletonText>:
  (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>CATEGORIAS</Heading>
      <VStack align={"stretch"}>
        {categories.map(c => (
          <Link 
          key={c.strCategory} 
          _hover={{textDecoration:"none"}}
          {...(selectedCategory.strCategory === c.strCategory && selectedProps)}
          px={2}
          py={1}
          borderRadius={5}
          onClick={() => setSelectedCategory(c)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  )
}

export default SideNav