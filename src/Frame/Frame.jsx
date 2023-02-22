import "./Frame.css";
import { useState } from "react";
const Frame = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");

	return (
		<section>
			<form>
				<input
					type="text"
					name="fname"
					id="fname"
					onChange={(e) => setFname(e.target.value)}
				/>
				<label htmlFor="fname">Vorname</label>
				<input
					type="text"
					name="lname"
					id="lname"
					onChange={(e) => setLname(e.target.value)}
				/>
				<label htmlFor="lname">Nachname</label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="email">E-Mail</label>
			</form>

			<article>
				<h2>
					Vorname: <span>{fname}</span>
				</h2>
				<h2>
					Nachname: <span>{lname}</span>
				</h2>
				<h2>
					Email: <span>{email}</span>
				</h2>
			</article>
		</section>
	);
};

export default Frame;
