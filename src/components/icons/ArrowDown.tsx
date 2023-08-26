import { SvgProps } from "@/types";

const ArrowDown = (props: SvgProps) => {
  return (
    <svg
      width={props.width || "10"}
      height={props.height || "6"}
      viewBox="0 0 10 6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.80211 1.13553L5.36939 5.58144C5.31662 5.63421 5.25945 5.67167 5.19789 5.69384C5.13632 5.716 5.07036 5.72691 5 5.72655C4.92964 5.72655 4.86368 5.71565 4.80211 5.69384C4.74055 5.67202 4.68338 5.63456 4.63061 5.58144L0.184697 1.13553C0.0615655 1.0124 0 0.858482 0 0.673785C0 0.489089 0.0659631 0.330778 0.197889 0.198852C0.329815 0.0669255 0.483729 0.000962257 0.659631 0.000962257C0.835532 0.000962257 0.989446 0.0669255 1.12137 0.198852L5 4.07748L8.87863 0.198852C9.00176 0.0757208 9.15356 0.0141549 9.33404 0.0141549C9.51451 0.0141549 9.67054 0.0801177 9.80211 0.212044C9.93404 0.34397 10 0.497884 10 0.673785C10 0.849687 9.93404 1.0036 9.80211 1.13553Z"
        fill={props.fillColor || "currentColor"}
      />
    </svg>
  );
};
export default ArrowDown;