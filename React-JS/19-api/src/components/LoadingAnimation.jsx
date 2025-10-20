import React from "react";

const LoadingAnimation = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100"
      height="100"
    >
      <circle
        fill="#FF156D"
        stroke="#FF156D"
        strokeWidth="15"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2s"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>

      <circle
        fill="#FF156D"
        stroke="#FF156D"
        strokeWidth="15"
        opacity=".8"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2s"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0.05s"
        />
      </circle>

      <circle
        fill="#FF156D"
        stroke="#FF156D"
        strokeWidth="15"
        opacity=".6"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2s"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0.1s"
        />
      </circle>

      <circle
        fill="#FF156D"
        stroke="#FF156D"
        strokeWidth="15"
        opacity=".4"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2s"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0.15s"
        />
      </circle>

      <circle
        fill="#FF156D"
        stroke="#FF156D"
        strokeWidth="15"
        opacity=".2"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2s"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </circle>
    </svg>
  );
};

export default LoadingAnimation;
