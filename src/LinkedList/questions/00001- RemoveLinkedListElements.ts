import 
/**
 * 
 * https://leetcode.com/problems/remove-linked-list-elements/
 * 
 */

// 1. Recursive
function recursiveRemoveEl(node: ListNode) {        
    if(!node) return node;
        
    const nextNode = remove(node.next);
    if(node.val === val) {
        return nextNode;
    } else {
        node.next = nextNode;
        return node;
    }
}