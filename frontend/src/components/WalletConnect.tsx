import { useWallet } from "@solana/wallet-adapter-react";
import {
    WalletMultiButton,
    WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { shortenAddress } from "../utils/helpers";

interface WalletConnectProps {
    className?: string;
}

export default function WalletConnect({ className = "" }: WalletConnectProps) {
    const { publicKey } = useWallet();

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {!publicKey ? (
                <WalletMultiButton style={{ backgroundColor: "#0ea5e9" }} />
            ) : (
                <>
                    <span className="text-sm font-mono bg-zinc-800 px-3 py-1.5 rounded">
                        {shortenAddress(publicKey.toBase58())}
                    </span>
                    <WalletDisconnectButton
                        style={{
                            backgroundColor: "#dc2626",
                            color: "white",
                        }}
                    />
                </>
            )}
        </div>
    );
}