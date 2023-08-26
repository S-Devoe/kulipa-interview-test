import { SvgProps } from "@/types";

const DownloadIcon = (props: SvgProps) => {
  return (
    <svg
      width={props.width || "17"}
      height={props.height || "17"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 12.5L3.5 7.5L4.9 6.05L7.5 8.65V0.5H9.5V8.65L12.1 6.05L13.5 7.5L8.5 12.5ZM2.5 16.5C1.95 16.5 1.479 16.304 1.087 15.912C0.695002 15.52 0.499335 15.0493 0.500002 14.5V11.5H2.5V14.5H14.5V11.5H16.5V14.5C16.5 15.05 16.304 15.521 15.912 15.913C15.52 16.305 15.0493 16.5007 14.5 16.5H2.5Z"
        fill={props.fillColor || "#2A60F1"}
      />
    </svg>
  );
};
export default DownloadIcon;
