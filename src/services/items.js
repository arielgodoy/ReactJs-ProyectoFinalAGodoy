
import {doc,getDoc,getFirestore} from 'firebase/firestore';
const db = getFirestore();
const itemRef = doc(db,"items","");

getDoc(itemRef).then((snapshot)=>{
    if(snapshot.exists()){
        console.log(snapshot.id, snapshot.data());
    }
    
});

const getItem = async (itemId) => {
    const itemRef = doc(db, "items", itemId);
    const itemSnapshot = await getDoc(itemRef);
    
    if (itemSnapshot.exists()) {
      return itemSnapshot.data();
    } else {
      return null; // El elemento no existe
    }
  };
  
  const getItems = async () => {
    const itemsCollection = collection(db, "items");
    const itemSnapshot = await getDocs(itemsCollection);
  
    return itemSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  };
  
  const addItem = async (newItemData) => {
    const itemsCollection = collection(db, "items");
    const newItemRef = await addDoc(itemsCollection, newItemData);
    
    return newItemRef.id; // Devuelve el ID del nuevo elemento
  };
  
  const delItem = async (itemId) => {
    const itemRef = doc(db, "items", itemId);
    await deleteDoc(itemRef);
  };
  

export const userServices ={getItem,getItems,addItem,delItem};
