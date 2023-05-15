import React from 'react';

import captionImage from "../images/case2.jpg";

import "./styles.css";

const Home = () => {


  

  return (

 
    <div>

      <div>Humanity above Religion.</div>

      <div>
        Indreni.
      </div>



      <section>

        <div>

          <p>
            Indreni is a non-political and non-profit making social development 
            organization which was established on November 6, 1986 in the name 
            of Indreni Youth Club. At prior, indreni worked at gross root level
            as community based organization, and officially registered on October
            1, 1992 at District Administration Office (DAO), Nawalparasi. We're 
            affiliated to the Social Welfare Council on February 18, 1996 and have aimed 
            to bring positive social changes through various social welfare activities.
          </p>

        </div>

        <div>

          <img className='caption-img' src={captionImage} alt='caption'></img>
          
        </div>

      </section>




    </div>
  )
}

export default Home