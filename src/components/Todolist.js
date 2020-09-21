import React, { Component } from 'react';


import store from '../redux/store'
import { getInputChangeAction, getAddTodoAction, getDeleteTodoAction, getTodoList } from '../redux/action-creators'

import TodoListUI from './TodoListUI'

class Todolist extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.setStateUpdate)
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    return (
        <TodoListUI 
          states={this.state}
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
          handleListDelete={this.handleListDelete}
        />
    )
  }

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick = () => {
    const action = getAddTodoAction()
    store.dispatch(action)
  }

  handleListDelete = (index) => {
    const action = getDeleteTodoAction() 
    store.dispatch(action)
  }

  setStateUpdate = () => this.setState(store.getState())

}

export default Todolist;
