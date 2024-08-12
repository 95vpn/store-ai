import React from 'react'
import './styles/ProductsCard.css'

const ProducstCard = ({ prod }) => {

    console.log(prod)
    return (
        <div>ProducstCard
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descuento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{prod.nombre_product}</td>
                    <td>{prod.description}</td>
                    <td>{prod.price}</td>
                    <td>{prod.stock}</td>
                    <td>{prod.discount}</td>
                </tbody>
            </table>
        </div>
    )
}

export default ProducstCard