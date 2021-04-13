import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ArticlesCards } from "../../components/Cards";

export default function Articles() {
  const choosedCategory = useSelector(
    (state) => state.articles.choosedCategory
  );
  const categories = useSelector((state) => state.articles.categories);

  useEffect(() => {
    console.log(choosedCategory);
    console.log(categories.filter((e) => e.name === choosedCategory));
  }, [choosedCategory]);

  return (
    <div className="container mx-auto py-2 border-b-2 border-gray-100">
      <h1 className="font-bold text-3xl pb-2">Articles</h1>
      <hr />
      <div className="grid grid-cols-6 py-4 gap-4">
        {/* {categories.map((e, i) => (
            <ArticlesCards {...categories[i]} />
          ))} */}
      </div>
    </div>
  );
}
