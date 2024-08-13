import React, { useRef } from 'react'
import './styles/ProductsCard.css'

const ProducstCard = ({ products, productName, setProductName }) => {

    console.log(products)
    const textInput = useRef();

    const handleSearch = () => {
        setProductName(textInput.current.value.toLowerCase().trim())
    }

    console.log(productName)

    const cbFilter = (products) => {
        return products.nombre_product.toLowerCase().includes(productName)
    }
    return (
        <div>ProducstCard
            <h1>STORE</h1>
            <input type="text" ref={textInput} onChange={handleSearch} />
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
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