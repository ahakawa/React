//importando o createStore do Redux
import { createStore } from "redux";
import todos from "../reducers/todos";

const Store = createStore(todos);

export default Store;
