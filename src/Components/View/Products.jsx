import React, { useEffect, useState } from "react";
import { Base_URL } from "../../Api";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../counter/ProductSlice";
import Card from "../Layout/Card";
import PageBar from "../Layout/PageBar";
import { set_last_page } from "../counter/PageSlice";
import Loading from "../Layout/Loading";
import {motion, AnimatePresence } from "framer-motion";
import { fetchCatType } from "../counter/CatTypeSlice";
import SecondHeader from "../Layout/SecondHeader";
function Products() {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const current_page = useSelector((state) => state.pages.current_page);
  

  useEffect(() => {
    dispatch(fetchCatType(`${Base_URL}/categories`));
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
    <AnimatePresence>
      <div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{type:"spring",damping:10, when:"beforeChildren",staggerChildren:0.1 }}
      className="my-10 ">
        <span className="flex justify-between">
          <span className="mx-10 text-lg text-slate-600 "> Products</span>
          <SecondHeader />
        </span>
        <hr className="mx-10 shadow-lg" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10 mt-10 ">
          {data &&
            data.map((m,index) => (
              <Card
                key={m.id}
                index={index}
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
      </motion.div>
    </div>
    </AnimatePresence>
    
  ) : (
    <Loading />
  );
}

export default Products;
