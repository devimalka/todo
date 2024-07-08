export default class todoitem{
    constructor(title){
        this.title = title;
        this.done = false;
    }

    setDate(date){
        this.date = date;
    }

    setNote(note){
        this.note = note;
    }
    
    finish(){
        self.done = true;
    }
}

