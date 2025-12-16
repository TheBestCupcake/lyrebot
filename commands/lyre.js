const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lyre")
    .setDescription("How long since Lyre has left us."),

    async execute(interaction){
        replyValue = "test reply";
        await interaction.reply(replyValue);
    }
}