/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 *
 * https://leetcode-cn.com/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (27.50%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    26K
 * Total Submissions: 92.5K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\r\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]\r'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 *
 * 在链表类中实现这些功能：
 *
 *
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 *
 *
 *
 *
 * 示例：
 *
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 所有val值都在 [1, 1000] 之内。
 * 操作次数将在  [1, 1000] 之内。
 * 请不要使用内置的 LinkedList 库。
 *
 *
 */

// @lc code=start

var Node = function(val) {
  this.val = val;
  this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  // this.tail = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let p = this.head;
  for (var i = 0; i < index; i++) {
    p = p.next;
  }
  return p.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new Node(val);
  if (this.size === 0) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
  return this.head.val;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val);
  if (this.size === 0) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size++;
  return this.tail.val;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index <= 0) {
    return this.addAtHead(val);
  }
  if (index === this.size) {
    return this.addAtTail(val);
  }
  if (index > this.size) {
    return -1;
  }

  const node = new Node(val);
  let p = this.head;
  for (let i = 0; i < index - 1; i++) {
    p = p.next;
  }
  const q = p.next;

  node.next = q;
  p.next = node;
  this.size++;
  return node.val;
};

MyLinkedList.prototype.deleteAtHead = function() {
  const d = this.head;
  if (this.size === 1) {
    this.head = this.tail = null;
  } else {
    const p = this.head.next;
    this.head = p;
  }
  this.size--;
  return d.val;
};

MyLinkedList.prototype.deleteAtTail = function() {
  const d = this.tail;
  if (this.size === 1) {
    this.head = this.tail = null;
  } else {
    let p = this.head;
    while(p.next !== this.tail) {
      p = p.next;
    }
    this.tail = p;
    this.tail.next = null;
  }
  this.size--;
  return d.val;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  if (index === 0) {
    return this.deleteAtHead();
  }
  if (index === this.size - 1) {
    return this.deleteAtTail();
  }

  let p = this.head;
  for(let i = 0; i < index - 1; i++) {
    p = p.next;
  }
  p.next = p.next.next;

  this.size--;
};

MyLinkedList.prototype.print = function() {
  if (this.size > 0) {
    let s = '';
    let p = this.head;
    while(p && p.val) {
      s += p.val;
      s += ' -> ';
      p = p.next;
    }
    console.log('size: ', this.size, '\n all values: ', s + 'null');
    return;
  }
  console.log('empty');
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end


const ml = new MyLinkedList();

// ml.addAtHead(3);
// ml.addAtHead(2);
// ml.addAtHead(1);

// ml.addAtTail(1)
// ml.addAtTail(2)
// ml.addAtTail(3)
// ml.addAtTail(4)

// ml.deleteAtIndex(2);

// ml.print();
// console.log(ml.get(-1));
// console.log(ml.get(10));
// console.log(ml.get(0));
// console.log(ml.get(1));
// console.log(ml.get(2));
