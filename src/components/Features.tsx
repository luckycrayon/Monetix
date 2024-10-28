import React from 'react';
import { Shield, Zap, BarChart3, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: 'Secure & Audited',
      description: 'Multiple security audits and battle-tested smart contracts ensure your assets are safe.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: 'Lightning Fast',
      description: 'Execute trades instantly with optimized gas efficiency and Layer 2 integration.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: 'Infinite Liquidity',
      description: 'Access deep liquidity pools and trade any size without slippage.'
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: 'Decentralized',
      description: 'True DeFi with no central authority. Governed by SNX token holders.'
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Monetix</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for traders who demand the best in DeFi. Experience professional-grade derivatives trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}