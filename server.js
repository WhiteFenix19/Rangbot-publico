const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express()
const config = require("./config.json");
var prefix = config.prefix;

//INICIO DEL BOT

bot.on('ready', () => {
  console.log('ITS WORKS');
  bot.user.setActivity(`Politicamente Incorrecto`);
});


//////////////////////////        PING         //////////////////////////////////////////////

bot.on("message", msg => {
  if (msg.content === "Ping") {
 msg.reply("Pong");
  }
});

//////////////////////////        YAMAMOTO        //////////////////////////////////////////////

bot.on("message", message=> {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "yamamoto") {
 message.reply("MOTO");
  }
});


///////////////////////////      MADRE        //////////////////////////////////////////////
bot.on("message", message=> {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "madre") {
    message.reply( "Endrick es la madre por excelencia <3" );
  }
});


///////////////////////////      MIMIR      //////////////////////////////////////////////
bot.on("message", message=> {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "mimir") {
    let mimir = message.author
    message.reply( "Se va a mimir :3" );
  }
});




///////////////////////////      MADRE        //////////////////////////////////////////////
bot.on("message", message=> {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "gladio") {
    message.reply( "DEBO.... RESISTIR LAS GANAS DE.... PAJEARME" );
  }
});





///////////////////////////      RASCAR        //////////////////////////////////////////////
bot.on("message", message=> {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "rascar") {
    message.reply( "Ya no me pica la pierna, gracias (a el no se la podian rascar :( )" );
  }
});


///////////////////////////      POLLO   //////////////////////////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "pollo") {
    message.reply("Ha comido su pollo de bolsillo, sabe muchisimo a mantequilla");
  }
});
///////////////////////////      F    //////////////////////////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "f") {
    message.reply("Siempre recordaremos a MEE6");
  }
});
///////////////////////////      COMANDOS   //////////////////////////////////////////////
bot.on("message", (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === "comandos") {
 
  message.author.send("Estos son los comandos actualmente :D");
  message.author.send("!Sexar: .... Este comando lo tengo que explicar???... bueno, sexas con alguien... o algo, tu veras"); 
  message.author.send("!Matar: matas a alguien y le robas su ropa... pero con cariño");
  message.author.send("!Amigos: para decir que 2.... algo, son amigos especiales :D");
  message.author.send("!Comer: comes unos ricos y nutritivos niños");
  message.author.send("!Pollo: comes tu pollo de bolsillo :3");
  message.author.send("!Callar: Mandas a callar a la mujer de la noche");
  message.author.send("4 comando secretos que ya no lo son: !F, !Rascar, !luigi (descubierto por kitsu), !shiro (descubierto por lugia)");
  message.author.send("Y 2 comandos secretos que... son secretos");
  message.author.send("Se añadiran mas comandos cuando al admin le de la gana de trabajar");
  message.author.send("Recuerden decirle a Shiro que es guapisimo UwU");
  message.author.send("Y tambien recuerdenle actualizar esta lista, que se le olvida");
}
      });

/////////////////////////        MATAR               /////////////////////////

bot.on("message", (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === "matar") {
 let matar = args.slice(0).join(" "); // Remember arrays are 0-based!.
 
  message.reply(`ha matado a ${matar} y ha robado su ropa`);
  message.channel.send("<:Matar:721014691341533205>");
}
      });



//////////////////////    Luigi     /////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "luigi") {
    message.reply("POLLA");
  }
});




//////////////////////    Shiro   /////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "shiro") {
    message.reply("Shiro es guapisimo UwU. Autoestima de Shiro +1");
  }
});



//////////////////////    Riccardo   /////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "riccardo") {
    message.reply("QUE!?");
  }
});

//////////////////////   Mark    /////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "mark") {
    let mark = args.slice(0).join(" ");
    message.channel.send(`${mark} 1000 VUELTAS AL CAMPO!!!`);
  }
});
/////////////////      galletas      /////////////////////////////
bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "galleta") {
    message.reply("Le da galletas a idko :3");
  }
});




//////////////////////     MUJER DE LA NOCHE    /////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "callar") {
    message.reply("manda a callar a la mujer de la noche");
  }
});



//////////////////////     COMER NIÑOS    /////////////////////////

bot.on("message", message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "comer") {
    message.reply("ha comido niños. Es parte de nuestras vidas");
  }
});






///////////////////////////MENSAJE RANDOM COMANDO//////////////////////////////////////////////

