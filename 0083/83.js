/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    let previous = null;
    let set = new Set();
    while (current !== null) {
        if (set.has(current.val)) {
            previous.next = current.next;
        }
        else {
            set.add(current.val);
            previous = current;
        }
        current = current.next 
    }
    return head;
};

// Runtime: 68 ms, faster than 70.57% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 36.5 MB, less than 9.34% of JavaScript online submissions for Remove Duplicates from Sorted List.