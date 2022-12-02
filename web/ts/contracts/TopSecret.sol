pragma solidity ^0.8.7;
// SPDX-License-Identifier: MIT OR Apache-2.0

contract TopSecret {

    struct Message {
        address addrSender;
        string msg;
    }


    Message[] private messages;

    mapping(address => string) private names;
    mapping(string => bool) private codes;
    mapping(string => int) private teams;
    mapping(address => bool) private isOwner;

    constructor() {
        names[0x11BF370F30D4e7cCEE8A1482d41F766E3038319a] = "Mr Elian";
        names[0x3feAf839B1a670b7d0a589F4e4b1309a3e348F92] = "Florian";
        codes["Hello World!"] = true;
        codes["code"] = true;

        isOwner[0x11BF370F30D4e7cCEE8A1482d41F766E3038319a] = true;
        isOwner[0x3feAf839B1a670b7d0a589F4e4b1309a3e348F92] = true;
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }

    function getName(address _who) public view returns (string memory) {
        return names[_who];
    }

    function getPoints(string memory _team) public view returns (int256) {
        return teams[_team];
    }

    function claimCode(string memory codeEntry, string memory teamName) public {
        // If the code is correct and the team name is not already taken
        if (codes[codeEntry]) {
            codes[codeEntry] = false;
            teams[teamName] == 0 ? teams[teamName] = 1 : teams[teamName]++;
        }
        else {
            revert("Invalid code");
        }
    }

    function sendMessage(string memory _msg) public {
        if (isOwner[msg.sender]) {
            messages.push(Message(msg.sender, _msg));
        }
        else {
            revert("You are not allowed to send messages");
        }
    }

    function addCode(string memory _code) public {
        if (isOwner[msg.sender]) {
            if(codes[_code]){
                revert("code already active");
            }
            codes[_code] = true;
        }
        else {
            revert("You are not allowed to add codes");
        }
    }

    function addOwner(address _newOwner, string memory name) public {
        if (isOwner[msg.sender]) {
            isOwner[_newOwner] = true;
            names[_newOwner] = name;
        }
        else {
            revert("You are not allowed to add owners");
        }
    }

    function removeOwner(address _oldOwner) public {
        if (isOwner[msg.sender]) {
            isOwner[_oldOwner] = false;
        }
        else {
            revert("You are not allowed to remove owners");
        }
    }

    function isAddressOwner(address _owner) public view returns (bool){
        return isOwner[_owner];
    }


}