import "./LoginCard.css";

const LoginCard = () => {
  return (
    <div className='main-div'>
      <div className='box'>
        <h2>Login</h2>
        <form>
            <input placeholder="Username" type="username" />
            <input placeholder="Password" type="password"/>
            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard
