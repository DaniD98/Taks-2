import React from 'react';
import MedicalTreatment from './MedicalTreatment';

function MedicalTreatmentList(props){
  const medicalTreatmentListJ  = props.json;
  const medicaltreatmentlist = JSON.parse(medicalTreatmentListJ);
  const ListMedicalTreatmentList = medicaltreatmentlist.map((medicalTreatment)=>

  <li>
    <MedicalTreatment treatId={medicalTreatment.treatId} treatCourseId= {medicalTreatment.treatCourseId} type={medicalTreatment.type} category={medicalTreatment.category} name={medicalTreatment.name} startDate={medicalTreatment.startDate} />
  </li>);

  return(
    <ul>
        {ListMedicalTreatmentList}
    </ul>
    
  );
}




export default MedicalTreatmentList;


function MedicalTreatmentList(props){
  const medicalTreatmentListJ  = props.json;

  const categoryFilter = props.categoryFilter;
  const products = JSON.parse(productsJ);
  //filter functionality
  const categoryFiltered 
      = category.filter(category=>{
    return category.type == categoryFilter;
  })
  //following conversion back to JSON string merely
  //in order to render it. So ignore in terms of
  //raw filter functionality
  const categoryFilteredAsString 
    = JSON.stringify(productsFiltered);
  return (
    <ul>
      {categoryFilteredAsString}
    </ul>
  );
}
export default Products;



/*
import React  from 'react';
import Product from './Product';

function Products(props){
  const productsJ = props.json;
  const typeFilter = props.typeFilter;
  const products = JSON.parse(productsJ);
  //filter functionality
  const productsFiltered 
      = products.filter(product=>{
    return product.type == typeFilter;
  })
  //following conversion back to JSON string merely
  //in order to render it. So ignore in terms of
  //raw filter functionality
  const productsFilteredAsString 
    = JSON.stringify(productsFiltered);
  return (
    <ul>
      {productsFilteredAsString}
    </ul>
  );
}
export default Products;

*/