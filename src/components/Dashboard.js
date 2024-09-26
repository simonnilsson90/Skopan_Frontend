// WelcomeDashboard.js 
import React from 'react'; 
import { useNavigate} from 'react-router-dom'; // Import useHistory hook 

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function WelcomeDashboard({ username }) { 
	const history = useNavigate(); 

	const handleLogout = () => { 
		// Perform logout actions here (e.g., clear session, remove authentication token) 
		// After logout, redirect to the login page 
		history('/'); 
	}; 

	return ( 
		<div className="h-screen custom-background flex justify-center  px-4">
  <div className="max-w-screen-lg p-4">
    <h2 className=" mt-20 mb-4 text-center font-Fredoka text-4xl">HITTA SKOPAN</h2>
    
    <div className='flex justify-center mt-32 space-x-4 '>
	<Link to="/skopa-hittad">
	<Button variant="contained">Skopa hittad!</Button>
		 </Link>
      
      <Button variant="contained">Skopor i närheten</Button>
    </div>
    
  </div>
</div>

	); 
} 

export default WelcomeDashboard; 
