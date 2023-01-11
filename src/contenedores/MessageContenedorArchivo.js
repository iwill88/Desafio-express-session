const fs=require('fs');

class MensajesArchivo {
     constructor (id) {
        
        this.id = id,
        this.database =  JSON.parse(fs.readFileSync('src/mensajesDB.json','utf-8' ,(result,err)=>{
            if (err) throw err 
            return result
        }))
        
    }

    getAll(){
        return  this.database;
    }

    find(id) {
        console.log("id",id);
        return this.database.find((item) => item.id === id);
    }

    post(newMessage) {
        let message = {
            id: this.database.length+1,
            ...newMessage,
            
        }
        this.database.push(message);
        fs.writeFile('src/mensajesDB.json', JSON.stringify(this.database), 'utf-8', (err)=>{if (err) throw err})
        return message;
    }


    deleteMessage(id) {
        const index=this.database.findIndex((item) => item.id === parseInt(id));
        const messages=this.database.splice(index,1);
        console.log(messages);
        fs.writeFile('src/mensajesDB.json', JSON.stringify(this.database), 'utf-8', (err)=>{if (err) throw err})
        return messages; 
    }

}

module.exports = MensajesArchivo
