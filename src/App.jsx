// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Listings from './pages/Listings/Listings'
import TenantList from './pages/TenantList/TenantList'
import EditListing from './pages/EditListing/EditListing'
import WorkRequestList from './pages/WorkRequestList/WorkRequestList'
import AddListing from './pages/AddListing/AddListing'
import AddWorkRequest from './pages/AddWorkRequest/AddWorkRequest'
import AddTenant from './pages/AddTenant/AddTenant'
import EditTenant from './pages/EditTenant/EditTenant'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as listingService from "./services/listingService"
import * as tenantsService from "./services/tenantsService"
import * as profileService from "./services/profileService"




const App = () => {
  const [listings, setListings] = useState([])
  const [tenants, setTenants] = useState([])
  const [workRequests, setWorkRequest] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  //Logout
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  //Signup
  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }
  //Add a Work Request
  const handleAddWorkRequest = async (id, workRequestData) => {
    const newWorkRequest = await listingService.createWorkRequest(id, workRequestData)

    setWorkRequest([newWorkRequest, ...workRequests])
    navigate('/listings')
  }

  //Add a Tenant
  const handleAddTenant = async (tenantData) => {
    const newTenant = await tenantsService.create(tenantData)
    setTenants([newTenant, ...tenants])
    navigate('/tenants')
  }

  const handleUpdateTenant = async (tenantData) => {
    const updatedTenant = await tenantsService.update(tenantData)
    setTenants(tenants.map((b) => tenantData._id === b._id ? updatedTenant : b))
    navigate('/tenants')
  }

  //Get all of my listings and tenants
  useEffect(() => {
    const fetchAllListing = async () => {
      const listingData = await profileService.showMyListing(user.profile)
      setListings(listingData)
    }
    const fetchAllTenants = async () => {
      const tenantData = await profileService.showMyTenants(user.profile)
      setTenants(tenantData)
    }
    if (user)
      fetchAllListing()
    fetchAllTenants()

  }, [user])

  //Add a Listing
  const handleAddListing = async (listingData, photos) => {
    const newListing = await listingService.create(listingData)
    if (photos) {
      newListing.photos = await listingPhotoHelper(photos, newListing._id)
    }
    setListings([...listings, newListing])
    navigate('/listings')
  }

  //Update a Listing
  const handleUpdateListing = async (listingData, photos) => {
    const updatedListing = await listingService.update (listingData)
    if (photos) {
      console.log("THIS IS UPDATED LISTING", updatedListing._id);
      updatedListing.photos = await listingPhotoHelper(photos, updatedListing._id)
    }
    setListings(
      listings.map((listing) => (listingData._id === listing._id ? updatedListing : listing))
    )
    navigate('/listings')
  }

  //Delete a Listing
  const handleDeleteListing = async (id) => {
    const deletedListing = await listingService.deleteListing(id)
    console.log('DELETED', deletedListing)
    setListings(listings.filter(listing => listing._id !== deletedListing._id))
    navigate('/listings')
  }

  //Delete Tenant
  const handleDeleteTenant = async (id) => {
    const deletedTenant = await tenantsService.deleteTenant(id)
    setTenants(tenants.filter(tenant => tenant._id !== deletedTenant._id))
  }

  //Add a Photo
  const listingPhotoHelper = async (photos, id) => {
    const photoData = new FormData()
    Array.from(photos).forEach(photo => {
      photoData.append('photos', photo)
    })
    return await listingService.addPhoto(photoData, id)
  }

  //Add Tenant to Listing
  const addTenantToListing = async (id, tenantData) => {
    console.log(id, "id");
    console.log(tenantData, "THIS TENANT DATA");
    const tenantD = await listingService.addTenantToListing(id, tenantData)
    console.log(tenantD, "this is the tenant");
    navigate("/listings")
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/listings"
          element={
            <ProtectedRoute user={user}>
              <Listings
                listings={listings}
                setListings={setListings}
                user={user}
                handleDeleteListing={handleDeleteListing}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/workRequests'
          element={
            <ProtectedRoute user={user}>
              <WorkRequestList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/listings/:id/workRequests'
          element={
            <ProtectedRoute user={user}>
              <AddWorkRequest
                listings={listings}
                handleAddWorkRequest={handleAddWorkRequest}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tenants"
          element={
            <ProtectedRoute user={user}>
              <TenantList 
                tenants={tenants} 
                handleDeleteTenant={handleDeleteTenant} 
              />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-listing"
          element={
            <ProtectedRoute user={user}>
              <AddListing handleAddListing={handleAddListing} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditListing handleDeleteListing={handleDeleteListing} 
              handleUpdateListing={handleUpdateListing}
              addTenantToListing={addTenantToListing}
              tenants={tenants}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-tenant"
          element={
            <ProtectedRoute user={user}>
              <AddTenant handleAddTenant={handleAddTenant} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tenants/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditTenant handleUpdateTenant={handleUpdateTenant} handleDeleteListing={handleDeleteListing} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}
export default App
