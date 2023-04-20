
export const MerchCard = ({ id, name, price }) => {
    
    const merchImageUrl = `./assets/merch/${id}.jpg`;

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={merchImageUrl} className='card-img' alt={name} />
                    </div>

                    <div className='com-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>{price}</p>

                            <button className='btn btn-danger fw-medium'>Comprar merch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
