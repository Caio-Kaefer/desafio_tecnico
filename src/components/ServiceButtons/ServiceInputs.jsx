import React, { useState, useEffect } from 'react';
import './ServiceInputs.css'; // Assume you have a CSS file for styling

const ServiceInputs = () => {
  // State to track the selected button in each group
  const [selectedButtonGroup1, setSelectedButtonGroup1] = useState(0);
  const [selectedButtonGroup2, setSelectedButtonGroup2] = useState(null);
  const [numberInput1, setNumberInput1] = useState(0);
  const [numberInput2, setNumberInput2] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [showMonthlyInput, setShowMonthlyInput] = useState(false);

  // Function to handle click on buttons in group 1
  const handleClickGroup1 = (index) => {
    setSelectedButtonGroup1(index === selectedButtonGroup1 ? null : index);
    setShowMonthlyInput(index === 1); // Show monthly input when "Mensal" is selected
    // If "Diario" is selected, reset the second number input to 0
    if (index === 0) {
      setNumberInput2(0);
    }
  };

  // Function to handle click on buttons in group 2
  const handleClickGroup2 = (index) => {
    setSelectedButtonGroup2(index === selectedButtonGroup2 ? null : index);
  };

  // Fetch states from IBGE API on component mount
  useEffect(() => {
    fetchStates();
  }, []);

  // Fetch states from IBGE API
  const fetchStates = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      if (!response.ok) {
        throw new Error('Failed to fetch states');
      }
      const data = await response.json();
      // Extract state names from the data
      const stateNames = data.map((state) => state.nome);
      setStates(stateNames);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  // Function to handle clicking "Add to Cart" button
  const handleAddToCart = () => {
    // Create a JavaScript object containing all the information provided by the forms
    const formData = {
      modalidadeContratacao: selectedButtonGroup1 === 0 ? 'Diario' : 'Mensal',
      turno: selectedButtonGroup2 === 0 ? 'Diurno' : 'Noturno',
      quantidadeProfissionais: numberInput2,
      observacoes: textInput,
    };
    // Add selected state to formData if "Diario" is selected
    if (selectedButtonGroup1 === 0) {
      formData.estadoAplicacao = selectedState;
    }
    // Log the formData to the console
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
              value={numberInput1}
              onChange={(e) => setNumberInput1(e.target.value)}
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
          value={numberInput2}
          onChange={(e) => setNumberInput2(e.target.value)}
        />
      </div>
      <p>Observacoes</p>
      <div className="input-container">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ServiceInputs;
