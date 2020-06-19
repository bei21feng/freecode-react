import React from 'react';

const Joke = (props) => {
  return (
    <div>
      <p style={{ display: props.question ? 'block' : 'none' }}>
        question:{props.question}
      </p>
      <p>punchLine:{props.punchLine}</p>
      <br />
    </div>
  );
};

export default Joke;
