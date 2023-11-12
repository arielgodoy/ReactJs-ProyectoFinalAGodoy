import {doc,getDoc,getFirestore} from "firebase/firestore";
const getUser = async(userId) =>{
    const db= getFirestore();
    const userRef=doc(db,"users",userId);
    const snapshot = await getDoc(userRef);
    if(snapshot.exists())
    return{
id:snapshot.id,
        ...snapshot.data()
        }
};

const getUsers =()=>{
    
};
    
const addUser =()=>{
    
};

const removeUser =()=>{
    
};

export const userServices={getUser,getUsers,addUser,removeUser};