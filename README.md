<p align="center">  <img src="logo3_clean.png" width="350" title="IAH: INTERNET WAR logo"/> </p>

IAH: INTERNET WAR is a unique and strategic turn-based RTS where you immerse yourself in an endless internet conflict. In this game, you'll embark on a thrilling journey to capture internet websites, eliminate malware, battle powerful corporations, resist government authorities, and outwit rival hackers.

For programmers seeking a competitive challenge, IAH offers algorithmic multiplayer. In this mode, you cannot use a cursor or controller; your interactions are limited to the API Interface. Create or join competitive clubs, write code solo or collaborate in a group, and use your preferred IDE and programming language to wage highly competitive algorithmic wars.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="center">  <img src="gif_nextjs.gif" width="450" title="battle"/> </p>

### Quick Start Guide

1. Obtain the API Key from the Main Website: HTTPS://IAMHACKER.CC
2. Launch IAH: INTERNET WAR Game. The default AI Port is 6800
3. You will have to build quite a lot, but this is an excellent base to get you started.
   https://github.com/VitaliKirpu/IAH_SingleplayerAITemplate_NextJs/blob/1a0e1794a690a7c948e82ce7c16aed716b873563/src/app/core/ai/runner.js#L5
5. I have only implemented **/v1/playerstate** , you can see whole API Documentation here on the C# template documentation: https://github.com/VitaliKirpu/IAH_SinglePlayerAITemplate/wiki/IAH:-INTERNET-WAR-%7C-SINGLEPLAYER-AI-API or on the main website HTTPS://IAMHACKER.CC
https://github.com/VitaliKirpu/IAH_SingleplayerAITemplate_NextJs/blob/1a0e1794a690a7c948e82ce7c16aed716b873563/src/app/core/service.js#L4

### Troubleshooting
- Can't connect to the game client.
Make sure that the game client is running; the default port is 6800; if you changed which port the game client service is running, please edit this NextJs rewrite accordingly.
https://github.com/VitaliKirpu/IAH_SingleplayerAITemplate_NextJs/blob/4f785efaf18bda5448280a493f7b88992985ba92/next.config.js#L6

