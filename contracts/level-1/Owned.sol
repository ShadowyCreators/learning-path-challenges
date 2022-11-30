// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Owned {
	address public owner;

	// Contract constructor
	constructor() {
        // TODO: set the owner as the sender
	}

	// Access control modifier
	modifier onlyOwner {
	    // TODO: add logic to the modifier
	    _;
	}

    function privateFunctionForOwner() public view onlyOwner returns (address) {
        return owner;
    }

    function publicFunctionForUsers() public view returns (address) {
        // TODO: return the address of the msg sender
    }
}