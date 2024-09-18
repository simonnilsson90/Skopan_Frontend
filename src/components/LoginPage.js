import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 


function LoginPage() { 
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [error, setError] = useState(''); 
	const history = useNavigate(); 

	

	const handleLogin = async () => {
		try {
			if (!username || !password) {
				setError('Please enter both username and password.');
				return;
			}
	
			const response = await axios.post('http://localhost:8081/auth/signin', { username, password });
			console.log('Login successful:', response.data);
	
			// Save JWT token to localStorage
			localStorage.setItem('authToken', response.data.token); // Adjust according to your token structure
			history('/dashboard');
		} catch (error) {
			console.error('Login failed:', error.response ? error.response.data : error.message);
			setError('Invalid username or password.');
		}
	};
	

	return ( 
		<div className=" h-screen  bg-pink-600 flex justify-center"> 
			
				<div className=" flex flex-col "> 
					<h2 className="mb-4 text-center   ">Login </h2> 
					<input className=' mb-4 pl-2 '  placeholder='Email address' id='email' value={username} type='email' onChange={(e) => setUsername(e.target.value)} /> 
					<input className=' pl-2'  placeholder='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
					{error && <p className="">{error}</p>} {/* Render error message if exists */} 
					<button className="mb-4 d-block btn-primary" style={{ height:'50px',width: '100%' }} onClick={handleLogin}>Sign in</button> 
					<div className="text-center"> 
						<p>Not a member? <a href="/signup" >Register</a></p> 
					</div> 
				</div> 
			
		</div> 
	); 
} 

export default LoginPage; 
