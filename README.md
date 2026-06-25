# TREXION Community Growth Exchange

A marketplace where communities discover and execute mutually beneficial growth partnerships.

## Features

- **Community Rating**: Token performance metrics (price growth, liquidity score, community rating)
- **AI Analysis**: Audience overlap, engagement compatibility, geographic overlap, partnership success predictions
- **Partnership Opportunities**: Cross-community campaigns, joint AMAs, creator collaborations, referral programs, community quests, reward programs
- **Mobile-First Design**: Fully responsive UI with hamburger navigation and touch-friendly interface

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- [Helius SDK](https://github.com/helius-labs/helius-sdk) - Solana blockchain data for token performance
- [OrbitDB](https://github.com/orbitdb/orbitdb) - Decentralized P2P database for community data

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- Helius API key (free at [dashboard.helius.dev](https://dashboard.helius.dev))

### Installation

```bash
# Clone the repository
git clone https://github.com/Sniper109-star/Intelligence-trexion-.git
cd Intelligence-trexion-

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local to add your HELIUS_API_KEY
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
bun typecheck  # Run TypeScript type checking
bun lint       # Run ESLint
bun build      # Build for production
bun start      # Start production server
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── token/          # Helius SDK API route for token performance
│   │   └── communities/    # OrbitDB API route for community data
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page - TREXION Exchange UI
│   └── globals.css         # Global styles
└── services/
    ├── helius.ts           # Helius SDK service for Solana data
    └── orbitdb.ts          # OrbitDB service for P2P database
```

## API Endpoints

### GET /api/token?mint={mintAddress}

Fetch token performance data from Helius.

**Response:**
```json
{
  "price": 0,
  "supply": 0,
  "mint": "string",
  "symbol": "string",
  "name": "string"
}
```

### GET /api/communities

Fetch all communities from OrbitDB.

### GET /api/communities?id={id}

Fetch a specific community by ID.

### POST /api/communities

Add a new community.

**Body:**
```json
{
  "id": "string",
  "name": "string",
  "memberCount": number,
  "type": "string",
  "platform": "string",
  "tokenAddress": "string"
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HELIUS_API_KEY` | Your Helius API key for Solana data | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL for production | No |

## CI/CD

GitHub Actions workflow runs on push to main:
- TypeScript type checking
- ESLint code quality checks
- Next.js production build

## License

MIT License