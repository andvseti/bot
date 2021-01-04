const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс
const dealerID = config.dealerID; // идентыфикатор роли торговца
const count = require('./artCalc.js').calc;
const countP = require('./artCalc.js').calcP;
// Команды //

function buy(robot, mess, args) {
  let arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды 
  let lvl; // какие арты необходимо купить
  let quantity; // количество артов
  let sentence; // какие арты предлагаем
  let flag = false;
  let result;
  //mess.channel.send(mess.channel.id)
  arggs.forEach(function (item, i, arggs){
    if (item === "-" && i === 0) return flag = true}); // Проверяем стоит ли в начале флаг
  if (arggs.length === 2) {
    lvl = lvlChannel();
    if (!lvl) {
      //mess.channel.send("Повтори в соответствующем канале или укажи желаемый лвл артов")
      mess.channel.send("Нужно указать лвл арта для покупки, или повторить вызов в соответствующем канале")
      return;
    }
    quantity = arggs[0]; // количество артов
    sentence = arggs[1]; // какие арты предлагаем
    console.log(lvl + " 2")

  }else if (flag){
    if (arggs.length === 4) {
      lvl = arggs[1]; // какие арты необходимо купить
      quantity = arggs[2]; // количество артов
      sentence = arggs[3]; // какие арты предлагаем
      console.log(lvl + "flag 4")
    } else if (arggs.length === 3) {
      lvl = lvlChannel();
      if (!lvl) {
      //mess.channel.send("Повтори в соответствующем канале или укажи желаемый лвл артов")
      mess.channel.send("Нужно указать лвл арта для покупки, или повторить вызов в соответствующем канале")
      return;
      }
        quantity = arggs[1]; // количество артов
        sentence = arggs[2]; // какие арты предлагаем
        console.log(lvl + "flag 3")
    }
    
  }else{
      lvl = arggs[0]; // какие арты необходимо купить
      quantity = arggs[1]; // количество артов
      sentence = arggs[2]; // какие арты предлагаем
      console.log(lvl + "else")
    }
      
    console.log(lvl + " " + quantity + " finish")
      if (!lvl) return mess.channel.send('Укажите пожалуйста лвл желаемых артов, количество которое хотите купить и лвл артов для обмена.'); // Проверка, задан ли параметр
      if (!quantity) return mess.channel.send('Укажите пожалуйста количество желаемых артов');
      if (!sentence) return mess.channel.send('Укажите пожалуйста лвл желаемых артов, количество которое хотите купить и лвл артов для обмена.');
      if (isNaN(lvl)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя
      if (isNaN(quantity)) return mess.channel.send('Это не число!');
      if (isNaN(sentence)) return mess.channel.send('Это не число!');
      if (lvl > 9) return mess.channel.send('Ожидается лвл покупки не больше 9'); // Проверка, является ли ввод пользователя корректным числом 
      if (lvl < 6) return mess.channel.send('Ожидается лвл покупки больше чем 6'); // Проверка, является ли ввод пользователя корректным числом 
      if (lvl <= sentence) return mess.channel.send('Похоже перепутал местами лвл желаемого и предлагаемого');
      
      if (flag) {result = countP(lvl, sentence, quantity)} else {result = count(lvl, sentence, quantity)}
    
    
      if (result && flag){
        mess.reply("Твоих артов " + sentence + " лвл хватит на асорти " + lvl + " лвл в количестве " + result + "шт")
        mess.react('👍');
        const filter = (reaction, user) => {
          return ['👍'].includes(reaction.emoji.name) && user.id === mess.author.id;
        } 
        
        mess.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
        
            if (reaction.emoji.name === '👍') {	mess.channel.send(dealerID)
            }
          })
          .catch(collected => {
            mess.reply('Продавца не позову, долго решался')});
      } else if (result) {
        mess.reply("Для покупки артов " + lvl + " в количестве " + quantity + " штук, понадобится " + result + " шт " + sentence + " лвл")
        mess.react('👍');
        const filter = (reaction, user) => {
          return ['👍'].includes(reaction.emoji.name) && user.id === mess.author.id;
        } 
        
        mess.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
        
            if (reaction.emoji.name === '👍') {	mess.channel.send(dealerID)
            }
          })
          .catch(collected => {
            mess.reply('Продавца не позову, долго решался')});
      }

  function lvlChannel() {
    switch (mess.channel.id) {
      case config.channel6:
        return 6;
      case config.channel7:
        return 7;
      case config.channel8:
        return 8;
      case config.channel9:
        return 9;
      default:
        mess.channel.send(mess.channel.id)
        return false;
        
    }
  }
}
  //mess.reply("для покупки асорти артов лвл " + lvl + " нужно " + result + " артов лвл " + sentence)

// Список команд //

var comms_list = [{
  name: "купить",
  out: buy,
  about: "Подсчет количества необходимых артов для покупки"
}];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list