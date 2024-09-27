import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './App.css'; // Certifique-se de que o CSS do App não cause conflitos com os gráficos

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');

  // Mapeamento dos links e gráficos
  const graficoLinks = {
    'Internados-convenios': {
      resource: "/adhoc/HCR__Marau_/Estatísticas/HCR___Internações_por_Convênio",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'Internados-setor': {
      resource: "/adhoc/HCR__Marau_/Estatísticas/HCR___Internações_por_Setor",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'Cirurgia-cirurgiao': {
      resource: "/adhoc/HCR__Marau_/Cirurgias/HCR___Cirurgias_Por_Cirurgião_Complexidade___Mensal",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'Cirurgia-complexidade': {
      resource: "/adhoc/HCR__Marau_/Cirurgias/HCR___Cirurgias_Por_Complexidade___Mensal",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'Cirurgia-localidade': {
      resource: "/adhoc/HCR__Marau_/Cirurgias/HCR___Cirurgias_Por_Localidade_Complexidade___Mensal",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'atendimento-cbo': {
      resource: "adhoc/Marau/Prontuario_Eletronico/Prontuario_Eletrônico___Por_CBO",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'atendimento-cores': {
      resource: "/adhoc/Marau/Prontuario_Eletronico/Prontuario_Eletrônico___Por_Tipo",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    'ocupacao': {
      resource: "/adhoc/Marau/Prontuario_Eletronico/Atendimentos_CID___Por_Período",
      auth: {
        name: "alexandre_conteratto",
        password: "AC@bi2023"
      },
    },
    // ... outros gráficos
  };

  const loadGrafico = (menuOption) => {
    const grafico = graficoLinks[menuOption];
    if (grafico) {
      window.visualize({
        auth: grafico.auth
      }, function(v) {
        v("#container").adhocView({
          resource: grafico.resource,
          error: function(e) {
            console.error(e);
            alert("Erro ao carregar gráfico");
          }
        });
      });
    }
  };

  useEffect(() => {
    if (selectedMenu) {
      loadGrafico(selectedMenu);
    }
  }, [selectedMenu]);

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar setMessage={setSelectedMenu} />

      {/* Área principal */}
      <div style={{ marginLeft: '260px', padding: '20px', width: '100%' }}>
        <h1>{selectedMenu || 'Selecione uma opção do menu'}</h1>

        {/* Contêiner para o gráfico */}
        <div
          id="container"
          style={{
            width: '100%',
            minHeight: '600px',  // Define uma altura maior para o contêiner
            overflowX: 'auto',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '10px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
          }}
        >
          {/* O gráfico será inserido aqui */}
        </div>
      </div>
    </div>
  );
}

export default App;
