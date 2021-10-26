/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// Runtime: 60 ms, faster than 87.32% of JavaScript online submissions for Delete Node in a Linked List.
// Memory Usage: 35.3 MB, less than 99.57% of JavaScript online submissions for Delete Node in a Linked List.