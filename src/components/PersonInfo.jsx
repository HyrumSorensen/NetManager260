import "./PersonInfo.css";
const PersonInfo = ({ List }) => {

  return (
    <div>
      <div className="person-card">
        <div className="person-type">
          <h4>{List.type}</h4>
        </div>
        <div className="person-name">
          <h3>{List.name}</h3>
        </div>
        <div className="person-birthday">
          <h5>Birthday: {List.birthday}</h5>
        </div>
        <div className="description-div">
          <h6 className="person-description">About: {List.description}</h6>
        </div>
        <div className="contact-info">
          <div>
            <button className="contact-button">contact</button>
          </div>
          <div className='picture'>
            <img className='pencil'src="https://img.icons8.com/office/344/edit.png"/>
            <p>edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
