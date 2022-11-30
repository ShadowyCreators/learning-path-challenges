import { expect } from "chai";
import { ethers } from "hardhat";
import { ShadowyNFT__factory, ShadowyNFT } from "../../typechain-types/index";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

/**
 * NOTE: Do not touch. This file is used for testing purposes.
 */

describe("[Contracts] Level 2", () => {
  describe("ShadowyNFT Contract", () => {
    let shadowyNFT: ShadowyNFT, owner: SignerWithAddress, user: SignerWithAddress;

    before(async () => {
      [owner, user] = await ethers.getSigners();

      shadowyNFT = await new ShadowyNFT__factory(owner).deploy();
      expect((await shadowyNFT.functions.owner())[0]).eq(owner.address)
    })

    it("User should be able to mint 1 NFT paying 1 ETH", async () => {
        const mintTx = await shadowyNFT.connect(user).mint(user.address, 1, { value: 1});
        await mintTx.wait();
        expect(await shadowyNFT.balanceOf(user.address)).eq(1);
    })

    it("User should be able to burn his NFT", async () => {
        const mintTx = await shadowyNFT.connect(user).mint(user.address, 2, { value: 1});
        await mintTx.wait();
        expect(await shadowyNFT.balanceOf(user.address)).eq(2);
        const burnTx = await shadowyNFT.connect(user).burn(2);
        await burnTx.wait();
        expect(await shadowyNFT.balanceOf(user.address)).eq(1);
    })

    it("User should not be able to burn another user's NFT", async () => {
        const mintTx = await shadowyNFT.connect(owner).mint(owner.address, 3, { value: 1});
        await mintTx.wait();
        expect(await shadowyNFT.balanceOf(owner.address)).eq(1);
        try {
            const burnTx = await shadowyNFT.connect(user).burn(3);
            await burnTx.wait();
        } catch (error: any) {
            expect(error.reason).includes('VM Exception while processing transaction: reverted with reason')
        }
    })
  });
});