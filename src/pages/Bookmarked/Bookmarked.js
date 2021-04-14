import React, { useEffect, useState } from "react";
import { ArticlesCards } from "../../components/Cards";

export default function Bookmarked() {
  const [bookmarked, setBookmarked] = useState([]);
  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("bookmarked")) {
      setBookmarked([...JSON.parse(localStorage.getItem("bookmarked"))]);
    }
  }, [reRender]);
  return (
    <div className="container mx-auto py-2 border-gray-100">
      <h1 className="font-bold text-3xl pb-2">Bookmarked</h1>
      <hr />
      <div className="grid grid-cols-4 py-4 gap-4 items-stretch">
        {bookmarked?.map((e, i) => (
          <ArticlesCards
            bookmarked={true}
            re_render={() => setReRender(!reRender)}
            {...bookmarked[i]}
          />
        ))}
      </div>
    </div>
  );
}
