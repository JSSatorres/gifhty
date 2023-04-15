import React, { useState } from 'react'
import Navbar from '../components/navbar'
import UiButton from '../components/ui/UiButton'

const Profile = () => {
  const [name, setName] = useState('Danny McLoan')
  const [emil, setEmail] = useState('Danny McLoan')
  // const [name, setName] = useState('Danny McLoan')
  // const [name, setName] = useState('Danny McLoan')
  const handleNombreBlur = (event) => {
    console.log('oliii')
    setName(event.target.textContent)
  }
  return (
    <div>
      <Navbar />

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-4">
                  <div className="flex-grow-1 ms-3 col-8">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder"
                      className="img-fluid img-thumbnail"
                    />
                    <h5 
                      className="my-2 "
                      contentEditable={true}
                      onBlur={handleNombreBlur}
                    >
                      {name}
                    </h5>
                    <p
                      className="my-1 pb-1"
                      contentEditable={true}
                      onBlur={handleNombreBlur}
                    >
                      Senior Journalist
                    </p>

                    <div className="d-flex pt-1">
                      <UiButton  func={handleNombreBlur}>
                          Edit
                      </UiButton>
                      <UiButton  func={handleNombreBlur}>
                          Save
                      </UiButton>
                       
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
