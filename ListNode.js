class Node
{
    constructor(value)
    {
        this.next=null;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=null;
    }

    /* Determine whether the list is empty. */
    IsEmpty()
    {
        if (this.head == null){
            console.log("This list is empty")
            return this
        }
        console.log("this is not empty")
        return this
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        if(this.head == null){
            this.head = new Node(value)
            return this
        }
        let runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        runner.next = new Node(value)
        return this
    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {   
        if(arr.length == 0){
            return this
        }
        if(this.head == null){
            let i = 0
            while(i < arr.length){
                this.PushBack(arr[i])
                i++
            }
            return this
        }
        let runner = this.head
        while(runner.next != null){
            runner = runner.next
        }
        let i = 0
        while(i < arr.length){
            this.PushBack(arr[i])
            i++
        }
        return this
    }

    Iterate()
    {
        if (this.head == null){
            console.log("List is empty")
            return this
        }
        var runner = this.head
        while( runner != null){
            console.log(`Value: ${runner.value}`)
            runner = runner.next
        }
        return this
    }
};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=[111,222,333,444,555];

/* Create our list */
let list=new List();
/* Insert nodes into the list: */
list.PushBack(test_data1);
list.PushBack(test_data2);
list.PushBack(test_data3);
/* Insert array of nodes into the list: */
list.PushBackN(test_data4);
/* Iterate our list, so we can see our node values */
list.Iterate();