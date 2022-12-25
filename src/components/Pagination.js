import React from 'react';
import './Pagination.css';

const Pagination = ({ totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='my-page-link' >
              <div className='circle'></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;