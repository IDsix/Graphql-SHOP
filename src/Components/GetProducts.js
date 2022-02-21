import React, { useEffect, useState } from "react"
import {useQuery} from "@apollo/client";
import {LOAD_PRODUCT} from "../GraphQL/Queries";
function GetProducts({slug}){
    const{error,loading,data}=useQuery(LOAD_PRODUCT,{
        variables:{
            slug:slug
        }
    });
    const [product,setProduct]=useState({});
    useEffect(()=>{
        if(data){
            setProduct(data.product);
            console.log(data.product)
        }
    },[data])
    
    return(
        product.name? <div>
        <div>
            <p>Name: {product.name[0].value}</p>
            <p>Price: {product.price.value}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <p>Status: {product.status}</p>
        </div>
    </div>:""
    
    )
}
export default GetProducts;