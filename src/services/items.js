import { collection, getDoc,deleteDoc,addDoc, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from "../services/firebase";

const getItem = async (itemId) => {
  const itemRef = doc(db, "items", itemId);
  const itemSnapshot = await getDoc(itemRef);
  
  if (itemSnapshot.exists()) {
    return itemSnapshot.data();
  } else {
    return null;
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
  console.log("Adding item...", newItemData);

  const itemsCollection = collection(db, "items");

  // Verificar si el documento ya existe
  const existingItemQuery = query(
    itemsCollection,
    where("id", "==", newItemData.id)
  );

  try {
    const existingItemSnapshot = await getDocs(existingItemQuery);

    if (existingItemSnapshot.size !== 0) {
      // El documento ya existe, actualizarlo
      const existingItemId = existingItemSnapshot.docs[0].id;
      const existingItemRef = doc(itemsCollection, existingItemId);
      await updateDoc(existingItemRef, newItemData);

      console.log("Item updated successfully with ID:", existingItemId);
      return existingItemId;
    } else {
      // El documento no existe, agregar uno nuevo
      const newItemRef = await addDoc(itemsCollection, newItemData);

      if (newItemRef.id) {
        console.log("Item added successfully with ID:", newItemRef.id);
        return newItemRef.id;
      } else {
        console.error("Failed to add item.");
        return null;
      }
    }
  } catch (error) {
    console.error("Error adding/updating item:", error.message);
    return null;
  }
};

const delItem = async (itemId) => {
  const itemRef = doc(db, "items", itemId);
  await deleteDoc(itemRef);
};

export const itemServices = { getItem, getItems, addItem, delItem };
