const { assert } = require("chai");

const LotteryContract = artifacts.require("LotteryContract");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("Lottery", (accounts) => {
  let lotteryContract;
  let entryFee = 10 ** 18;
  let gasFee = 3000000;

  before(async () => {
    lotteryContract = await LotteryContract.deployed();
  });

  describe("test deployment", async () => {
    it("deploys successfully", async () => {
      const address = await lotteryContract.address;

      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });

  describe("Start Contract", async () => {
    it("contract strated successfully", async () => {
      const currentGameCount = await lotteryContract.getCurrentGameCount();
      assert.equal(currentGameCount.toNumber(), 1, "started game with round 1");

      const canPlayerBuyTicket = await lotteryContract.getCanPlayerBuyTicket();
      assert.equal(canPlayerBuyTicket, true, "yes user can buy tickets now");

      const onlySoldTicketOfGame = await lotteryContract.getOnlySoldTicketOfGame(currentGameCount.toNumber());
      assert.equal(onlySoldTicketOfGame, 0, "total zero tickets are sold");

      const totalTicketOfGame = await lotteryContract.getTotalTicketOfGame(currentGameCount.toNumber());
      assert.equal(totalTicketOfGame, 0, "total zero tickets in game");
    });

    it("buy 1 ticket successfully", async () => {
      const currentGameCount = await lotteryContract.getCurrentGameCount();
      assert.equal(currentGameCount.toNumber(), 1, "started game with round 1");

      await lotteryContract.buyTicket({ from: accounts[0], value: entryFee });

      const onlySoldTicketOfGame = await lotteryContract.getOnlySoldTicketOfGame(currentGameCount.toNumber());
      assert.equal(onlySoldTicketOfGame, 1, "total sold only tickts");

      const totalTicketOfGame = await lotteryContract.getTotalTicketOfGame(currentGameCount.toNumber());
      assert.equal(totalTicketOfGame, 1, "sold");
    });

    it("buy 2 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 1, "started game with round 1");
  
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
  
        const onlySoldTicketOfGame = await lotteryContract.getOnlySoldTicketOfGame(currentGameCount.toNumber());
        assert.equal(onlySoldTicketOfGame, 2, "total sold only tickts");
  
        const totalTicketOfGame = await lotteryContract.getTotalTicketOfGame(currentGameCount.toNumber());
        assert.equal(totalTicketOfGame, 2, "sold ");
      });
      it("buy 3 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 1, "started game with round 1");
  
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
  
        const onlySoldTicketOfGame = await lotteryContract.getOnlySoldTicketOfGame(currentGameCount.toNumber());
        assert.equal(onlySoldTicketOfGame, 3, "total sold only tickts");
  
        const totalTicketOfGame = await lotteryContract.getTotalTicketOfGame(currentGameCount.toNumber());
        assert.equal(totalTicketOfGame, 3, "sold ");
      });
      it("buy 4-20 ticket successfully", async () => {
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });


    it("2 buy 1-20 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 2, "started game with round 1");

        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("2 buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });


    it("3 buy 1-20 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 3, "started game with round 1");

        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("3 buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicketUsingReferral(accounts[3],{ from: accounts[1], value: entryFee  });
        
    });


    it("4 buy 1-20 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 4, "started game with round 1");

        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("4 buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });


    it("5 buy 1-20 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 5, "started game with round 1");

        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("5 buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicketUsingReferral(accounts[2],{ from: accounts[1], value: entryFee  });
        
    });

    it("6 buy 1-20 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 6, "started game with round 1");

        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("6 buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });


    it("7 buy 1-20 ticket successfully", async () => {
        const currentGameCount = await lotteryContract.getCurrentGameCount();
        assert.equal(currentGameCount.toNumber(), 7, "started game with round 1");

        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[2], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[3], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[4], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[5], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[6], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[7], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[8], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[9], value: entryFee  });
        await lotteryContract.buyTicket({ from: accounts[1], value: entryFee  });
        
    });

    it("7 buy 21 ticket successfully", async () => {
        await lotteryContract.buyTicketUsingReferral(accounts[1],{ from: accounts[1], value: entryFee  });
        
    });


  });
});
