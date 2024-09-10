import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Type = () => {
  return (
    <>
      <ReactTypingEffect
        text={[
            "Front-end Developer",
            "Freelancer",
        ]}
        cursorRenderer={cursor => <h2>{cursor}</h2>}
        displayTextRenderer={(text, i) => {
          return (
            <h2>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    className='text-2xl text-blue-700 dark:text-yellow-500'
                    key={key}
                  >{char}</span>
                );
              })}
            </h2>
          );
        }}        
      />
    </>
  );
};

export default Type;