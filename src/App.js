import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import ActiveCredit from './components/ActiveCredit/ActiveCredit';
import NewCredit from './components/NewCredit/NewCredit';
import Header from './components/Header';
import { fetchGETCredit } from './redux/fetchCreditSlice';

function App() {
  const dispatch = useDispatch();
  const [lists, setLists] = React.useState(null);
  const [visibleNewCreate, setVisible] = React.useState(true);
  const [activeCreditId, setActiveCredit] = React.useState(null);
  dispatch(fetchGETCredit());
  // React.useEffect(() => {
  //   axios.get('http://localhost:3001/lists').then(({ data }) => {
  //     setLists(data);
  //   });
  // }, []);

  const changeVisible = (toggle) => {
    setVisible(toggle);
  };

  const visibleCredit = (id) => {
    // const activeList = lists.filter((item) => item.id === id);
    setActiveCredit(id);
    setVisible(false);
  };

  const addCredit = (obj) => {
    setLists((lists) => [...lists, obj]);
  };

  const changeCredit = (obj) => {
    const indexObj = lists.map((item) => (item.id === obj.id ? obj : item));
    setLists(indexObj);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="sidebar">
          <Sidebar
            lists={lists}
            changeVisible={changeVisible}
            visibleCredit={visibleCredit}
            activeCreditId={activeCreditId}
          />
        </div>
        <div className="content">
          {visibleNewCreate ? (
            <NewCredit addCredit={addCredit} />
          ) : (
            <ActiveCredit activeCreditId={activeCreditId} changeCredit={changeCredit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
