import { NextResponse } from 'next/server';
import { 
  getBitgetPrices, 
  getOnChainData, 
  getNews, 
  getFearAndGreed, 
  calculateSignals,
  getEtfFlows,
  getLiquidationData
} from '@/lib/api';

export async function GET() {
  try {
    const [prices, onChain, news, fng, etf, liquidations] = await Promise.all([
      getBitgetPrices(),
      getOnChainData(),
      getNews(),
      getFearAndGreed(),
      getEtfFlows(),
      getLiquidationData()
    ]);

    const signals = calculateSignals(prices, onChain);

    return NextResponse.json({
      prices,
      onChain,
      news,
      signals,
      etf,
      liquidations,
      sentiment: {
        score: fng?.score || 0.5,
        label: fng?.label || 'Neutral',
        summary: `The Fear & Greed Index is currently ${fng?.label}. This psychological indicator reflects market sentiment based on volatility, social media, and market momentum.`
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Dashboard API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
