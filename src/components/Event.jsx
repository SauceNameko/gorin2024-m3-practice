import { useState } from "react";

export const Event = ({ event, onIcon, onToggle, isCommand, onCountChange }) => {
    const spots = event.spots;
    return (
        <>
            <div className="pos">
                <img src={`${event.map_image}`} alt="マップ画像" className="map_image" />
                {spots.map((spot, spotIndex) => {
                    return <>
                        <div className={`icon icon-${spotIndex}`} style={{ top: `${spot.location_y}px`, left: `${spot.location_x}px` }} onClick={() => onIcon(event.id, spot.id, "spot_tapped")} ></div>
                    </>
                })}
                {isCommand && <div className="bar">
                    <span className="left" onClick={onCountChange}>←</span>
                    <span className="right" onClick={onCountChange}>→</span>
                </div>}
                <div className="command" onClick={onToggle}>設定</div>
            </div>
        </>
    )
}