import "./MainHeader.css";
import Popup from 'reactjs-popup'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
const MainHeader = () => {
    let navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const closeModal = () =>  {
        setOpen(false);
    }
    const openModal = () => {
        setOpen(true);
    }
  let display = true;

    const takeHome = () => {
        if (window.sessionStorage.getItem("user") != -1) {
            navigate("/Welcome")
        } else {
            alert('please log in before navigating the page')
        }
    }
    const takeNetwork = () => {
        if (window.sessionStorage.getItem("user") != -1) {
            navigate("/Welcome/My-Nettwork")
        } else {
            alert('please log in before navigating the page')
        }
    }
    const takeAdd = () => {
        if (window.sessionStorage.getItem("user") != -1) {
            navigate("/Welcome/Add-Person")
        } else {
            alert('please log in before navigating the page')
        }
    }
    const takeEgg = () => {
      if (window.sessionStorage.getItem("user") != -1) {
        navigate("/Welcome/Generator")
    } else {
        alert('please log in before navigating the page')
    }
    }
    const logOut = () => {
            window.sessionStorage.setItem("user", -1)
            navigate("/")   
    }

  return (
    <div className="header">
      <div className="content">
        <div className="title">
          <h2>NettWork Manager</h2>
        </div>
        <div>
          <img onClick={openModal} onMouseOver={openModal}
            className="hamburger-menu"
            src="https://img.icons8.com/ios-filled/344/menu--v1.png"
          />
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div onMouseLeave={closeModal} className='hamburger-options'>
                <div onClick={takeHome}className='ind-option'>
                    <h4>Home</h4>
                </div>
                <div onClick={takeNetwork} className='ind-option'>
                <h4>My Network</h4>
                </div>
                <div onClick={takeAdd} className='ind-option'>
                <h4>Add A Person</h4>
                </div>
                <div onClick={takeEgg} className='ind-option'>
                <h4>Easter Egg</h4>
                </div>
                <div onClick={logOut} className='ind-option'>
                <h4>Log Out</h4>
                </div>
            </div>
          </Popup>
          </div>
      </div>
    </div>
  );
};

export default MainHeader;
