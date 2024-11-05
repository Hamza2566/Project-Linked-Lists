class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export class LinkedList {
    constructor() {
        this.head = null;
    }


  insertAtBeginning(data){
      const newnode =  new Node(data)
      newnode.next = this.head
      this.head = newnode
      console.log(`Inserted ${data} at the beginning.`);
    }
    insertAtEnd(data){
        const newnode = new Node(data)
        if (this.head) {
            let lastNode = this.head
            while(lastNode.next){
                lastNode= lastNode.next;
            }
            lastNode.next = newnode
        }
        else{
            this.head = newnode
        }
      console.log(`Inserted ${data} at the End.`);
    }
    gettail(){
        let current = this.head
        if (current.next === null) {return current}
        while (current.next !== null) {
            current = current.next
            }
            return current

    }
    getindex(index){
        let current = this.head
        let count = 0
        while(current){
            if (count === index) {
                return current.data
            }
            count++;
            current = current.next
        }
        return null
    }
    removelast(){
        let current = this.head
        if (current === null) {console.log("List is empty")}
        else if (current.next === null) {
            this.head = null
            console.log("Removed the last node")
            }
            else{
                while (current.next.next !== null) {
                   current = current.next
                }
            }
            console.log("Removed the last node");
            current.next = null
    }
    contains(data){
        let current = this.head
        while (current) {
            if (data === current.data) {
                return true
            }
            current = current.next
        }
        return false   
    }
    findindex(data){
        let current = this.head
        let count = 0
        while (current) {
            if (data === current.data) {
                return count
            }
            current = current.next
            count++
        }
        return count 
    }
    traverse() {
        let current = this.head;  
        const elements = [];       
        while (current) {
            elements.push(current.data); 
            current = current.next;      
        }
        console.log("Current List: " + elements.join(" -> ") + " -> null");
        console.log(elements.length);
        console.log(this.head);
    }
}

