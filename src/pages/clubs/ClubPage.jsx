import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavBar, Footer } from '../../components';

function ClubPage() {
  return (
    <div className="club">
      <NavBar />
      <div style={styles.carousel}>
        <Carousel>
          <Carousel.Item>
            <img
              // className="w-responsive text-center mx-auto p-3 mt-1"
              src="https://raw.githubusercontent.com/Kayeris/BetterDiscordThemes/master/0c0bccf1bf97ce7cac9f8f4204e1ee27.jpg"
              alt="pic1"
              width="800"
              height="400"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="w-responsive text-center mx-auto p-3 mt-1"
              src="https://raw.githubusercontent.com/Kayeris/BetterDiscordThemes/master/11fc15539ab621ef4c70b63f6c54ca72.jpg"
              width="800"
              height="400"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="w-responsive text-center mx-auto p-3 mt-1"
              src="https://raw.githubusercontent.com/Kayeris/BetterDiscordThemes/master/783211.jpg"
              width="800"
              height="400"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={styles.clubInfo}>
        <h1><b>Guelph Coding Community</b></h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus tempus congue libero ac tempor.
          Integer pretium at nunc et vulputate.
          Pellentesque fringilla sagittis quam.
          Phasellus tempus congue libero ac tempor.
          Integer pretium at nunc et vulputate.
          Pellentesque fringilla sagittis quam.
          Phasellus tempus congue libero ac tempor.
          Integer pretium at nunc et vulputate.
          Pellentesque fringilla sagittis quam.
        </p>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: 800,
    // height: 500,
  },
  clubInfo: {
    // display: 'flex',
    margin: 'auto',
    padding: 75,
    height: 1500,
  },
};

export default ClubPage;
