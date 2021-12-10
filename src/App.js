import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {

  const medicalTreatmentListAsJson =
  '[ {"treatId": "120", "treatCourseId":"59675", "type": "Chemotherapy", "category": "Cancer Treatment", "name": "Matthew Jones", "startDate": "02/06/2021"} ,' +
    '{"treatId": "650", "treatCourseId":"67621", "type": "Dialysis", "category": "Kidney Failure", "name": "Lisa Brown", "startDate": "12/01/2021"} ,' +
    '{"treatId": "404", "treatCourseId":"19875", "type": "Psychotherapy", "category": "Mental Illness", "name": "Chin Lu Ming", "startDate": "12/04/2021"} ,' +
    '{"treatId": "405", "treatCourseId":"22675", "type": "Radiation Therapy", "category": "Cancer Treatment", "name": "Cheftu Okunkwa", "startDate": "17/11/2021"} ,' +
    '{"treatId": "406", "treatCourseId":"36521", "type": "Physiotherapy", "category": "Spine", "name": "Ryan Kip", "startDate": "12/04/2021"}]';

return (
    <div>
        <MedicalTreatmentList json={medicalTreatmentListAsJson} />
    </div>
  );
}

/*
import React from "react";
import "./style.css";
import Products from './Products';
export default function App() {
  const productsAsJson = 

  '[{"id":1, "name":"Ford", "type":"classic"},' +
  '{"id":2, "name":"BMW", "type":"sport"},' +
  '{"id":3, "name":"Triumph", "type":"sport"},' +
  '{"id":4, "name":"Tesla", "type":"electric"}]';
  
  return (
    <div>
       <Products json={productsAsJson} typeFilter = "sport"/>
    </div>
  );
}
*/



/*
import React from 'react'; // imports react library
import './style.css'; // controls styling of page
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentList from "./MedicalTreatmentList";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";

// one instance of the MedicalTreatment component to display a treatment record
export default function App() {
  return (
    <div>
      <h1>Medical Treatment</h1>
      <MedicalTreatment treatId = "100" treatCourseId = "67675" type = "Breast Cancer" category = "Cancer Treatment" name = "Simone Dod" startDate = '12/12/2021'/>
      <MedicalTreatmentList/>
      <MedicalTreatmentPanel/>
    </div>
  )
}

*/