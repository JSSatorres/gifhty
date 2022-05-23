import React from "react";
import { Formik, Form, Field } from "formik";
import Navbar from "../components/navbar";

function Upload() {
  return (
    <div>
      <Navbar />
      <div className="container  mt-5 pt-5 w-100">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            avatar: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            // mutation.mutate(values)
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <div className="container te">
              <div className="card-body mt-5 pt-5 bg-dark">
                <Form>
                  <h4 className="text-white text-center my-2">
                    Upload your Gift
                  </h4>
                  <div className="d-flex flex-column">
                    <label htmlFor="first_name" className="text-white my-3">
                      title
                    </label>
                    <Field type="text" name="title" />
                    <label htmlFor="last_name" className="text-white my-3">
                      gift
                    </label>
                    <Field type="text" name="gift" />
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-warning mt-3 btn-"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Upload;
