import Button from "react-bootstrap/Button";

function Login() {

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const data = {};

		for (let [key, value] of formData.entries()) {
			data[key] = value;
		}

		sessionStorage.setItem('session', JSON.stringify(data));
	};

	return (
		<>
			<div className="container">
				<form action="" method="" id="log" onSubmit={handleFormSubmit}>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input className="form-control" type="text" name="email"/>
					</div>
					<div className="mb-3">
						<label className="form-label">Mot de passe</label>
						<input className="form-control" type="password" name="mdp"/>
					</div>
					<div className="mb-3">
						<Button variant="primary" type="submit">
							Login
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;