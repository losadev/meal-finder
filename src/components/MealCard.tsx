import { CardBody, Button, Image, Heading, Card, CardFooter, Text } from '@chakra-ui/react'
import { Meal } from '../types'

type Props = {
  meal: Meal
  openRecipe: () => void
}

const MealCard = ({meal, openRecipe}: Props) => {
  return (
    <Card boxShadow={"lg"}>

        <CardBody>
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            borderRadius='lg'
          />    
          <Heading py={5} size='md' color="blue.400">
            <Text>{meal.strMeal}</Text>
          </Heading>
        </CardBody>
  
        <CardFooter pt="0">
          <Button onClick={openRecipe} variant='solid' color='white' bg={"blue.400"}>
            Ver receta
          </Button>
        </CardFooter>
        
      </Card>
  )
}

export default MealCard