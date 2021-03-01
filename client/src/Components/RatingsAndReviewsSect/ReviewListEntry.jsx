import React from 'react';
import Stars from './Stars.jsx';

let ReviewListEntry = ({review}) => {
  return (
    <div>
      <Stars rating={review.rating}/>
    </div>
  )
}

// {
//   "review_id": 147678,
//   "rating": 5,
//   "summary": "Id itaque est placeat soluta sit soluta perspiciatis.",
//   "recommend": true,
//   "response": null,
//   "body": "Molestiae laborum accusamus natus necessitatibus cum debitis autem soluta impedit. Maiores consequuntur delectus. Nostrum deserunt aliquid dolores commodi itaque excepturi sunt. Totam excepturi dolorem est. Autem libero est aut occaecati facilis qui corporis id. Soluta dolor vero rerum facere reprehenderit atque.",
//   "date": "2020-08-05T00:00:00.000Z",
//   "reviewer_name": "Maggie6",
//   "helpfulness": 26,
//   "photos": [
//       {
//           "id": 187149,
//           "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
//       }
//   ]
// },

export default ReviewListEntry;