import { Button, Container, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IoMdSearch } from "react-icons/io";
import { SearchForm } from '../types';
import { useForm } from "react-hook-form";

type Props = {
  onSubmit: (data: SearchForm)=> void;
}

const Header = ({onSubmit}:Props) => {
  // formState contiene los errores
  const {register, formState, handleSubmit} = useForm<SearchForm>();

  return (
   <Container maxW={"3xl"}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <IoMdSearch color='gray' />
      </InputLeftElement>
      {/*CON DOBLE !! INDICA QUE SI EXISTE Y ES FALSO, VALIDA QUE EXISTA PRIMERO, LA PROPIEDAD SEARCH*/}
        <Input
        mr={"2"}
        focusBorderColor={!!formState.errors.search ? 'crimson':'blue.400'}
        isInvalid={!!formState.errors.search}
        placeholder="Intenta con 'chickens' o 'beans'" {...register('search',{required: true})} type='text'/>
        <Button type='submit' bg={"blue.400"} color={"white"}>Buscar</Button>
      </InputGroup>
    </form>
   </Container>


  )
}

export default Header