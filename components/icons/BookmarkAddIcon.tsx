import {SVGHeaderProps} from "@/components/icons/FeedIcon";

export const BookmarkAddIcon = ({active, ...props}: SVGHeaderProps) => {
  return active ?
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 1.25H11.9664C10.5947 1.25 9.51929 1.24999 8.65494 1.32061C7.7748 1.39252 7.04769 1.54138 6.38956 1.87671C5.30762 2.42798 4.42799 3.30762 3.87671 4.38955C3.54138 5.04768 3.39252 5.77479 3.32061 6.65494C3.24999 7.51927 3.25 8.59469 3.25 9.96639V9.96644V10V19.1132V19.1476C3.24998 19.5893 3.24997 19.9716 3.27779 20.2749C3.3058 20.5802 3.36998 20.9361 3.5951 21.2392C3.89591 21.6442 4.35688 21.8997 4.85977 21.9401C5.23612 21.9704 5.57192 21.8362 5.84569 21.6981C6.11763 21.561 6.44181 21.3583 6.81634 21.1242L6.81636 21.1242L6.8455 21.106L9.85351 19.226C10.8231 18.62 11.1598 18.4213 11.5014 18.3437C11.8296 18.2691 12.1704 18.2691 12.4986 18.3437C12.8402 18.4213 13.1769 18.62 14.1465 19.226L17.1545 21.106L17.1836 21.1242C17.5582 21.3583 17.8824 21.561 18.1543 21.6981C18.4281 21.8362 18.7639 21.9704 19.1402 21.9401C19.6431 21.8997 20.1041 21.6442 20.4049 21.2392C20.63 20.9361 20.6942 20.5802 20.7222 20.2749C20.75 19.9716 20.75 19.5893 20.75 19.1476V19.1476V19.1132V10V9.96642V9.96637C20.75 8.59469 20.75 7.51927 20.6794 6.65494C20.6075 5.77479 20.4586 5.04768 20.1233 4.38955C19.572 3.30762 18.6924 2.42798 17.6104 1.87671C16.9523 1.54138 16.2252 1.39252 15.3451 1.32061C14.4807 1.24999 13.4053 1.25 12.0336 1.25H12Z"
            fill="black"/>
    </svg>
    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} >
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19.25 14.9692V20.0362V20.0709C19.25 20.5232 19.25 20.9136 19.2217 21.2225C19.1933 21.5321 19.1284 21.8944 18.8979 22.2004C18.5912 22.6077 18.122 22.861 17.6132 22.894C17.2309 22.9188 16.8924 22.7743 16.6179 22.6281C16.3441 22.4823 16.0178 22.2681 15.6396 22.0199L15.6107 22.0009L12.7221 20.1053C11.7209 19.4483 11.3726 19.2326 11.018 19.1487C10.6774 19.0682 10.3226 19.0682 9.98201 19.1487C9.62745 19.2326 9.27908 19.4483 8.27794 20.1053L5.38935 22.0009L5.36042 22.0199L5.36037 22.02C4.98222 22.2681 4.65587 22.4823 4.38209 22.6281C4.10765 22.7743 3.76908 22.9188 3.38684 22.894C2.87799 22.861 2.40882 22.6077 2.10207 22.2004C1.87164 21.8944 1.80666 21.5321 1.77828 21.2225C1.74997 20.9136 1.74998 20.5232 1.75 20.0709V20.0709V20.0362V10V9.96644V9.96636C1.75 8.59468 1.75 7.51927 1.82061 6.65494C1.89252 5.77479 2.04138 5.04769 2.37672 4.38955C2.92799 3.30762 3.80763 2.42798 4.88956 1.87671C5.54769 1.54138 6.2748 1.39252 7.15494 1.32061C8.01929 1.24999 9.09472 1.25 10.4664 1.25H10.5H10.5336C10.6423 1.25 10.7491 1.25 10.8541 1.25003C10.5599 1.72257 10.3083 2.22437 10.1047 2.75007C8.89507 2.7507 7.99692 2.75682 7.27709 2.81563C6.48971 2.87996 5.98197 3.00359 5.57054 3.21322C4.77085 3.62068 4.12069 4.27085 3.71323 5.07054C3.50359 5.48197 3.37996 5.9897 3.31563 6.77708C3.25059 7.57322 3.25 8.58749 3.25 10V20.0362C3.25 20.5331 3.25076 20.8536 3.27202 21.0855C3.28534 21.2309 3.30371 21.2924 3.30952 21.3096C3.35005 21.3572 3.40704 21.388 3.46915 21.3957C3.4867 21.3912 3.54821 21.3728 3.677 21.3042C3.88261 21.1947 4.15098 21.0195 4.56636 20.7469L7.45496 18.8512L7.56872 18.7765C8.41074 18.2234 8.99216 17.8415 9.63668 17.689C10.2044 17.5547 10.7956 17.5547 11.3633 17.689C12.0078 17.8415 12.5893 18.2234 13.4313 18.7765L13.545 18.8512L16.4336 20.7469C16.849 21.0195 17.1174 21.1947 17.323 21.3042C17.4518 21.3728 17.5133 21.3912 17.5309 21.3957C17.593 21.388 17.65 21.3573 17.6905 21.3096C17.6963 21.2924 17.7147 21.2309 17.728 21.0855C17.7492 20.8536 17.75 20.5331 17.75 20.0362V14.9692C17.9973 14.9896 18.2474 15 18.5 15C18.7526 15 19.0027 14.9896 19.25 14.9692Z"
            fill="black"/>
      <path
        d="M22.4999 5.53636C22.4999 5.93294 22.1693 6.21621 21.7785 6.21621H18.9275V9.29183C18.9275 9.6884 18.5968 10 18.2061 10C17.7853 10 17.4847 9.6884 17.4847 9.29183V6.21621H14.2213C13.8005 6.21621 13.4999 5.93294 13.4999 5.56469C13.4999 5.16811 13.8005 4.85651 14.2213 4.85651H17.4847V1.65152C17.4847 1.28327 17.7853 1 18.2061 1C18.5968 1 18.9275 1.28327 18.9275 1.65152V4.85651H21.7785C22.1693 4.85651 22.4999 5.16811 22.4999 5.53636Z"
        fill="black"/>
    </svg>

}
