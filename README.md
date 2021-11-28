# lottery_game
This is a lottery game. Where Anyone can Play and win rewards.

Dapp link:- https://abhithory.github.io/lottery_game/

Hi, I am Abhishek.

## Inspiration
I saw people buy lottery tickets to win money. So, to win money they buy different types of lottery tickets. But the main problem in this is that they have to trust a company that the company will do justice to them and it will reveal the real lottery and then give the price to the ticket owner. But the company can cheat people by not disclosing the exact lottery winner. So, it is not a transparent system. So, in this situation, I thought I should make a decentralized lottery system game. So that people trust 
 it because no one can change anything in it or cheat anyone. So, this is what is driving me to build this lottery game on the blockchain.
## What it does
It is a lottery game. Where anyone can buy lottery tickets. After all lottery tickets have been sold, the smart contract will find two random winners and then automatically send a reward to them and start a new round.

## How we built it
First I wrote 'all plans of smart contract that how it will work' on paper. Then I created a smart contract using Solidity. Then I built the front end using Reactjs. Then I integrate Reactjs with the smart contract using WEB3JS. Then I tested it and fixed some bugs.

## Challenges we ran into
The main challenge was how I can find a random ticket that will win because there is no random variable generator function in Solidity. So, this was the main challenge for me. then I found that using chainlink I can generate random numbers in the smart contracts. but the problem was not ended here because the chainlink fee on ethereum blockchain for generating random numbers is very high. So, then I found that on polygon we can generate random numbers at a very low fee using chainlink then the main problem was solved and I used it for the polygon chain.

## What I learned
The main thing that I learned is that the whole process of how Dapps work on blockchain and how i can create them. I learned how to convert an idea to a real working Dapp. And also learned more about solidity and blockchain.

## What's next for lottery Game
Now we can add many more things to this game.
1. We can increase the total number of tickets and winners reward
2. many more types of lottery 
3. Many More small games from users can win reward
4. can make the Front end more attractive
etc...

---------------------
Hope you like my project
Thank you,
Abhishek
