import React, { useEffect, useState } from 'react'
import OneTicketUserHave from './OneTicketUserHave';

import "../css/CustomButtons.css"
import "../css/MainBackground.css"
import AdminContrals from './AdminContrals';
import { useParams } from 'react-router';

export default function Main(props) {
    const { account, lotteryContract, connected, ConnectAccount, ticketPrice } = props;
    const { referCode } = useParams();



    const [mainLoading, setMainLoading] = useState(true);
    const [isAdmin, setisAdmin] = useState(false);
    const [canPlayerBuyTicket, setCanPlayerBuyTicket] = useState(false);
    const [currentGameCount, setCurrentGameCount] = useState(null);
    const [ticketsLeft, setTicketsLeft] = useState(null);
    const [ticketsInDraw, setTicketsInDraw] = useState(null);
    const [playerTickets, setPlayerTickets] = useState([]);

    const [playerRefferalCode, setPlayerRefferalCode] = useState(null);

    useEffect(() => {
        if (connected) {
            checkRefferal();
            loadData();
        }
    }, []);

    useEffect(() => {
        if (connected) {
            checkRefferal();
            loadData();
        }
    }, [lotteryContract]);


    const checkRefferal = () => {
        if (referCode != null) {
            setPlayerRefferalCode(referCode)
        } else {
            setPlayerRefferalCode(null);
        }
    }

    const connectToAccount = () => {
        if (!connected) {
            setMainLoading(true);
            ConnectAccount()
        }
    }

    const loadData = async () => {
        setMainLoading(true);
        const getCanPlayerBuyTicket = await lotteryContract.methods.getCanPlayerBuyTicket().call();
        setCanPlayerBuyTicket(getCanPlayerBuyTicket);

        const isAdmin = await lotteryContract.methods.isAdmin().call();
        setisAdmin(isAdmin);

        const getCurrentGameCount = await lotteryContract.methods.getCurrentGameCount().call();
        setCurrentGameCount(getCurrentGameCount.toNumber());

        const getTotalTickets = await lotteryContract.methods.getTotalTickets().call();
        const getOnlySoldTicketOfGame = await lotteryContract.methods.getOnlySoldTicketOfGame(getCurrentGameCount.toNumber()).call();
        setTicketsLeft(getTotalTickets.toNumber() - getOnlySoldTicketOfGame.toNumber());

        const getTotalTicketOfGame = await lotteryContract.methods.getTotalTicketOfGame(getCurrentGameCount.toNumber()).call();
        setTicketsInDraw(getTotalTicketOfGame.toNumber());

        const getAllTicketsOfUserInGame = await lotteryContract.methods.getAllTicketsOfUserInGame(account, getCurrentGameCount.toNumber()).call();
        setPlayerTickets(getAllTicketsOfUserInGame);

        setMainLoading(false);

    }

    const loadDataAuto = async () => {
        const getCanPlayerBuyTicket = await lotteryContract.methods.getCanPlayerBuyTicket().call();
        setCanPlayerBuyTicket(getCanPlayerBuyTicket);

        const isAdmin = await lotteryContract.methods.isAdmin().call();
        setisAdmin(isAdmin);

        const getCurrentGameCount = await lotteryContract.methods.getCurrentGameCount().call();
        setCurrentGameCount(getCurrentGameCount.toNumber());

        const getTotalTickets = await lotteryContract.methods.getTotalTickets().call();
        const getOnlySoldTicketOfGame = await lotteryContract.methods.getOnlySoldTicketOfGame(getCurrentGameCount.toNumber()).call();
        setTicketsLeft(getTotalTickets.toNumber() - getOnlySoldTicketOfGame.toNumber());

        const getTotalTicketOfGame = await lotteryContract.methods.getTotalTicketOfGame(getCurrentGameCount.toNumber()).call();
        setTicketsInDraw(getTotalTicketOfGame.toNumber());

        const getAllTicketsOfUserInGame = await lotteryContract.methods.getAllTicketsOfUserInGame(account, getCurrentGameCount.toNumber()).call();
        setPlayerTickets(getAllTicketsOfUserInGame);
    }
    setInterval(() => {
        if (lotteryContract) {

            loadDataAuto();
        }
    }, 5000);

    const buyTicket = async () => {
        if (connected && lotteryContract != null) {
            setMainLoading(true);
            const getCanPlayerBuyTicket = await lotteryContract.methods.getCanPlayerBuyTicket().call();
            if (getCanPlayerBuyTicket) {
                if (playerRefferalCode != null) {
                    buyTicketwithRefferalCode();
                } else {
                    buyTicketWithoutRefferal()
                }
            } else {
                alert('game not started yet')
            }
        } else {
            setMainLoading(false);
            connectToAccount();

        }


    }

    const buyTicketWithoutRefferal = async () => {
        await lotteryContract.methods.buyTicket()
            .send({ from: account, value: ticketPrice })
            .on('confirmation', (confirmationNumber, receipt) => {
                loadData();
            })
            .on('error', function (error, receipt) {
                loadData();
            });
    }

    const buyTicketwithRefferalCode = async () => {
        await lotteryContract.methods.buyTicketUsingReferral(playerRefferalCode)
            .send({ from: account, value: ticketPrice })
            .on('confirmation', (confirmationNumber, receipt) => {
                loadData();
            })
            .on('error', function (error, receipt) {
                loadData();
            });
    }

    const ticketColStyle = "col-xl-2 col-md-3 col-6 mb-2"

    const refferalLink = 'http://localhost:3000/#/referral/' + account;
    return (
        <div className="main-box mx-auto mt-2 p-4 text-light text-center">
            <div className="bg-holder" style={{ backgroundImage: 'url(img/bg/heroheader-bg.png)', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>

            {connected &&
                !canPlayerBuyTicket &&
                <div className="d-flex ">
                    <div class="ml-auto spinner-border text-light my-1" role="status">
                    </div>
                    <h3 className="mr-auto">Please Wait. Previous round winners are  declaring</h3>
                </div>
            }
            <div className="row">
                <div className="col-md-6 text-center">
                    <div onClick={connectToAccount} className="glassBg-box mx-6 py-3 glow-div2">
                        <h2>Tickets Left</h2>
                        <div className="text-bg-glass mt-1">
                            {connected
                                ?
                                mainLoading
                                    ?
                                    <div class="spinner-border text-light my-1" role="status">
                                    </div>
                                    :
                                    <h1 className="letter-spaceing">{ticketsLeft}</h1>
                                :
                                <h1 className="fade-text-color">Connect</h1>
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-6 text-center ">
                    <div onClick={connectToAccount} className="glassBg-box mx-6 py-3 glow-div2 mt-md-0 mt-2">
                        <h2>Tickets in Draw</h2>
                        <div className="text-bg-glass mt-1">
                            {connected
                                ?
                                mainLoading
                                    ?
                                    <div class="spinner-border text-light my-1" role="status">
                                    </div>
                                    :
                                    <h1 className="letter-spaceing">{ticketsInDraw}</h1>
                                :
                                <h1 className="fade-text-color">Connect</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <p>{currentGameCount}</p>

            <button onClick={buyTicket} className="btn btn-glow custom-Big-Button text-light mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src="img/maticlogo.png" alt="" style={{ height: 100 }} />
                    <div className="">
                        <h2>Buy Ticket Now</h2>
                        <h6>For {ticketPrice / 10 ** 18} Matic</h6>
                    </div>

                </div>
            </button>

            {
                !connected &&
                <p>Please Connect to your Wallet for play game</p>
            }

            {connected &&
                playerTickets.length >= 1 && playerRefferalCode == null &&
                <div className="mt-4">
                    <p>Now you can refer you friend and get free ticket</p>
                    <p>Refferal Link: <a className="text-warning" target="_blank" href={refferalLink}>{refferalLink}</a></p>
                </div>

            }

            {
                playerRefferalCode != null &&
                <p>Refferal Code: {playerRefferalCode}</p>
            }


            <div className="text-left mt-4">
                <h5>Your tickets in this game({playerTickets.length}):</h5>
                <div className="row  align-items-start justify-content-start ">
                    {playerTickets && playerTickets.map((ticket, key) => {
                        return (
                            <div className={ticketColStyle} key={key}>
                                <OneTicketUserHave ticketNo={ticket.ticket.toNumber()} by={ticket.by} />
                            </div>
                        )
                    })
                    }

                </div>

            </div>


            {
                isAdmin &&
                <AdminContrals lotteryContract={lotteryContract} account={account} canPlayerBuyTicket={canPlayerBuyTicket} />
            }
        </div >
    )
}
