import { useParams } from "react-router-dom";

function UserDetails(){
     const { username, Id } =useParams();

    return(
        <div>
            <h1>UserDetails -{username}</h1>
        </div>
    );
}
export default UserDetails;
   