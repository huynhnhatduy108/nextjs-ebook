import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducer";
import rootSaga from "./saga";
import { configureStore, Middleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware: (gd) => gd().concat(...middlewares)
});

sagaMiddleware.run(rootSaga);

export default store;