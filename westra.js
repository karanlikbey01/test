// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
// by Westra
const Discord = require('discord.js')
const db = require('quick.db') 
const client = new Discord.Client({ disableEveryone: true })
client.login("NzY2NzgwMjkwMDU5NTk5ODkz.X4oVyw.0Qqcpx0WefueO_HPdxB11OezsD4");
const fetch = require('node-fetch')
const fs = require('fs')
require('express')().listen(1343)
const moment = require('moment')
require('moment-duration-format')
const prefix = 's!'

setInterval(() => {
const Linkler = db.get('Linkler')
if(!Linkler) return;
const Aventadoria = Linkler.map(Revenge => Revenge.url)
Aventadoria.forEach(Link => {
try {
fetch(Link)
} catch(e) {
console.error(e)
}
})
console.log(`Proje Numaras Olan :  ${db.get('Proje') || 1} Proje Hostandı`)
}, 60000)

client.on('ready', () => {
console.log(`${client.user.username} Aktif!`)
if(!Array.isArray(db.get('Linkler'))) {
db.set('Linkler', [])
}
})
client.on('message', async message => {
  if(message.author.bot) return;
  var Split = message.content.split(' ')


  if(Split[0] == prefix+'ekle') {
  var Link = Split[1]
  fetch(Link).then(() => {
    const Revenge = new Discord.RichEmbed()
    .setColor('#A62019')
    .setDescription(`
    **==================================**
    **Link Sistemde Zaten Bulunuyor. ❌** 
    ==================================
    `)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL)
    if(db.get('Linkler').map(Revenge => Revenge.url).includes(Link)) return message.channel.send(Revenge)
    const Emrecan = new Discord.RichEmbed()
    .setColor('#A62019')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`
**==================================**
** Yazdığınız URL Eklenmiştir..
**==================================**
    `)
    .addField(prefix+'linkler','Komutunu Kullanarak Ekledigin Linklere Erisebilirsin')
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/761214958863122462/777849228805275648/standard.gif')
    message.channel.send(Emrecan)
    db.push('Linkler', { url: Link, owner: message.author.id, owner2: message.author.tag})
    db.add(`Sahiplik_${message.author.id}`,1)
    db.push(`Projesi_${message.author.id}`,Link)
    db.add(`Proje`,1)
  }).catch(Hata => {
  const UpTime = new Discord.RichEmbed()
  .setColor('#A62019')
  .setDescription(`
  **================================**
  **Hata:** ❌

  **Lutfen Bir URL Girin**
  ===============================
  `)
  .setImage('https://media.discordapp.net/attachments/748517679119335424/748562753253408920/IMG_20200827_192051.jpg?width=436&height=269')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  message.channel.send(UpTime)
  })
  }

  if(Split[0] == prefix+'davet') {
  const Revo = new Discord.RichEmbed()
  .setColor('#A62019')
  .setDescription(`
  **==================================
Beni Sunucuna Eklemek Istemen Beni Sevindiriyor Hemen Altta Linkimi Bula Bilirsin Sen Olmassan 1 kisi eksik

[Ekleme Linkim]()

[Destek Sunucum]()

[Oy Vermeyi Unutma]()
==================================
**`)
  .setThumbnail(message.author.avatarURL)
  .setImage('https://cdn.discordapp.com/attachments/761214958863122462/777849228805275648/standard.gif')
  message.channel.send(Revo)
  }

  if(Split[0] == prefix+'i') {
  const Istatistik = new Discord.RichEmbed()
  .setColor('#A62019')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setDescription(`
**==================================**
** ➡ Isim -** __${client.user.username}__
** ➡ Kanal Sayısı -** __${client.channels.size}__
** ➡ Sunucu Sayısı -** __${client.guilds.size}__
** ➡ Kullanıcı Sayısı -** __${client.guilds.reduce((a,b) => a + b.memberCount,0).toLocaleString()}__
** ➡ Link Sayısı -** __${await db.fetch('Proje') || 1}__
** ➡ Aktiflik Suresi -** __${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}__
**==================================**`)
message.channel.send(Istatistik)
  }
  if(Split[0] == prefix+'istatistik') {
  const Istatistik = new Discord.RichEmbed()
  .setColor('#A62019')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setDescription(`
**==================================**
** ➡ Isim -** __${client.user.username}__
** ➡ Kanal Sayısı -** __${client.channels.size}__
** ➡ Sunucu Sayısı -** __${client.guilds.size}__
** ➡ Kullanıcı Sayısı -** __${client.guilds.reduce((a,b) => a + b.memberCount,0).toLocaleString()}__
** ➡ Link Sayısı -** __${await db.fetch('Proje') || 1}__
** ➡ Aktiflik Suresi -** __${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}__
**==================================**`)
message.channel.send(Istatistik)
  }

  if(Split[0] == prefix+'s') {
  const Revoş = new Discord.RichEmbed()
  .setColor('#A62019')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setDescription(`
  ==================================
**» Şuanda Toplam \`${db.get('Proje')}\` URL Uptime Ediliyor ☑ **

**» Bunlardan Sadece \`${db.fetch(`Sahiplik_${message.author.id}`) || null}\` Tanesi Senin ☑**
==================================`)
  message.channel.send(Revoş)
  }
  if(Split[0] == prefix+'say') {
  const Revoş = new Discord.RichEmbed()
  .setColor('#A62019')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setDescription(`
  ==================================
**» Şuanda Toplam \`${db.get('Proje')}\` URL Uptime Ediliyor <a:ony:794275787674484737> **

**» Bunlardan Sadece \`${db.fetch(`Sahiplik_${message.author.id}`) || null}\` Tanesi Senin <a:ony:794275787674484737> **
==================================`)
  message.channel.send(Revoş)
  }

  if(Split[0] == prefix+'yardım') {
  const HugoMugo = new Discord.RichEmbed()
  .setColor('#A62019')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setAuthor(client.user.username,client.user.avatarURL)
  .setDescription(`
**Botumuz Uptime Ile Alakalı Bir Botdur**

» Prefixim: **${prefix}**
» Dil: **TR**
`)
  .addField('**» Uptime Bot Komutlari**',`
➡ » [${prefix}link-kaldır]() Link Kaldırmanıza Yarar
➡ » [${prefix}ekle]() Link Eklemenize Yarar
➡ » [${prefix}erişim-kontrol](url gırebılırsn buralara) Erişim Kontrol
➡ » [${prefix}linkler]() Liklerinizi Gösterir
`)
  .addField('**» Genel Komutlar**',`
➡ » [${prefix}dil]() Botun Dlini Ayarlar
➡ » [${prefix}davet]() Botun Davet Linkini Atar
➡ » [${prefix}istatistik]() Bot Istatistigini Atar
➡ » [${prefix}say]() Total Ve Senin Link Sayini Atar
`)
.addField('**» Destek Sunucum**','[Destek Sunucum]()')
.addField('**» Davet Linkim**','[Beni Davet Et]()')
.setImage('https://media.discordapp.net/attachments/761214958863122462/777849228805275648/standard.gif')
  message.channel.send(HugoMugo)
  }

    if(Split[0] == prefix+'linkler') {
    const Linkleri = db.fetch(`Projesi_${message.author.id}`)
    if (!db.get('Linkler').map(Revenge => Revenge.owner).includes(message.author.id)) return message.channel.send(new Discord.RichEmbed().setColor('#A62019').setDescription(`**Hiç link eklememişsin. Link Eklemek İçin \`${prefix}ekle\` yazman yeterli**`))
    message.channel.send(new Discord.RichEmbed().setColor('#A62019').setDescription(`**Uptime Etmekte Olduğun Linkler Direkt Mesajlarına Gönderildi . Direkt mesajlarını kontrol et.  ${message.author}**`).setThumbnail(message.author.avatarURL))
    message.author.send(new Discord.RichEmbed().setColor('#A62019').setDescription(`**» Normal Linklerin:** \n\n\``+Linkleri.join('\n')+`\``).setThumbnail(message.author.avatarURL))
    }

    if(Split[0] == prefix+'dil') {
    const Dil = Split[1]
    if (!Dil) return message.channel.send(`${message.author}, Geçerli bir dil belirtmelisin. 

 **Örnek:** \`${prefix}dil TR\` 

 **DİLLER** 
 \`EN,TR\``)
const Mevenge = new Discord.RichEmbed()
.setColor('#A62019')
.setTitle('Dil Değiştirildi.')
.setDescription('Botun dili başarıyla **TÜRKÇE** olarak kaydedildi.')
message.channel.send(Mevenge).then(x => x.react('✅'))
   }

    if(Split[0] == prefix+'erişim-kontrol') {
const Megenge = new Discord.RichEmbed()
.setColor('#A62019')
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.setTitle('🎈 Erişim Kontrol')
.setDescription('**» Erişiminiz Aktif**')
message.channel.send(Megenge)
}
})




client.on('ready', () => {
client.user.setActivity(`GoxyUptime`, { type: 'WATCHING' })
//client.user.setStatus('idle')
})

client.on("message", async message => {

  if(!message.content.startsWith("eval")) return;
  if(!["eval kullanıcı id","eval kullanıcı id"].includes(message.author.id)) return;
  var args = message.content.split("eval")[1]
  if(!args) return message.channel.send(":x: ..")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })

const Log = message => {
console.log(`${message}`)
}
