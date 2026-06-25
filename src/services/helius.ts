import { createHelius } from "helius-sdk";

const apiKey = process.env.HELIUS_API_KEY || "";

export const helios = createHelius({ apiKey });

export async function getTokenPerformance(mintAddress: string) {
  try {
    const assets = await helios.getAsset({
      id: mintAddress,
    });
    
    const price = (assets as any)?.token_info?.price || 0;
    const supply = (assets as any)?.token_info?.supply || 0;
    
    return {
      price,
      supply,
      mint: mintAddress,
      symbol: (assets as any)?.token_info?.symbol || "Unknown",
    };
  } catch (error) {
    console.error("Error fetching token performance:", error);
    return null;
  }
}