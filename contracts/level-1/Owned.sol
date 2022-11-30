// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Owned {
	address public owner;

	// Contract constructor
	constructor() {
        owner = msg.sender;
	}

	// Access control modifier
	modifier onlyOwner {
	    require(msg.sender == owner);
	    _;
	}

    function privateFunctionForOwner() public view onlyOwner returns (address) {
        return owner;
    }

    function publicFunctionForUsers() public view returns (address) {
        return msg.sender;
    }
}