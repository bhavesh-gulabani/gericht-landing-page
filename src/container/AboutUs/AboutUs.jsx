import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <section
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Gericht is a top-notch fine dining restaurant that promises a truly
          amazing dining experience. Our love for great food and attention to
          detail sets us apart as a top choice for those seeking a memorable
          dining experience.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Gericht has been delivering unforgettable fine dining experiences for
          over 15 years. From our humble beginnings to our commitment to
          quality, we continue to bring guests world-class cuisines and
          personalized service.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </section>
);

export default AboutUs;
