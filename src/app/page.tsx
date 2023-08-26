import NavComp from "@/components/NavComp";
import WalletMain from "@/components/WalletMain";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <NavComp />
      <WalletMain />
    </main>
  );
}
