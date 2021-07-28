import { useEffect, useRef, useState } from "react"


export const useFetch = ( uri ) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loadin: true, error: null });

    useEffect(() => {
       return () => {
        isMounted.current = false;
       }
    }, [])

   useEffect(() => {
        setstate({data: null, loadin: true, error: null})
        fetch( uri ).then( resp =>  resp.json() ).then( data => {
            if(isMounted.current){
                setstate({
                    loadin: false,
                    error: null,
                    data
                });
            }
        }).catch(() => {
            setstate({
                data: null, 
                loadin: false,
                error: 'No se puedo realizar la petición fetch correctamente'
            })
        });
   }, [uri])

   return state;
}
