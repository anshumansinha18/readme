import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import HashLoader from "react-spinners/HashLoader";
import { css } from '@emotion/react';
import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();


const Cards = () => {

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false); //loading animation

  useEffect(() => {


    //using news api
    axios.get(process.env.MAILCHIMP_URL)
      .then(res => {
        console.log(res.data);
        const item = [
          res.data.articles[0],
          res.data.articles[1],
          res.data.articles[2],
          res.data.articles[3],
          res.data.articles[4],
        ];
        setArticle(item);
        setLoading(true);
      });
  }, []); //[] is put to stop it from falling in infinite loop

  return (
    <div className='cards'>
      <h1>Check out these amazing articles!</h1>
      {loading ?

        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={article[0] && article[0].urlToImage}
                text={article[0] && article[0].title}
                label={article[0] && article[0].author}
                path={article[0] && article[0].url}

              />
              <CardItem
                src={article[1] && article[1].urlToImage}
                text={article[1] && article[1].title}
                label={article[1] && article[1].author}
                path={article[1] && article[1].url}
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={article[2] && article[2].urlToImage}
                text={article[2] && article[2].title}
                label={article[2] && article[2].author}
                path={article[2] && article[2].url}
              />
              <CardItem
                src={article[3] && article[3].urlToImage}
                text={article[3] && article[3].title}
                label={article[3] && article[3].author}
                path={article[3] && article[3].url}
              />
              <CardItem
                src={article[4] && article[4].urlToImage}
                text={article[4] && article[4].title}
                label={article[4] && article[4].author}
                path={article[4] && article[4].url}
              />
            </ul>
          </div>
        </div>
        :

        <HashLoader className="loader"
          color='#000000' loading={!loading}
          css={css`
               margin-left: 700px;
             `}
          size={30}
        />

      }
    </div>
  )
}

export default Cards


// return (


//   <div className='cards'>
//     <h1>Check out these amazing articles!</h1>
//     <div className='cards__container'>
//       <div className='cards__wrapper'>
//         <ul className='cards__items'>
//           <CardItem
//             src='images/img-9.jpg'
//             text='Explore the hidden waterfall deep inside the Amazon Jungle'
//             label='Adventure'
//             path='/services'
//           />
//           <CardItem
//             src='images/img-2.jpg'
//             text='Travel through the Islands of Bali in a Private Cruise'
//             label='Luxury'
//             path='/services'
//           />
//         </ul>
//         <ul className='cards__items'>
//           <CardItem
//             src='images/img-3.jpg'
//             text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
//             label='Mystery'
//             path='/services'
//           />
//           <CardItem
//             src='images/img-4.jpg'
//             text='Experience Football on Top of the Himilayan Mountains'
//             label='Adventure'
//             path='/products'
//           />
//           <CardItem
//             src='images/img-8.jpg'
//             text='Ride through the Sahara Desert on a guided camel tour'
//             label='Adrenaline'
//             path='/sign-up'
//           />
//         </ul>
//       </div>
//     </div>
//   </div>
// );
// }

// export default Cards;
