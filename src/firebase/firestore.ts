import { getFirestore, addDoc, collection, getDocs, QuerySnapshot, DocumentData, deleteDoc,doc} from "firebase/firestore";
import { app } from "./init";

const db = getFirestore(app);

export const addTODOtoDB = async (todo: string): Promise<void> => {
    await addDoc(collection(db, "todos"), {
        todo: todo
    });
}

export const getTODOfromDB = async (): Promise<QuerySnapshot<DocumentData>> => {
    return getDocs(collection(db, "todos"));
}

export const deleteTODOfromDB = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, "todos", id));
}