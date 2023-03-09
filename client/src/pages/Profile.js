import React from 'react'
import Navbar from '../components/navbar'
const Profile = () => {
  return (
    <div>
      <Navbar />

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="d-flex text-black col-4">
                    <div className="flex-shrink-0 col-6">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder"
                        className="img-fluid img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3 col-8">
                      <h5 className="mb-1">Danny McLoan</h5>
                      <p className="mb-2 pb-1">Senior Journalist</p>
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                        <div>
                          <p className="small text-muted mb-1">Articles</p>
                          <p className="mb-0">41</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 flex-grow-1"
                        >
                          Chat
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary flex-grow-1"
                        >
                          Follow
                        </button>
                      </div>
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
