const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `restartbot`,
  category: `🔰 Info`,
  aliases: [`rb`, `restartbot`, `botrestart`, `br`],
  description: `Reinicia o GD-DIDIEI`,
  usage: `restartbot`,
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    try {
      if (message.author.id !== "141957307591426050") {
        message.reply({
          embeds: [new MessageEmbed()
            .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
            .setFooter(client.getFooter(es))
            .setTitle("Comando desabilitado pelo servidor.")
            ]
        }).then(msg=>{    })
        return;
      }
      message.reply({
          embeds: [new MessageEmbed()
            .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
            .setFooter(client.getFooter(es))
            .setTitle("Atualizando e reiniciando o BOT - Volto em alguns segundos! - Se quiser, utilize `/ping` para verificar se eu já estou online novamente!")
            ]
        }).then(msg=>{
          process.exit(0).catch(e=>console.log("ERROR | Ocorreu um erro"))
        })
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
