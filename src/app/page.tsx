"use client";

import { Users, MessageCircle, Share2, Award, RefreshCw, BarChart3, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            TREXION
          </h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#rating" className="text-sm hover:text-blue-400 transition-colors">Rating</a>
            <a href="#how-it-works" className="text-sm hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#analysis" className="text-sm hover:text-blue-400 transition-colors">AI Analysis</a>
            <a href="#opportunities" className="text-sm hover:text-blue-400 transition-colors">Opportunities</a>
          </nav>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden container mx-auto px-4 pb-4 flex flex-col gap-3">
            <a href="#rating" className="text-sm py-2 border-b border-neutral-800" onClick={() => setMobileMenuOpen(false)}>Rating</a>
            <a href="#how-it-works" className="text-sm py-2 border-b border-neutral-800" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#analysis" className="text-sm py-2 border-b border-neutral-800" onClick={() => setMobileMenuOpen(false)}>AI Analysis</a>
            <a href="#opportunities" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Opportunities</a>
          </nav>
        )}
      </header>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Community Growth Exchange
          </h1>
          <p className="text-base md:text-xl text-neutral-400 max-w-3xl mx-auto px-2">
            A marketplace where communities discover and execute mutually beneficial growth partnerships
          </p>
        </section>

        <section id="rating" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">Community Rating Based on Token Performance</h2>
          <div className="bg-neutral-800 rounded-lg p-5 md:p-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Token Performance Metrics</h3>
                <p className="text-sm md:text-base text-neutral-400">Real-time analytics for informed partnership decisions</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              <div className="bg-neutral-700 rounded-lg p-3 md:p-4 text-center">
                <p className="text-xs md:text-sm text-neutral-400 mb-1">Price Growth</p>
                <p className="text-lg md:text-2xl font-bold text-green-400">+124%</p>
              </div>
              <div className="bg-neutral-700 rounded-lg p-3 md:p-4 text-center">
                <p className="text-xs md:text-sm text-neutral-400 mb-1">Liquidity Score</p>
                <p className="text-lg md:text-2xl font-bold text-blue-400">8.7/10</p>
              </div>
              <div className="bg-neutral-700 rounded-lg p-3 md:p-4 text-center col-span-2 md:col-span-1">
                <p className="text-xs md:text-sm text-neutral-400 mb-1">Community Rating</p>
                <p className="text-lg md:text-2xl font-bold text-purple-400">A+</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-800 rounded-lg p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Community A</h3>
              <ul className="space-y-2 text-sm md:text-base text-neutral-300">
                <li>• 20,000 members</li>
                <li>• Meme Coin</li>
                <li>• Strong Twitter presence</li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-lg p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Community B</h3>
              <ul className="space-y-2 text-sm md:text-base text-neutral-300">
                <li>• 15,000 members</li>
                <li>• Gaming Project</li>
                <li>• Strong Discord engagement</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="analysis" className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">TREXION AI Analysis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 text-center">
              <Users className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 text-blue-400" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Audience Overlap</h3>
              <p className="text-xs md:text-sm text-neutral-400 hidden md:block">Identifies shared and unique community members</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 text-center">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 text-purple-400" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Engagement Compatibility</h3>
              <p className="text-xs md:text-sm text-neutral-400 hidden md:block">Analyzes interaction patterns across platforms</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 text-center">
              <BarChart3 className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 text-green-400" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Geographic Overlap</h3>
              <p className="text-xs md:text-sm text-neutral-400 hidden md:block">Maps regional distribution and potential</p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 text-center">
              <RefreshCw className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 text-yellow-400" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Partnership Success</h3>
              <p className="text-xs md:text-sm text-neutral-400 hidden md:block">Historical data-driven recommendations</p>
            </div>
          </div>
        </section>

        <section id="opportunities">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 flex items-start gap-3">
              <Share2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">Cross-community Campaigns</h3>
                <p className="text-xs md:text-sm text-neutral-400">Joint promotional activities</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-400 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">Joint AMAs</h3>
                <p className="text-xs md:text-sm text-neutral-400">Cross-platform Q&A sessions</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 flex items-start gap-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-green-400 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">Creator Collaborations</h3>
                <p className="text-xs md:text-sm text-neutral-400">Shared influencer partnerships</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 flex items-start gap-3">
              <Share2 className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">Referral Programs</h3>
                <p className="text-xs md:text-sm text-neutral-400">Mutual member incentives</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 flex items-start gap-3">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-red-400 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">Community Quests</h3>
                <p className="text-xs md:text-sm text-neutral-400">Gamified cross-community challenges</p>
              </div>
            </div>
            <div className="bg-neutral-800 rounded-lg p-4 md:p-6 flex items-start gap-3">
              <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">Reward Programs</h3>
                <p className="text-xs md:text-sm text-neutral-400">Shared token distributions</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-neutral-800 border-t border-neutral-700 py-6 mt-12 md:mt-20">
        <div className="container mx-auto px-4 text-center text-neutral-400 text-sm">
          <p>&copy; 2026 TREXION. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}