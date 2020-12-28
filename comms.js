const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Команды //

//function ping() {
//  let myChannel = 'channel ID'
//  client.channels.cache.get(myChannel).send("Mentioning. @Торговец");
//}

function buy(robot, mess, args) {
  const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды 
  const lvl = arggs[0]; // какие арты необходимо купить
  const quantity = arggs[1]; // количество артов
  const sentence = arggs[2] // какие арты предлагаем

  if (!lvl) return mess.channel.send('Укажите пожалуйста лвл желаемых артов, количество которое хотите купить и лвл артов для обмена.'); // Проверка, задан ли параметр
  if (!quantity) return mess.channel.send('Укажите пожалуйста лвл желаемых артов, количество которое хотите купить и лвл артов для обмена.');
  if (!sentence) return mess.channel.send('Укажите пожалуйста лвл желаемых артов, количество которое хотите купить и лвл артов для обмена.');
  if (isNaN(lvl)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя
  if (isNaN(quantity)) return mess.channel.send('Это не число!');
  if (isNaN(sentence)) return mess.channel.send('Это не число!');

  if (lvl > 10) return mess.channel.send('Несуществующий лвл арта'); // Проверка, является ли ввод пользователя корректным числом 
  if (lvl < 1) return mess.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя корректным числом 

  function ping() {
    const filter = (reaction, user) => reaction.emoji.name === '👍' && user.id === mess.author.id;
    
    mess.awaitReactions(filter, { time: 6000})
      .then(collected => mess.channel.send("<@&792763011206479912>"))
      .catch(console.error);
  }

  switch (lvl) {
    case "6":
      six(quantity, sentence, lvl)
      break;
    case "7": 
      seven(quantity, sentence, lvl)
      break;
    case "8":
      eight(quantity, sentence, lvl)
      break;
    case "9":
      nine(quantity, sentence, lvl)
      break;
  
    default:
      mess.channel.send("обламался при проверке лвл арты");
      break;
  }

  function six(quantity, sentence, lvl) {
    let result
    switch (sentence) {
      
      case "4":
        result = quantity * 3;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;

      case "5":
        result = quantity * 2;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;
      
      default:
        mess.channel.send("Затупил при расчетах")
        mess.channel.send("лвл предложения "+ sentence)
        mess.react('👍');
        ping()
        break;
    }
  }

  function seven(quantity, sentence, lvl) {
    let result
    switch (sentence) {
      
      case "4":
        result = quantity * 4;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;

      case "5":
        result = quantity * 3;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;

      case "6":
        result = quantity * 2;
        Math.round(result)
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;
      
      default:
        mess.channel.send("Затупил при расчетах")
        mess.channel.send("лвл предложения "+ sentence)
        break;
    }
  }

  function eight(quantity, sentence, lvl) {
    let result
    switch (sentence) {
      
      case "4":
        result = quantity * 5.5;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;

      case "5":
        result = quantity * 4;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;

      case "6":
        result = quantity * 3;
        Math.round(result)
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;

      case "7":
        result = quantity * 2;
        Math.round(result)
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)
        mess.react('👍');
        ping()
        break;
      
      default:
        mess.channel.send("Затупил при расчетах")
        mess.channel.send("лвл предложения "+ sentence)
        break;
    }
  }

  function nine(quantity, sentence, lvl) {
    let result
    switch (sentence) {
      
      case "4":
        result = quantity * 6;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence + " чтобы позвать продавца, нажми палец вверх")
        //mess.channel.send("<@&792763011206479912>");
        mess.react('👍');
        ping(); 
        break;

      case "5":
        result = quantity * 5;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence + " чтобы позвать продавца, нажми палец вверх")
        mess.react('👍');
        ping(); 
        break;

      case "6":
        result = quantity * 3.5;
        Math.round(result)
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence + " чтобы позвать продавца, нажми палец вверх")
        mess.react('👍');
        ping(); 
        break;

      case "7":
        result = quantity * 2.5;
        Math.round(result)
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence + " чтобы позвать продавца, нажми палец вверх")
        mess.react('👍');
        ping(); 
        break;

      case "8":
        result = quantity * 2;
        mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence + " чтобы позвать продавца, нажми палец вверх")
        mess.react('👍');
        ping(); 
        break;
      
      default:
        mess.channel.send("Затупил при расчетах")
        mess.channel.send("лвл предложения "+ sentence)
        break;
    }
  }
 
}


// Список команд //

var comms_list = [{
  name: "купить",
  out: buy,
  about: "Подсчет количества необходимых артов для покупки"
}];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list;