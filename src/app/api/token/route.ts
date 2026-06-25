// @ts-nocheck
import { createHelius } from "helius-sdk";
import { NextResponse } from "next/server";

const apiKey = process.env.HELIUS_API_KEY || "";

const helios = createHelius({ apiKey });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mintAddress = searchParams.get("mint");

  if (!mintAddress) {
    return NextResponse.json({ error: "mint parameter required" }, { status: 400 });
  }

  try {
    const asset = await helios.getAsset({
      id: mintAddress,
    });

    const tokenInfo = asset?.token_info || {};
    const metadata = asset?.content?.metadata || {};

    return NextResponse.json({
      price: tokenInfo.price || 0,
      supply: tokenInfo.supply || 0,
      mint: mintAddress,
      symbol: tokenInfo.symbol || "Unknown",
      name: metadata.name || "Unknown",
    });
  } catch (error) {
    console.error("Error fetching token performance:", error);
    return NextResponse.json({ error: "Failed to fetch token data" }, { status: 500 });
  }
}