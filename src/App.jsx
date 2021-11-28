import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

import Web3 from "web3";
import LotteryJson from "./abis/LotteryContract.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Main from "./components/Main";

import "./css/main.css";
import Navbar from "./components/Navbar";
import WinnerHistory from "./components/WinnerHistory";
import Banner from "./components/Banner";
import Howtoplay from "./components/Howtoplay";

class App extends Component {

  async componentWillMount() {
    this.setState({ loading: false });
  }

  async ConnectAccount() {
    await this.loadWeb3();
  };

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      this.loadBlockChatData();

    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      this.loadBlockChatData();

    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockChatData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    // const networkData = LotteryJson.networks[networkId];
    
    // if (networkData) {
      if (networkId === 80001 || networkId === 137) {
      this.setState({ connected: true });
      const networkAddress = '0x9fB8E9429465e51A3Eb3cd303FEb28cE7C867089';
      const lotteryContract = await web3.eth.Contract(LotteryJson.abi, networkAddress);
      this.setState({ lotteryContract });

      const oneTicketPrice = await lotteryContract.methods.getOneTicketPrice().call();
      this.setState({ ticketPrice: oneTicketPrice.toString() });

      this.setState({ loading: false });
    } else {
      window.alert("Blockchat contract not deployed to detected network.");
      this.switchToPolygonTestNet()
    }
  }

  
    async switchToPolygonTestNet(){
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
      this.loadBlockChatData();
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13881",
                chainName: "Polygon TestNet Mumbai",
                rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                nativeCurrency: {
                  name: "Matic",
                  symbol: "Matic",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com"],
              },
            ],
          });
          this.loadBlockChatData();

        } catch (error) {
        }
      }
    }
  }


   async switchToPolygonMainnet() {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }],
      });
      this.loadBlockChatData();
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89",
                chainName: "Polygon Mainnet",
                rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
                nativeCurrency: {
                  name: "Matic",
                  symbol: "Matic",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.matic.network/"],
              },
            ],
          });
          this.loadBlockChatData();

        } catch (error) {
        }
      }
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      account: "",
      gameStartDate: 0,
      lotteryContract: null,
      ticketPrice: 10**18,
      loading: true,
    };

    this.ConnectAccount = this.ConnectAccount.bind(this)
  }

  render() {
    return (!this.state.loading
      ?
      <HashRouter>
        <Navbar account={this.state.account} ConnectAccount={this.ConnectAccount} />
        <Switch>
          <Route path="/" exact>
            <Banner gameStartDate={this.state.gameStartDate} />
            <Main account={this.state.account} ticketPrice={this.state.ticketPrice} connected={this.state.connected} ConnectAccount={this.ConnectAccount} lotteryContract={this.state.lotteryContract} />
          </Route >
          <Route path="/referral/:referCode" exact>
            <Banner gameStartDate={this.state.gameStartDate} />
            <Main ticketPrice={this.state.ticketPrice} account={this.state.account} connected={this.state.connected} ConnectAccount={this.ConnectAccount} lotteryContract={this.state.lotteryContract} />
          </Route >
          <Route path="/winner-history" exact>
            <WinnerHistory lotteryContract={this.state.lotteryContract} connected={this.state.connected} />
          </Route >

          <Route path="/how-to-play" exact>
            <Howtoplay />
          </Route >

        </Switch >
      </HashRouter >
      :
      <div className="text-center">
        loading...
      </div>

    );
  }
}

export default App;
