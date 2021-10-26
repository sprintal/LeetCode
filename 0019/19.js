/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head.next == null) {
        return null;
    }
    let dummy = new ListNode(null);
    let node = head;
    dummy.next = head;
    for (let i = 1; i < n; i++) {
        node = node.next;
    }
    if (node.next == null) {
        return head.next;
    }
    while (node.next != null) {
        node = node.next;
        dummy = dummy.next;
    }
    dummy.next = dummy.next.next;
    return head;
};

// Runtime: 64 ms, faster than 28.56% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Remove Nth Node From End of List.