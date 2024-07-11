import { useContext } from "react"
import { WalletProviderContext } from "../hooks/WalletProvider"

export const useWalletProvider = ()  => useContext(WalletProviderContext)