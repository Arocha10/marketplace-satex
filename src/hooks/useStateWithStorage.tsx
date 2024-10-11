import { useEffect, useState } from "react";
import { useOrderContext } from "../contexts/OrderContext";

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const {addItem} = useOrderContext();
  const [value, setValue] = useState(() =>{
    let originalValue

    try {
      originalValue = JSON.parse(localStorage.getItem(key)|| String(defaultValue))
    }catch(error){
      originalValue = defaultValue
    }
    addItem(originalValue)
    return originalValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