bot.on("message", msg => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
    if (command === "frase") {
     var R = Math.random() * (22 - 1 + 1) + 1;

  var M = Math.floor(R);

  switch (M) {
    case 1:
      msg.channel.send("ME PICA UNA PIERNA");
      break;

    case 2:
     msg.channel.send("ESA ES NUESTRA PALABRA");
      break;

    case 3:
      msg.channel.send("AZUL");
      break;

    case 4:
      msg.channel.send("SIETE!!!!");

      break;

    case 5:
      msg.channel.send("¡500 vueltas al campo!");

      break;

    case 6:
      msg.channel.send("¡Ven conmigo a este cuarto!");

      break;

    case 7:
      msg.channel.send("No es una moda, es parte de nuestras vidas");

      break;

    case 8:
      msg.channel.send("¿Tienes la DROJA?");

      break;

    case 9:
      msg.channel.send("NO SE ESCUCHA A PAZOS");

      break;

    case 10:
      msg.channel.send("Es verdad... ¡pero no deberías decirlo!");

      break;

    case 11:
      msg.channel.send("HOOOLAAAAA!!!");

      break;

    case 12:
      msg.channel.send("!Mis sentimientos!");

      break;

    case 13:
      msg.channel.send("tentaCOOOOL!!!");

      break;

    case 14:
      msg.channel.send("A Kotoko se lo toco");

      break;

    case 15:
      msg.channel.send("ES MI BALON!");

      break;

    case 16:
     msg.channel.send("FUTBOOOOOL!!!");

      break;

    case 17:
      msg.channel.send("No hace falta que me trates de vos");

      break;

    case 18:
     msg.channel.send("NO!");

      break;

    case 19:
      msg.channel.send("Somos polvo de estrella, demostradlo siendo brillantes");

      break;

    case 20:
      msg.channel.send("FUTBOOOOOL!!!");

      break;

    case 21:
      msg.channel.send("Es un misterio, envuelto en un enigma");

      break;
      
     case 22:
      msg.channel.send("Ese tal Shiro es muy guapo"); 
  }
  }
});






///////////////////////////MENSAJE TIMEADO RANDOM//////////////////////////////////////////////

setInterval(function mensaje(mensaje) {
 var R = Math.random() * (21 - 1 + 1) + 1;

  var M = Math.floor(R);

  switch (M) {
    case 1:
      bot.channels.get("720159428376264727").send("ME PICA LA PIERNA");
      break;

    case 2:
      bot.channels.get("720159428376264727").send("ESA ES NUESTRA PALABRA");
      break;

    case 3:
      bot.channels.get("720159428376264727").send("AZUL");
      break;

    case 4:
      bot.channels.get("720159428376264727").send("SIETE!!!!");

      break;

    case 5:
      bot.channels.get("720159428376264727").send("¡500 vueltas al campo");

      break;

    case 6:
      bot.channels
        .get("720159428376264727")
        .send("¡Ven conmigo a este cuarto!");

      break;

    case 7:
      bot.channels
        .get("720159428376264727")
        .send("No es una moda, es parte de nuestras vidas");

      break;

    case 8:
      bot.channels.get("720159428376264727").send("¿Tienes la DROJA?");

      break;

    case 9:
      bot.channels.get("720159428376264727").send("NO SE ESUCHA A PAZOS");

      break;

    case 10:
      bot.channels
        .get("720159428376264727")
        .send("Es verdad... ¡pero no deberías decirlo!");

      break;

    case 11:
      bot.channels.get("720159428376264727").send("HOOOLAAAAA!!!");

      break;

    case 12:
      bot.channels.get("720159428376264727").send("!Mis sentimientos!");

      break;

    case 13:
      bot.channels.get("720159428376264727").send("tentaCOOOOL!!!");

      break;

    case 14:
      bot.channels.get("720159428376264727").send("A Kotoko se lo toco");

      break;

    case 15:
      bot.channels.get("720159428376264727").send("ES MI BALON!");

      break;

    case 16:
      bot.channels.get("720159428376264727").send("FUTBOOOOOL!!!");

      break;

    case 17:
      bot.channels
        .get("720159428376264727")
        .send("No hace falta que me trates de vos");

      break;

    case 18:
      bot.channels.get("720159428376264727").send("NO!");

      break;

    case 19:
      bot.channels
        .get("720159428376264727")
        .send("Somos polvo de estrella, demostradlo siendo brillantes");

      break;

    case 20:
      bot.channels.get("720159428376264727").send("FUTBOOOOOL!!!");

      break;

    case 21:
      bot.channels
        .get("720159428376264727")
        .send("Es un misterio, envuelto en un enigma");

      break;
  }
}, 7200000); // 2 hour







///////////////////////////SEXAR 2.0//////////////////////////////////////////////

bot.on("message", (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === "sexar") {
 let sexar = args.slice(0).join(" "); // Remember arrays are 0-based!.
 
  message.reply(`Ha sexado con ${sexar}`)
}
      });




///////////////////////////AMIGOS ESPECIALES//////////////////////////////////////////////

bot.on("message", (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === "amigos") {
  let amigo1 = args[0]; // Remember arrays are 0-based!.
  let amigo2 = args[1];
 
  message.channel.send(`${amigo1} y ${amigo2} son amigos especiales <3`);
  message.channel.send("<:AmigosEspeciales:721014646127198209>")
}
      });


  

bot.login("Aqui va un codigo pero si lo pongo en publico discord lo quita so, imaginate un codigo muh raro y muh largo");
