import axios from 'axios'

import { ADD_TODO, CHANGE_INPUT, DELETE_ITEM, INIT_ITEM } from './action-types'

export const getInitItemAction = (list) => ({
    type: INIT_ITEM,
    list
})

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const getAddTodoAction = () => ({
    type: ADD_TODO
})

export const getDeleteTodoAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get(`https://fa1bfe87-ee72-4e52-bb88-17e450b46a2c.mock.pstmn.io/list`)
        .then(res => {
          const list = res.data
          const action = getInitItemAction(list)
          dispatch(action)
        })
    }
}