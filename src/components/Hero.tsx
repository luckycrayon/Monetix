import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Decentralized
            </span>
            <br />
            Derivatives Protocol
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Trade synthetic assets on-chain with infinite liquidity. Access real-world assets and optimize your DeFi strategy.
          </p>
          
          {/* <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            Monetix Protocol is a next-generation decentralized platform designed to seamlessly bridge traditional finance and the digital economy. Built on Monad blockchain, Monetix offers users an innovative way to mint and trade synthetic assets that track the value of real-world and digital assets alike. Whether it’s fiat currencies, commodities, global stock indexes like the S&P 500, or major cryptocurrencies like Bitcoin, Monetix enables investors to go long or short on these assets from anywhere in the world.
            <br /><br />
            With a commitment to transparency, liquidity, and security, Monetix Protocol leverages the speed and scalability of EVM-compatible infrastructure to provide a frictionless, low-fee trading experience. By joining Monetix, users gain access to a powerful suite of tools that simplify asset issuance, trading, and risk management, making it easy to create a diversified portfolio that captures opportunities in both real and digital markets.
            <br /><br />
            Monetix is more than just a platform; it’s an ecosystem where decentralized finance meets the real world. Our protocol empowers users with unique financial tools and a gateway to global assets, removing geographical, financial, and technical barriers that often restrict access to traditional markets. We are dedicated to revolutionizing asset trading by bridging the best of both worlds — decentralization and real-world asset exposure.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center">
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-full font-medium transition-all">
              Read Docs
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Value Locked', value: '$1.2B+' },
            { label: 'Total Trading Volume', value: '$12B+' },
            { label: 'Unique Traders', value: '50K+' },
            { label: 'Available Markets', value: '100+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}