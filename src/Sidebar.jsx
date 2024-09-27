import React, { useState } from 'react';
import './Sidebar.css'; // Verifique se o CSS da Sidebar não está causando conflitos
import hcr from './assets/HCR_Marca png.png';

export default function Sidebar({ setMessage }) {
  // Estados para controlar a expansão dos menus
  const [showInternados, setShowInternados] = useState(false);
  const [showCirurgia, setShowCirurgia] = useState(false);
  const [showEmergencia, setShowEmergencia] = useState(false);

  return (
    <div className="sidebar">
      <img src={hcr} alt="HCR Logo" />
      {/* Home Button */}
      <div className="menu-item">
        <button className="menu-button" onClick={() => setMessage('home')}>🏠 HOME</button>
      </div>

      {/* Internados Menu */}
      <div className="menu-item">
        <button className="menu-button" onClick={() => setShowInternados(!showInternados)}>
          🏥 Internados {showInternados ? '▲' : '▼'}
        </button>
        {showInternados && (
          <div className="sub-menu">
            <button className="sub-menu-item" onClick={() => setMessage('Internados-convenios')}>
              Internados por convênio
            </button>
            <button className="sub-menu-item" onClick={() => setMessage('Internados-setor')}>
              Internados por Setor
            </button>
          </div>
        )}
      </div>

      {/* Cirurgia Menu */}
      <div className="menu-item">
        <button className="menu-button" onClick={() => setShowCirurgia(!showCirurgia)}>
          🏥 Cirurgia {showCirurgia ? '▲' : '▼'}
        </button>
        {showCirurgia && (
          <div className="sub-menu">
            <button className="sub-menu-item" onClick={() => setMessage('Cirurgia-cirurgiao')}>
              Cirurgia por cirurgião
            </button>
            <button className="sub-menu-item" onClick={() => setMessage('Cirurgia-complexidade')}>
              Cirurgia por complexidade
            </button>
            <button className="sub-menu-item" onClick={() => setMessage('Cirurgia-localidade')}>
              Cirurgia por localidade
            </button>
          </div>
        )}
      </div>

      {/* Emergencia Menu */}
      <div className="menu-item">
        <button className="menu-button" onClick={() => setShowEmergencia(!showEmergencia)}>
          🏥 Emergência {showEmergencia ? '▲' : '▼'}
        </button>
        {showEmergencia && (
          <div className="sub-menu">
            <button className="sub-menu-item" onClick={() => setMessage('atendimento-cbo')}>
              Atendimento por CBO
            </button>
            <button className="sub-menu-item" onClick={() => setMessage('atendimento-cores')}>
              Atendimento por Cores
            </button>
            <button className="sub-menu-item" onClick={() => setMessage('ocupacao')}>
              Ocupação
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
