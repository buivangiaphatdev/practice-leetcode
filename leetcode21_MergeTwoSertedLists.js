var mergeTwoLists = function(list1, list2) {
 let mergeList =new ListNode();
 const dummy=mergeList
 while(list1&&list2){
    if(list1.val<list2.val){
        mergeList.next=list1;
        list1=list1.next;
    }else{
        mergeList.next=list2;
        list2=list2.next;
    }
    mergeList=mergeList.next
 }
 if(list1){
    mergeList.next=list1;
 }
 if(list2){
    mergeList.next=list2;
 }
 return dummy.next;
};
