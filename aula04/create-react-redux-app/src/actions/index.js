import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes'

//Criar a action
export const clickButton = value => ({
    type: 'CLICK_UPDATE_VALUE',
    newValue: value
});