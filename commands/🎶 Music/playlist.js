const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`${process.cwd()}/handlers/playermanager`);
const request = require('request');
module.exports = {
  name: `playlist`,
  category: `🎶 Music`,
  aliases: [`pl`],
  description: `Plays a playlist from youtube`,
  usage: `playlist <URL>`,
  cooldown: 30,
  parameters: {
    "type": "music",
    "activeplayer": false,
    "previoussong": false
  },
  type: "queuesong",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //if no args return error
      if (!args[0])
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`${emoji.msg.ERROR} Erro | Preciso de um link ou de palavras para procurar uma musica pra você!.`)
        );
      //play the playlist
      if(args.join(' ').includes("http")){
        if(args.join(' ').includes("deezer.page.link")){
          var r = request.get(args.join(' '), function (err, res, body) {
            playermanager(client, message, [r.uri.href], `playlist`);
          });
        } else{
         playermanager(client, message, args, `playlist`);
        } 
      } else{
        var terms = args.join(' ').replace(/ /ig, "+");
        var link = 'https://www.youtube.com/results?search_query=' + terms + '&sp=EgIQAw%253D%253D'
        //console.log(link);
        var r = request.get(link, function (err, res, body) {
            var r2 = JSON.stringify(body).split('"');
              for(var i = r2.length-1; i>=0;i--){
                if(r2[i].includes("/watch?")){
                linkf = r2[i].replace("\\\\", "").replace("\\", "").replace(`u0026`, "&")
                //console.log(linkf, i);
                var linkfl = linkf
                }
              }
              //console.log(linkfl);
              playermanager(client, message, ["https://www.youtube.com" + linkfl], 'playlist');
          });
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
