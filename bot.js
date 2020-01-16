const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#";




client.on("message", message => { // apply
  if(message.content.startsWith("#app")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "فك-الباند")
            if(!channel) return message.reply("**!!setsubmissions**")
            if(channel) {
            message.channel.send( message.member + '`1`').then( (m) =>{
              m.edit( message.member + ', اسمك في ماينكرافت' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + '`2`').then( (m) =>{
                      m.edit( message.member + ', سبب الباند' )
                      setTimeout(() => {
                        m.delete()
                      }, 2500);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + '`3`').then( (m) =>{
                            m.edit( message.member + ' هل الباند ظلم؟' )
                            setTimeout(() => {
                              m.delete()
                            }, 2500);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + '`4`').then( (m) =>{
                                  m.edit( message.member + ', ليه نشيل عنك الباند؟' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 2500);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + '``5``').then( (m) =>{
                                        m.edit( message.member + ', كم مرة تبندت؟ و هل عندك رانك؟' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', Data is being sent').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('#c3cdff')
                        .setTitle(`\`Apply Administartion\` \n سوف يتم الرد عليك قريبا من الادارة , \n > ID: ${message.author.id}`)
                        .addField('> \`اسمه في ماينكرافت:\`', ` ** ${name} ** ` , true)
                        .addField('> \`سبب الباند:\`', ` ** ${age} ** ` , true)
                        .addField('> \`هل يحس انه ظلم؟:\`',`** ${ask} ** ` , true)
                        .addField('> \`ليش نسويله ان باند؟:\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`كم مرة تبند؟ و هل عنده رانك؟: ?\`',` ** ${ask3} ** ` , true)
                        .addField('> __Your Account Created: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        


client.login(process.env.BOT_TOKEN);