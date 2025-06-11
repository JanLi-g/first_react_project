import React from 'react';
import { useParams } from 'react-router-dom';
import CurrencyCalculator from './CurrencyCalculator';

// Wrapper-Komponente, um URL-Parameter an die Klassenkomponente weiterzugeben
const CurrencyCalculatorWrapper = (props) => {
  const params = useParams();
  return <CurrencyCalculator {...props} currency1={params.currency1} currency2={params.currency2} />;
};

export default CurrencyCalculatorWrapper;

