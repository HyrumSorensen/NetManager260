import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import "./RandomGuy.css";
import MainHeader from '../components/MainHeader'

const RandomGuy = () => {
  let user = window.sessionStorage.getItem("user");

  const [nameNumber, setNameNumber] = useState();

  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => {
    setOpen(true);
  };

  const [people, setPeople] = useState([]);
  const [nameToPrint, setNameToPrint] = useState("");
  const [messageToPrint, setMessageToPrint] = useState("");

  let body = {
    user: user,
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("user") == -1) {
      window.location.assign("http://localhost:3000");
    }
    setNameNumber(0);
    axios
      .get("http://localhost:8000/getPeople", { params: { user: body.user } })
      .then((res) => {
        setPeople(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const messages = [
    "The best way to predict your future is to create it.",
    "You must expect great things of yourself before you can do them.",
    "Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.",
    "There are no mistakes, only opportunities.",
    "Sometimes you can’t see yourself clearly until you see yourself through the eyes of others.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  ];

  const generatePerson = () => {
    openModal();
    let size = people.length;

    setNameNumber(Math.floor(Math.random() * size));
    setMessageToPrint(messages[Math.floor(Math.random() * 7)]);
    setNameToPrint(people[nameNumber].name);
  };

  return (
    <div>
        <MainHeader/>
      <div className="generate">
        <button onClick={generatePerson}>
          Generate
        </button>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="message">
          <div>
            <h2>You must send a message to {nameToPrint} that says: </h2>
            {console.log(nameToPrint)}
          </div>
          <div>
            <h3>{messageToPrint}</h3>
            {console.log(messageToPrint)}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default RandomGuy;
