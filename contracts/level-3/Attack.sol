// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Attack {
    // TODO: create Attack contract
    address public vulnerableContract;

    constructor(address vulnerableAddress) {
        vulnerableContract = vulnerableAddress;
    }

    function attack() external payable {
        // TODO: implement attack function
    }
}