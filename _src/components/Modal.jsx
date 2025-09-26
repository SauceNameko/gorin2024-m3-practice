import { useEffect, useState } from "react";

export const Modal = ({ event, id, item, onClose, count }) => {
    //押したidから-1して配列の数に対応
    const spot = event.spots[id - 1];
    const images = spot.images;

    const [className, setClassName] = useState("");
    useEffect(() => {
        if (count == 0) {
            setClassName("simple");
        } else if (count == 1) {
            setClassName("dark");
        } else if (count == 2) {
            setClassName("orange");
        }
    }, [count]);
    
    return (
        <div className="back" onClick={onClose} style={{ backgroundImage: `linear-gradient(${item.modal.text_back})` }}>
            <div className="modal">
                <div className="close">閉じる</div>
                <div className="detail" style={{ backgroundImage: `linear-gradient(to top ,transparent ,  ${item.modal.text_back})` }}>
                    <h1 className="title">{spot.name}</h1>
                    <div className="description">{spot.description}</div>
                </div>
                {images.map(image => {
                    return <img src={`${image}`} alt="詳細画像" className={`${className} detail-image`} />
                })}
            </div>
        </div>
    )
}