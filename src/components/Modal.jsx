export const Modal = ({ event, id }) => {
    //押したidから-1して配列の数に対応
    const spot = event.spots[id - 1];
    const images = spot.images;
    console.log(spot);

    return (
        <div className="back">
            <div className="modal">
                <div className="detail">
                    <h1 className="title">{spot.name}</h1>
                    <div className="description">{spot.description}</div>
                </div>
                {images.map(image => {
                    return <img src={`${image}`} alt="詳細画像" className="detail-image" />
                })}
            </div>
        </div>
    )
}