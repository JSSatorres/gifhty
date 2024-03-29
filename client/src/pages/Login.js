import React from 'react'
import { Formik } from 'formik'
import { signInWithEmailAndPasswordFun } from '../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import loginSchema from './yupSchemas/loginSchema'
import UiButton from '../components/ui/UiButton'

const Login = () => {
  const navigate = useNavigate()

  const submitForm = async ({ email, password }) => {
    try {
      await signInWithEmailAndPasswordFun( email, password )
      navigate('/')
    } catch (error) {
      throw  new Error(error)
    }
  }

  return (
    <section className='container-fluid py-5 h-100 bg-secondary'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
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
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-warning-50 mb-3">Please enter your login and password!</p>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label text-warning" htmlFor="typeEmailX">Email</label>
                      <input
                        type="email"
                        data-testid="typeEmailX"
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
                        data-testid="typePasswordX"
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
                    <p className="small mb-3 pb-lg-2"><a className="text-warning-50" href="#!">Forgot password?</a></p>
                    <UiButton>Login</UiButton>
                  </div>
                  <div>
                    <p className="mb-0">Do not have an account? 
                      <Link to='/register' className='text-warning-50 fw-bold'> Register </Link>
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

export default Login
