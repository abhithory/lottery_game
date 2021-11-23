import React, { useEffect, useState } from 'react'

export default function AdminContrals(props) {
    const { lotteryContract, canPlayerBuyTicket, account } = props;

    const [adminMaticBalance, setAdminMaticBalance] = useState(null);
    const [adminAltBalance, setAdminAltBalance] = useState(null);

    const startGame = async () => {
        await lotteryContract.methods.startGame()
            .send({ from: account })
            .on('transactionHash', function (hash) {

            })
            .on('receipt', function (receipt) {

            })
            .on('confirmation', (confirmationNumber, receipt) => {
            })
            .on('error', function (error, receipt) {

            });
    }

    const maticData = async () => {
        const maticBalance = await lotteryContract.methods.knowAdminBalance()
            .send({ from: account })
            .on('transactionHash', function (hash) {

            })
            .on('receipt', function (receipt) {

            })
            .on('confirmation', (confirmationNumber, receipt) => {
                setAdminMaticBalance(maticBalance)
            })
            .on('error', function (error, receipt) {

            });
    }

    const altData = async () => {
            const altBalance = await lotteryContract.methods.knowAdminBalanceOfToken()
            .send({ from: account })
            .on('transactionHash', function (hash) {

            })
            .on('receipt', function (receipt) {

            })
            .on('confirmation', (confirmationNumber, receipt) => {
                setAdminAltBalance(altBalance)
            })
            .on('error', function (error, receipt) {

            });

    }

    const buttonClassName = "btn btn-glow custom-Big-Button-admin px-3 py-2 text-light";
    const buttonColClassName = "col-xl-2 col-md-3 col-4";
    return (
        <div>
            <h2>Welcome Admin</h2>
            <div className="d-flex">
                <p>Currently status: </p>
                {canPlayerBuyTicket
                    ?
                    <p>User can buy ticket</p>
                    :
                    <p>User can't buy ticket</p>
                }
            </div>
            {adminMaticBalance &&
                <div className="d-flex">
                    <p>Matic Balance: {adminMaticBalance}</p>
                </div>
            }
            {adminAltBalance &&
                <div className="d-flex">
                    <p>Alt Balance: {adminAltBalance}</p>
                </div>
            }
            <div className="row mt-4">
                <div className={buttonColClassName}>
                    <button onClick={startGame} className={buttonClassName}>Start Game</button>
                </div>
                <div className={buttonColClassName}>
                    <button onClick={maticData} className={buttonClassName}>Know Admin Matic Balance</button>
                </div>

                <div className={buttonColClassName}>
                    <button onClick={altData} className={buttonClassName}>Know Admin Alt Balance</button>
                </div>
            </div>
        </div>
    )
}
