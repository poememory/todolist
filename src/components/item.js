import React from 'react';


class item extends React.Component {
    render(){
        var {todo}=this.props
        return(
            <li class={todo.completed?"completed":" " }>
                <div class='view'>
                    <input class="toggle" type="checkbox" checked={todo.completed} onChange={()=>{this.props.handlecomplete(todo)}}></input>
                    <label>{todo.content}</label>
                    <button class="destroy" onClick={()=>this.props.removeitem(todo)}></button>
                </div>
            </li>
            )
    }
}
export default item