import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rinkeby, Mainnet, ChainId, DAppProvider, useEthers, Config } from '@usedapp/core';
import { MintArea } from './components/MintAreaSold';
import TwitterIcon from './images/twitter.png';
import OpenseaIcon from './images/opensea.png';
import './fonts/CartoonOneFont.css';

const config: Config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: `https://mainnet.infura.io/v3/ba30e50414ff488a8a09fb4619cc8891`,
  }, 
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}

function App() {
  return (
    <DAppProvider config={config}>
      <div className="SectionOne">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
          <a href="https://twitter.com/deadiestombwtf" style={{ marginLeft: '1vw', textDecoration: 'none' }} target="_blank"> <img className="NormalButton" src={TwitterIcon} style={{ height: '2vw', padding: '.5vw' }}></img></a>
          <a href="https://opensea.io/collection/deadiestombwtf" style={{ marginLeft: '1vw', textDecoration: 'none' }} target="_blank"> <img className="NormalButton" src={OpenseaIcon} style={{ height: '2vw', padding: '.5vw' }}></img></a>
        </div>
      <MintArea/>
        <div className="Center" style={{
          color: 'white', textShadow: '1px 1px 1px #000000', fontSize: '2vw', fontWeight: '900',margin:'7vw 1vw', fontFamily: 'Permanent Marker, cursive'
        }}>
          "We are the deadies we came from the tomb, we here to snortz calciyumm! 💀"
        </div>
        <div className='mainHeader' style={{ height: '5vw' }}>

          <div style={{ height: '3vw' }}></div>

          <div style={{ height: '.1vw', backgroundColor: 'rgba(255,255,255,.7)', margin: '0vw 1vw 0vw 1vw' }}></div>

          <div style={{ margin: '0vw 0vw 1vw 3vw', color: 'rgba(255,255,255,.7)', fontSize: "1vw" }}>© deadiestomb.wtf</div>

        </div>
      </div>

      
    </DAppProvider>
  );
}

export default App;
