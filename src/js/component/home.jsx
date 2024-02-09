import React, { useState } from "react";


function TodoItem({label, is_done, delete_todo, toggle_todo}){
	return (
		<div className="todo-item">
			<input type="checkbox"checked={is_done} onChange={toggle_todo} />
			<span className="todo-text"> {label} </span>
			<button className="btn btn-danger" onClick= {delete_todo}>
				Delete
			</button>
		</div>
	)
}

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([
		{label: "give the cats some tuna.", is_done: false},
		{label: "Feed the cats", is_done: false},
	]);
	const [todoInput, setTodoInput] = useState("");

	return (
	<>
		<div className="container-flex">
			<form 
			onSubmit={(ev) => ev.preventDefault()}
			className="container d-flex flex-column align-items-center justify-content-start" >
				<h1>Todo List</h1>
				<input class="form-control form-control-lg" 
				type="text" 
				placeholder="What do you want to get done today" 
				aria-label="todo list input field">
				</input>
				{todos.map((item, idx) => (
					<TodoItem 
						key={idx}
						label={item.label}
						is_done={item.is_done}
						toggle_todo={() => 
							setTodos(
								todos.toSpliced(idx, 1, {
									label: item.label,
									is_done: !item.is_done,
								})
							)
						}
						delete_todo={() => 
							setTodos(
								todos.toSpliced(idx, 1
								)
							)
						}
					/>
				))}
			</form>
		</div>
	</>
	);
};

export default Home;
