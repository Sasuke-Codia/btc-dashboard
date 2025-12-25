# Bitcoin Intelligence Dashboard

A modern web application for real-time Bitcoin analysis, featuring market data from Bitget, on-chain metrics from Mempool.space, and AI-driven trading signals.

## Features

- **Real-time Prices**: BTC/USDT and BTC/EUR from Bitget.
- **Future/Spot Ratio**: Analysis of market sentiment via Bitget futures.
- **On-Chain Metrics**: Difficulty, block height, block reward, and next retarget estimate.
- **Trading Signals**: Scalping and Swing trade probabilities based on market data.
- **Sentiment Analysis**: Market mood and macro summary.
- **Top News**: Latest relevant Bitcoin news with links.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Axios

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) in your browser.

## API Sources

- **Bitget**: Market prices and futures data.
- **Mempool.space**: On-chain blockchain data.
- **Mock Data**: Sentiment and News (can be integrated with real APIs like CryptoPanic or Twitter API).

## Disclaimer

This application is for educational purposes only. Not financial advice.
