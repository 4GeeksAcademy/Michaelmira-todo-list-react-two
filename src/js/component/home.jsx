import React, { useState } from "react";


function TodoItem({label, is_done, delete_todo, toggle_todo}){
	return (
		<div className="todo-item">
			<input type="checkbox"checked={is_done} onClick={toggle_todo} />
			<span className="todo-text"> {label} </span>
			<button className="btn btn-danger" onClick= {delete_todo}>
				Delete
			</button>
		</div>
	)
}

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [item, setItem] = useState({
		label: "give the cats some tuna cans.",
		is_done: false,
	});

	return (
	<>
		<div className="container-flex">
			<form className="container d-flex flex-column align-items-center justify-content-start" >
				<h1>Todo List</h1>
				<input class="form-control form-control-lg" 
				type="text" 
				placeholder="What do you want to get done today" 
				aria-label="todo list input field">
				</input>
				<TodoItem 
					label={item.label}
					is_done={item.is_done}
					toggle_todo={() => item.is_done}
				/>
				<TodoItem label = "feed the cats" is_done={false} />
				<TodoItem label = "give cats attention" is_done={false} />
				
				
				
			</form>
		</div>
	</>
	);
};

export default Home;
