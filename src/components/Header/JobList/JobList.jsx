import React from "react";
import JobCard from "../../JobCard/JobCard";
import "./JobList.css";

const JobList = (props) => {
    const {jobs} = props;
    
    
    // const [jobs, setJobs] = React.useState([{ "by": "shivsak", "id": 47955226, "score": 1, "time": 1777499457, "title": "Gooseworks (YC W23) Is Hiring a Founding Growth Engineer", "type": "job", "url": "https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer" },

    //     { "by": "shivsak", "id": 47955226, "score": 1, "time": 1777499457, "title": "Gooseworks (YC W23) Is Hiring a Founding Growth Engineer", "type": "job", "url": "https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer" },

    //     { "by": "shivsak", "id": 47955226, "score": 1, "time": 1777499457, "title": "Gooseworks (YC W23) Is Hiring a Founding Growth Engineer", "type": "job", "url": "https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer" },

    //     { "by": "shivsak", "id": 47955226, "score": 1, "time": 1777499457, "title": "Gooseworks (YC W23) Is Hiring a Founding Growth Engineer", "type": "job", "url": "https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer" },

    //     { "by": "shivsak", "id": 47955226, "score": 1, "time": 1777499457, "title": "Gooseworks (YC W23) Is Hiring a Founding Growth Engineer", "type": "job", "url": "https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer" },

    //     { "by": "shivsak", "id": 47955226, "score": 1, "time": 1777499457, "title": "Gooseworks (YC W23) Is Hiring a Founding Growth Engineer", "type": "job", "url": "https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer" },

    // ]);
    return (
        <>
            <div className="job-container">
                {
                    jobs.length > 0 && jobs.map((job) => {
                        return <JobCard job = {job}/>
                    })
                }
            </div>
        </>
    )
}

export default JobList;