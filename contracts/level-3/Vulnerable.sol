// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Vulnerable {
    mapping(address => uint) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint balance = balances[msg.sender];
        require(balance > 0);

        (bool sent, ) = msg.sender.call{value: balance}("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] = 0;
    }


}