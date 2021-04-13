import { combineReducers } from 'redux'
import { articles } from './articles.reducer';

const rootReducer = combineReducers({
    articles,
});

export default rootReducer;
