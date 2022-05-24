import { Field, Form, Formik } from "formik";
import React, { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import {
  useGetGiftQuery,
  useGetGiftsQuery,
  useUpdateGiftMutation,
} from "../services/giftApi";
import { useDropzone } from "react-dropzone";

const EditGift = () => {
  const navigate = useNavigate();
  const paramsId = useParams();
  const { id } = paramsId;
  const { data } = useGetGiftQuery(id);
  const { refetch } = useGetGiftsQuery();
  const [image, setImage] = useState([]);
  const [updateGift,] = useUpdateGiftMutation();

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImage((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
      console.log("el reader", reader);
    });

    console.log("acceptedFiles", acceptedFiles);
    console.log("rejectFiles", rejectFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".gif"],
    },
  });

  return (
    <>
      <Navbar />
      <div className="bg-secondary">
        <Formik
          initialValues={{
            title: data?.giftToSearch[0].title,
            gift: data?.giftToSearch[0].gift,
            user: data?.giftToSearch[0].user,
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            updateGift({ id,values });
            navigate(`/mygifts`)
            refetch()
          }}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <div className="container bg-secondary vh-100 pt-5 my-5">
              <div className="card-body mt-5 pt-5 bg-dark">
                <Form>
                  <h4 className="text-white text-center my-2">
                    Upload your Gift
                  </h4>
                  <div className="d-flex flex-column">
                    <label htmlFor="title" className="text-white my-3">
                      title
                    </label>
                    <Field type="text" name="title" />
                    <label htmlFor="gift" className="text-white my-3">
                      gift
                    </label>
                    <Field type="text" name="gift" />
                    <label htmlFor="user" className="text-white my-3">
                      user
                    </label>
                    <Field type="text" name="user" />
                    <div
                      className="dropzone text-light bg-secondary h-50 rounded mt-3 text-center py-4"
                      {...getRootProps()}
                    >
                      <input
                        className="t"
                        type="text"
                        placeholder="as"
                        {...getInputProps()}
                      />
                      {isDragActive ? "Drag active" : "You can drop your files"}
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-warning mt-3 btn-"
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
    </>
  );
};

export default EditGift;
