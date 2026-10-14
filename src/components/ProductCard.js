
function ProductCard (props) {
    return (
        <div className="card"> 
            <img src={props.product.image} />
            <h2>{props.product.title}</h2>
            <h3>{props.product.category}</h3>
            <p>{props.product.description}</p>
            <span>${props.product.price.toFixed(2)}</span>
            <br/>
        </div>
    )
}

export default ProductCard;