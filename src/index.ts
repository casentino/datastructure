import { LinkedList, ListNode, methods } from "./LinkedList/Singly";
import { HashTable } from "./HashTable";

const hash = new HashTable<string | number, string>();

hash.put("Lisa Smith", "521-8976");
hash.put("Jjon Smith", "521-1234");
hash.put("Sandra Dee", "521-9655");
hash.put("Ted Baker", "418-4165");
hash.put("Sam Doe", "521-5030");

hash.print();
hash.put(1, "Hyundai");
hash.print();
hash.put(2, "KIA");
hash.print();
hash.put(3, "Toyota");
hash.print();
hash.put(4, "Mahindra");
hash.print();
hash.put(5, "Jeep");
hash.print();
hash.put(6, "Ford");
hash.print();
hash.put(7, "BMW");
hash.print();
hash.put(8, "Audi");
hash.print();
hash.put(9, "Mercedes-Benz");
hash.print();
hash.put(10, "Ferrari");
hash.print();
