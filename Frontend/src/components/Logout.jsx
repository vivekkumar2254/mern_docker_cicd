import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";


function Logout(){
      
    const [authUser,setAuthUser] = useAuth();
    const handleLogout = ()=>{
        try{
            localStorage.removeItem("Users");
            setAuthUser({
                ...authUser,
                user:null,
            })
           
            toast.success("Logout successfully")
            window.location.reload();

        }catch(error){
            toast.error("Error: "+ error.message);
        }
    }


    return(
        <>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout} >
            Logout
            </button>
        </>
    )
}
export default Logout
