import React from "react";

function NameList() {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

    return (
        <ul>
            {names.map((name) => {
                <li key={name}>{name}</li>
            })}
        </ul>
    )
}


function Product(props) {
    const {name, price, description } = props
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
        </div>
    );
}

function ProductList() {
    const products = [
        { name: 'Shirt', price: 20, description: 'cotton T-shirt'},
        { name: 'Hat', price: 15, description: 'Baseball cap'},
        { name: 'Mug', price: 12, description: 'ceramicc coffee mug'},
    ];

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => {
                    <li key={product.name}>
                        <Product {...product} />
                    </li>
                })}
            </ul>
        </div>
    );
}







export default NameList;
