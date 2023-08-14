import { createStore } from "redux";
import rootReducer from "./reducers";

export interface RootState {
  columns: {
    [key: string]: {
      title: string;
      cards: string[];
    };
  };
}

const store = createStore(rootReducer);

export default store;
