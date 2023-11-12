import { itemServices } from "../services/items";
import AddItemForm from "./addItemForm";


const AddItem = ()=>{
 const register =(data)=>{
    itemServices.addItem(data);

 }

    return (
        <> 
        <AddItemForm onSubmit={register} />      
        </>
    );
};

export default AddItem;

        
        

