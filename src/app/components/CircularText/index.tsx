'use client'
import React from 'react';
import ReactCurvedText from 'react-curved-text';

const CircularText = () => {
  return (
    <div className="relative w-200 h-200  flex justify-center items-center">
      <ReactCurvedText
        width={300}
        height={300}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={0}
        reversed={false}
        text="Praise Jesus ~ We did it ~ We're getting married ~ "
        textProps={{
          style: { fontSize: 28 },
          className: 'text-white',
        }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
      />
    </div>
  );
};

export default CircularText;
