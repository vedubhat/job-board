import React from "react";
import "./Loader.css";
import LoadContext from "../../context/loadContext";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import axios from "axios";

const Loader = (props) => {  
    const {loadCount, setLoadCount} = useContext(LoadContext)
    const {jobs, setJobs} = useContext(JobContext)
    const {jobIds} = props;
    let c = 0;
    const handleClick = async () => {
       try {
        const requests = jobIds
            .slice(loadCount, loadCount + 6)
            .map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

        const responses = await Promise.all(requests);
        const newJobs = responses.map(res => res.data);

        setJobs(prev => [...prev, ...newJobs]);
        setLoadCount(prev => prev + 6);
    } catch (error) {
        console.log("Error fetching jobs", error);
    }

    }
    return (
        <>
            <div className="Loader" style={{width: "80vw", height: "10vh", margin: "2rem auto", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <button onClick={handleClick}>Load more</button>
            </div>
        </>
    )
}

export default Loader;