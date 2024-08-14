import React, { useRef, useState } from 'react'
import './styles/ProductsCard.css'
import SelectCategory from './SelectCategory';

const ProducstCard = ({ products, productName, setProductName }) => {

    console.log(products)
    const textInput = useRef();

    const [selectValue, setSelectValue] = useState(0);

    const handleSearch = () => {
        setProductName(textInput.current.value.toLowerCase().trim())
    }

    const cbFilter = (products) => {
        const ByName = products.nombre_product.toLowerCase().includes(productName);
        const ByCategory = +selectValue === 0 ? true : products.categoryId=== +selectValue
        return ByName && ByCategory;
    }

    console.log(selectValue)

    return (
        <div>ProducstCard
            <h1>STORE</h1>
            <input type="text" ref={textInput} onChange={handleSearch} />
            <SelectCategory
                setSelectValue={setSelectValue}
            />
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Proveedor</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descuento</th>
                        <th>Categoria</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products?.filter(cbFilter).map(prod => (
                            <tr key={prod.id}>
                                <td>{prod.nombre_product}</td>
                                <td>{prod.description}</td>
                                <td>{prod.proveedor}</td>
                                <td>{prod.price}</td>
                                <td>{prod.stock}</td>
                                <td>{prod.discount}</td>
                                <td>{prod.category.name}</td>
                                <td>
                                    <button></button>
                                    <button></button>
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProducstCard