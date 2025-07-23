import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function saveTeacher(data: any) {
  await addDoc(collection(db, "teachers"), data);
}

export async function getTeachers() {
  const snapshot = await getDocs(collection(db, "teachers"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}