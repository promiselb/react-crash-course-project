
import { useEffect } from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards.jsx';
import JobsListings from '../components/JobsListings.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const HomePage = () => {
  useEffect( () => {
        document.title = 'React Crash'
    })
  return (
    <>
        <Hero />
        <HomeCards  />
        <JobsListings isHome={true}/>
        <ViewAllJobs />    
    </>
  )
}

export default HomePage