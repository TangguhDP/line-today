import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArticlesCards } from "../../components/Cards";

export default function Articles() {
  const choosedCategory = useSelector(
    (state) => state.articles.choosedCategory
  );
  const categories = useSelector((state) => state.articles.categories);
  const [collectionArticles, setCollectionArticles] = useState([]);

  useEffect(() => {
    if (choosedCategory) {
      let articles = [];
      let localCategories = categories.filter(
        (e) => e.name === choosedCategory
      );
      let withTitle = localCategories[0]?.templates?.filter(
        (e) => e.title !== undefined
      );
      let sections = withTitle
        ?.filter((e) => e.sections.length > 0)
        ?.map((e) => e.sections);
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j <= i; j++) {
          for (let k = 0; k < 8; k++) {
            if (sections[i] && sections[i][j]?.articles[k]) {
              articles?.push(sections[i][j]?.articles[k]);
            } else {
              break;
            }
          }
        }
      }
      setCollectionArticles([...articles]);
    }
  }, [choosedCategory]);

  return (
    <div className="container mx-auto py-2 border-gray-100">
      <h1 className="font-bold text-3xl pb-2">Articles</h1>
      <hr />
      <div className="grid grid-cols-4 py-4 gap-4 items-stretch">
        {choosedCategory && collectionArticles.length > 0 ? (
          collectionArticles.map((e, i) => (
            <ArticlesCards re_render={() => null} {...collectionArticles[i]} />
          ))
        ) : (
          <h1 className="text-2xl text-center font-bold w-full col-span-full">
            {!collectionArticles.length > 0 && choosedCategory
              ? "Hmm sepertinya artikel pilihan developer tidak ada"
              : `Pilih topik yang anda inginkan!`}
          </h1>
        )}
      </div>
    </div>
  );
}
