export const API_BASE_URL = "https://vsmandal-api.herokuapp.com/api";

export const getHeaderMenuJson = async () => {
  const res = await fetch(`${API_BASE_URL}/masters/menu`);
  const data = await res.json();
  return data;
};

export const getAllProjects = async () => {
  const res = await fetch(`${API_BASE_URL}/projects`);
  const data = await res.json();
  return data;
};

export const getProjectById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/projects/${id}`);
  const data = await res.json();
  return data;
};

export const getProjectByUrlSlug = async (slug) => {
  const res = await fetch(`${API_BASE_URL}/projects/slug/${slug}`);
  const data = await res.json();
  return data;
};

export const sendEmail = (data) => {
  return fetch("/api/sendEmail", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
};
