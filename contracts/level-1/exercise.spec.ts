import { expect } from "chai";
import { ethers } from "hardhat";
import { Owned__factory, Owned } from "../../typechain-types/index";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

/**
 * NOTE: Do not touch. This file is used for testing purposes.
 */

describe("[Contracts] Level 1", () => {
  describe("Owned Contract", () => {
    let owned: Owned, owner: SignerWithAddress, user: SignerWithAddress;

    before(async () => {
      [owner, user] = await ethers.getSigners();

      owned = await new Owned__factory(owner).deploy();
      expect((await owned.functions.owner())[0]).eq(owner.address)
    })

    it("Owner should be able to call `privateFunctionForOwner`", async () => {
      expect(await owned.privateFunctionForOwner()).to.equal(owner.address);
    });

    it("User should not be able to call `privateFunctionForOwner`", async () => {
      try {
        await owned.connect(user).privateFunctionForOwner()
      } catch (error: any) {
        expect(error.code).eq('CALL_EXCEPTION')
      }
    });

    it("User should be able to call `publicFunctionForUsers`", async () => {
      expect(await owned.connect(user).publicFunctionForUsers()).to.equal(user.address);
    });
  });
});