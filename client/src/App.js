import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';

import Web3 from "web3";

function App() {

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);

      }else{
        setIsTopOfPage(false);
      }
    })
    return () => {
      window.removeEventListener("scroll", ()=>{})
    }
  }, []);



  
  
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  
  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
      if(currentProvider) {
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount  =await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  const onDisconnect = () => {
    setIsConnected(false);
  }
  
  
  
  return (
    <div className="App">
     <Navbar isTopOfPage={isTopOfPage} onConnect={onConnect}/>
    </div>
  );
}

export default App;
