'use strict';
const Discord = require("discord.js");//on appele le fichier discord.js pour que le bot fonctionne
const client = new Discord.Client();
const token = "Votre clé Token ici";//token de votre bot
var prefix = "!";//votre prefix choisir se que vous voulez cela appelra vos commandes
var mention = "<@348603065609355265>";// votre ID d'utilisateur
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot

//initialisation du bot pour voir les log
client.on("ready", () => {
//permet de savoir les nom des serveur se trouve le bot
var servers = client.guilds.array().map(g => g.name).join(',');
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
console.log("--------------------------------------");
console.log('[!]Connexion en cours.......... \n[!]Veuillez Patienté !!! \n[!]Tous les évenement sont après !!!   \n[!]Les préfix actuelle:  ' + prefix + '\n[!]Mentions de votre ID actuel = ' + mention + '\n[!]Nombre de membres: ' + memberCount + "\n[!]Nombre de serveurs: " + servercount + "\n[!]Nombre de canaux: " + channel);
});

client.on('message', message => {
const msgc = message.content;	
if (msgc === "!star" &&message.guild) { //effectuer son prefix de la commande
message.delete(0);     
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot
let m = " ";
m += 'je suis en compagnie de '+ memberCount +' membres \n';
m += 'je suis présent dans '+ servercount+' serveurs \n';
m += 'je suis sur '+ channel+' canaux \n';
message.author.send(m).catch(console.log)
message.reply("La commande star vous a été envoyé en privé :100: ")
}

////conversé avec son bot/////////////////////////////////
if(msgc.startsWith(prefix + 'test')){
//Mon bot 
message.reply('Test réusie !');
}
//Moi
else if (msgc === ("Bonjour")){
//Mon bot 
message.reply('Bonjour a toi');
}
//Moi 
if (msgc === ("Merci")){
//Mon Bot 	
message.reply('Mais de rien');
} 
//Moi
if (msgc === ("Sa vas ?")){
//Mon Bot 	
message.reply('Oui merci et toi ?'); 
}  
///////////////////////////FIN///////////////////////////

///////Question aléatoire du bot/////////////////
if (msgc.startsWith("PTDR")||msgc.startsWith ("MDR")|| msgc.startsWith ("XD")|| msgc.startsWith ("LOL")|| msgc.startsWith ("haha")){
//Mon Bot 	
message.reply('Sa te fait rire !!!');
}
////////////FIN//////////////////////////////////

////////Avec un effet d'embed plus propre///////
if(msgc === "?") {
message.channel.send({embed: {
color: 3447003,
//Mon Bot 
description: 'Vous avez beusoin daide ???'   
}})
}
if(msgc === "re") {
message.channel.send({embed: {
color: 3447003,
//Mon Bot 
description: 'De retour !'   
}})
}
/////////////////////////////////////////////////////////////////FIN///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////Le Bot donne l'heure , donc faite heure///////////////////////////////////////////////// 
var date = new Date();
if (msgc.startsWith("quelle heure et t'il")||msgc.startsWith ( "donne lheure" )|| msgc.startsWith ( "heure" )|| msgc.startsWith ( "ta lheure" )|| msgc.startsWith ( "quel heure il et ?")){
message.delete(0);//efface la commande
return message.channel.send(`On est le ${date.toString()}`)
}
//////////////////////////////////FIN//////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////embed voir vos commandes help qui seron envoyer part MP///////////////////////////////////////////////////////
if  (msgc.startsWith(prefix + "help")) {
message.delete(0);     
const embed = {
color: 16746215,
author: {
name: message.author.username,
icon_url: message.author.avatarURL
},   
title: 'VOICI LES COMMANDES', 
description: 'LES PREFIX COMMENCERONT PART !',
fields: [
{	  
name: '**!help **',
value: "!help qui vous envera part MP les commandes",
inline: true
}, {       
name: '**!test **',
value: "!teste vous retournera une réponse part votre bot test réusie",
inline: true
}, { 	
name: '**!star**',
value: "!star pour savoir sur combien de serveur ou channels ou en compagnie se trouve le bot",
inline: true
}, {    
name: '**heure**',
value: "heur vous retournera l'heure et la date , pas beusoin de mettre le prefixe juste faire , heure",
inline: true
}, {     
name: '**!commande**',
value: "!commande vous permet de voir vos commandes qui s'affichera sur le channel ou vous vous trouvez",
inline: true   
}],
thumbnail: {
url: message.client.iconURL
},
timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: client.user.username      
}}
message.reply("La commandes !help vous a été envoyé en privé :100: ")
message.author.send({embed});
}
/////////////////////////////////FIN////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////embed voir vos commandes qui seron affiché sur le salon ou vous avez fait la commande/////////////////////////////////////////////////////////////
if (msgc.startsWith(prefix + "commande")) {
message.delete(0);     
message.channel.send("", {
embed: {
color: 0x00AAFF,
author: message.author.name,
title: 'LES COMMANDES DU BOT !',
description: 'LES PREFIX !',
fields: [ 
{	
name: '**!help **',
value: "!help qui vous envera part MP les commandes",
inline: true
}, {         
name: '**!test **',
value: "!teste vous retournera une réponse part votre bot test réusie",
inline: true
}, { 	
name: '**!star**',
value: "!star pour savoir sur combien de serveur ou channels ou en compagnie se trouve le bot",
inline: true
}, {    
name: '**heure**',
value: "heure vous retournera l'heure et la date , pas beusoin de mettre le prefixe juste faire , heure",
inline: true
}, {     
name: '**!commande**',
value: "!commande vous permet de voir vos commandes qui s'affichera sur le channel ou vous vous trouvez",
inline: true
}],
thumbnail: {
url: message.client.iconURL
},
timestamp: new Date(),
footer: {
text: '©Les commandes.',
}}});
}
////////////////////////////////////////////////////////////////////////////FIN////////////////////////////////////////////////////////////////////////
