import React from 'react';
import Item from './item';
class Todoapp extends React.Component {
	constructor(props){
		super(props)
		this.state={
			todos:[],
			filtertype:'all'
		}
	}
	

	
	additem=(evt)=>{
		if(evt.keyCode===13){
			var thing=evt.target.value
			if(thing===""){return}
				var newitem={
				id:Math.random(),
				content:thing,
				completed:false,
				}
			let newlist=[...this.state.todos]
			newlist.push(newitem)
			this.setState({todos:newlist})
			evt.target.value=""
	}	
}

	removeitem=(item)=>{
		var todos=this.state.todos
		var newtodos=todos.filter(ele=>{
			return ele!==item;
		})
		this.setState({todos:newtodos})
	}
	
	handlecomplete=(item)=>{
		var todos=this.state.todos
		var newtodos=todos.map((box,index)=>{
			if(box===item){
				box.completed=!box.completed
			}
			return box
		})
		this.setState({todos:newtodos})
	}
	
	Allcompleted=()=>{
		var todos=this.state.todos
		var newtodos=todos.map((box,index)=>{
			box.completed=true
			return box
		})
		this.setState({todos:newtodos})
	}
	
	ClearCompleted=()=>{
		var todos=this.state.todos
		var newlist=todos.filter(item=>item.completed===false)
		this.setState({todos:newlist})
	}
	ShowType=(type)=>{
		this.setState({filtertype:type})

	}



	render() {

		var todos=this.state.todos
		var UnCompleteTotal=todos.reduce((count,item)=>{return count+(item.completed?0:1)},0)

		var showtodo=todos.filter((item)=>{
			switch(this.state.filtertype){
				case 'uncompleted':return !item.completed
				case 'completed':return item.completed
				default:return item
			}
		})
		
		return (
        <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input onKeyUp={this.additem} class="new-todo" placeholder="What needs to be done?" autofocus/>
			</header>
			<section  class="main" style={{display: this.state.todos.length===0?"none":" "}}>
				<input id="toggle-all" class="toggle-all" type="checkbox"/>
				<label for="toggle-all" onClick={this.Allcompleted}>Mark all as complete</label>
				<ul class="todo-list">
					{
						showtodo.map((todo,index)=>{
							return<Item key={index} todo={todo} removeitem={this.removeitem} handlecomplete={this.handlecomplete}/>
						})
					}
				</ul>
				
				
				
				
				
				<footer class="footer">
					<span class="todo-count">{UnCompleteTotal} items left</span>
					<ul class="filters">
						<li>
							<a href="#/" class="selected" onClick={()=>this.ShowType('all')}>All</a>
						</li>
						<li>
						<a href="#/active" onClick={()=>this.ShowType('uncompleted')}>Active</a>
						</li>
						<li>
						<a href="#/completed"onClick={()=>this.ShowType('completed')}>Completed</a>
						</li>
					</ul>
					<button class="clear-completed" onClick={this.ClearCompleted}>Clear completed</button>
				</footer>
			</section>
        </section>
        );
    }
}
export default Todoapp