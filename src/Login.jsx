import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importando o componente
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importando os ícones
import logo from './assets/HCR_Marca png.png';
function Login() {
  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img 
            src={logo} // Substitua com o caminho correto da logo
            alt="HCR Logo" 
            className="logo"
          />
          <h2>Bem vindo a HCR intranet <span role="img" aria-label="wave">👋</span></h2>
        </div>
        <div className="form-section">
          <form>
            <label htmlFor="user">User</label>
            <input type="text" id="user" placeholder="Insira seu email" />

            <div className="password-input">
  <input
    type={showPassword ? "text" : "password"}
    id="password"
    placeholder="********"
  />
  <button 
    type="button" 
    className="toggle-password" 
    onClick={togglePasswordVisibility}
  >
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </button>
</div>


            <button type="submit" className="login-button">LOGIN</button>
          </form>
       
          
        </div>
      </div>
      <div className="sidebar">
        <h3>Connecting Talent to Opportunities</h3>
        <p>
          Discover endless opportunities on FreelanceConnect, where talented freelancers and businesses unite. Jump right in with us!
        </p>
      </div>
    </div>
  );
}

export default Login;
