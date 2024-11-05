import { LinkedList } from "./script.js";



const list = new LinkedList();
list.insertAtBeginning("Alice"); 
list.insertAtBeginning("Hamza"); 
list.insertAtBeginning("Cumar"); 
console.log(list.gettail());
console.log( list.getindex(0) );
console.log(list.contains('Alice'));
console.log(list.findindex('Hamza'));
list.traverse();                  
