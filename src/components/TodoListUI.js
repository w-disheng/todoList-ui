import React from 'react'
import { Input, Button, List, Typography } from 'antd';


function TodoListUI(props) {
    const { inputValue, list } = props.states
    const { handleInputChange, handleBtnClick, handleListDelete } = props
    return (
        <div style={{marginTop: "10px", marginLeft: "10px"}}>
            <div className="todolist-header" style={{width: 300}}>
                <Input placeholder="Add todo" value={inputValue} onChange={handleInputChange} />
                <Button type="primary" onClick={handleBtnClick} >确定</Button>
            </div>
            <List
            style={{width: "300px", marginTop: "10px"}}
            bordered
            dataSource={list}
            renderItem={(item,index) => (
                <List.Item onClick={() => handleListDelete(index)}>
                <Typography.Text mark>[{item}]</Typography.Text> 
                </List.Item>
            )}
            />
      </div>
    )
}

export default TodoListUI
