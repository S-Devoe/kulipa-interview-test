import { SvgProps } from "@/types";

const WalletTransactionIcon = (props: SvgProps) => {
  return (
    <svg
      width={props.width || "40"}
      height={props.height || "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="40"
        height="40"
        rx="20"
        fill={props.fillColor || "#1DD3B0"}
        fillOpacity="0.1"
      />
      <path
        d="M15 19L20 14L25 19L23.6 20.45L21 17.85V26H19V17.85L16.4 20.45L15 19Z"
        fill={props.fillColor || "#1DD3B0"}
      />
    </svg>
  );
};
export default WalletTransactionIcon;
