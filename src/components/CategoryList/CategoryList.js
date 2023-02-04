import React from 'react'
import "./CategoryList.css";

const CategoryList = ({categorias}) => {
  return (
    <div className="scrollmenu">
     {categorias.map((categoria) =><a key={categoria.id} href={'#'+categoria.Nome}>{categoria.Nome}</a>)}
  
  </div>
  )
}

export default CategoryList