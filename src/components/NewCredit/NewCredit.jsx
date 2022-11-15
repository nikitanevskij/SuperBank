import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { fetchADDCredit } from '../../redux/fetchCreditSlice';

function NewCredit() {
  const dispatch = useAppDispatch();
  const baseCredit = {
    name: 'credit',
    minAmount: '1',
    maxAmount: '1',
    minTerm: '1',
    maxTerm: '1',
    rate: '1',
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
    dispatch(fetchADDCredit(credit));
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
