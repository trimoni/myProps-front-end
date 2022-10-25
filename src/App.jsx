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
import AddListing from './pages/AddListing/AddListing'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as listingService from "./services/listingService"

// styles
import './App.css'
import EditListing from './pages/EditListing/EditListing'

const App = () => {
  const [listings, setListings] = useState([])
  const [tenants, setTenant] = useState([])
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

  useEffect(() => {
    const fetchAllListing = async () => {
      const data = await listingService.index()
      console.log(data);
    }
    fetchAllListing()
  })

  const handleAddListing = async (listingData) => {
    const newListing = await listingService.create(listingData)
    setListings([newListing, ...listings])
    navigate('/listings')
  }

  const handleUpdateListing = async (listingData) => {
    const updatedListing = await listingService.update (listingData)
    setListings(
      listings.map((listing) => (listingData._id === listing._id ? updatedListing : listing))
    )
    navigate('/listings')
  }

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
              <Listings />
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
              <AddListing />
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
      </Routes>
    </>
  )
}

export default App
