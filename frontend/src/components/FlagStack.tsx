import React from "react";
import { CircleFlag } from 'react-circle-flags'

interface FlagStackProps {
  country1: string;
  country2: string;
}

const FlagStack: React.FC<FlagStackProps> = ({ country1, country2 }: FlagStackProps) => {
  return (
    <div style={{ position: "relative", width: "50px", height: "50px" }}>
      {/* First flag positioned down and left */}
      <CircleFlag
        countryCode={country1}
        height="33" 
        style={{
          position: "absolute",
          bottom: "5px",
          left: "5px",
          zIndex: 1,
        }}
      />

      <CircleFlag
        countryCode={country2}
        height="29" 
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default FlagStack;
