import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Services
import * as tenantsService from '../../services/tenantsService'

const TenantDetails = (props) => {
  const { id } = useParams()
  const [tenant, setTenant] = useState(null)

  useEffect(() => {
    const fetchTenant = async () => {
      const data = await tenantsService.show(id)
      setTenant(data)
    }
    fetchTenant()
  }, [id])

  // Verify state with a console.log or React Dev Tools:
  console.log('Tenant State:', tenant)

  return (
    <main>
      Details
    </main>
  )
}

export default TenantDetails