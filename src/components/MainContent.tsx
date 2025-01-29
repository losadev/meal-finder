import { Meal } from '../types'
import { SimpleGrid } from '@chakra-ui/react'
import MealCard from './MealCard'
import SkeletonCard from './SkeletonCard'


type Props = {
  meals: Meal[]
  loading: boolean
  openRecipe: (meal:Meal) => void
}

const MainContent = ({meals, loading, openRecipe}: Props) => {
  // Es para indicar los indicas de los skeletons cards
  const skeletons = [1,2,3,4,5,6,7,8];

  return (
    <SimpleGrid columns={[2, null, 3]} spacing='20px'>
      {loading && skeletons.map(skeleton =><SkeletonCard key={skeleton}/>)}
      {!loading && meals?.map(m => (
        <MealCard openRecipe={() => openRecipe(m)} meal={m} key={m.idMeal}/>
      ))}
    </SimpleGrid>
  )
}

export default MainContent