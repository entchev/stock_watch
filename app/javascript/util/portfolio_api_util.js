export const fetchPortfolioItems = data => (
  $.ajax({
    method: 'GET',
    url: 'api/porfolio_items',
    data
  })
);

export const fetchPortfolioItem = id => (
  $.ajax({
    method: 'GET',
    url: `api/portfolio_items/${id}`
  })
);

export const createPortfolioItem = portfolioForm => (
  $.ajax({
    method: 'POST',
    url: 'api/portfolio_items',
    data: portfolioForm,
    contentType: false,
    processData: false
  })
);
