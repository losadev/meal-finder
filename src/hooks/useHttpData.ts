import axios from "axios";
import { useEffect, useState } from "react";

export const useHttpData = <T>(url:string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=>{
    // Esta bandera es para saber si no se cancelo la peticion que no ponga en false el loading aunque este cargando
    // Tambien para evitar que setee la data 
    // (NO MOSTRABA EL SKELETON, AUNQUE NO SIEMPRE ES NECESARIO UTILIZAR FLGS)
    let ignore = false;
    // AbortController por renderiza mas de lo que debe (cancela la peticion)
    const controller = new AbortController();
    const {signal} = controller;
    setLoading(true);
    // Hay que tipar el tipo de response que obtenemos
    axios.get<{meals: T[]}>(url, {signal})
    .then(({data})=> {
      if(!ignore) setData(data.meals)
    })
    .finally(()=> {
      if(!ignore) setLoading(false)
    })

    return () => {
      ignore = true;
      controller.abort()
    };
  },[url]);

  return {loading, data, setData, setLoading};
}