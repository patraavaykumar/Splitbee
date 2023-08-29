import React from 'react'

export const Svg = (props) => {
  return (
    <>
          <svg
    width={284}
    height={256}
    viewBox="0 0 284 256"
    fill="none"
    style={{
      animation: "1.5s ease 0s infinite normal none running heart-beat",
    }}
    {...props}
  >
    <path
      opacity={0.6}
      d="M252.132 115.661c-17.63 33.016-54.036 85.583-118.204 116.599-74.907-37.624-105.052-90.653-116.966-123.052-6.498-17.67.377-36.398 13.924-49.474 24.957-24.088 64.894-22.75 88.182 2.954l18.489 20.407 25.309-24.428c22.847-22.052 59.409-20.827 80.73 2.705 13.643 15.058 18.107 36.364 8.536 54.289z"
      stroke="url(#line-heart_svg__paint0_linear)"
      strokeWidth={6}
      strokeLinecap="round"
      strokeDasharray="13.52 27.04"
      style={{
        animation: "14s linear 0s infinite normal none running heart",
      }}
    />
    <defs>
      <linearGradient
        id="line-heart_svg__paint0_linear"
        x1={183.5}
        y1={62}
        x2={180.421}
        y2={242.776}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CBD5E0" />
        <stop offset={0.354} stopColor="#CBD5E0" stopOpacity={0.12} />
        <stop offset={0.443} stopColor="#CBD5E0" stopOpacity={0.37} />
        <stop offset={1} stopColor="#CBD5E0" />
        <stop offset={1} stopColor="#CBD5E0" stopOpacity={0.625} />
      </linearGradient>
    </defs>
    <style>
      {
        "@keyframes heart-beat{0%,50%,to{transform:scale(1)}65%{transform:scale(1.05)}}@keyframes heart{0%{stroke-dashoffset:5%}to{stroke-dashoffset:-100%}}"
      }
    </style>
  </svg>
    </>
  )
}

