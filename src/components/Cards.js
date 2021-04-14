import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { articleActions } from "../actions/article.actions";
import PushToLocal, { PopToLocal } from "../helpers/pushToLocal";

export function CategoryButton(props) {
  const choosedCategory = useSelector(
    (state) => state.articles.choosedCategory
  );
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(articleActions.chooseArticle(props.name))}
      className={`${
        props.name === choosedCategory && "bg-green-600 text-white"
      } p-4 border-2 border-gray-100 rounded hover:text-white hover:bg-green-600 transition-all ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg cursor-pointer focus:outline-none`}
    >
      <h1 className="text-xl font-semibold capitalize leading-3 select-none">
        {props.name}
      </h1>
    </button>
  );
}

export function ArticlesCards(props) {
  return (
    <div className="border-2 border-gray-100 rounded hover:text-white hover:bg-green-600 transition-all ease-in-out transform hover:-translate-y-1 hover:scale-110  cursor-pointer flex flex-col overflow-auto focus:outline-none">
      <a
        href={props.url.url || "#"}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col p-4 flex-grow justify-between"
      >
        <h1 className="text-lg font-semibold capitalize leading-tight select-none break-words">
          {props.title}
        </h1>
        <div className="flex flex-col space-y-1 py-2">
          <small className="text-sm capitalize">
            Publisher : <span className="font-bold">{props.publisher}</span>
          </small>
          <small className="text-sm capitalize">
            Category : <span className="font-bold">{props.categoryName}</span>
          </small>
        </div>
      </a>
      <div className="bg-white border-t-2 p-2 flex flex-row space-x-2 items-center text-gray-400 h-10 flex-shrink-0">
        <svg
          onClick={() => {
            props.bookmarked ? PopToLocal(props) : PushToLocal(props);
            props.re_render();
          }}
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-auto mr-auto hover:text-gray-800 cursor-pointer"
        >
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
        <span className="flex text-sm hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-auto pr-1"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          {props.commentCount}
        </span>
        <span className="flex text-sm hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-auto pr-1"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          {props.likeCount}
        </span>
      </div>
    </div>
  );
}
