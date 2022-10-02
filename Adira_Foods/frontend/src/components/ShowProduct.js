import React ,{ Component }from 'react';
import PatientServiceMethods from '../service/PatientServiceMethods';

import { useState,useEffect } from 'react';


   

function ShowProduct() {
    const [products,setProducts] =  useState([]);
    const getProductList =() => {
        PatientServiceMethods.fetchAllProducts()
       .then((response) => { 
            setProducts(response.data)
            console.log(response.data);
            
        });
    };
    useEffect(()=> {
        getProductList();
        
    }, [])
    return (
        <>
        <div style={{backgroundImage:'url("./assets/image.jpg")'}}>

        {/* <main className="block"> */}
        <main>
        <h2>Products</h2>   
        <div className="product-list"> 
                       <div className="row">
                           {products.map((product) =>
                                     
                                     <div class="col-sm-3">
       
                                     <img className="small" src={'/assets/'+product.image+'.jpg'} alt={product.title}/>
                                     <h3><strong>{product.title}</strong></h3>
                                      <h6><strong>{product.description}</strong></h6>
                                     <div><h6><strong>Rs.{product.unit_price}</strong></h6></div>
                                     
</div> 
                                       
                                    )}
                            
                      </div>
        </div>
        </main>
        </div>
        </>
    );
}

export default ShowProduct