import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Sidebar from './Sidebar';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);  // Define o usuário autenticado
      } else {
        setUser(null);  // Remove o usuário quando ele se desloga
      }
    });

    return () => unsubscribe();  // Limpa a função ao desmontar o componente
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rota para login */}
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        
        {/* Rota para home */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />

        {/* Rota padrão: redireciona para login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}


export default App;
