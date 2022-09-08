import {useContext, useEffect} from "react";
import './Welcome.css'
import MainHeader from '../components/MainHeader'
import OptionCard from '../components/OptionCard'
// import UserContext from '../contexts/UserContexts';



const Welcome = () => {
    // let myContext = useContext(UserContext);
    const user = window.sessionStorage.getItem("user");
    //below is the username :D
    const userinfo = window.sessionStorage.getItem("userInfo")

    const addNetwork = () => {
        window.location.assign('http://localhost:3000/Add-Person')
    }
    const myNetWork = () => {
        window.location.assign('http://localhost:3000/My-NettWork')
    }
    const easterEgg = () => {
        window.location.assign('http://localhost:3000/Generator')
    }

    useEffect(() => {
        if(window.sessionStorage.getItem("user") == -1) {
          window.location.assign("http://localhost:3000")
        }
      }, []);

    return (
        <div>
            <div>
                <MainHeader/>
            </div>
            <div className='user'>
                <h1>{`Hi, ${userinfo}`}</h1>
            </div>
            <div className='options'>
                <OptionCard image='https://img.icons8.com/external-itim2101-blue-itim2101/344/external-network-business-strategy-itim2101-blue-itim2101-1.png' buttonText='My Network' foo={myNetWork}/>
                <OptionCard image='https://img.icons8.com/color/344/user-skin-type-7.png' buttonText='Add To Network' foo={addNetwork}/>
                <OptionCard image='https://img.icons8.com/fluency/344/easter-egg.png' buttonText='A Little Easter Egg' foo={easterEgg}/>
            </div>
        </div>
    )
}

export default Welcome