import React from "react";
import "./Loader.css";

const Loader = () => {  
    return (
        <>
            <div className="Loader" style={{width: "80vw", height: "10vh", margin: "2rem auto", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <button>Load more</button>
            </div>
        </>
    )
}

export default Loader;