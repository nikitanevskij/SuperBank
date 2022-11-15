import React from 'react';
import './ActiveCredit.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { fetchPATCHSelectedCredit, stateCredit } from '../../redux/fetchCreditSlice';
import { useAppDispatch } from '../../redux/store';

function ActiveCredit() {
  const dispatch = useAppDispatch();
  const { activeCredit } = useSelector(stateCredit);
  const { name, minAmount, maxAmount, minTerm, maxTerm, rate } = activeCredit;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => reset(activeCredit), [activeCredit]);
  //@ts-ignore
  const onSubmit = (data) => dispatch(fetchPATCHSelectedCredit(data));
  return (
    <div>
      <div className="active__title">Редактирование: {name}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Product name
            <input defaultValue={name} {...register('name', { required: true })} />
          </label>
          {errors.name && <span>Заполните поле</span>}
        </div>
        <div>
          <label>
            Min Amount
            <input defaultValue={minAmount} {...register('minAmount', { required: true })} />
          </label>
          {errors.name && <span>Заполните поле</span>}
        </div>
        <div>
          <label>
            Max Amount
            <input defaultValue={maxAmount} {...register('maxAmount', { required: true })} />
          </label>
          {errors.name && <span>Заполните поле</span>}
        </div>
        <div>
          <label>
            Min Term
            <input defaultValue={minTerm} {...register('minTerm', { required: true })} />
          </label>
          {errors.name && <span>Заполните поле</span>}
        </div>
        <div>
          <label>
            Max Term
            <input defaultValue={maxTerm} {...register('maxTerm', { required: true })} />
          </label>
          {errors.name && <span>Заполните поле</span>}
        </div>
        <div>
          <label>
            Rate
            <input defaultValue={rate} {...register('rate', { required: true })} />
          </label>
          {errors.name && <span>Заполните поле</span>}
        </div>

        <input className="button" type="submit" />
      </form>
    </div>
  );
}

export default ActiveCredit;
