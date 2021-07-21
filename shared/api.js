export const API_BASE_URL = "https://vsmandal-api.herokuapp.com/api";

export const getHeaderMenuJson = async () => {
    const res = await fetch(`${API_BASE_URL}/masters/menu`)
    const data = await res.json()
    return data;
}

export const getAllProjects = async () => {
    const res = await fetch(`${API_BASE_URL}/projects`)
    const data = await res.json()
    return data;
}

export const getProjectById = async (id) => {
    const res = await fetch(`${API_BASE_URL}/projects/${id}`)
    const data = await res.json()
    return data;
}