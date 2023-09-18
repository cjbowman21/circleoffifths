import React from 'react';
import './styles/Wheel.css';

const Wheel = () => {
  const notesAndChords = [
    {
      root: "C",
      IV: "F",
      V: "G",
      ii: "Dm",
      iii: "Em",
      vi: "Am",
      vii: "Bdim"
    },
    {
      root: "C#",
      IV: "F#",
      V: "G#",
      ii: "D#m",
      iii: "E#m",
      vi: "A#m",
      vii: "B#dim"
    },
    {
      root: "D",
      IV: "G",
      V: "A",
      ii: "Em",
      iii: "F#m",
      vi: "Bm",
      vii: "C#dim"
    },
    {
      root: "D#",
      IV: "G#",
      V: "A#",
      ii: "Fm",
      iii: "Gm",
      vi: "Cm",
      vii: "Ddim"
    },
    {
      root: "E",
      IV: "A",
      V: "B",
      ii: "F#m",
      iii: "G#m",
      vi: "C#m",
      vii: "D#dim"
    },
    {
      root: "F",
      IV: "A#",
      V: "C",
      ii: "Gm",
      iii: "Am",
      vi: "Dm",
      vii: "Edim"
    },
    {
      root: "F#",
      IV: "B",
      V: "C#",
      ii: "G#m",
      iii: "A#m",
      vi: "D#m",
      vii: "Fdim"
    },
    {
      root: "G",
      IV: "C",
      V: "D",
      ii: "Am",
      iii: "Bm",
      vi: "Em",
      vii: "F#dim"
    },
    {
      root: "G#",
      IV: "C#",
      V: "D#",
      ii: "A#m",
      iii: "B#m",
      vi: "Fm",
      vii: "Gdim"
    },
    {
      root: "A",
      IV: "D",
      V: "E",
      ii: "Bm",
      iii: "C#m",
      vi: "F#m",
      vii: "G#dim"
    },
    {
      root: "A#",
      IV: "D#",
      V: "F",
      ii: "Cm",
      iii: "Dm",
      vi: "Gm",
      vii: "Adim"
    },
    {
      root: "B",
      IV: "E",
      V: "F#",
      ii: "C#m",
      iii: "D#m",
      vi: "G#m",
      vii: "A#dim"
    }
  ];  
  

  return (
    <div className="wheel-container">
        <div className="circle root-circle">
        {notesAndChords.map((entry, index) => (
            <div key={index} className="note" style={{ 
                transform: `rotate(${30 * index}deg) translate(75px) rotate(${-30 * index}deg)`}}>
                {entry.root}
            </div>
        ))}
        </div>
        <div className="circle ii-iii-vi-circle">
        {notesAndChords.map((entry, index) => (
            <React.Fragment key={index}>
            <div 
                className="chord ii-chord" 
                style={{ 
                transform: `rotate(${30 * index - 10}deg) translate(130px) rotate(${-30 * index + 10}deg)`
                }}
            >
                {entry.ii}
            </div>
            <div 
                className="chord iii-chord" 
                style={{ 
                transform: `rotate(${30 * index}deg) translate(130px) rotate(${-30 * index}deg)`
                }}
            >
                {entry.iii}
            </div>
            <div 
                className="chord vi-chord" 
                style={{ 
                transform: `rotate(${30 * index + 10}deg) translate(130px) rotate(${-30 * index - 10}deg)`
                }}
            >
                {entry.vi}
            </div>
            </React.Fragment>
    ))}
    </div>
    <div className="circle vii-circle">
    {notesAndChords.map((entry, index) => (
        <div 
        key={index} 
        className="chord vii-chord" 
        style={{ 
            transform: `rotate(${30 * index}deg) translate(180px) rotate(${-30 * index}deg)`
        }}
        >
        {entry.vii}
    </div>
  ))}
</div>
    </div>
    );
};

export default Wheel;
