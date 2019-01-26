import React from 'react';

const PageLinks = ({numberOfPages, onPageClick}) => {
  var pageLinks = []

  for(var i = 1; i <= numberOfPages; i++) {
    pageLinks.push(<li class="page-item"><a class="page-link" href="#" onClick={onPageClick}>{i}</a></li>)
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pageLinks}
      </ul>
    </nav>
  )
}

export default PageLinks;