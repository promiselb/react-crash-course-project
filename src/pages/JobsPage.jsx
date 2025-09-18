import { useEffect } from "react"
import JobsListings from "../components/JobsListings"

const JobsPage = () => {
  useEffect( () => {
        document.title = 'React Crash | Jobs'
    })
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobsListings />
    </section>
  )
}

export default JobsPage