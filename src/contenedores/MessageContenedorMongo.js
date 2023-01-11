const {MensajesDAO} = require('../../MongoDB/mongoConnection')
class Mensajes {
    constructor  () {
       
       this.database = MensajesDAO
       
   }

  getAll(){
        return  this.database.find({});
         
        
   }

   
   find(_id) {
       
       console.log("id",_id);
       return this.database.findById({_id},{"mensajes":1});
   }

   async post(newMessage) {
       let message = {
           timestamp: Date.now(),
           ...newMessage,
           
       }
       await this.database.create(message);
       return message;
   }


    deleteMessage(_id) {
    console.log("id",_id);
    return this.database.deleteOne({_id});
   }


}

module.exports = Mensajes;