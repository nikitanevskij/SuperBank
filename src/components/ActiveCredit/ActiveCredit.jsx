import React from 'react';
import axios from 'axios';
import './ActiveCredit.css';

function ActiveCredit({ activeCreditId, changeCredit }) {
  const [activeCredit, setActiveCredit] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3001/lists/' + activeCreditId).then(({ data }) => {
      setActiveCredit(data);
    });
  }, [activeCreditId]);

  const editTitle = (e) => {
    e.preventDefault();

    axios.patch('http://localhost:3001/lists/' + activeCreditId, activeCredit).catch(() => {
      alert('Не удалось отправить запрос');
    });
    // console.log(activeCredit);
    changeCredit(activeCredit);
  };

  return (
    <div>
      {activeCredit && (
        <>
          <div className="active__title">Редактирование: {activeCredit.name}</div>
          <form onSubmit={editTitle}>
            <div>
              <label>
                <p>Product Name</p>
                <input
                  type="text"
                  placeholder="placeholder"
                  value={activeCredit.name}
                  onChange={(e) => setActiveCredit({ ...activeCredit, name: e.target.value })}
                />
              </label>
            </div>
            <div>
              <label>
                <p>Min Amount</p>
                <input
                  type="text"
                  placeholder="placeholder"
                  value={activeCredit.minAmount}
                  onChange={(e) =>
                    setActiveCredit({
                      ...activeCredit,
                      minAmount: e.target.value,
                    })
                  }
                />
              </label>
            </div>

            <div>
              <label>
                <p>Max Amount</p>
                <input
                  type="text"
                  placeholder="placeholder"
                  value={activeCredit.maxAmount}
                  onChange={(e) =>
                    setActiveCredit({
                      ...activeCredit,
                      maxAmount: e.target.value,
                    })
                  }
                />
              </label>
            </div>

            <div>
              <label>
                <p>Min Term</p>
                <input
                  type="text"
                  placeholder="placeholder"
                  value={activeCredit.minTerm}
                  onChange={(e) =>
                    setActiveCredit({
                      ...activeCredit,
                      minTerm: e.target.value,
                    })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                <p>Max Term</p>
                <input
                  type="text"
                  placeholder="placeholder"
                  value={activeCredit.maxTerm}
                  onChange={(e) =>
                    setActiveCredit({
                      ...activeCredit,
                      maxTerm: e.target.value,
                    })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                <p>Annual Interest Rate</p>
                <input
                  type="text"
                  placeholder="placeholder"
                  value={activeCredit.rate}
                  onChange={(e) => setActiveCredit({ ...activeCredit, rate: e.target.value })}
                />
              </label>
            </div>

            <input className="button" type="submit" value="Сохранить" />
          </form>
        </>
      )}
    </div>
  );
}

export default ActiveCredit;
