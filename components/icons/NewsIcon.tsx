import { SVGHeaderProps } from '@/components/icons/FeedIcon';

export const NewsIcon = ({ active, ...props }: SVGHeaderProps) => {
  return active ? (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.9066 3.33341V11.2001C19.9066 11.7867 19.2133 12.0801 18.7866 11.6934L16.4533 9.54675C16.1999 9.30675 15.7999 9.30675 15.5466 9.54675L13.2133 11.6801C12.7866 12.0801 12.0933 11.7734 12.0933 11.2001V3.33341C12.0933 2.96008 12.3866 2.66675 12.7599 2.66675H19.2399C19.6133 2.66675 19.9066 2.96008 19.9066 3.33341Z"
        fill="black"
      />
      <path
        d="M22.64 2.7466C22.2533 2.69327 21.9067 3.0266 21.9067 3.41327V11.4399C21.9067 12.4533 21.3067 13.3733 20.3733 13.7866C19.44 14.1866 18.36 14.0133 17.6133 13.3199L16.4533 12.2533C16.2 12.0133 15.8133 12.0133 15.5467 12.2533L14.3867 13.3199C13.9067 13.7733 13.28 13.9999 12.6533 13.9999C12.3067 13.9999 11.96 13.9333 11.6267 13.7866C10.6933 13.3733 10.0933 12.4533 10.0933 11.4399V3.41327C10.0933 3.0266 9.74667 2.69327 9.36 2.7466C5.62667 3.21327 4 5.73327 4 9.33327V22.6666C4 26.6666 6 29.3333 10.6667 29.3333H21.3333C26 29.3333 28 26.6666 28 22.6666V9.33327C28 5.73327 26.3733 3.21327 22.64 2.7466ZM23.3333 24.9999H12C11.4533 24.9999 11 24.5466 11 23.9999C11 23.4533 11.4533 22.9999 12 22.9999H23.3333C23.88 22.9999 24.3333 23.4533 24.3333 23.9999C24.3333 24.5466 23.88 24.9999 23.3333 24.9999ZM23.3333 19.6666H17.6667C17.12 19.6666 16.6667 19.2133 16.6667 18.6666C16.6667 18.1199 17.12 17.6666 17.6667 17.6666H23.3333C23.88 17.6666 24.3333 18.1199 24.3333 18.6666C24.3333 19.2133 23.88 19.6666 23.3333 19.6666Z"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 9.33341V22.6667C28 26.6667 26 29.3334 21.3333 29.3334H10.6667C6 29.3334 4 26.6667 4 22.6667V9.33341C4 5.33341 6 2.66675 10.6667 2.66675H21.3333C26 2.66675 28 5.33341 28 9.33341Z"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6667 2.66675V13.1467C20.6667 13.7334 19.9733 14.0267 19.5467 13.6401L16.4534 10.7868C16.2001 10.5468 15.8 10.5468 15.5467 10.7868L12.4534 13.6401C12.0267 14.0267 11.3334 13.7334 11.3334 13.1467V2.66675H20.6667Z"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6666 18.6667H23.3333"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 24H23.3333"
        stroke="#ACACAC"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
