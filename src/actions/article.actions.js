import axios from "axios";
import { articlesConstants } from "../constants";

export const articleActions = {
  getList,
  chooseArticle,
};

function getList() {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://today.line.me/id/portaljson`,
        // `https://today.line.me/id/portaljson`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      )
      .then((res) => {
        dispatch(success(res.data.result));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: articlesConstants.LIST_ARTICLES_REQUEST };
  }
  function success(articles) {
    return { type: articlesConstants.LIST_ARTICLES_SUCCESS, articles };
  }
  function failure(error) {
    return { type: articlesConstants.LIST_ARTICLES_FAILURE, error: error };
  }
}

function chooseArticle(title = "") {
  return (dispatch) => {
    dispatch({ type: articlesConstants.CHOOSE_ARTICLE, choosed: title });
  };
}
