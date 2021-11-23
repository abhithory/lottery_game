import React, { useEffect, useState } from 'react'

import "../css/CustomTable.css"

export default function WinnerHistory(props) {
    const { lotteryContract, connected } = props;

    const [last30Winners, setLast30Winners] = useState([]);
    const [loadingWinner, setLoadingWinner] = useState(true)

    useEffect(() => {
        if (connected) {
            loadWinnerHistory();
        }
    }, []);

    useEffect(() => {
        if (connected) {
            loadWinnerHistory();
        }
    }, [lotteryContract]);

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }


    const loadWinnerHistory = async () => {
        const getCurrentGameCount = await lotteryContract.methods.getCurrentGameCount().call();
        const _reward = await lotteryContract.methods.getOneWinnerReward().call();
        let rewardForOne = _reward.toString();

        let _latestGame = getCurrentGameCount.toNumber() - 1;
        let _lastGame = 1;

        if (_latestGame > 30) {
            _lastGame = _latestGame - 30;
        } else {
            _lastGame = 1;
        }

        let _winnerArray = [];
        for (let i = _latestGame; i >= _lastGame; i--) {
            let _winners = await lotteryContract.methods.getWinnerPlayerOfGame(i).call();
            console.log(_winners);


            let _winnerItem1 = {
                'gameCount': i,
                "winner": _winners.Player1,
                'ticket': _winners.Ticket1,
                'reward': rewardForOne,
                'time': _winners.Time
            }
            let _winnerItem2 = {
                'gameCount': i,
                'winner': _winners.Player2,
                'ticket': _winners.Ticket2,
                'reward': rewardForOne,
                'time': _winners.Time
            }

            _winnerArray.push(_winnerItem1);
            _winnerArray.push(_winnerItem2);
        }

        setLast30Winners(_winnerArray);

        setLoadingWinner(false)

    }

    return (
        <div className="table-box mx-auto mt-2 p-4 text-light text-center">
            <h1>Winner history</h1>
            <p>Last 30 Winners</p>
            <div className="table-bg py-4">
                <table class="table  text-light ">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Winner</th>
                            <th>Reward</th>
                            <th>Ticket</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {last30Winners && last30Winners.map((winner, key) => {

                            return (
                                <tr key={key}>
                                    <td>{winner.gameCount}</td>
                                    <td>{winner.winner}</td>
                                    <td>{`${winner.reward / 10 ** 18} Matic`}</td>
                                    <td>{winner.ticket.toString()}</td>
                                    <td>{timeConverter(winner.time.toNumber())}</td>
                                </tr>
                            )
                        })
                        }

                    </tbody>

                </table>
                {loadingWinner &&
                    <div className="text-center">
                        <div class="spinner-border text-light my-1" role="status">
                        </div>

                    </div>}
            </div>

        </div>
    )
}
