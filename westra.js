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
client.login("ODEwMTE4MzM5ODU4NTMwMzU0.YCe_fw.Ld7cieFa2LmcPZ9q4j2T_Tlga1I");
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
console.log(`Proje : ${db.get('Proje') || 1} Başarıyla Hostandı`)
}, 70000)

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
    **Link Sistemde Zaten Bulunuyor.** <a:carp:807417467336130580> 
    ==================================
    `)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL)
    if(db.get('Linkler').map(Revenge => Revenge.url).includes(Link)) return message.channel.send(Revenge)
    const Emrecan = new Discord.RichEmbed()
    .setColor('#A62019')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`
**================================**
** Yazdığınız URL Eklenmiştir.** <a:online:805425022638227487>
**================================**
    `)
    .addField(prefix+'linkler','Komutunu Kullanarak Ekledigin Linklere Erisebilirsin')
    .setTimestamp()
    .setImage('https://i.hizliresim.com/wW6WDh.gif')
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
  **Sistem İçin Lütfen URL'nizi Girin:** <a:tik:803109731647488021> 
  **===============================**
  `)
  .setImage('https://i.hizliresim.com/wW6WDh.gif')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  message.channel.send(UpTime)
  })
  }

  if(Split[0] == prefix+'davet') {
  const Revo = new Discord.RichEmbed()
  .setColor('#A62019')
  .setDescription(`
  **================================
Beni Sunucuna Eklemek Istemen Beni Sevindiriyor Hemen Altta Linkimi Bula Bilirsin Sen Olmassan 1 kisi eksik

[Ekleme Linkim]()

[Destek Sunucum]()

[Oy Vermeyi Unutma]()
================================
**`)
  .setThumbnail(message.author.avatarURL)
  .setImage('https://i.hizliresim.com/wW6WDh.gif')
  message.channel.send(Revo)
  }

  if(Split[0] == prefix+'i') {
  const Istatistik = new Discord.RichEmbed()
  .setColor('#A62019')
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setDescription(`
**==================================**
** <a:hype:805231936791904276> Isim -** __${client.user.username}__
** <a:hype:805231936791904276> Kanal Sayısı -** __${client.channels.size}__
** <a:hype:805231936791904276> Sunucu Sayısı -** __${client.guilds.size}__
** <a:hype:805231936791904276> Kullanıcı Sayısı -** __${client.guilds.reduce((a,b) => a + b.memberCount,0).toLocaleString()}__
** <a:hype:805231936791904276> Link Sayısı -** __${await db.fetch('Proje') || 1}__
** <a:hype:805231936791904276> Aktiflik Suresi -** __${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}__
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
** <a:hype:805231936791904276> Isim -** __${client.user.username}__
** <a:hype:805231936791904276> Kanal Sayısı -** __${client.channels.size}__
** <a:hype:805231936791904276> Sunucu Sayısı -** __${client.guilds.size}__
** <a:hype:805231936791904276> Kullanıcı Sayısı -** __${client.guilds.reduce((a,b) => a + b.memberCount,0).toLocaleString()}__
** <a:hype:805231936791904276> Link Sayısı -** __${await db.fetch('Proje') || 1}__
** <a:hype:805231936791904276> Aktiflik Suresi -** __${moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")}__
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
**» Şuanda Toplam \`${db.get('Proje')}\` URL Uptime Ediliyor** <a:yumidc:808098829671858216>

**» Bunlardan Sadece \`${db.fetch(`Sahiplik_${message.author.id}`) || null}\` Tanesi Senin.** <a:yumidc:808098829671858216>
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
**» Şuanda Toplam \`${db.get('Proje')}\` URL Uptime Ediliyor.** <a:yumidc:808098829671858216>

**» Bunlardan Sadece \`${db.fetch(`Sahiplik_${message.author.id}`) || null}\` Tanesi Senin** <a:yumidc:808098829671858216>
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

» **Prefixim:** **\`${prefix}\`**
» Dil: **TR**
`)
  .addField('**» Uptime Bot Komutlari**',`
<a:cok:807362421634760704> » **${prefix}ekle:** Link Eklemenize Yarar
<a:cok:807362421634760704> » **${prefix}erişim-kontrol:** Erişim Kontrol
<a:cok:807362421634760704> » **${prefix}linkler:** Liklerinizi Gösterir
`)
  .addField('**» Genel Komutlar**',`
<a:cok:807362421634760704> » **${prefix}dil:** Botun Dlini Ayarlar
<a:cok:807362421634760704> » **${prefix}davet:** Botun Davet Linkini Atar
<a:cok:807362421634760704> » **${prefix}istatistik:** Bot Istatistigini Atar
<a:cok:807362421634760704> » **${prefix}say:** Total Ve Senin Link Sayini Atar
`)
.addField('**» Destek Sunucum**','[Destek Sunucum]()')
.addField('**» Davet Linkim**','[Beni Davet Et]()')
.setImage('https://i.hizliresim.com/wW6WDh.gif')
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
client.user.setActivity(`Botunuz Herzaman Aktif.`, { type: 'WATCHING' })
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
