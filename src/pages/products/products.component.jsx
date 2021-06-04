import React from 'react'

export class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products, items, addProductToCart } = this.props
        console.log("items ", items);
        console.log("products ", products);
        console.log("props ", this.props);
        return <>
            <div className="row mt-2">
                {products.map((item, index) =>
                    <div className="col-4 mt-1" key={index}>
                        <div className="card" >
                            <img className="card-img-top" src={item.imageUrl} style={{
                                width: '120px',
                                margin: 'auto'
                            }}
                                alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{item.brandName}</h5>
                                <h6 className="card-title">{item.modelName}</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary" onClick={() => { addProductToCart(item) }}>Buy</a>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </>
    }
}