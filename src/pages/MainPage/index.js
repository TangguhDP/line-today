import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import Articles from "./Articles";
import CategoryList from "./CategoryList";

export default function MainPage() {

  const requesting = useSelector((state) => state.articles.requesting);
  return (
    <>
      {requesting && <LoadingScreen />}
      <div className="flex flex-col space-y-4 items-center">
        <CategoryList />
        <Articles />
      </div>
    </>
  );
}
