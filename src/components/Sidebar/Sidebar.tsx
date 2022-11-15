import classNames from 'classnames';
import './Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectCredit, setVisibleCreateCredit, stateCredit } from '../../redux/fetchCreditSlice';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { credits, selectedCredit } = useSelector(stateCredit);

  return (
    <div className="sidebar__container">
      <div onClick={() => dispatch(setVisibleCreateCredit(true))} className="sidebar__button">
        Создать продукт
      </div>
      <div className="sidebar__credits">
        {credits &&
          credits.map((item) => (
            <div
              className={classNames('credit', {
                active: item.id === selectedCredit,
              })}
              key={item.id}
              onClick={() => dispatch(setSelectCredit(item.id))}
            >
              <div className="credit__name">{item.name}</div>
              <div className="credit__date"> 04.04.2022</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
