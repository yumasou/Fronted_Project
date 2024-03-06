import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { Base_URL } from "../../Api";
import Loading from "../Layout/Loading";
import { fetchItem } from "../counter/ItemSlice";
import Slider from "../Layout/Slider";
import { fetchSameCat } from "../counter/SameCatSlice";
function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = useSelector((state) => state.items.data);
  const [sameItem, setSameItem] = useState([]);
  const similar_item = useSelector((state) => state.sameCat.data.products);

  useEffect(() => {
    dispatch(fetchItem(`${Base_URL}/${parseInt(id)}`));
  }, [id]);

  const [images, setimages] = useState([]);
  useEffect(() => {
    if (Object.keys(item).length > 0) {
      const temp = item.images.map((m) => {
        return { original: m, thumbnail: m };
      });
      setimages([...temp]);
      dispatch(fetchSameCat(`${Base_URL}/category/${item.category}`));
    } else setimages([]);
  }, [item]);

  useEffect(() => {
    similar_item ? setSameItem([...similar_item]) : setSameItem([]);
  }, [similar_item]);

  return item ? (
    <div className="">
      <div className=" my-10 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div className="bg-white box-border  rounded shadow-sm">
          <ImageGallery items={images} />
        </div>
        <div className="*:my-3  *:mx-3  ">
          <h3 className="font-bold text-slate-700">{item.title}</h3>
          <p className="text-slate-700 text-sm my-2">{item.description}</p>
          <span className="block text-slate-700 ">
            <span>Brand:</span>
            {item.brand}
          </span>
          <span className="block text-slate-700">
            <span>Rating:</span>
            {item.rating}
          </span>
          <span>
            <span className="font-semibold  text-slate-700">Price:</span>
            <span className="inline-block mx-1 font-semibold ">
              {item.price - (item.discountPercentage / 100) * item.price}
            </span>

            <span className="line-through text-xs inline-block mx-1 text-slate-700">
              {item.price}
            </span>
          </span>
          <span className="block text-slate-700">
            <span className="font-semibold">Discount:</span>
            <span className="inline-block mx-1 font-semibold">{item.discountPercentage} %</span>
          </span>

          <span className="block  text-slate-700">
            <span className="font-semibold" >Stock:</span>
            <span className="inline-block mx-1 font-semibold">{item.stock}</span>            
          </span>
          <div className="text-red-500">**** Maintenaning ***</div>
        </div>
      </div>
      <span className="block my-3">
        <span className="mx-10 text-lg text-slate-700 ">Similar Products</span>
        <hr className="mx-10 shadow-lg" />
      </span>
      {sameItem.length > 0 ? <Slider list={sameItem} /> : <Loading />}
    </div>
  ) : (
    <Loading />
  );
}

export default DetailView;
