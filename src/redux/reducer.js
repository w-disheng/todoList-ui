import { ADD_TODO, CHANGE_INPUT, DELETE_ITEM, INIT_ITEM } from './action-types'

const defaultState = {
    inputValue: '',
    list: []
}

export default ( state=defaultState , action ) => {
    if (action.type === CHANGE_INPUT) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }

    if (action.type === INIT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [...action.list]
        return newState
    }
    
    return state;
}