import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../../actions/article.actions";
import { CategoryButton } from "../../components/Cards";

export default function CategoryList(props) {
  const categoryList = useSelector((state) => state.articles.categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.getList());
  }, []);

  return (
    <div className="container mx-auto py-6 border-b-2 border-gray-100">
      <h1 className="font-bold text-3xl pb-2">Our Topics</h1>
      <hr />
      <div className="grid grid-cols-6 py-4 gap-4">
        {categoryList.map((e, i) => (
          <CategoryButton {...categoryList[i]} />
        ))}
      </div>
    </div>
  );
}
