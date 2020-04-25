// import React, { useState, useEffect } from 'react';

function NewsBoard({ news }) {
  return (
    <>
      {news.map((val, index) => (
        <p key={index}>{val.name}</p>
      ))}
    </>
  );
}

export default NewsBoard;
