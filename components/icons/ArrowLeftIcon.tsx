import { SVGProps } from 'react';

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.34375 20.3772L29.9688 20.3772"
        stroke="#130F26"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6621 28.6606L9.34336 20.3776L17.6621 12.0933"
        stroke="#130F26"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
