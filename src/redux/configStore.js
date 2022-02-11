import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Post from "./modules/post";

const rootReducer = combineReducers({
  post: Post,
});

// // 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
// const env = process.env.NODE_ENV;

// // 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
// if (env === "development") {
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();