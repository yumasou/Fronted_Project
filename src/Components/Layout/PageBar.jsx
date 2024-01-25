import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  first_page,
  next_2page,
  next_page,
  rev_page,
  to_last_page,
  set_first_current_page,
} from "../counter/PageSlice";
function PageBar() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pages.current_page);
  const last_page = useSelector((state) => state.pages.last_page);
  useEffect(() => {
    if (page === null) {
      // set_current_page(1)
      dispatch(set_first_current_page());
    }
  }, [page]);
  
  return (
    <div className="w-full h-14 my-10  ">
      <ul
        className="mr-10 items-center flex justify-end *:rounded-full *:border *:px-3.5  *:mx-1 *:py-0.5 *:shadow-lg *:cursor-pointer
           "
      >
        <li onClick={() => dispatch(first_page())}>first</li>
        {page !== 1 ? (
          <li onClick={() => dispatch(rev_page())}>{page - 1}</li>
        ) : null}
        <li className="bg-pink-500">{page}</li>
        {last_page & (last_page > 1 && page + 1 < last_page) ? (
          <li onClick={() => dispatch(next_page())}>{page + 1}</li>
        ) : null}
        {last_page & (last_page > 2 && page + 2 < last_page) ? (
          <li onClick={() => dispatch(next_2page())}>{page + 2}</li>
        ) : null}
        <li onClick={() => dispatch(to_last_page(last_page))}>last</li>
      </ul>
    </div>
  );
}

export default PageBar;
