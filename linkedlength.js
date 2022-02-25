// Implement the method length, which accepts a linked list (head), and returns the length of the list.
//
// For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.
//
// The linked list is defined as follows:
//
// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }


function length(head) {

  var temp = head;
  var count = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  } return count;

};
