import React, { useEffect, useState } from "react";

export default function FetchApi() {
    const [data, setData] = useState({ products: [] });

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setData(data));

        console.log("Products", data);
    }, []);

    return (
        <div>
            <h1>Fetch data from API using UseEffect</h1>

            <div>
                {data.products.map(item => (
                    <div key={item.id}>
                        <p>{item.title}</p>

                        <img
                            src={item.images[0]}
                            style={{ width: "100px", height: "100px" }}
                        />

                        <p>Price: {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}