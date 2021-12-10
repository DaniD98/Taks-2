import React from 'react';

//Create a React component MedicalTreatment.js , add  attributes using the props parameters

export default function MedicalTreatment(props){
    return (
        <div>
            {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} 
        </div>
    )
}




