// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Token is ERC721 {
    constructor() ERC721("TEST TOKEN", "XXX") {}
}