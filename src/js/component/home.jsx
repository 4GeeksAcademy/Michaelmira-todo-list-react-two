import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
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
				<div className="todo-item">
					<input type="checkbox"/>
					<span className="todo-text"> feed the cat </span>
					<div className="btn btn-danger">Delete</div>
				</div>
				<div className="todo-item">
					<input type="checkbox"/>
					<span className="todo-text"> feed the cat </span>
					<div className="btn btn-danger">Delete</div>
				</div>
				<div className="todo-item">
					<input type="checkbox"/>
					<span className="todo-text"> feed the cat </span>
					<div className="btn btn-danger">Delete</div>
				</div>
				
				
			</form>
		</div>
	</>
	);
};

export default Home;
