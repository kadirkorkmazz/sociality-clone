import React from 'react';
import Card from './Card';
import data from '../data.json';
import pp from '../img/pp.svg';

function Main() {
  console.log(Object.values(data.posts_by_date));

  return (
    <div className='main'>
      <div className='mainTop'>
        <div className='descriptions'>
          <div>Published</div>
          <div>Scheduled</div>
          <div>Need Approval</div>
          <div>Error</div>
          <div>Notes</div>
        </div>
        <div className='pp'>
          <img src={pp} alt='pp' />
        </div>
      </div>

      {Object.values(data.posts_by_date).map((post, index) => (
        <div className='divByDate'>
          <div className='date'>{Object.keys(data.posts_by_date)[index]}</div>
          <div className='cardsArea'>
            {post.map((subpost) => (
              <Card
                content={subpost.entry.message}
                date={subpost.published_at}
                image={subpost.entry.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
