import React, { useCallback } from 'react';
import { Header } from './components/Header/Header';
import { RecommendedProducts } from './widgets/RecommendedProducts/RecommendedProducts';
import './App.css';
import AccountWidget from './widgets/AccountWidg';
import StockWidget from './widgets/StockWidget';
import HistoryWidget from './widgets/HistoryWidget';

function App() {
  const [userId, setUserId] = React.useState(1);
  const handleChangeAccount = useCallback((accountId: number) => setUserId(accountId), []);

  return (
    <div className="container">
      <Header onChangeAccount={handleChangeAccount} />
      <div className='page'>
        {/* <RecommendedProducts userId={userId}/> */}
        <AccountWidget />
        <StockWidget />
        <HistoryWidget />
      </div>
    </div>
  )
}

export default App
