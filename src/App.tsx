import { Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import { useState } from "react";
import { Category, Meal, MealDetails, SearchForm } from "./types";
import { useHttpData } from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

// Si la url no tiene https v a pensar que tiene que buscar algo dentro de la app
const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

const makeMealUrl = (category: Category) => `${baseUrl}filter.php?c=${category.strCategory}`;

const defaultCategory = {
  strCategory: 'Beef'
}



function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory);
  
  const {data, loading} = useHttpData<Category>(url);
  const {data: dataMeal, loading: loadingMeal, setData: setMeals, setLoading: setLoadingMeal} = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (searchForm:SearchForm) => {

    const url = `${baseUrl}search.php?s=${searchForm.search}`
    setLoadingMeal(true)
    axios.get<{meals: Meal[]}>(url)
    .then(({data}) => setMeals(data.meals))
    .finally(() => setLoadingMeal(false))
    
  }

  const {fetch, loading:loadingMealDetails, data: mealDetailData} = useFetch<MealDetails>();

  const searchMealsDetails = (meal: Meal) => {
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`)
    onOpen()
  }

  return (
    <>
    <Grid 
    templateAreas={`"header header"
                    "nav main"`}
    gridTemplateRows={"80px 1fr"}
    gridTemplateColumns={{sm: `0 1fr`, md: `250px 1fr`}}
    fontSize={14}
    >
      <GridItem zIndex="1" pos="sticky" top="0"  pl="2" area={"header"} bg={"white"} pt="7" boxShadow="lg">
        <Header onSubmit={searchApi}/>
      </GridItem>
      <GridItem overflowY="auto" pos="sticky" top="60px" left="0" p="5" area={"nav"} height={"calc(100vh - 60px)"}>
        <SideNav 
        categories={data} 
        loading={loading}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />      
      </GridItem>
      <GridItem p="4" area={"main"} bg={"gray.100"}>
        <MainContent openRecipe={searchMealsDetails} meals={dataMeal} loading={loadingMeal}/>
      </GridItem>
    </Grid>
    <RecipeModal data={mealDetailData} loading={loadingMealDetails}  isOpen={isOpen} onClose={onClose}/>
    </>
  )

}
export default App
