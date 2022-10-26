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
        'Authorization': `Bearer ${tokenService.getToken()}`,
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
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function addPhoto(photoData, listingId) {
  try {
    const res = await fetch(`${BASE_URL}/${listingId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const createWorkRequest = async (id, workRequestData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/workRequests`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workRequestData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

<<<<<<< HEAD
const updateWorkRequest = async (listingId, workRequestId, workRequestData) => {
  try {
    const res = await fetch(`${BASE_URL}/${listingId}/workRequests/${workRequestId}`, {
      method: 'put',
=======
const addTenantToListing = async (id, tenantId) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/tenants`, {
      method: 'POST',
>>>>>>> b8c2f9e222e2af3c1229ae9cc07aa282ee12215a
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
<<<<<<< HEAD
      body: JSON.stringify(workRequestData)
=======
      body: JSON.stringify({tenantId: tenantId}),
>>>>>>> b8c2f9e222e2af3c1229ae9cc07aa282ee12215a
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

<<<<<<< HEAD
export {
  index,
  show,
  create,
  update,
  deleteListing,
  addPhoto,
  createWorkRequest,
  updateWorkRequest
=======
export { 
  index, 
  show, 
  create, 
  update, 
  deleteListing, 
  addPhoto, 
  createWorkRequest,
  addTenantToListing
>>>>>>> b8c2f9e222e2af3c1229ae9cc07aa282ee12215a
};

