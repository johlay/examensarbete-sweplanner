import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      // try to get data from local storage by "key"
      const jsonValue = localStorage.getItem(key);

      // parse stored json value or if  there is none then return initialValue
      return jsonValue ? JSON.parse(jsonValue) : initialValue;
    } catch (error) {
      // if there is error then also return initialValue
      return initialValue;
    }
  });

  useEffect(() => {
    // stringify the new value
    const newJsonValue = JSON.stringify(value);

    // save the value into local storage.
    localStorage.setItem(key, newJsonValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
