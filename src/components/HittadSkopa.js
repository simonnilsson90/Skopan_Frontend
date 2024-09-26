import { useNavigate } from "react-router-dom";

function HittadSkopa (){

    const history = useNavigate(); 

	const handleLogout = () => { 
		// Perform logout actions here (e.g., clear session, remove authentication token) 
		// After logout, redirect to the login page 
		history('/'); 
	}; 
 

    return (
        <div className="h-screen bg-blue-300 flex justify-center  px-8 font-Fredoka ">

            <div className="max-w-screen-lg p-4">
            <h1 className=' mt-20 text-4xl text-center '>SKOPA UPPTÄCKT !</h1>

      <div className=" text-center">
      <ul className="list-disc mt-20 justify-center">
             <li>Ta kort på skopan du hittat</li>
             <li>Klicka på “dela upptäckt”</li>
             <li>Ditt fynd kan nu hittas av andra grävskopsälskare!</li>
         </ul>
        </div>   
        

            </div>

           
        </div>
    )

}

export default HittadSkopa