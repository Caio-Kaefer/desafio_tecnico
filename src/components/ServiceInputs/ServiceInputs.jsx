import React, { useState, useEffect } from 'react';
import './ServiceInputs.css'; // Assume you have a CSS file for styling
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ServiceInputs = ({total}) => {

  const [selectedButtonGroup1, setSelectedButtonGroup1] = useState(0);
  const [selectedButtonGroup2, setSelectedButtonGroup2] = useState(null);
  const [months, setMonths] = useState(0);
  const [numberInput2, setNumberInput2] = useState(0);
  const [professionals, setProfessionals] = useState(0);
  const [obs, setobs] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [showMonthlyInput, setShowMonthlyInput] = useState(false);

  const handleClickGroup1 = (index) => {
    setSelectedButtonGroup1(index === selectedButtonGroup1 ? null : index);
    setShowMonthlyInput(index === 1); 
    if (index === 0) {
      setNumberInput2(0);
    }
  };

  const handleClickGroup2 = (index) => {
    setSelectedButtonGroup2(index === selectedButtonGroup2 ? null : index);
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      if (!response.ok) {
        throw new Error('Failed to fetch states');
      }
      const data = await response.json();
      const stateNames = data.map((state) => state.nome);
      setStates(stateNames);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const handleAddToCart = () => {
    const formData = {
      modalidadeContratacao: selectedButtonGroup1 === 0 ? 'Diario' : 'Mensal',
      turno: selectedButtonGroup2 === 0 ? 'Diurno' : 'Noturno',
      quantidadeProfissionais: professionals,
      observacoes: obs,
    };
    if (selectedButtonGroup1 === 0) {
      formData.estadoAplicacao = selectedState;
    }
    console.log(formData);
  };

  return (
    <div className="button-groups-container">
      <p>Modalidade de Contratação</p>
      <div className="button-group">
        <button
          className={selectedButtonGroup1 === 0 ? 'selected' : ''}
          onClick={() => handleClickGroup1(0)}
        >
          Diario
        </button>
        <button
          className={selectedButtonGroup1 === 1 ? 'selected' : ''}
          onClick={() => handleClickGroup1(1)}
        >
          Mensal
        </button>
      </div>
      <p>Turno</p>
      <div className="button-group">
        <button
          className={selectedButtonGroup2 === 0 ? 'selected' : ''}
          onClick={() => handleClickGroup2(0)}
        >
          Diurno
        </button>
        <button
          className={selectedButtonGroup2 === 1 ? 'selected' : ''}
          onClick={() => handleClickGroup2(1)}
        >
          Noturno
        </button>
      </div>
      {showMonthlyInput && (
        <>
          <p>Quantidade de Meses</p>
          <div className="input-container">
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            />
          </div>
        </>
      )}
      {!showMonthlyInput && selectedButtonGroup1 === 0 && (
        <>
          <p>Estado de Aplicação</p>
          <div className="input-container">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Selecione um estado</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </>
      )}
      <p>Quantidade de Profissionais</p>
      <div className="input-container">
        <input
          type="number"
          value={professionals}
          onChange={(e) => setProfessionals(e.target.value)}
        />
      </div>
      <p>Observação</p>
      <div className="input-container">
        <input
          type="text"
          value={obs}
          onChange={(e) => setobs(e.target.value)}
        />
      </div>
      <div className='value'>
        <p>Total:</p>
        <h2>{total}</h2>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart <AddShoppingCartIcon/></button>
      <button className="contract-now-button" onClick={handleAddToCart}>Contrate Agora</button>
    </div>
  );
};

export default ServiceInputs;
