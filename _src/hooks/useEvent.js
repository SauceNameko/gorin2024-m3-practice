import { useEffect, useState } from "react";
import { eventApi, spotApi } from "../api/eventApi";

export const useEvent = () => {
    const [event, setEvent] = useState({});
    const [isModal, setIsModal] = useState(false);
    const [id, setId] = useState(0);
    const getEvent = async () => {
        const data = await eventApi();
        setEvent(data);
    }
    useEffect(() => {
        getEvent();
    }, []);

    const handleClickIcon = async (event_id, spot_id, operation_type) => {
        const data = await spotApi(event_id, spot_id, operation_type);
        if (data.success) {
            console.log("成功しました");
        }
        setIsModal(true);
        setId(spot_id)
    }

    return { event, handleClickIcon, isModal, id, setIsModal };
}