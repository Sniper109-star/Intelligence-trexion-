import { Users, MessageCircle, Share2, Award, RefreshCw, BarChart3, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            TREXION Community Growth Exchange
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            A marketplace where communities discover and execute mutually beneficial growth partnerships
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Community Rating Based on Token Performance</h2>
          <div className="max-w-4xl mx-auto bg-neutral-800 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-12 h-12 text-green-400" />
              <div>
                <h3 className="text-xl font-semibold">Token Performance Metrics</h3>
                <p className="text-neutral-400">Real-time analytics for informed partnership decisions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-700 rounded-lg p-4">
                <p className="text-sm text-neutral-400 mb-1">Price Growth</p>
                <p className="text-2xl font-bold text-green-400">+124%</p>
              </div>
              <div className="bg-neutral-700 rounded-lg p-4">
                <p className="text-sm text-neutral-400 mb-1">Liquidity Score</p>
                <p className="text-2xl font-bold text-blue-400">8.7/10</p>
              </div>
              <div className="bg-neutral-700 rounded-lg p-4">
                <p className="text-sm text-neutral-400 mb-1">Community Rating</p>
                <p className="text-2xl font-bold text-purple-400">A+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Community A</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• 20,000 members</li>
                <li>• Meme Coin</li>
                <li>• Strong Twitter presence</li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Community B</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• 15,000 members</li>
                <li>• Gaming Project</li>
                <li>• Strong Discord engagement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">TREXION AI Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-neutral-800 rounded-lg p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <h3 className="font-semibold mb-2">Audience Overlap</h3>
              <p className="text-sm text-neutral-400">Identifies shared and unique community members</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 text-center">
              <MessageCircle className="w-10 h-10 mx-auto mb-3 text-purple-400" />
              <h3 className="font-semibold mb-2">Engagement Compatibility</h3>
              <p className="text-sm text-neutral-400">Analyzes interaction patterns across platforms</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 text-center">
              <BarChart3 className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <h3 className="font-semibold mb-2">Geographic Overlap</h3>
              <p className="text-sm text-neutral-400">Maps regional distribution and potential</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 text-center">
              <RefreshCw className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">Partnership Success</h3>
              <p className="text-sm text-neutral-400">Historical data-driven recommendations</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-neutral-800 rounded-lg p-6 flex items-start gap-3">
              <Share2 className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Cross-community Campaigns</h3>
                <p className="text-sm text-neutral-400">Joint promotional activities</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 flex items-start gap-3">
              <MessageCircle className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Joint AMAs</h3>
                <p className="text-sm text-neutral-400">Cross-platform Q&A sessions</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 flex items-start gap-3">
              <Users className="w-6 h-6 text-green-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Creator Collaborations</h3>
                <p className="text-sm text-neutral-400">Shared influencer partnerships</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 flex items-start gap-3">
              <Share2 className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Referral Programs</h3>
                <p className="text-sm text-neutral-400">Mutual member incentives</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 flex items-start gap-3">
              <Award className="w-6 h-6 text-red-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Community Quests</h3>
                <p className="text-sm text-neutral-400">Gamified cross-community challenges</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 flex items-start gap-3">
              <RefreshCw className="w-6 h-6 text-indigo-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Reward Programs</h3>
                <p className="text-sm text-neutral-400">Shared token distributions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}