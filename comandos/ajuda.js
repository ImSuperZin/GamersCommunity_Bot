module.exports.run = async(client, message, args) =>{
  message.delete();  
  message.reply(`Enviei meus ``Comandos`` no seu privado`);
  message.author.send({embed: {
        color: 12584993,
        author: {
          name: `${message.author.tag}`,
          icon_url: message.author.avatarURL
        },
        title: "Informações - Gamers™",
        url: " ",
        description: "\/",
        fields: [{
            name: "Ajuda",
            value: "Quer saber alguns comandos meus? Veja abaixo! (lembrando que os comandos de moderação precisam do cargo `Staff`.)"
          },
          {
            name: "Moderação",
            value: 
`**z!ban ** **MANUTENÇÃO PARA MELHORAR** = Irá banir o membro mencionado (Necessita da menção do usuário e motivo) 
**z!unban** = Irá desbanir o membro já banido (Precisa da menção e motivo)
**z!mute** = Irá mutar o membro mencionado (Precisa da menção e motivo)
**z!unmute** = Irá desmutar o membro já mutado (o membro precisa estar mutado para poder desmutar)
**z!limpar** = Limpará as mensagens (quantidade para colocar: 2 à 100 mensagens)
**z!kick** = Irá kickar o membro mencionado (Necessita da menção do usuário e motivo) 
**z!lockdown** = Irá fechar o chat. **(Poderá ter bugs!)**`
          
},
          {
            name: "Informação & Diversão",
            value: 
`**z!ping** = Caso queira ver o ping
**z!say** = O bot irá dizer a seguinte frase *MANUTENÇÃO)
**z!fotografia** = Irá mandar fotos aleatórias de: Artes, lugares e etc...
**z!serverinfo** = Cachorrinhos!!
**z!cat** = Gatinhos!!
`
          
},
          {
            name: "Sobre mim",
            value: "Bem, fui criado  programado pelo <@350772260031954944> com o objetivo de ajuda e diverti todo mundo!"
          },
          {
            name: "Gamers Community",
            value: `Uma Comunidade para gamers!`

          }, 
        
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Gamers™"
        }
      }
    });
}