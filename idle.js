const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');

const config = require('./config.json');
 
const client = new SteamUser();
const community = new SteamCommunity();
 
const logOnOptions = {
    accountName: config.username,
    password: config.password,
    twoFactorCode: SteamTotp.generateAuthCode(config.sharedSecret)
};

 
client.logOn(logOnOptions);
 
    console.log('succesfully logged on.');

client.on('loggedOn', () => {
    client.setPersona(SteamUser.Steam.EPersonaState.Online,config.botName);
    client.gamesPlayed([440]);
    client.gamesPlayed([570]);
    client.gamesPlayed([630]);

});
 
client.on("friendMessage", function(steamID, message) {
    if (message == "hi") {
        client.chatMessage(steamID,"Hey, what's up");
    }
});