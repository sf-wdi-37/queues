
##Queues


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/2000px-Data_Queue.svg.png" width="400px" alt="queue image with enqueue and dequeue">


Queues as a data structure are a lot like queues as a physical structure. This makes more sense with British English, where *queue* means "a line" or "to line up". Think of an orderly line of people waiting to do something. We can remove an item from the front of the queue when its turn comes (by `pop`ing, also known as `dequeue`ing), or add an item to the back of the queue when it joins the line (by `push`ing or `enqueue`ing it). Again, while we may be able to "cut" in line in the real world, the queue data structure only allows us to add to the end of the stack or remove from the beginning.  The `enqueue` and `dequeue` operations for a queue are both O(1) - constant time.  Like with stacks, some implementations of queues also allow us to `peek` at the value of the first item without `dequeue`ing it.

Queues are "First In, First Out" -- the first item enqueued will be the first to move all the way through the line and get dequeued.

<img src="http://www.rioleo.org/images/static/queuesafety.jpg" alt="stick figure demon eats person cutting in line -- from popcoaster.com" width="400px">

### Thinking with Queues

1.  Draw a queue after each of the following operations:

  * ENQUEUE 0
  * DEQUEUE
  * ENQUEUE 2
  * ENQUEUE 4
  * ENQUEUE 6
  * DEQUEUE
  * ENQUEUE 8

  <details><summary>click for answer...</summary>
    ```
    * start        []
    * ENQUEUE 0    [0]
    * DEQUEUE      []
    * ENQUEUE 2    [2]
    * ENQUEUE 4    [2, 4]
    * ENQUEUE 6    [2, 4, 6]
    * DEQUEUE      [4, 6]
    * ENQUEUE 8    [4, 6, 8]
    ```
  </details>



1. How would you implement a queue **with an array**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?

 <details><summary>super stuck? click for an answer...</summary>
 > The "front" could be the beginning of the array.  To enqueue, you'd use JavaScript's handy `push` array method. To dequeue, you could use JavaScript's `shift` method, which removes and returns the first element from an array.
 </details>


1. How would you implement a queue **with a linked list**? Where would you decide the front of the queue would be? How would you `enqueue` something to the end of the queue? How would you `dequeue` something from the front of the queue?

 <details><summary>super stuck? click for an answer...</summary>
 > You'd need to store the tail.  The "front" could be the head of the linked list. The "back" could be the tail.  You could enqueue by `append`ing to the tail.  You could dequeue by deleting and returning the head node.
 </details>

1. **Stretch:** How would you implement a queue with a fixed-size array?



## Challenges


1. **Message Queues**

 Queues are often used to create "buffers" that temporarily store data from one part of a program until another part of a program can process the data. This is common with asynchronous data transfer, or mismatches between how often data is sent and how often it can be processed.

 We'll think of a scenario where restaurant diners order food faster than the chefs can cook it.  

 Describe how you would use a queue help the chef keep track of meals to make.  What should the chef do when the queue is empty?

1. **Stretch:** Try out [this queue challenge](queues-challenge.md) to calculate the total price of a purchase.
