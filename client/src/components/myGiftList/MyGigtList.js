import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetGiftsQuery,
  // useGetGiftQuery,
  useCreateGiftMutation,
  useDeleteGiftMutation,
  useUpdateGiftMutation,
} from "../../services/giftApi";

const MyGigtList = () => {
  const navigate = useNavigate();
  const { data, isSuccess,refetch } = useGetGiftsQuery();
  const [createGift, createGifActionResponse] = useCreateGiftMutation();
  const [deleteGift, deleteGiftActionResponse] = useDeleteGiftMutation();
  const [updateGift, updateGiftActionResponse] = useUpdateGiftMutation();

  const handleGetAllUser = () => {
    // dispatch(getAllUser());
  };

  const handleDeleteOneUser = (id) => {
    deleteGift(id);
    refetch()
  };

  const handleEditUser = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <div className="container mt-5">
      <div className="row ">
        {isSuccess
          ? data.data.map((gift) => {
              return (
                <div key={gift._id} className="col-md-8 mt-5">
                  <div className="card my-2">
                    <img src={gift.gift} alt="avatar" />
                    <div className="card-body">
                      <h5 className="card-title">{gift.title}</h5>
                      <p className="card-text"> {gift.email} </p>
                    </div>
                    <div className="container">
                      <button
                        onClick={() => handleDeleteOneUser(gift._id)}
                        className="btn btn-warning mb-2"
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary mb-2 mx-2"
                        onClick={() => handleEditUser(gift.id)}
                      >
                        edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MyGigtList;
