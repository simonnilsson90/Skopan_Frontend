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
	
			// Prepare login data
			const loginData = {
				email: username, // Updated to 'email'
				password,
			};
	
			const response = await axios.post('http://localhost:8081/auth/signin', loginData);
			console.log('Login successful:', response.data);
	
			if (response.data.jwt) { // Updated to check for 'jwt'
				// Save JWT token to localStorage (or sessionStorage)
				localStorage.setItem('authToken', response.data.jwt);
	
				// Include the token in Authorization header for subsequent requests
				const token = localStorage.getItem('authToken');
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			} else {
				setError('Invalid token received.'); // Handle missing token case
				return;
			}
	
			history('/dashboard');
		} catch (error) {
			console.error('Login failed:', error.response ? error.response.data : error.message);
			setError('Invalid username or password.');
		}
	};
	
	

	return ( 
		<div className=" h-screen  custom-background justify-center"> 
		<h1 className=' pt-10 text-center  font-Fredoka text-4xl'>HITTA SKOPAN</h1>
			
			<div class="py-20">
    <div class="flex h-full items-center justify-center">
        <div
            class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-blue-200 dark:bg-blue-300 flex-col flex h-full items-center justify-center ">
            <div class="flex h-full flex-col justify-center gap-4 p-6">
				<div className=" flex flex-col "> 
					
					<h2 className="mb-4  mt-6 text-2xl font-bold   ">Hitta en skopa nära dig! </h2> 
					<input className=' mb-4 pl-2 '  placeholder='Email' id='username' value={username} type='email' onChange={(e) => setUsername(e.target.value)} /> 
					<input className=' pl-2 mb-4'  placeholder='Lösenord' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
					{error && <p className="">{error}</p>} {/* Render error message if exists */} 
					<button className="text-slate-100 text-2xl mt-2 rounded-md mb-4 d-block mx-auto fixed-action-btn btn-primary bg-blue-800" style={{ height:'50px',width: '100%' }} onClick={handleLogin}>Logga in</button> 
					<div className="text-center"> 
						<p>Inte medlem? <a href="/signup" >Registrera</a></p> 
					</div> 
				</div> 
				</div> 
				</div> 
				</div> 
</div> 
		</div> 
	); 
} 

export default LoginPage; 
