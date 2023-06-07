import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { signUpWithEmailAndPassword } from '../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import registerSchema from './yupSchemas/registerSchema'
import { useCreateUserMutation } from '../services/userApi'
import { fetchProvinces } from '../utils/fetchLocations'

const Register = () => {
  const navigate = useNavigate()
  const [locations, setLocations] = useState([])
  const [createUser] = useCreateUserMutation()

  useEffect(() => {
    setLocations(fetchProvinces())
    console.log(locations)
  }, [])
  const submitForm = async (values) => {

    const { userName, email, password ,postalCode,province, location} = values
    try {
      await signUpWithEmailAndPassword(userName, email, password )
      await createUser({ userName, email, password ,postalCode,province, location})
      navigate('/')
    } catch (error) {
      throw  new Error(error)
    }
  }  

  return (
    <section className='container-fluid py-4 h-100 bg-secondary'>
      <Formik
        initialValues={{ userName: '', email: '', password: '' ,postalCode:'',province:'', location:''}}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          submitForm(values)
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
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-warning-50 mb-3">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-3">
                      <label className="form-label text-warning" htmlFor="typeEmailX">User name</label>
                      <input
                        type="text"
                        id="typeUserName"
                        className="form-control form-control-lg bg-secondary  btn-outline-warning"
                        name='userName'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                        placeholder='your user name'
                      />
                      {errors.userName && touched.userName && errors.userName
                        ? <div className='text-danger mt-2'>{errors.userName}</div>
                        : null}
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-warning" htmlFor="typeEmailX">Email</label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg bg-secondary  btn-outline-warning"
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='name@company.com'
                      />
                      {errors.email && touched.email && errors.email
                        ? <div className='text-danger mt-2'>{errors.email}</div>
                        : null}
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-warning" htmlFor="typePasswordX">Password</label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg bg-secondary  btn-outline-warning"
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder='••••••••'
                      />
                      {errors.password && touched.password && errors.password
                        ? <div className='text-danger mt-2'>{errors.password}</div>
                        : null}
                    </div>
                    <div className="row">
                      <div className="col form-outline form-white mb-4">
                        <label className="form-label text-warning" htmlFor="typePostalCode">Postal Code</label>
                        <input
                          type="number"
                          id="typePostalCode"
                          className="form-control form-control-lg bg-secondary  btn-outline-warning"
                          name='postalCode'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.postalCode}
                          placeholder='name@company.com'
                        />
                        {errors.postalCode && touched.postalCode && errors.postalCode
                          ? <div className='text-danger mt-2'>{errors.postalCode}</div>
                          : null}
                      </div>
                      <div className="col form-outline form-white mb-4">
                        <label className="form-label text-warning" htmlFor="typeProvince">Province</label>
                        <input
                          type="province"
                          id="typeProvince"
                          className="form-control form-control-lg bg-secondary  btn-outline-warning"
                          name='province'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.province}
                          placeholder='name@company.com'
                        />
                        {errors.province && touched.province && errors.province
                          ? <div className='text-danger mt-2'>{errors.province}</div>
                          : null}
                      </div>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-warning" htmlFor="typeLocality">Locality</label>
                      <input
                        type="locality"
                        id="typeLocality"
                        className="form-control form-control-lg bg-secondary  btn-outline-warning"
                        name='locality'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.locality}
                        placeholder='name@company.com'
                      />
                      {errors.locality && touched.locality && errors.locality
                        ? <div className='text-danger mt-2'>{errors.locality}</div>
                        : null}
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
                      Register
                    </button>
                  </div>
                  <div>
                    <p className="mb-0">Do have an account? 
                      <Link to='/login' className='text-warning-50 fw-bold'> Login </Link>
                    </p>
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

export default Register
