// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Listings from './pages/Listings/Listings'
import TenantList from './pages/TenantList/TenantList'
import WorkRequestList from './pages/WorkRequestList/WorkRequestList'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as listingService from "./services/listingService"
import * as tenantsService from "./services/tenantsService"

// styles
import './App.css'
import AddWorkRequest from './pages/AddWorkRequest/AddWorkRequest'
import AddTenant from './pages/AddTenant/AddTenant'

const App = () => {
  const [listing, setListing] = useState([])
  const [tenants, setTenant] = useState([])
  const [workRequests, setWorkRequest] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddWorkRequest = async (id, workRequestData) => {
    const newWorkRequest = await listingService.createWorkRequest(id, workRequestData)
    setWorkRequest([newWorkRequest, ...workRequests])
    navigate('/workRequests')
  }
  const handleAddTenant = async (tenantData) => {
    const newTenant = await tenantsService.create(tenantData)
    setTenant([newTenant, ...tenants])
    navigate('/tenants')
  }

  useEffect(() => {
    const fetchAllListing = async () => {
      const data = await listingService.index()
      setListing(data)
    }
    if(user) fetchAllListing()
  },[user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/listings"
          element={
            <ProtectedRoute user={user}>
              <Listings 
                listing={listing}
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
                listing={listing}
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
