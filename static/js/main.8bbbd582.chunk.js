(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e){e.exports={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"address",name:"winner",type:"address"},{indexed:!1,internalType:"uint256",name:"date",type:"uint256"}],name:"FailedTransferRewardToWinnerEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"address",name:"winner",type:"address"},{indexed:!1,internalType:"uint256",name:"date",type:"uint256"}],name:"TransferRewardToWinnerEvent",type:"event"},{inputs:[],name:"buyTicket",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_referral",type:"address"}],name:"buyTicketUsingReferral",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_gamecount",type:"uint256"}],name:"getAllTicketsOfUserInGame",outputs:[{components:[{internalType:"uint256",name:"ticket",type:"uint256"},{internalType:"string",name:"by",type:"string"}],internalType:"struct LotteryContract.UserTicket[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCanPlayerBuyTicket",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentGameCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gamecount",type:"uint256"},{internalType:"uint256",name:"_ticket",type:"uint256"}],name:"getInGameOwnerOfTicket",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOneTicketPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOneWinnerReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gamecount",type:"uint256"}],name:"getOnlySoldTicketOfGame",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gamecount",type:"uint256"}],name:"getTotalTicketOfGame",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalTickets",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalWinnerCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gamecount",type:"uint256"}],name:"getWinnerPlayerOfGame",outputs:[{components:[{internalType:"address",name:"Player1",type:"address"},{internalType:"address",name:"Player2",type:"address"},{internalType:"uint256",name:"Ticket1",type:"uint256"},{internalType:"uint256",name:"Ticket2",type:"uint256"},{internalType:"uint256",name:"Time",type:"uint256"}],internalType:"struct LotteryContract.WinnerPlayer",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"isAdmin",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"knowAdminBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_tokenAddress",type:"address"}],name:"knowAdminBalanceOfToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"requestId",type:"bytes32"},{internalType:"uint256",name:"randomness",type:"uint256"}],name:"rawFulfillRandomness",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_owner",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdrawAdminBalance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_tokenAddress",type:"address"},{internalType:"address payable",name:"_owner",type:"address"}],name:"withdrawAdminBalanceOfToken",outputs:[],stateMutability:"nonpayable",type:"function"}]}},254:function(e,t,n){e.exports=n(589)},272:function(e,t){},274:function(e,t){},370:function(e,t){},410:function(e,t){},416:function(e,t){},418:function(e,t){},450:function(e,t){},452:function(e,t){},453:function(e,t){},458:function(e,t){},460:function(e,t){},466:function(e,t){},468:function(e,t){},487:function(e,t){},499:function(e,t){},502:function(e,t){},512:function(e,t){},520:function(e,t){},540:function(e,t){},542:function(e,t){},556:function(e,t){},564:function(e,t){},572:function(e,t,n){},574:function(e,t,n){},576:function(e,t,n){},582:function(e,t,n){},584:function(e,t,n){},586:function(e,t,n){},589:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(246),i=n.n(c),l=n(5),o=n.n(l),s=n(9),u=n(247),m=n(252),p=n(248),d=n(130),y=n(253),f=n(67),b=n(56),h=n(0),v=n(131),g=n.n(v),w=n(249),E=(n(568),n(570),n(12));n(572);function x(e){var t=e.ticketNo,n=e.by;return r.a.createElement("div",{className:"ticketBg glow-div2"},r.a.createElement("div",{className:"my-auto"},r.a.createElement("p",null,"Ticket No."),r.a.createElement("h2",null,t),r.a.createElement("p",{style:{fontSize:10}},n)))}n(574),n(576);function k(e){var t=e.lotteryContract,n=e.canPlayerBuyTicket,c=e.account,i=Object(a.useState)(null),l=Object(E.a)(i,2),u=l[0],m=l[1],p=Object(a.useState)(null),d=Object(E.a)(p,2),y=d[0],f=d[1],b=function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.startGame().send({from:c}).on("transactionHash",function(e){}).on("receipt",function(e){}).on("confirmation",function(e,t){}).on("error",function(e,t){});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.knowAdminBalance().send({from:c}).on("transactionHash",function(e){}).on("receipt",function(e){}).on("confirmation",function(e,t){m(n)}).on("error",function(e,t){});case 2:n=e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.knowAdminBalanceOfToken().send({from:c}).on("transactionHash",function(e){}).on("receipt",function(e){}).on("confirmation",function(e,t){f(n)}).on("error",function(e,t){});case 2:n=e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g="btn btn-glow custom-Big-Button-admin px-3 py-2 text-light";return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome Admin"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("p",null,"Currently status: "),n?r.a.createElement("p",null,"User can buy ticket"):r.a.createElement("p",null,"User can't buy ticket")),u&&r.a.createElement("div",{className:"d-flex"},r.a.createElement("p",null,"Matic Balance: ",u)),y&&r.a.createElement("div",{className:"d-flex"},r.a.createElement("p",null,"Alt Balance: ",y)),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-xl-2 col-md-3 col-4"},r.a.createElement("button",{onClick:b,className:g},"Start Game")),r.a.createElement("div",{className:"col-xl-2 col-md-3 col-4"},r.a.createElement("button",{onClick:h,className:g},"Know Admin Matic Balance")),r.a.createElement("div",{className:"col-xl-2 col-md-3 col-4"},r.a.createElement("button",{onClick:v,className:g},"Know Admin Alt Balance"))))}function T(e){var t=e.account,n=e.lotteryContract,c=e.connected,i=e.ConnectAccount,l=e.ticketPrice,u=Object(h.f)().referCode,m=Object(a.useState)(!0),p=Object(E.a)(m,2),d=p[0],y=p[1],f=Object(a.useState)(!1),b=Object(E.a)(f,2),v=b[0],g=b[1],w=Object(a.useState)(!1),T=Object(E.a)(w,2),N=T[0],C=T[1],O=Object(a.useState)(null),j=Object(E.a)(O,2),M=j[0],A=j[1],B=Object(a.useState)(null),S=Object(E.a)(B,2),P=S[0],q=S[1],G=Object(a.useState)(null),_=Object(E.a)(G,2),W=_[0],D=_[1],I=Object(a.useState)([]),U=Object(E.a)(I,2),R=U[0],L=U[1],F=Object(a.useState)(null),H=Object(E.a)(F,2),J=H[0],Y=H[1];Object(a.useEffect)(function(){c&&(z(),V())},[]),Object(a.useEffect)(function(){c&&(z(),V())},[n]);var z=function(){Y(null!=u?u:null)},K=function(){c||(y(!0),i())},V=function(){var e=Object(s.a)(o.a.mark(function e(){var a,r,c,i,l,s,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,n.methods.getCanPlayerBuyTicket().call();case 3:return a=e.sent,C(a),e.next=7,n.methods.isAdmin().call();case 7:return r=e.sent,g(r),e.next=11,n.methods.getCurrentGameCount().call();case 11:return c=e.sent,A(c.toNumber()),e.next=15,n.methods.getTotalTickets().call();case 15:return i=e.sent,e.next=18,n.methods.getOnlySoldTicketOfGame(c.toNumber()).call();case 18:return l=e.sent,q(i.toNumber()-l.toNumber()),e.next=22,n.methods.getTotalTicketOfGame(c.toNumber()).call();case 22:return s=e.sent,D(s.toNumber()),e.next=26,n.methods.getAllTicketsOfUserInGame(t,c.toNumber()).call();case 26:u=e.sent,L(u),y(!1);case 29:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(s.a)(o.a.mark(function e(){var a,r,c,i,l,s,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.getCanPlayerBuyTicket().call();case 2:return a=e.sent,C(a),e.next=6,n.methods.isAdmin().call();case 6:return r=e.sent,g(r),e.next=10,n.methods.getCurrentGameCount().call();case 10:return c=e.sent,A(c.toNumber()),e.next=14,n.methods.getTotalTickets().call();case 14:return i=e.sent,e.next=17,n.methods.getOnlySoldTicketOfGame(c.toNumber()).call();case 17:return l=e.sent,q(i.toNumber()-l.toNumber()),e.next=21,n.methods.getTotalTicketOfGame(c.toNumber()).call();case 21:return s=e.sent,D(s.toNumber()),e.next=25,n.methods.getAllTicketsOfUserInGame(t,c.toNumber()).call();case 25:u=e.sent,L(u);case 27:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();setInterval(function(){n&&Q()},5e3);var X=function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!c||null==n){e.next=8;break}return y(!0),e.next=4,n.methods.getCanPlayerBuyTicket().call();case 4:e.sent?null!=J?$():Z():alert("game not started yet"),e.next=10;break;case 8:y(!1),K();case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.buyTicket().send({from:t,value:l}).on("confirmation",function(e,t){V()}).on("error",function(e,t){V()});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.methods.buyTicketUsingReferral(J).send({from:t,value:l}).on("confirmation",function(e,t){V()}).on("error",function(e,t){V()});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ee="https://abhithory.github.io/lottery_game/#/referral/"+t;return r.a.createElement("div",{className:"main-box mx-auto mt-2 p-4 text-light text-center"},r.a.createElement("div",{className:"bg-holder",style:{backgroundImage:"url(img/bg/heroheader-bg.png)",backgroundPosition:"center",backgroundSize:"contain"}}),c&&!N&&r.a.createElement("div",{className:"d-flex "},r.a.createElement("div",{class:"ml-auto spinner-border text-light my-1",role:"status"}),r.a.createElement("h3",{className:"mr-auto"},"Please Wait. Previous round winners are  declaring")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement("div",{onClick:K,className:"glassBg-box mx-6 py-3 glow-div2"},r.a.createElement("h2",null,"Tickets Left"),r.a.createElement("div",{className:"text-bg-glass mt-1"},c?d?r.a.createElement("div",{class:"spinner-border text-light my-1",role:"status"}):r.a.createElement("h1",{className:"letter-spaceing"},P):r.a.createElement("h1",{className:"fade-text-color"},"Connect")))),r.a.createElement("div",{className:"col-md-6 text-center "},r.a.createElement("div",{onClick:K,className:"glassBg-box mx-6 py-3 glow-div2 mt-md-0 mt-2"},r.a.createElement("h2",null,"Tickets in Draw"),r.a.createElement("div",{className:"text-bg-glass mt-1"},c?d?r.a.createElement("div",{class:"spinner-border text-light my-1",role:"status"}):r.a.createElement("h1",{className:"letter-spaceing"},W):r.a.createElement("h1",{className:"fade-text-color"},"Connect"))))),r.a.createElement("p",null,M),r.a.createElement("button",{onClick:X,className:"btn btn-glow custom-Big-Button text-light mt-5"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("img",{className:"img-fluid",src:"img/maticlogo.png",alt:"",style:{height:100}}),r.a.createElement("div",{className:""},r.a.createElement("h2",null,"Buy Ticket Now"),r.a.createElement("h6",null,"For ",l/Math.pow(10,18)," Matic")))),!c&&r.a.createElement("p",null,"Please Connect to your Wallet for play game"),c&&R.length>=1&&null==J&&r.a.createElement("div",{className:"mt-4"},r.a.createElement("p",null,"Now you can refer you friend and get free ticket"),r.a.createElement("p",null,"Refferal Link: ",r.a.createElement("a",{className:"text-warning",target:"_blank",href:ee},ee))),null!=J&&r.a.createElement("p",null,"Refferal Code: ",J),r.a.createElement("div",{className:"text-left mt-4"},r.a.createElement("h5",null,"Your tickets in this game(",R.length,"):"),r.a.createElement("div",{className:"row  align-items-start justify-content-start "},R&&R.map(function(e,t){return r.a.createElement("div",{className:"col-xl-2 col-md-3 col-6 mb-2",key:t},r.a.createElement(x,{ticketNo:e.ticket.toNumber(),by:e.by}))}))),v&&r.a.createElement(k,{lotteryContract:n,account:t,canPlayerBuyTicket:N}))}n(582),n(584);function N(e){var t=e.ConnectAccount,n=e.account;return r.a.createElement("nav",{className:"navbar  navbar-expand-xl navbar-dark glassNav"},r.a.createElement("div",{className:"container-fluid px-md-5"},r.a.createElement(b.b,{className:"navbar-brand mx-xl-0 mx-auto ",to:"/"},r.a.createElement("h3",null,"Lottery")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"fontPara navbar-nav me-auto ms-auto mb-2 mb-lg-0 "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/how-to-play"},r.a.createElement("h4",{className:"nav-link"},"How to play"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(b.b,{className:"nav-link",to:"/winner-history"},r.a.createElement("h4",{className:"nav-link"},"Winner History")))),r.a.createElement("button",{onClick:t,className:"btn btn-dark btn-lg"},n?"".concat(n.substring(0,3),"...").concat(n.substring(n.length-4,n.length)," "):"Connect"))))}n(586);function C(e){var t=e.lotteryContract,n=e.connected,c=Object(a.useState)([]),i=Object(E.a)(c,2),l=i[0],u=i[1],m=Object(a.useState)(!0),p=Object(E.a)(m,2),d=p[0],y=p[1];Object(a.useEffect)(function(){n&&f()},[]),Object(a.useEffect)(function(){n&&f()},[t]);var f=function(){var e=Object(s.a)(o.a.mark(function e(){var n,a,r,c,i,l,s,m,p,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.getCurrentGameCount().call();case 2:return n=e.sent,e.next=5,t.methods.getOneWinnerReward().call();case 5:a=e.sent,r=a.toString(),c=n.toNumber()-1,i=1,i=c>30?c-30:1,l=[],s=c;case 12:if(!(s>=i)){e.next=24;break}return e.next=15,t.methods.getWinnerPlayerOfGame(s).call();case 15:m=e.sent,console.log(m),p={gameCount:s,winner:m.Player1,ticket:m.Ticket1,reward:r,time:m.Time},d={gameCount:s,winner:m.Player2,ticket:m.Ticket2,reward:r,time:m.Time},l.push(p),l.push(d);case 21:s--,e.next=12;break;case 24:u(l),y(!1);case 26:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"table-box mx-auto mt-2 p-4 text-light text-center"},r.a.createElement("h1",null,"Winner history"),r.a.createElement("p",null,"Last 30 Winners"),r.a.createElement("div",{className:"table-bg py-4"},r.a.createElement("table",{class:"table  text-light "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Game"),r.a.createElement("th",null,"Winner"),r.a.createElement("th",null,"Reward"),r.a.createElement("th",null,"Ticket"),r.a.createElement("th",null,"Time"))),r.a.createElement("tbody",null,l&&l.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.gameCount),r.a.createElement("td",null,e.winner),r.a.createElement("td",null,"".concat(e.reward/Math.pow(10,18)," Matic")),r.a.createElement("td",null,e.ticket.toString()),r.a.createElement("td",null,function(e){var t=new Date(1e3*e),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+a+" "+n+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}(e.time.toNumber())))}))),d&&r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{class:"spinner-border text-light my-1",role:"status"}))))}function O(e){return r.a.createElement("div",{className:"banner-img-bg mx-md-5 text-light  py-4 "},r.a.createElement("div",{className:"d-md-flex align-items-center justify-content-between text-center"},r.a.createElement("div",{className:"glow-div2 glassBg-box-timer text-center"},r.a.createElement("h2",{className:"my-4"},"Play Game And Earn"))))}function j(){return r.a.createElement("div",{className:"text-light glassBg-box p-5 m-5"},r.a.createElement("h1",null,"How To Play"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum impedit sunt alias perspiciatis sequi amet fuga officiis iste ratione quidem repellendus provident voluptas voluptatum illo mollitia eligendi placeat, quos ab error. Dolorum, fuga deleniti assumenda quidem neque veniam, aspernatur tempore maiores dolores quis laudantium aliquid magni! Expedita iure eos, illum eius error ratione laudantium pariatur natus suscipit a esse ut fugiat, quo at tenetur doloremque ullam veniam adipisci reiciendis, soluta neque rem. Expedita ipsa amet cupiditate deleniti aut laborum doloribus laboriosam eaque numquam ab, eius blanditiis quo tempore voluptatem cum iste earum sunt ea repellendus vitae veniam quos corporis! Eius, nemo. Maiores aspernatur unde sit tempore necessitatibus itaque accusantium perferendis at ut, aliquam nostrum illo adipisci, voluptatum saepe illum animi laboriosam vel? Vel exercitationem, fugiat dolor fugit doloribus harum modi ullam itaque. Labore animi maiores officia molestiae possimus. Ullam alias soluta aut nam at nihil eveniet assumenda doloribus voluptate aliquid. Praesentium quas nobis magnam placeat."))}var M=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={connected:!1,account:"",gameStartDate:0,lotteryContract:null,ticketPrice:Math.pow(10,18),loading:!0},n.ConnectAccount=n.ConnectAccount.bind(Object(f.a)(Object(f.a)(n))),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!1});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"ConnectAccount",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadWeb3();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadWeb3",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=7;break}return window.web3=new g.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:this.loadBlockChatData(),e.next=8;break;case 7:window.web3?(window.web3=new g.a(window.web3.currentProvider),this.loadBlockChatData()):window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockChatData",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t,n,a,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.next=3,t.eth.getAccounts();case 3:return n=e.sent,t.eth.defaultAccount=n[0],this.setState({account:n[0]}),e.next=8,t.eth.net.getId();case 8:if(80001!==(a=e.sent)&&137!==a){e.next=23;break}return this.setState({connected:!0}),"0x9fB8E9429465e51A3Eb3cd303FEb28cE7C867089",e.next=14,t.eth.Contract(w.abi,"0x9fB8E9429465e51A3Eb3cd303FEb28cE7C867089");case 14:return r=e.sent,this.setState({lotteryContract:r}),e.next=18,r.methods.getOneTicketPrice().call();case 18:c=e.sent,this.setState({ticketPrice:c.toString()}),this.setState({loading:!1}),e.next=25;break;case 23:window.alert("Blockchat contract not deployed to detected network."),this.switchToPolygonTestNet();case 25:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"switchToPolygonTestNet",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x13881"}]});case 3:this.loadBlockChatData(),e.next=17;break;case 6:if(e.prev=6,e.t0=e.catch(0),4902!==e.t0.code){e.next=17;break}return e.prev=9,e.next=12,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x13881",chainName:"Polygon TestNet Mumbai",rpcUrls:["https://rpc-mumbai.maticvigil.com/"],nativeCurrency:{name:"Matic",symbol:"Matic",decimals:18},blockExplorerUrls:["https://explorer-mumbai.maticvigil.com"]}]});case 12:this.loadBlockChatData(),e.next=17;break;case 15:e.prev=15,e.t1=e.catch(9);case 17:case"end":return e.stop()}},e,this,[[0,6],[9,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"switchToPolygonMainnet",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x89"}]});case 3:this.loadBlockChatData(),e.next=17;break;case 6:if(e.prev=6,e.t0=e.catch(0),4902!==e.t0.code){e.next=17;break}return e.prev=9,e.next=12,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x89",chainName:"Polygon Mainnet",rpcUrls:["https://rpc-mainnet.maticvigil.com/"],nativeCurrency:{name:"Matic",symbol:"Matic",decimals:18},blockExplorerUrls:["https://explorer.matic.network/"]}]});case 12:this.loadBlockChatData(),e.next=17;break;case 15:e.prev=15,e.t1=e.catch(9);case 17:case"end":return e.stop()}},e,this,[[0,6],[9,15]])}));return function(){return e.apply(this,arguments)}}()}]),Object(d.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"text-center"},"loading..."):r.a.createElement(b.a,null,r.a.createElement(N,{account:this.state.account,ConnectAccount:this.ConnectAccount}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0},r.a.createElement(O,{gameStartDate:this.state.gameStartDate}),r.a.createElement(T,{account:this.state.account,ticketPrice:this.state.ticketPrice,connected:this.state.connected,ConnectAccount:this.ConnectAccount,lotteryContract:this.state.lotteryContract})),r.a.createElement(h.a,{path:"/referral/:referCode",exact:!0},r.a.createElement(O,{gameStartDate:this.state.gameStartDate}),r.a.createElement(T,{ticketPrice:this.state.ticketPrice,account:this.state.account,connected:this.state.connected,ConnectAccount:this.ConnectAccount,lotteryContract:this.state.lotteryContract})),r.a.createElement(h.a,{path:"/winner-history",exact:!0},r.a.createElement(C,{lotteryContract:this.state.lotteryContract,connected:this.state.connected})),r.a.createElement(h.a,{path:"/how-to-play",exact:!0},r.a.createElement(j,null))))}}]),t}(a.Component);i.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[254,2,1]]]);
//# sourceMappingURL=main.8bbbd582.chunk.js.map