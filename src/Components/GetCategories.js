import React, { useEffect, useState } from "react"
import {useQuery, gql} from "@apollo/client";
import { LOAD_CATEGORIES,LOAD_PRODUCT } from "../GraphQL/Queries";
import GetProducts from "./GetProducts";
function GetCategories(){
    const {error:error, loading:loading, data:data} = useQuery(LOAD_CATEGORIES);
    const [categories, setCategories]=useState([]);
    const [products, setProducts]=useState([]);
    const [productslug,setProductslug]=useState("");
    
    
    useEffect(()=>{
        if(data){
            setCategories(data.category.categories);
            console.log(data.category.categories);
        }
       
        
        
    },[data])
    return(
        <div>
    <div>
      {categories.map((val)=>{
            return <button onClick={()=>{
                setProducts(val.products.items);
            }}>{val.name[0].value}</button>
            
        })}
    </div>
    <div>
    {
        products ? products.map((val)=>{
            return <p><button onClick={()=>{
                setProductslug(val.slug[0].value)
                
            }}>{val.name[0].value}</button></p>
            
        }):""
        
    }
    </div>
    
   {  <GetProducts slug={productslug}></GetProducts>}
    </div>
    )
}
export default GetCategories
