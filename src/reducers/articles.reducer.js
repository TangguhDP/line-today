import { articlesConstants } from "../constants";

const initialState = {
  requesting: true,
  lastModTime: 0,
  parentCategoryId: 0,
  categoryList: [],
  categories: [],
  msg: "",
  choosedCategory: "",
};

export function articles(state = initialState, action) {
  switch (action.type) {
    // LIST
    case articlesConstants.LIST_ARTICLES_REQUEST:
      return {
        ...state,
        requesting: true,
        msg: "Proses meminta data...",
      };
    case articlesConstants.LIST_ARTICLES_SUCCESS:
      return {
        ...state,
        requesting: false,
        lastModTime: action.articles.lastModTime,
        parentCategoryId: action.articles.parentCategoryId,
        categoryList: action.articles.categoryList,
        categories: action.articles.categories,
        msg: "Berhasil mendapatkan artikel",
      };
    case articlesConstants.LIST_ARTICLES_FAILURE:
      return { requesting: false, msg: "Gagal mendapatkan artikel" };
    case articlesConstants.CHOOSE_ARTICLE:
      return { ...state, choosedCategory: action.choosed };
    default:
      return { ...state };
  }
}
