import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchGETCredit, stateCredit } from './redux/fetchCreditSlice';

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import NewCredit from './components/NewCredit/NewCredit';
import ActiveCredit from './components/ActiveCredit/ActiveCredit';
import { useAppDispatch } from './redux/store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { visibleCreateCredit } = useSelector(stateCredit);

  React.useEffect(() => {
    dispatch(fetchGETCredit());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">{visibleCreateCredit ? <NewCredit /> : <ActiveCredit />}</div>
      </div>
    </div>
  );
};

export default App;
