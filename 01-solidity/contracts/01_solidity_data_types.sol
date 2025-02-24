// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract SolidityDataTypes {
    uint256 balance;
    address owner;
    mapping(string => uint256) accounts;

    constructor() {
        balance = 333;
        owner = address(0x0D6a2FFf464dfa829DCC58d3Ee8125445FD448e5);
        accounts["theblokc"] = 10;

        // TODO: print the values above using console.log
        console.log("balance is ", balance);

        console.log("owner is ", owner);

        console.log("account is ", accounts["theblokc"]);
    }
}