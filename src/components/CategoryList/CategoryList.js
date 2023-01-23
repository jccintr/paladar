import React from 'react'
import "./CategoryList.css";

const CategoryList = ({categorias}) => {
  return (
    <div class="scrollmenu">
     {categorias.map((categoria) =><a href={'#'+categoria.Nome}>{categoria.Nome}</a>)}
  
  </div>
  )
}

export default CategoryList