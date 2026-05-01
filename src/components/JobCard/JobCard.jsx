import React from "react";
import "./JobCard.css";

const JobCard = (props) => {
    const job = props.job;
    const parseJob = (job) => {
        const title = job.title;
        const titleParts = title.split("Is");
        const company = titleParts[0].trim();
        const description = "Is" + titleParts[1].trim();
        return {
            company: company,
            description: description,
            time: new Date(job.time * 1000).toLocaleDateString()
        }
    }
    const parsedJob = parseJob(job);
    return (
        <>
            <div className="job-card" style={{display:"flex", flexDirection: "column", textAlign: "center"}}>
                <h2>{parsedJob.company}</h2>
                <p>{parsedJob.description}</p>
                <p>{parsedJob.time}</p>
            </div>
        </>
    )
}

export default JobCard; 