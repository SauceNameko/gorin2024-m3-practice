const path = "http://localhost:8085/api";
export const eventApi = async () => {
    const res = await fetch(`${path}/events?id=1`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    const data = await res.json();
    return data;
}

export const spotApi = async (event_id, spot_id, operation_type) => {
    const res = await fetch(`${path}/logs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ event_id, spot_id, operation_type })
    })
    const data = await res.json();
    return data;
}