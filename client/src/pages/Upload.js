import React, { useState, useCallback } from 'react'
import { Formik } from 'formik'
import Navbar from '../components/navbar'
import { useDropzone } from 'react-dropzone'
import { useCreateGiftMutation, useGetGiftsQuery } from '../services/giftApi'
import { Link, useNavigate } from 'react-router-dom'
import uploadSchema from './yupSchemas/UploadSchema copy'

function Upload() {
  const [image, setImage] = useState([])
  const [createGift] = useCreateGiftMutation()
  // const navigate = useNavigate()
  // const {  refetch } = useGetGiftsQuery()

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        setImage((prevState) => [...prevState, reader.result])
      }
      reader.readAsDataURL(file)
      console.log('el reader', reader)
      console.log('el image', image)
    })

    console.log('acceptedFiles', acceptedFiles)
    console.log('rejectFiles', rejectFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:''
  })
  const handleSubmit  =  (values) => {
    console.log(values,image)
    createGift(values,image)
  }
  return (
    <section className='container-fluid py-4 h-100 bg-secondary'>
      <Formik
        initialValues={{ title: '', url: ''}}
        validationSchema={uploadSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className='row d-flex justify-content-center align-items-center h-100'>          
            <form className="col-12 col-md-8 col-lg-6 col-xl-5 mt-5" onSubmit={handleSubmit}>
              <div className="card bg-dark text-warning" style={{ borderRadius: '1rem' }}>
                <div className="card-body px-5  text-center">
                  <div className="mb-md-3 mt-md-2 pb-3">
                    <p className="text-warning-50 mb-3">
                      Enter url and title of the gift to be uploaded!!
                    </p>
                    <div className="form-outline form-white mb-3">
                      <label className="form-label text-warning" htmlFor="typeEmailX">Title</label>
                      <input
                        type="text"
                        id="typetitle"
                        className="form-control form-control-lg bg-secondary  btn-outline-warning"
                        name='title'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        placeholder='your user name'
                      />
                      {errors.title && touched.title && errors.title
                        ? <div className='text-danger mt-2'>{errors.title}</div>
                        : null}
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-warning" htmlFor="typeEmailX">Url</label>
                      <input
                        type="url"
                        id="typeEmailX"
                        className="form-control form-control-lg bg-secondary  btn-outline-warning"
                        name='url'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.url}
                        placeholder='name@company.com'
                      />
                      {errors.url && touched.url && errors.url
                        ? <div className='text-danger mt-2'>{errors.url}</div>
                        : null}
                    </div>
                    <div
                      className="dropzone text-warning bg-secondary h-50 rounded mt-3 text-center py-4 my-3 btn-outline-warning"
                      {...getRootProps()}
                    >
                      <input
                        className="t"
                        type="text"
                        placeholder="as"
                        {...getInputProps()}
                      />
                      {isDragActive ? 'Drag active' : 'You can drop your files'}
                    </div>
                    <button 
                      className="btn btn-outline-warning  btn-md px-5" 
                      type="submit"
                      onMouseOver={(e) => {
                        e.target.style.color = '#000000'
                        e.target.style.backgroundColor = '#c79100'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = '#ffc107'
                        e.target.style.backgroundColor = 'transparent'
                      }}
                    >
                    Upload
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </section>            
  )
}

export default Upload
