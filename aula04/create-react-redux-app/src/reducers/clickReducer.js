import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes';


//Criar o Reducer
const initialState = {
    newValue: 'qqr coisa'
};
export const clickReducer = (state = initialState, action) =>
{ switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
        return {
            ...state,
            newValue: action.newValue
        };
        default:
            return state;
}
};
