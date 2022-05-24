import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetGiftsQuery,
  useDeleteGiftMutation,
} from "../../services/giftApi";

const MyGigtList = () => {
  const navigate = useNavigate();
  const { data, isSuccess, refetch } = useGetGiftsQuery();
  const [deleteGift] = useDeleteGiftMutation();


  const handleDeleteOneGift = (id) => {
    deleteGift(id);
    refetch();
  };

  const handleEditGift = (id) => {
    navigate(`/editgift/${id}`);
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
                        onClick={() => handleDeleteOneGift(gift._id)}
                        className="btn btn-warning mb-2"
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary mb-2 mx-2"
                        onClick={() => handleEditGift(gift._id)}
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
