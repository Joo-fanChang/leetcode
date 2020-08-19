/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (44.36%)
 * Likes:    288
 * Dislikes: 0
 * Total Accepted:    23K
 * Total Submissions: 51.9K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 *
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) -
 * 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
 *
 * 进阶:
 *
 * 你是否可以在 O(1) 时间复杂度内完成这两种操作？
 *
 * 示例:
 *
 * LRUCache cache = new LRUCache( 2 );
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // 返回  1
 * cache.put(3, 3);    // 该操作会使得密钥 2 作废
 * cache.get(2);       // 返回 -1 (未找到)
 * cache.put(4, 4);    // 该操作会使得密钥 1 作废
 * cache.get(1);       // 返回 -1 (未找到)
 * cache.get(3);       // 返回  3
 * cache.get(4);       // 返回  4
 *
 *
 */

/**
 * 双向链表按照被使用的顺序存储了这些键值对，靠近头部的键值对是最近使用的，而靠近尾部的键值对是最久未使用的。
 * 哈希表即为普通的哈希映射（HashMap），通过缓存数据的键映射到其在双向链表中的位置。
 */

// @lc code=start

var DoubleLinkedList = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
  this.size = 0;
  this.head = new DoubleLinkedList();
  this.tail = new DoubleLinkedList();
  // 给出两个空白节点的优点是，不管怎么插入和删除，前后节点都是非空的，操作方便
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache.get(key);
  if (!node) {
    return -1;
  }
  // 如果存在就要调整顺序
  if (node.prev !== this.head) {
    // 先把节点从原链表中删除
    this.removeNode(node);
    // 再插入到头部
    this.insertAtHead(node);
  }
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.get(key)) {
    // 如果在缓存中找到了该节点，就更新该节点的值
    const oldNode = this.cache.get(key);
    oldNode.value = value;
    // size保持不动
    // 如果存在就要调整顺序
    if (oldNode.prev !== this.head) {
      // 先把节点从原链表中删除
      this.removeNode(oldNode);
      // 再插入到头部
      this.insertAtHead(oldNode);
    }
  } else {
    // 如果不存在就
    const node = new DoubleLinkedList(key, value);
    // 1. 存入到缓存
    this.cache.set(key, node);
    // 2. 在链表的头部插入
    this.insertAtHead(node);

    if (this.size >= this.capacity) {
      // 如果是已经存在上限了
      // 把最近的节点给干掉
      const lastNode = this.tail.prev;
      // 从cache中删除
      this.cache.delete(lastNode.key);
      lastNode.prev.next = this.tail;
      this.tail.prev = lastNode.prev;
      lastNode.next = null;
      lastNode.prev = null;
    } else {
      this.size++;
    }
  }
};

LRUCache.prototype.insertAtHead = function(node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  node.prev = this.head;
  this.head.next = node;
}

LRUCache.prototype.removeNode = function(node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
}

LRUCache.prototype.print = function() {
  let current = this.head.next;
  let str = '';
  while (current && current.value) {
    str += `key: ${current.key} value: ${current.value} -> `
    current = current.next
  }
  console.log(str)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const lru = new LRUCache(2);

lru.put(2, 1);
lru.put(1, 1);
lru.put(2, 3);
lru.put(4, 1);
lru.put(4, 4);
console.log(lru.get(1));
console.log(lru.get(2));

lru.print();
