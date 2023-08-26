import HeaderTexts from "./HeaderText";
import WalletContent from "./WalletContent";
import WalletTransactions from "./WalletTransactions";

const WalletMain = () => {
  return (
    <section className="px-6 mt-[2rem]  ">
      <HeaderTexts header="Wallet" paragraph="All your income in one place." />
      <div className="vendor-wallet-grid w-full pb-[2rem] lg:pb-0 ">
        <WalletContent />
        <WalletTransactions />
      </div>
    </section>
  );
};
export default WalletMain;
