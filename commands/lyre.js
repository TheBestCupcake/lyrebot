const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lyre")
    .setDescription("How long since Lyre has left us."),

    async execute(interaction){
        const days = daysSinceDeparture();
        replyValue = `It has been ${days} days since Lyre has left us.`;
        await interaction.reply(replyValue);
    }
}