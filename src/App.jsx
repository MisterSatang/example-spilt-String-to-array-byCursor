import React, { useState } from "react";

function App() {
	const [inputString, setInputString] = useState("");
	const [cursorPosition, setCursorPosition] = useState(0);
	const [arr, setArr] = useState([]);

	function handleClick(e) {
		setInputString(e.target.value);
		setCursorPosition(e.target.selectionStart);
		setArr([
			inputString.substring(0, cursorPosition),
			inputString.substring(cursorPosition),
		]);
	}

	return (
		<div>
			<textarea
				defaultValue={inputString}
				onChange={handleClick}
				onKeyDown={handleClick}
			/>
			<p>Cursor position: {cursorPosition}</p>
			<p>Resulting array: {arr}</p>
		</div>
	);
}

export default App;
