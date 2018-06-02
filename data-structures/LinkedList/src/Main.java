public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<Integer>();
        for (int i = 0; i < 5; i++) {
            linkedList.addFirst(i);
            System.out.println(linkedList);
        }

        linkedList.add(2, 666);
        System.out.println(linkedList);

//        0->NULL
//        1->0->NULL
//        2->1->0->NULL
//        3->2->1->0->NULL
//        4->3->2->1->0->NULL
//        4->3->666->2->1->0->NULL

        linkedList.remove(2);
        System.out.println(linkedList);

        linkedList.removeFirst();
        System.out.println(linkedList);

        linkedList.removeLast();
        System.out.println(linkedList);
//        4->3->2->1->0->NULL
//        3->2->1->0->NULL
//        3->2->1->NULL
    }
}
