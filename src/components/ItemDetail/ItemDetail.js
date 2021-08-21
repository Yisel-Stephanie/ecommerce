import React from 'react'

const ItemDetails = (props) => {
    return (
        <>
            {props.art.map(a => {
                <>
                    <hr />
                    <div className="card mb-3" style="max-width: 540px;">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={a.productImage} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{a.productName}</h5>
                                    <p >{a.productStock}</p>
                                    <p >{a.productPrice}</p>
                                    <p>Descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus molestias iste accusantium odio modi dicta amet minima qui facere in nemo omnis harum corporis quidem dolorum, aperiam quas tempora.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </>
    )
}

export default ItemDetails
