import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/listings`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (listingData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listingData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (listingData) => {
  try {
    const res = await fetch(`${BASE_URL}/${listingData._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listingData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteListing = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${tokenService.getToken}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const addPhoto = async (photoData, listingId) => {
  try {
    const res = await fetch(`${BASE_URL}/${listingId}/add-photo`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken}`,
      },
      body: photoData,
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const createWorkRequest = async (id, workRequestData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/work-request`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workRequestData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  index, 
  show, 
  create, 
  update, 
  deleteListing as delete, 
  addPhoto, 
  createWorkRequest};
