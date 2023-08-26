
import { convertToCurrency } from "@/utils";
import WalletTransactionIcon from "./icons/WalletTransactionIcon";

const WalletTransactions = () => {
  

  return (
    <div className="w-full h-full flex flex-col border-[1px] border-plain rounded-xl p-[1.5rem] ">
      <h2
        className="font-kanit font-medium text-[1rem] text-myGrey 
      pb-[0.55rem] border-b-plain border-b-[1px] "
      >
        Wallet history
      </h2>

      <>
        <div className="mt-[1.125rem] flex flex-col h-[420px] gap-[1.5rem] overflow-y-scroll hide-scroll ">
          {mockData.map((item) => (
            <div key={item.id} className="flex justify-between items-center ">
              <div className="flex flex-row gap-3 ">
                {/* <WalletTransactionIcon /> */}
                <div className="flex flex-col justify-between">
                  <h3 className="font-medium text-[1.125rem] text-blackGray  ">
                    {item.name}
                  </h3>
                  <p className="text-[0.75rem] text-myGrey font-normal  ">
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="font-semibold text-myAsh text-[0.875rem] ">
                  {convertToCurrency(Number(item.amount))}
                </p>
                <h4 className="text-[0.75rem] text-myGrey font-normal  ">
                  {item.bank}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};
export default WalletTransactions;

const mockData = Array(25)
  .fill("")
  .map((_, i) => ({
    id: i + 1,
    name: "DeeVoe ",
    date: "Aug 25, 2023 at 9:30 PM",
    amount: 1500 + i * 20,
    bank: "First Bank",
  }));
