import { NextResponse } from "next/server";
import { orbitDbService } from "@/services/orbitdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    await orbitDbService.initialize();
    await orbitDbService.openDatabase("trexion-communities");

    if (id) {
      const community = await orbitDbService.getCommunity(id);
      return NextResponse.json(community);
    }

    const communities = await orbitDbService.getCommunities();
    return NextResponse.json(communities);
  } catch (error) {
    console.error("Error fetching communities:", error);
    return NextResponse.json({ error: "Failed to fetch communities" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const community = await request.json();
    
    await orbitDbService.initialize();
    await orbitDbService.openDatabase("trexion-communities");

    const hash = await orbitDbService.addCommunity({
      id: community.id || Date.now().toString(),
      name: community.name,
      memberCount: community.memberCount,
      type: community.type,
      platform: community.platform,
      tokenAddress: community.tokenAddress,
    });
    return NextResponse.json({ hash, success: true });
  } catch (error) {
    console.error("Error adding community:", error);
    return NextResponse.json({ error: "Failed to add community" }, { status: 500 });
  }
}