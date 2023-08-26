"use client";
import { convertToCurrency } from "@/utils";
import WalletLineChart from "./WalletLineChart";
import ArrowDown from "./icons/ArrowDown";
import DownloadIcon from "./icons/DownloadIcon";
import { Suspense } from "react";

const WalletContent = () => {
  return (
    <section className=" w-full ">
      <div className="w-full h-fit  flex flex-col lg:flex-row border-[1px] border-plain rounded-xl ">
        <div className="flex-1 lg:flex-[60%] p-[1.5rem] flex flex-col ">
          <h2 className="font-normal text-[1rem] text-myGrey  ">
            Wallet balance
          </h2>
          <div className="w-full border-t-[1px] border-t-plain mt-[0.85rem] max-w-[450px] pt-3  ">
            <h3 className="text-blackGray font-semibold text-[1.5rem] ">
              {convertToCurrency(Number(123456))}
            </h3>
          </div>
        </div>
        <div className="flex-1 lg:flex-[40%] bg-primary p-[1.5rem] rounded-b-xl md:rounded-b-[0] md:rounded-r-xl ">
          <h2 className="font-normal text-[1rem] text-white font-kanit ">
            Fast and Easy payment
          </h2>
          <p className="text-white text-[0.875rem] font-normal ">
            Transfer from your wallet balance to your local bank account.
          </p>
          <div className="my-4 border-t-[1px] border-t-plain w-full  "></div>
          <button
            // onClick={handleModal}
            type="button"
            className="bg-white w-full text-[1rem] text-primary font-kanit 
            font-medium flex justify-center items-center gap-1 h-[2.2rem] rounded-[0.25rem] "
          >
            <DownloadIcon /> Withdraw
          </button>
        </div>
      </div>
      <div className="w-full h-[20rem] px-[1.75rem] pt-[1.5rem] pb-[2.5rem] border-[1px] border-plain rounded-xl mt-[2rem] ">
        <div className="flex items-center justify-between ">
          <h2 className="font-kanit text-[1rem] font-normal text-myGrey ">
            Wallet Chart
          </h2>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <WalletLineChart />
        </Suspense>
      </div>
    </section>
  );
};
export default WalletContent;
