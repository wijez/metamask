import "./App.css"
import { WalletProvider } from "../src/hooks/WalletProvider"
import { WalletList } from "./components/WalletList"
import { SelectedWallet } from "./components/SelectedWallet"
import { WalletError } from "./components/WalletError"

function App() {
  return (
    <>
    <WalletProvider>
      <WalletList />
      <hr />
      <SelectedWallet />
      <WalletError />
    </WalletProvider>
    </>
 )
}

export default App