const { Client, MessageEmbed }= require("discord.js");
const client = new Client();
var prefix = "/";

client.on('ready', () => {
  console.log('Code2Jeunes Bot is running !');
});

client.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
		const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Commandes Code2Jeunes')
		// Set the color of the embed
		.setColor(0xF0472B)
		// Set the main content of the embed
		.setDescription('');
		// Send the embed to the same channel as the message
		message.channel.send(embed);
		return channel.send('Bienvenue sur le serveur Discord de Code2Jeunes ' + member.displayName + ' ! \n https://www.code2jeunes.ga/')
    }).catch(console.error)
})

client.on('message', message => {
	
	if (!message.guild) return;
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if(message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	
	if (command === 'send') {
		if(!message.member.roles.cache.some(r=>["Administration", "Administration Discord", "Besoin d'aide ?"].includes(r.name)) )
			return message.reply("Vous n'avez pas les permissions d'utiliser cette commande !");
		message.delete()
		var messageContent = '';
		for (var i in args)
		{
			messageContent += args[i] + ' ';
		}
		const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Message Système')
		// Set the color of the embed
		.setColor(0xF0472B)
		// Set the main content of the embed
		.setDescription(messageContent);
	// Send the embed to the same channel as the message
	message.channel.send(embed);
		if (!args.length) {
			return message.channel.send(`Vous n'avez pas spécifié d'argument, ${message.author}!`);
		}
	}
	
	else if (command === 'alert') {
		if(!message.member.roles.cache.some(r=>["Administration", "Administration Discord", "Besoin d'aide ?", "Modération Dicord"].includes(r.name)) )
			return message.reply("Vous n'avez pas les permissions d'utiliser cette commande !");
		message.delete()
		const user = message.mentions.users.first();
		const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Message système')
		// Set the color of the embed
		.setColor(0xF0472B)
		// Set the main content of the embed
		.setDescription(args[0] + ', votre comportement semble innaproprié ! Merci de respecter nos conditions d\'utilisation !');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
		if (!args.length) {
			return message.channel.send(`Vous n'avez pas spécifié d'argument, ${message.author}!`);
		}

	}
	
	else if (command === 'annonce') {
		if(!message.member.roles.cache.some(r=>["Administration", "Administration Discord", "Besoin d'aide ?"].includes(r.name)) )
			return message.reply("Vous n'avez pas les permissions d'utiliser cette commande !");
		message.delete()
		var messageContent = '';
		for (var i in args)
		{
			messageContent += args[i] + ' ';
		}
		const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Annonce')
		// Set the color of the embed
		.setColor(0xF0472B)
		// Set the main content of the embed
		.setDescription(messageContent);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
		if (!args.length) {
			return message.channel.send(`Vous n'avez pas spécifié d'argument, ${message.author}!`);
		}

	}
	
	else if (command === 'info') {
		if(!message.member.roles.cache.some(r=>["Administration", "Administration Discord", "Besoin d'aide ?"].includes(r.name)) )
			return message.reply("Vous n'avez pas les permissions d'utiliser cette commande !");
		message.delete()
		const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Code2Jeunes - Vivre avec le sourire')
		// Set the color of the embed
		.setColor(0xF0472B)
		// Set the main content of the embed
		.setDescription('Bienvenue sur Code2Jeunes ! Rejoignez-nous sur www.code2jeunes.ga !');
    // Send the embed to the same channel as the message
    message.channel.send(embed);

	}
	
	else if(command === "clearall") {
		if(!message.member.roles.cache.some(r=>["Administration", "Administration Discord"].includes(r.name)) )
			return message.reply("Vous n'avez pas les permissions d'utiliser cette commande !");
		// This command removes all messages from all users in the channel, up to 100.
		
		// get the delete count, as an actual number.
		const deleteCount = parseInt(args[0], 10);
		
		// Ooooh nice, combined conditions. <3
		if(!deleteCount || deleteCount < 2 || deleteCount > 1000)
		  return message.reply("S'il vous plaît, veuillez renseiger un nombre de messages à supprimer entre 2 et 1000");
		
		// So we get our messages, and delete them. Simple enough, right?
		const fetched = message.channel.fetchMessages({limit: deleteCount});
		message.channel.bulkDelete(fetched)
		.catch(error => message.reply(`Vous ne pouvez pas supprimer les messages : ${error}`));
	}
	
	else if (command === 'commands') {
		if(!message.member.roles.cache.some(r=>["Administration", "Administration Discord", "Besoin d'aide ?"].includes(r.name)) )
			return message.reply("Vous n'avez pas les permissions d'utiliser cette commande !");
		message.delete()
		const embed = new MessageEmbed()
		// Set the title of the field
		.setTitle('Commandes Code2Jeunes')
		// Set the color of the embed
		.setColor(0xF0472B)
		// Set the main content of the embed
		.setDescription('/send MESSAGE \n /alert UTILISATEUR \n /annonce MESSAGE \n /info \n /clearall NOMBRE');
    // Send the embed to the same channel as the message
    message.channel.send(embed);

	}
});

client.login('NjkyMzA5OTQ0Mzc1OTY3NzU0.XnsrBw.GppZaZr_HTRAi1Ff1vQ4AR3b-PU');