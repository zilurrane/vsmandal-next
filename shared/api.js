export const API_BASE_URL = "https://vsmandal-api.herokuapp.com/api";

export const getHeaderMenuJson = async () => {
    const res = await fetch(`${API_BASE_URL}/masters/menu`)
    const data = await res.json()
    return data;
}
