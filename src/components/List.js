import productData from "../product-data"; 
import ProductCard from "./ProductCard";
import "./List.css";

const products = productData.map( (product) => {
    return (
        product.price > 100 ? <ProductCard key = {product.id} product = {product} /> : null
    )
});

function List(){
    console.log(productData);

    return (
        <div className="List"> 
            <div className="row">
            {products}
            </div>
        </div>
    )
}

export default List;