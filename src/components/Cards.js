import React from "react";
import { useDispatch } from "react-redux";
import { articleActions } from "../actions/article.actions";

export function CategoryButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(articleActions.chooseArticle(props.name))}
      className="p-4 border-2 border-gray-100 rounded hover:text-white hover:bg-green-700 transition-all ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg cursor-pointer"
    >
      <h1 className="text-xl font-semibold capitalize leading-3 select-none">
        {props.name}
      </h1>
    </button>
  );
}

export function ArticlesCards(props) {
  return (
    <div className="p-4 border-2 border-gray-100 rounded hover:text-white hover:bg-green-700 transition-all ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer">
      <h1 className="text-xl font-semibold capitalize leading-3 select-none">
        {props.name}
      </h1>
    </div>
  );
}
