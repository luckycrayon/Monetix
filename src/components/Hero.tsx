import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();
  
  // 切换语言
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>

      {/* 语言切换按钮 */}
      {/* <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800 transition-all"
      >
        <Globe className="h-6 w-6" />
        <span className="ml-2">{i18n.language === 'zh' ? 'EN' : '中文'}</span>
      </button> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {t('hero.title')}
            </span>
            <br />
            {t('hero.subtitle')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {t('hero.description')}
          </p>
          

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center">
              {t('hero.launchApp')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-full font-medium transition-all">
              {t('hero.readDocs')}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t('hero.stats.tvl'), value: '$1.2B+' },
            { label: t('hero.stats.volume'), value: '$12B+' },
            { label: t('hero.stats.traders'), value: '50K+' },
            { label: t('hero.stats.markets'), value: '100+' }
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