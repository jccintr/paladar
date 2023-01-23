import React from 'react'
import "./CategoryList.css";

const CategoryList = ({categorias}) => {
  return (
    <div class="scrollmenu">
     {categorias.map((categoria) =><a href="#home">{categoria.Nome}</a>)}
  
  </div>
  )
}

export default CategoryList