import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Devloper",
          "MERN Stack Developer",
          "Software Developer",
          "Web Devloper",
        ],
        autoStart: true,
        loop: false,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
