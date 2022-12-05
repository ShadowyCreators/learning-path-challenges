import { expect } from "chai";
import { ethers } from "hardhat";
import { Attack__factory, Vulnerable__factory, Attack, Vulnerable } from "../../typechain-types/index";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

/**
 * NOTE: Do not touch. This file is used for testing purposes.
 */

describe("[Contracts] Level 3", () => {
  describe("Attack Contract", () => {
    let attack: Attack, vulnerable: Vulnerable, attacker: SignerWithAddress, user: SignerWithAddress;

    before(async () => {
      [attacker, user] = await ethers.getSigners();

      vulnerable = await new Vulnerable__factory(user).deploy();
      const depositTx = await vulnerable.deposit({ value: ethers.utils.parseEther("2") });
      await depositTx.wait();
      expect(await vulnerable.balances(user.address)).eq( ethers.utils.parseEther("2"));
      expect(await ethers.provider.getBalance(vulnerable.address)).eq( ethers.utils.parseEther("2"));
      attack = await new Attack__factory(attacker).deploy(vulnerable.address);
      expect((await attack.functions.vulnerableContract())[0]).eq(vulnerable.address);
    })

    it('Attacking user must steal ETH from the vulnerable contract', async () => {
        const attackerBalance = await ethers.provider.getBalance(attacker.address);
        const attackTx = await attack.attack();
        await attackTx.wait();
        const afterAttackBalance = await ethers.provider.getBalance(attacker.address);
        expect(afterAttackBalance).greaterThan(attackerBalance)
    })
  });
});