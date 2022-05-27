class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Add elements to the top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count +=1;
    return this.count - 1;
  }

  //Remove last aded element
  //Return undefined if count is zero
  pop() {
    if(this.count == 0) return undefined;
    let deletedItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deletedItem} removed`)
    return deletedItem;
  }

  //Check Top Element
  peek() {
    console.log(`The top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  //Check if Stack is empty
  isEmpty() {
    console.log(this.count == 0 ? 'Stack is Empty': 'Stack is not empty');
    return this.count == 0;
  }

  //Check the size 
  size() {
    console.log(`${this.count} elements in Stack`);
    return this.count;
  }
  
  //Print Elements in slack
  print() {
    let str = '';
    for(let i = 0; i < this.count; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }

  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack cleared...');
    return this.items;
  }
}

const stack = new Stack()
stack.isEmpty();
stack.push(210);
stack.size();
stack.push(50);
stack.push(80);
stack.clear();
stack.peek();
stack.push(14);
console.log(stack.print());
stack.pop();
stack.pop();
console.log(stack.print());
stack.isEmpty();
stack.size();