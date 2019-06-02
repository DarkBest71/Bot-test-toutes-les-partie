'use strict';
const Discord = require("discord.js");//on appele le fichier discord.js pour que le bot fonctionne
const client = new Discord.Client();
const token = "Le Token de ton bot a mettre ici";//token de votre bot
var prefix = "!";//votre prefix choisir se que vous voulez cela appelra vos commandes
var mention = "<@Ton ID a mettre ici>";// votre ID d'utilisateur
var memberCount = client.users.size;//permet de savoir combien de membre qui et avec le bot sur le serveur
var servercount = client.guilds.size;//permet de savoir sur combien de serveur se trouve le bot
var channel = client.channels.size;//Permet de savoir sur combien de channel se trouve le bot

const weather = require('weather-js');//Librairie pour la météo

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


////////////////////////////////////////////////////////////////////////Météo/////////////////////////////////////////////////////////////////////////
let cont = msgc.slice(prefix.lenght).split(' ');
let args = cont.slice(1);
if(msgc.startsWith(prefix+"météo")) {
message.delete(0);    
weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) { 
if (err) message.channel.send(err);
var current = result[0].current;
var location =result[0].location;
const embed = new Discord.RichEmbed()
.setDescription(`**{Description de la Méthéo de votre ville !}**`)
.setAuthor(`Météo ${current.observationpoint}`)
.setThumbnail(current.imageUrl)
.setColor(0x009fff)
.addField("Commande effectuée sur le Channel", message.channel)
.addField('Fuseau horaire', `UTC${location.timezone}`, true)
.addField('Type de degré',location.degreeType, true)
.addField('Temperature', `${current.temperature} degré`, true)
.addField('Feels Like', `${current.feelslike} Degrés`, true)
.addField('Le vent',current.winddisplay, true)
.addField("Humidité", `${current.humidity}%`, true)
.setFooter("Demande de la commande par " + message.author.tag)
.addField('Propriètère du code', "@"+ message.guild.owner.user.tag)
message.guild.channels.find("name", "🔅météo🔅").sendEmbed(embed)
})
}
////////////////////////////////////////////////////////////////////////FIN///////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////Météo anciéne version/////////////////////////////////////////////////
if (message.content.startsWith("!meteo")){
    var location = message.content.substr(6);
    var unit = "C";  
    try {
    weather.find({search: location, degreeType: unit}, function(err, data) {
    if(err) {
    console.log(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
    message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);
    } else {
    data = data[0];
    console.log("**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
    message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
}
})

} catch(err) {
console.log(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
message.reply("Idk pourquoi c'est cassé tbh :(");
}
}
    ///////////////////////////////////////////////////////////////////////////////////////FIN///////////////////////////////////////////////
});
client.login(token)
