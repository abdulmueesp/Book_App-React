import React, { createContext, useEffect, useState } from 'react'
import AdminForm from '../Pages/Admin/AdminForm';
import AdminBooks from '../Components/AdminBooks';


   export const FormDataContext=createContext();


const BookContext = ({children}) => {
     
    const [formData,setFormData]=useState([]);

    useEffect(()=>{
        const StoredData=JSON.parse(localStorage.getItem('formData'))||[];
        setFormData(StoredData);
        console.log("useeffect working");
    },[]);
       
    const handleSubmit=(values,{resetForm})=>{
        const newFormData=[...formData,values]
        setFormData(newFormData);
        localStorage.setItem('formData',JSON.stringify(newFormData));
        resetForm();

        
    }


  return (
   <FormDataContext.Provider value={{formData,handleSubmit}}>
    {children}

   </FormDataContext.Provider>
  )
}

export default BookContext
