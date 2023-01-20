export const API_BASE_URL = "http://127.0.0.1:8000/api";

export const getHeaderMenuJson = async () => {
  return [
    { "id": 1, "title": "Home", "link": "/" },
    { "id": 2, "title": "About Us", "link": "/about" },
    { "id": 3, "title": "Contact", "link": "/contact" }
  ];
  // const res = await fetch(`${API_BASE_URL}/masters/menu`);
  // const data = await res.json();
  // return data;
};

export const getAllProjects = async () => {
  return []
  // const res = await fetch(`${API_BASE_URL}/projects`);
  // const data = await res.json();
  // return data;
};

export const getProjectById = async (id) => {
  return {}
  // const res = await fetch(`${API_BASE_URL}/projects/${id}`);
  // const data = await res.json();
  // return data;
};

export const getProjectByUrlSlug = async (slug) => {
  return {}
  // const res = await fetch(`${API_BASE_URL}/projects/slug/${slug}`);
  // const data = await res.json();
  // return data;
};

export const getAllEvents = async () => {
  return []
  // const res = await fetch(`${API_BASE_URL}/events`);
  // const data = await res.json();
  // return data;
};

export const getEventByUrlSlug = async (slug) => {
  return {}
  // const res = await fetch(`${API_BASE_URL}/events/slug/${slug}`);
  // const data = await res.json();
  // return data;
};

export const getEventById = async (id) => {
  return {}
  // const res = await fetch(`${API_BASE_URL}/events/${id}`);
  // const data = await res.json();
  // return data;
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
