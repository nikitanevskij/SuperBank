import React from 'react';
import classNames from 'classnames';
import './Sidebar.css';

function Sidebar({ lists, changeVisible, visibleCredit, activeCreditId }) {
  return (
    <div className="sidebar__container">
      <div onClick={() => changeVisible(true)} className="sidebar__button">
        Создать продукт
      </div>
      <div className="sidebar__credits">
        {lists &&
          lists.map((item) => (
            <div
              className={classNames('credit', {
                active: item.id === activeCreditId,
              })}
              key={item.id}
              onClick={() => visibleCredit(item.id)}
            >
              <div className="credit__name">{item.name}</div>
              <div className="credit__date"> 04.04.2022</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
