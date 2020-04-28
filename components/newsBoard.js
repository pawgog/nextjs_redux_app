// import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

function NewsBoard({ news }) {
  console.log(news);

  return (
    <>
      {news.map((val) => (
        <div key={val._id} className="board-news">
          <div className="board-news__content">
            <span>{moment(val.date).format('DD.MM.YYYY')}</span>
            <h5>{val.name}</h5>
            <h3>{val.title}</h3>
            <p>{val.description}</p>
          </div>
          <img src={val.image}></img>
        </div>
      ))}
    </>
  );
}

export default NewsBoard;
