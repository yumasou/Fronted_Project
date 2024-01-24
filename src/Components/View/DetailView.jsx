import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Base_URL } from "../../Api";
import Loading from "../Layout/Loading";
import { fetchItem } from "../counter/ItemSlice";
function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = useSelector((state) => state.items.data);
  useEffect(() => {
    dispatch(fetchItem(`${Base_URL}/${parseInt(id)}`));
  }, [id]);

  return item ? (
    <div className=" mx-10 my-10 flex justify-center items-start ">
      <div className=""></div>
      <div>
        <h3>{item.title}</h3>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default DetailView;
