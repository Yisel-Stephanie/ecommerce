import React from 'react'
const Item = ({ papa }) => {
    return (
        <div class="d-inline-flex p-3">
            <div className="card" style={{ width: '300px' }} >
                <img src={papa.productImage} className="card-img-top" style={{ width: 'auto' }} />
                <div className="card-body">
                    <h5 className="card-title">{papa.productName}</h5>
                    <p>Cod. {papa.productId}</p>
                    <p className="card-text">{papa.productName}</p>
                    <p>${papa.productPrice}</p>
                    <span>{papa.span}</span>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Item

Item.defaultProps = {
    productImage: "https://picsum.photos/500/300"
}


