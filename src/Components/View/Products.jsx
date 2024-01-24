import React, { useEffect, useState } from "react";
import { Base_URL } from "../../Api";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../counter/ProductSlice";
import Card from "../Layout/Card";
import PageBar from "../Layout/PageBar";
import { set_last_page } from "../counter/PageSlice";
import Loading from "../Layout/Loading";
function Products() {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const current_page = useSelector((state) => state.pages.current_page);
  useEffect(() => {
    dispatch(
      fetchServices(
        `${Base_URL}?limit=20&skip=${parseInt(
          current_page ? (current_page - 1) * 20 : 0
        )}`
      )
    );
    
  }, [current_page, dispatch]);
  useEffect(() => {
    dispatch(set_last_page(Math.ceil(products.data.total / 20)));
    setdata(products.data.products);
  }, [products, current_page]);
  
  return products.loading === "done" ? (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 mt-10 ">
        {data &&
          data.map((m) => (
            <Card key={m.id}
              id={m.id}
              title={m.title}
              image={m.thumbnail}
              description={m.description}
              price={m.price}
              discount={m.discountPercentage}
              stock={m.stock}
            />
          ))}
      </div>
      <PageBar />
    </div>
  ) : <Loading/>
}

export default Products;
