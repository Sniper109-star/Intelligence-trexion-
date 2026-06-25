// @ts-nocheck
import { createHelia } from "helia";
import { createOrbitDB } from "@orbitdb/core";
import { gossipsub } from "@chainsafe/libp2p-gossipsub";
import { identify } from "@libp2p/identify";
import { createLibp2p } from "libp2p";

export interface Community {
  id: string;
  name: string;
  memberCount: number;
  type: string;
  platform: string;
  tokenAddress?: string;
}

class OrbitDBService {
  private orbitdb: any = null;
  private db: any = null;

  async initialize() {
    const libp2pOptions = {
      // @ts-ignore
      services: {
        pubsub: gossipsub({
          allowPublishToZeroTopicPeers: true,
        }),
        identify: identify(),
      },
    };

    const libp2p = await createLibp2p(libp2pOptions);
    const helia = await createHelia({ libp2p });
    this.orbitdb = await createOrbitDB({ ipfs: helia });
  }

  async openDatabase(dbName: string) {
    if (!this.orbitdb) {
      await this.initialize();
    }
    this.db = await this.orbitdb.open(dbName, { type: "documents" });
    return this.db;
  }

  async addCommunity(community: Community) {
    if (!this.db) {
      throw new Error("Database not initialized");
    }
    const hash = await this.db.put({
      _id: community.id,
      ...community,
    });
    return hash;
  }

  async getCommunities(): Promise<Community[]> {
    if (!this.db) {
      throw new Error("Database not initialized");
    }
    const all = await this.db.all();
    return all.map((record: { payload: { value: Community } }) => record.payload.value);
  }

  async getCommunity(id: string): Promise<Community | null> {
    if (!this.db) {
      throw new Error("Database not initialized");
    }
    const record = await this.db.get(id);
    return record ? record.payload.value : null;
  }

  async close() {
    if (this.db) {
      await this.db.close();
    }
    if (this.orbitdb) {
      await this.orbitdb.stop();
    }
  }
}

export const orbitDbService = new OrbitDBService();