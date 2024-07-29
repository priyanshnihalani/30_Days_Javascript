// Activity 1
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    append(data) {
        const node = new Node(data)
        if (this.head == null) {
            this.head = node
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;

        }
        this.size++
    }
    remove() {
        let current = this.head
        if (!current) {
            return "Linked List is Empty"
        }
        if (current.next == null) {
            this.size--
        }
        else {

            while (current.next.next !== null) {
                current = current.next
            }
            current.next = null
            this.size--
        }
    }
    display() {
        let current = this.head;
        let result = '';

        while (current !== null) {
            result += `[${current.data} | *] -> `;
            current = current.next;
        }

        result += 'null';
        console.log(result);
    }
}

const linkedlist = new LinkedList()
linkedlist.append(1)
linkedlist.append(2)

linkedlist.display()

// Activity 2

class Stack {
    constructor(size) {
        this.array = new Array(size)
        this.top = -1
        this.size = size
    }

    push(element) {
        if (this.top == this.size - 1) {
            console.log("Stack is Overflow")
        }
        else {
            this.array[++this.top] = element
            return this.array
        }
    }
    pop() {
        if (this.top == -1) {
            console.log("Stack is Underflow")
            return null
        }
        else {
            const popedelement = this.array[this.top--];
            return popedelement
        }
    }
    display() {
        if (this.top === -1) {
            console.log("Stack is Underflow");
        } else {
            console.log(this.array.slice(0, this.top + 1));
        }
    }
    peek() {
        if (this.top === -1) {
            console.log("Stack is Underflow");
        }
        else {
            console.log(this.array[this.top])
        }
    }
}
// let stack = new Stack(5)
// stack.push(5);
// stack.push(4);
// stack.push(3);
// stack.push(2);
// stack.push(1);

// stack.display();
// console.log(stack.pop());
// stack.display(); 

// stack.peek()

// let stack = new Stack(4)
// stack.push('c')
// stack.push('h')
// stack.push('a')
// stack.push('i')

// stack.display()

// let reverstack = [];
// while (stack.top != -1) {
//     let element = stack.pop()
//     reverstack.push(element)
// }
// console.log(reverstack)

// Activity 3

class Queue {
    constructor(size) {
        this.array = new Array(size);
        this.top = -1;
        this.bottom = -1;
        this.size = size;
    }

    enqueue(element) {
        if (this.top === this.size - 1) {
            console.log("Queue Overflow");
        } else {
            this.array[++this.top] = element;
            if (this.bottom === -1) {
                this.bottom = 0;
            }
        }
    }

    dequeue() {
        if (this.bottom === -1 || this.bottom > this.top) {
            console.log("Queue Underflow");
            return null;
        } else {
            const poppedElement = this.array[this.bottom++];
            if (this.bottom > this.top) {

                this.top = -1;
                this.bottom = -1;
            }
            return poppedElement;
        }
    }

    display() {
        if (this.bottom === -1 || this.bottom > this.top) {
            console.log("Queue Underflow");
        } else {
            console.log(this.array.slice(this.bottom, this.top + 1));
        }
    }

    front() {
        if (this.bottom === -1 || this.bottom > this.top) {
            console.log("Queue is empty");
        } else {
            console.log(this.array[this.bottom]);
        }
    }
}

// let queue = new Queue(4);
// queue.enqueue('a');
// queue.enqueue('b');
// queue.enqueue('c');
// queue.enqueue('d');

// queue.display(); 

// console.log(queue.dequeue()); 
// queue.display(); 

// queue.front(); 


let queue = new Queue(5);
queue.enqueue('print page 1')
queue.enqueue('print page 2')
queue.enqueue('print page 3')
queue.enqueue('print page 4')
queue.enqueue('print page 5')

function processTask() {
    if (queue.bottom != -1) {
        setTimeout(() => {
            queue.dequeue()
            console.log("Task Completed...")
            processTask()
        }, 2000)
    }
}
processTask()