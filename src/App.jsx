// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

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
    navigate('/workRequests')
  }
  
  //Add a Tenant
  const handleAddTenant = async (tenantData) => {
    const newTenant = await tenantsService.create(tenantData)
    setTenants([newTenant, ...tenants])
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
    if(user) 
    fetchAllListing()
    fetchAllTenants()
    
  },[user])

  //Add a Listing
  const handleAddListing = async (listingData) => {
    const newListing = await listingService.create(listingData)
    setListings([newListing, ...listings])
    navigate('/listings')
  }

  //Update a Listing
  const handleUpdateListing = async (listingData) => {
    const updatedListing = await listingService.update (listingData)
    setListings(
      listings.map((listing) => (listingData._id === listing._id ? updatedListing : listing))
    )
    navigate('/listings')
  }

  //Delete a Listing
  const handleDeleteListings = async (id) => {
    const deletedListing = await listingService.deleteListing(id)
    setListings(listings.filter(listing => listing._id !== deletedListing._id))
    navigate('/listings')
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
                user={user}
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
          path='/workRequests/new'
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
              <TenantList tenants={tenants} />
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
              <AddListing handleAddListing={handleAddListing}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/listing/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditListing />
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
      </Routes>
    </>
  )
}
export default App
