// Function to shorten the wallet address for display
export const shortenAddress = (address: string | null, chars = 4): string => {
    if (!address) return "";
    return `${address.substring(0, chars)}...${address.substring(
        address.length - chars
    )}`;
};