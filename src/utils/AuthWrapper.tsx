import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../ContextProvider";

interface IAuthWrapperProps{
    permissionLevel?:string;
    children: React.ReactNode;

}

function AuthWrapper(props:IAuthWrapperProps){

    const context = useContext(UserContext);

    if (!context) {
        return <div>Loading...</div>; // Or handle the error appropriately
    }

    const { authorisedUser } = context;


    // return(

    // );

    //Check user is logged in else return 404 component
    if(authorisedUser){
        //if a permission level has been applied then check the permission level against that of the current logged in user
        if(props.permissionLevel && authorisedUser.permissionLevel == props.permissionLevel){
            return(
                <>{props.children}</>
            );
        } else{
            //No permission level passed, therefore its a globally accessible area
            return(
                <>{props.children}</>
            );
        }
    }else{
            
           return(
            <Navigate to="/Login" />
           ); 
    }
}

export default AuthWrapper;