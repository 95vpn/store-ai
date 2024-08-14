import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';

const SelectCategory = ({setSelectValue}) => {

    const [categories, getCategories] = useFetch();

    useEffect(() => {
      const url = 'https://store-productos-database-production.up.railway.app/api/v1/categories'
      getCategories(url)
    }, []);

    const textSelect = useRef()

    const handleCategory = () => {
     
      setSelectValue(textSelect.current.value);
    }

  return (
    <select onChange={handleCategory} ref={textSelect}>SelectCategory
        <option value={0}>all</option>
        {
          categories?.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))
        }
    </select>
  )
}

export default SelectCategory;