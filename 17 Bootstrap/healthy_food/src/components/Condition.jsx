import React, { useState } from 'react';

function Condition() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isToggleOn ? (<p>toggled on!</p>) : (<p>toggled off!</p>)}
      </button>
    </div>
  );
}

export default Condition;
