import React from 'react';

function About(props) {
  // Use the provided image prop or a default placeholder image
  const imageUrl = props.imageSrc || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" /> {/* Use the 'imageUrl' variable for the 'src' attribute */}
      <p>{props.aboutText}</p>
    </aside>
  );
}

export default About;
