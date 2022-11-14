class Message {
    constructor(name, text) {
     this.name = name;
     this.time = new Date();
     this.text = text;
    }
   
    toString() {
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.name}: ${this.text}`
     }
   }
   
   class Messenger {
    constructor(){
        this.messages = []
    }
    show_history(){
        this.messages.forEach(item=>console.log(item))
    }
    send(name,text){
        let message = new Message(name, text)
        this.messages.push(message.toString())
    }
   }
   
   const one = new Messenger();
   one.send('Nurlana ', 'Hi')
   one.send('Maya', 'Hi')
   one.send('Nurlana', 'How are you?')
   one.send('Maya', 'I am fine')
   one.show_history()
