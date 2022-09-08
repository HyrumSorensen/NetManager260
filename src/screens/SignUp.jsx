import SignUpCard from '../components/SignUpCard'
import MainHeader from '../components/MainHeader';
import {useEffect} from 'react';
const SignUp = () => {

    useEffect(()=>{
       window.sessionStorage.setItem("user", -1);
    }, [])
    return (
        <div>
            <MainHeader/>
            <SignUpCard/>
        </div>
    )
}

export default SignUp