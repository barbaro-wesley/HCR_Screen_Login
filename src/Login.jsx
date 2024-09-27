import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import { auth } from './firebase'; // Importa o auth configurado
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import logo from './assets/HCR_Marca png.png';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Para redirecionar o usuário

  // Verificar se o usuário já está logado ao carregar a página
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se o usuário estiver logado, redirecionar para a página inicial
        navigate('/home'); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      // Definir a persistência para que expire ao recarregar a página (session ou none)
      await setPersistence(auth, browserSessionPersistence);
      
      // Agora faz o login do usuário
      await signInWithEmailAndPassword(auth, email, password);
      
      console.log("Login bem-sucedido");
      navigate('/home'); // Redireciona para a página inicial após o login
    } catch (error) {
      console.log("Erro completo:", error);
      switch (error.code) {
        case 'auth/user-not-found':
          setError('Usuário não encontrado. Verifique o e-mail digitado ou cadastre-se.');
          break;
        case 'auth/wrong-password':
          setError('Senha incorreta. Tente novamente.');
          break;
        case 'auth/invalid-email':
          setError('Formato de e-mail inválido. Verifique o e-mail digitado.');
          break;
        case 'auth/invalid-credential':
          setError('Credenciais inválidas. Verifique o e-mail ou a senha.');
          break;
        default:
          setError('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <img src={logo} alt="HCR Logo" className="logo" />
          <h2>Bem vindo à HCR intranet <span role="img" aria-label="wave">👋</span></h2>
        </div>
        <div className="form-section">
          <form onSubmit={handleLogin}>
            <label htmlFor="user">Email</label>
            <input
              type="email"
              id="user"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu email"
            />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Carregando...' : 'LOGIN'}
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar">
        <h3>Connecting Talent to Opportunities</h3>
        <p>Sistema de Análise de dados desenvolvido pelo setor de TI do Hospital Cristo Redentor!</p>
      </div>
    </div>
  );
}

export default Login;
