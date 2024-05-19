import React, { useContext } from 'react'
import AdminNavbar from "../../Components/AdminNavbar"
import { Formik,Form,Field} from 'formik'
import * as yup from 'yup';
import { FormDataContext } from '../../Context/BookContext';


const AdminForm = () => {
    
  const {handleSubmit}=useContext(FormDataContext);

  const handleFileChange = (event, setFieldValue) => {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () => {
      setFieldValue("image", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

   const validationSchema=yup.object({
    name:yup.string().required("name is not required"),
    Author:yup.string().required("Author is not required"),
    Category:yup.string().required("Category is not required"),
    PublishingDate:yup.date().required("date is not required"),
    Publisher:yup.string().required("Publisher is not required"),
    Pages:yup.number().required("not required").positive("enter positive number"),
    Summary:yup.string().required("summary is not required"),
    Language:yup.string().required("Language is not required"),
    Rate:yup.number().required("Rate is not required").positive("enter positive number"),
    Offer:yup.number().required("Offer is not required").positive("Enter positive number"),
    image:yup.mixed().required("image is not required")

   })
   const initialValues={
    name:"",
    Author:"",
    Category:"",
    PublishingDate:"",
    Publisher:"",
    Pages:"",
    Summary:"",
    Language:"",
    Rate:"",
    Offer:"",
    image:""
   }

    
  return (
    <div>
      <AdminNavbar/>
      <div className='w-full h-[600px]  flex justify-center items-center'>
           <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
           >
             {({ errors,touched,setFieldValue}) => (
            <Form>
              
            {/* main / ivde first */}
        <div className='w-[800px] h-[550px] bg-white flex'>
           {/* left section  */}
            <div className='w-[400px] h-[550px] bg-white flex flex-col justify-start items-center border shadow-lg'>
               <div className='w-[350px] h-[75px] bg-white flex flex-col mt-6'>
                <label htmlFor="" className='font-bold'>Book Name</label>
                <Field type="text" name="name" placeholder="enter name" className={`adminform_input`} />
                {errors.name && touched.name ? <div className='text-red-600'>{errors.name}</div> : null}
               </div>
               {/* Author  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Author</label>
                <Field type="text" name="Author" placeholder="enter name" className={`adminform_input`} />
                {errors.Author && touched.Author ? <div className='text-red-600'>{errors.Author}</div> : null}
               </div>
               {/* category  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Category</label>
                <Field type="text" name="Category" placeholder="enter name" className={`adminform_input`} />
                {errors.Category && touched.Category ? <div className='text-red-600'>{errors.Category}</div> : null}
               </div>
               {/* Publishing Date  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>PublishingDate</label>
                <Field type="date" name="PublishingDate" placeholder="enter name" className={`adminform_input`} />
                {errors.PublishingDate && touched.PublishingDate ? <div className='text-red-600'>{errors.PublishingDate}</div> : null}
               </div>
               {/* Publisher  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Publisher</label>
                <Field type="text" name="Publisher" placeholder="enter Publisher name" className={`adminform_input`} />
                {errors.Publisher && touched.Publisher ? <div className='text-red-600'>{errors.Publisher}</div> : null}
               </div>
               {/* Number of peges  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Number of pages</label>
                <Field type="number" name="Pages" placeholder="enter Publisher name" className={`adminform_input`} />
                {errors.Pages && touched.Pages ? <div className='text-red-600'>{errors.Pages}</div> : null}
               </div>
               

            </div>

            {/* right section  */}
            <div className='w-[400px] h-[550px] bg-white flex flex-col justify-start items-center shadow-lg'>
             {/* book summary  */}
            <div className='w-[350px] h-[80px] bg-white flex flex-col mt-6'>
                <label htmlFor="" className='font-bold'>Summary</label>
                <Field type="text" name="Summary" as="textarea" placeholder="enter summary...." className={`adminform_input`} />
                {errors.Summary && touched.Summary ? <div className='text-red-600'>{errors.Summary}</div> : null}
               </div>
               {/* Language  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Language</label>
                <Field type="text" name="Language" placeholder="enter Publisher name" className={`adminform_input`} />
                {errors.Language && touched.Language ? <div className='text-red-600'>{errors.Language}</div> : null}
               </div>
               {/* Rate  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Rate</label>
                <Field type="number" name="Rate" placeholder="enter Publisher name" className={`adminform_input`} />
                {errors.Rate && touched.Rate ? <div className='text-red-600'>{errors.Rate}</div> : null}
               </div>
                {/* Offer  */}
                <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>Offer</label>
                <Field type="number" name="Offer" placeholder="enter Publisher name" className={`adminform_input`} />
                {errors.Offer && touched.Offer ? <div className='text-red-600'>{errors.Offer}</div> : null}
               </div>
               {/* image  */}
               <div className='w-[350px] h-[75px] bg-white flex flex-col'>
                <label htmlFor="" className='font-bold'>image</label>
               < input 
                      type="file" 
                      name="image" 
                      className='adminform_input' 
                      onChange={(event) => handleFileChange(event, setFieldValue)} 
                    />
                {errors.image && touched.image ? <div className='text-red-600'>{errors.image}</div> : null}
               </div>
               <div className='w-[350px] h-[75px]  flex justify-start items-center'>
                <button type='submit' className='w-[300px] h-[40px] bg-teal-900 border-1 rounded-3xl text-white font-semibold '>Submit</button>
                </div>

            </div>
            
        </div>
     
        </Form>
         )}
        </Formik>
      </div>
    </div>
  )
}

export default AdminForm
