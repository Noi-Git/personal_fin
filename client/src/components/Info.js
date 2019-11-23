import React, { Fragment } from 'react';

const Info = () => {
  return (
    <Fragment>
      <div className="about">
        <h2 className="about--title">About</h2>
        <p className="about--detail">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with:{' '}
        </p>
        <p>
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content.
        </p>
      </div>
      <div className="mission">
        <div className="mission--info">
          <h2 className="mission--title">Our Mission</h2>
          <p className="mission--detail">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
          </p>
          <p>
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout. A practice not without controversy, laying out pages
            with meaningless filler text can be very useful when the focus is
            meant to be on design, not content.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
