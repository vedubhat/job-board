import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import JobList from './components/Header/JobList/JobList'
import JobCard from './components/JobCard/JobCard'
import Loader from './components/Loader/Loader'
import { useEffect } from 'react'
import axios from 'axios'
import { LoadProvider } from './providers/LoadProvider'
import { JobProvider } from './providers/JobProvider'
import { JobContext } from './context/JobContext'

function App() {
  const [jobIds, setJobIds] = useState([]);
  const { jobs, setJobs } = useContext(JobContext)
  useEffect(() => {
    const fetchJobIds = async () => {
      const res = await axios.get("https://hacker-news.firebaseio.com/v0/jobstories.json");
      setJobIds(res.data);
    }
    fetchJobIds();
  }, [])

  useEffect(() => {
    const promises = jobIds.slice(0, 9).map((id) => {
      return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    })
    Promise.all(promises).then((res) => {
      setJobs(res.map((r) => r.data));
    })
  }, [jobIds])
  return (
    <>
      <Header />
      <JobList jobs={jobs} />
      <Loader jobIds = {jobIds}/>

    </>
  )
}

export default App
