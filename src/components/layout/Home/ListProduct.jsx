import React from 'react'
import Product from './Product'

const ListProduct = ({products}) => {
  return (
    <section className="grid gap-10 p-2">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
  )
}

export default ListProduct