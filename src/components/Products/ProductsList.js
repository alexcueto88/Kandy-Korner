import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductsList = () => {
  const [Products, findProductsList] = useState([])
  const [TopPrice, topPriceProductsList] = useState([])
  const navigate = useNavigate()

  const localKandyUser = localStorage.getItem("kandy_user")
  const kandyUserObject = JSON.parse(localKandyUser) 



  useEffect(
    () => {
        fetch(`http://localhost:8088/products`)
        .then(response => response.json())
        .then((productArray) => {
            findProductsList(productArray)
            topPriceProductsList(productArray)
        })
          
    },
    [] 
)

  
    return <>  

      {
        kandyUserObject.staff
        ? <> 
        <button onClick={ () => { topPriceProductsList(Products)}}> All Products</button>
        <button onClick={ () => { topPriceProductsList(TopPrice.filter((obj) => obj.pricePerUnit > 2.0))}}> Top Price</button>
        </>
      : <></>
      

      }
     


    <h2>List of Products </h2>      

    <article className="products">
      {
       TopPrice.map(
         (products) => {
           return <section className="products" key={`products--${products.id}`}

           >
             <header>List of Products: {products.name} </header>
             <header>Price of Products: {products.pricePerUnit} </header>
            

           </section>
         }
       )
     }
   </article>
  
   {Products.length < 1 && (
            <section className="products">
                <h4>There are no products to see here</h4>
            </section>
        )}



   </>

}
  