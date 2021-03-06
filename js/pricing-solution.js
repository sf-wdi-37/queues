// // QUEUE data structure

 function Queue(){}
// // steal a few array methods
 Queue.prototype.enqueue = Array.prototype.push;
 Queue.prototype.dequeue = Array.prototype.shift;


// SOLUTION
// calculate the total price of items from the itemQueue
// every 3rd item is 10% off
// every 5th item is 20% off
// items that are 3rd and 5th are 30% off
function calculateTotal(itemQueue){
  var total = 0;
  var count = 1;
  var firstItem = itemQueue.shift();
  while (firstItem !== undefined){
    if (count % 15 === 0){
      total += firstItem.price * 0.7;
    } else if (count % 5 === 0){
      total += firstItem.price * 0.8;
    } else if (count % 3 === 0){
      total += firstItem.price * 0.9;
    } else {
      total += firstItem.price;
    }
    count++;
    firstItem = itemQueue.shift();
  }
  return total;
}



// See it in action
var q = new Queue();
q.enqueue({ name: 'banana',  price: .29 });
q.enqueue({ name: 'smoothie', price: 4.00 });
q.enqueue({ name: 'car', price: 10000 });

console.log('calculating total for\n', q);
console.log('total is', calculateTotal(q)); // 9004.29
