import { Children } from "react";
import { Navigate } from "react-router-dom";


const Updatestatus=({Children})=>{
    const token= JSON.parse(localStorage.getItem("jwt_token"))
    return token? <Navigate to="/dashboard"/>:Children
}

export default Updatestatus