import {useState, useEffect} from 'react'

import MainHeader from '../components/MainHeader'

import AddForm from '../components/AddForm'



const AddPerson = () => {

    useEffect(() => {
        if(window.sessionStorage.getItem("user") == -1) {
          window.location.assign("http://localhost:3000")
        }
      }, []);

    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div>
                <AddForm/>
            </div>
        </div>
    )
}

export default AddPerson