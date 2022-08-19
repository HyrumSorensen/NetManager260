import {useContext} from "react";
// import UserContext from '../contexts/UserContexts';



const Welcome = () => {
    // let myContext = useContext(UserContext);
    const user = window.sessionStorage.getItem("user");

    return (
        <div>
            <h2>{`Welcome User: ${user}`}</h2>
        </div>
    )
}

export default Welcome