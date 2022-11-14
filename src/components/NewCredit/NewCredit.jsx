import React from 'react';
import axios from 'axios';

function NewCredit({ addCredit }) {
  const baseCredit = {
    name: '',
    minAmount: '',
    maxAmount: '',
    minTerm: '',
    maxTerm: '',
    rate: '',
  };

  const [credit, setCredit] = React.useState(baseCredit);

  const addList = (e) => {
    e.preventDefault();
    for (var key in credit) {
      if (credit[key] === '') {
        alert('Заполните все поля');
        return;
      }
    }
    axios.post('http://localhost:3001/lists', credit).then(({ data }) => addCredit(data));
    setCredit(baseCredit);
  };

  return (
    <div className="credit__container">
      <div className="active__title">Создать новый продукт</div>
      <form onSubmit={addList}>
        <div>
          <label>
            <p>Product Name</p>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setCredit({ ...credit, name: e.target.value })}
              value={credit.name}
            />
          </label>
        </div>

        <div>
          <p>Min Amount</p>
          <label>
            <input
              type="text"
              placeholder="minAmount"
              onChange={(e) => setCredit({ ...credit, minAmount: e.target.value })}
              value={credit.minAmount}
            />
          </label>
        </div>

        <div>
          <label>
            <p>Max Amount</p>
            <input
              type="text"
              placeholder="maxAmount"
              onChange={(e) => setCredit({ ...credit, maxAmount: e.target.value })}
              value={credit.maxAmount}
            />
          </label>
        </div>

        <div>
          <label>
            <p>Min Term</p>
            <input
              type="text"
              placeholder="minTerm"
              onChange={(e) => setCredit({ ...credit, minTerm: e.target.value })}
              value={credit.minTerm}
            />
          </label>
        </div>

        <div>
          <label>
            <p>Max Term</p>
            <input
              type="text"
              placeholder="maxTerm"
              onChange={(e) => setCredit({ ...credit, maxTerm: e.target.value })}
              value={credit.maxTerm}
            />
          </label>
        </div>

        <div>
          <label>
            <p>Annual Interest Rate</p>
            <input
              type="text"
              placeholder="rate"
              onChange={(e) => setCredit({ ...credit, rate: e.target.value })}
              value={credit.rate}
            />
          </label>
        </div>

        <input className="button add" type="submit" value="Добавить новую задачу" />
      </form>
    </div>
  );
}

export default NewCredit;
