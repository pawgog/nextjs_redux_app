import React from 'react';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';

function NewsBoard({ info, category }) {
  const dispatch = useDispatch();

  const deleteInfo = (id) => {
    console.log(id);
  };

  return (
    <>
      {info
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((val) => (
          <div key={val._id}>
            {category === val.category || category === 'all' ? (
              <div className="board-news">
                <div className="board-news__content">
                  <button onClick={() => deleteInfo(val._id)}>X</button>
                  <span>{moment(val.date).format('DD.MM.YYYY')}</span>
                  <h5>{val.name}</h5>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
                <img src={val.image}></img>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
    </>
  );
}

export default NewsBoard;
