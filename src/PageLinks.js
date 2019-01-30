import React from 'react';

const PageLinks = ({numberOfPages, onPageClick}) => {
  var pageLinks = []

  for(var i = 1; i <= numberOfPages; i++) {
    pageLinks.push(<li class="page-item"><a class="page-link" href="#" onClick={onPageClick}>{i}</a></li>)
  }
  return (
    <nav id="page-links" aria-label="Page navigation">
      <ul class="pagination pagination-lg justify-content-center">
        {pageLinks}
      </ul>
    </nav>
  )
}

export default PageLinks;