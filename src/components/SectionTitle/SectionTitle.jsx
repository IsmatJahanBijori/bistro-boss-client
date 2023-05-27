/* eslint-disable react/prop-types */
import React from 'react';


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p style={{fontWeight: "400", fontSize: "20px", color: "#D99904"}}>---{subHeading}---</p>
            <h3 style={{fontWeight: "400", fontSize: "40px"}}>{heading}</h3>
        </div>
    );
};

export default SectionTitle;