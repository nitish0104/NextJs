'use client'
import { useState } from "react";

const Page = () => {
	const initialState = {
		name: "",
		age: "",
		sprouse: ""
	};

	const [formState, setFormState] = useState(initialState);

	const handleSubmit = async (e) => {
		e.preventDefault()
		let response = await fetch("http://localhost:3000/api/data", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formState)
		})
		response = await response.json()

		console.log(response);
		console.log(formState);
	};

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.id]: e.target.value
		});
	};

	return (
		<div className="h-screen flex justify-center items-center">
			<div>
				<form
					action=""
					className="flex flex-col w-4/12 justify-center items-center"
				>
					<label htmlFor="name" className="flex justify-start items-start">
						Name:
					</label>
					<input
						type="text"
						placeholder="enter u r name"
						id="name"
						value={formState.name}
						onChange={handleChange}
					/>
					<label htmlFor="age" className="flex justify-start items-start">
						Age:
					</label>
					<input
						type="text"
						placeholder="enter u r Age"
						id="age"
						value={formState.age}
						onChange={handleChange}
					/>
					<label htmlFor="sprouse" className="flex justify-start items-start">
						Sprouse:
					</label>
					<input
						type="text"
						placeholder="enter u r Sprouse"
						id="sprouse"
						value={formState.sprouse}
						onChange={handleChange}
					/>
					<button
						className="bg-yellow-500 px-4 py-2 mt-4 w-48"
						type="submit"
						onClick={handleSubmit}
					>
						Add User
					</button>
				</form>
			</div>
		</div>
	);
};

export default Page;
