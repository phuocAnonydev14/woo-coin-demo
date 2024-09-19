import {SVGProps} from "react";

export interface SVGHeaderProps extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

export const FeedIcon = ({active, ...props}: SVGHeaderProps) => {
  return active ?
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.30507 23.6871C9.57391 24.9579 9.57391 27.0895 8.346 28.3193C7.07716 29.5901 4.9488 29.5081 3.72089 28.2783C2.49298 27.0485 2.49298 24.9989 3.76182 23.7281C4.98972 22.4983 7.07716 22.4573 8.30507 23.6871ZM29.9981 27.6224C30.039 28.4013 29.425 29.0162 28.6064 29.0162C28.1971 29.0162 27.8697 28.8522 27.6241 28.6062C27.4195 28.4013 27.2557 28.0733 27.2148 27.7044C27.092 22.0884 24.5134 16.3084 20.1339 11.9222C15.7134 7.49497 9.94228 4.91242 4.33484 4.78945C3.55717 4.74845 2.94322 4.13356 2.98415 3.3547C3.02508 2.57584 3.63903 1.96094 4.4167 2.00194C10.72 2.16591 17.1869 5.0354 22.0985 9.95454C26.9692 14.8327 29.8343 21.3095 29.9981 27.6224ZM14.8948 17.1693C18.0055 20.2847 19.7655 24.343 19.8065 28.5653C19.8474 29.3441 19.1925 30 18.4558 30C18.0465 30 17.719 29.836 17.4734 29.5901C17.2279 29.3441 17.1051 29.0572 17.0641 28.6882C16.9823 25.1629 15.5497 21.7605 12.9302 19.1369C10.2697 16.4724 6.87251 15.0376 3.35252 14.9557C2.61577 14.9557 1.96089 14.2998 2.00182 13.5209C2.00182 12.783 2.6567 12.1272 3.43438 12.1681C7.69112 12.2501 11.7432 14.0128 14.8948 17.1693Z"
        fill="black"/>
    </svg>
    :
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.30507 23.6871C9.57391 24.9579 9.57391 27.0895 8.346 28.3193C7.07716 29.5901 4.9488 29.5081 3.72089 28.2783C2.49298 27.0485 2.49298 24.9989 3.76182 23.7281C4.98972 22.4983 7.07716 22.4573 8.30507 23.6871ZM29.9981 27.6224C30.039 28.4013 29.425 29.0162 28.6064 29.0162C28.1971 29.0162 27.8697 28.8522 27.6241 28.6062C27.4195 28.4013 27.2557 28.0733 27.2148 27.7044C27.092 22.0884 24.5134 16.3084 20.1339 11.9222C15.7134 7.49497 9.94228 4.91242 4.33484 4.78945C3.55717 4.74845 2.94322 4.13356 2.98415 3.3547C3.02508 2.57584 3.63903 1.96094 4.4167 2.00194C10.72 2.16591 17.1869 5.0354 22.0985 9.95454C26.9692 14.8327 29.8343 21.3095 29.9981 27.6224ZM14.8948 17.1693C18.0055 20.2847 19.7655 24.343 19.8065 28.5653C19.8474 29.3441 19.1925 30 18.4558 30C18.0465 30 17.719 29.836 17.4734 29.5901C17.2279 29.3441 17.1051 29.0572 17.0641 28.6882C16.9823 25.1629 15.5497 21.7605 12.9302 19.1369C10.2697 16.4724 6.87251 15.0376 3.35252 14.9557C2.61577 14.9557 1.96089 14.2998 2.00182 13.5209C2.00182 12.783 2.6567 12.1272 3.43438 12.1681C7.69112 12.2501 11.7432 14.0128 14.8948 17.1693Z"
        fill="#ACACAC" stroke="white" stroke-width="0.5"/>
    </svg>
}
