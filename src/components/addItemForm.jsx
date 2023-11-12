import { useState } from "react";

const AddItemForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    title: "",
    description: "",
    image: "",
    price: 0.0,
    category:"",
  });

  const handleSubmit = (event) => {
    event.preventDefault();    
    onSubmit(fields);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="add-item-category">Categoria</label>
        <input
          type="text"
          name="add-item-category"
          value={fields.category}
          onChange={(e) => setFields({ ...fields, category: e.target.value })}
          id="add-item-category"
        />
      </div>

      <div className="form-group">
        <label htmlFor="add-item-title">Titulo</label>
        <input
          type="text"
          name="add-item-title"
          value={fields.title}
          onChange={(e) => setFields({ ...fields, title: e.target.value })}
          id="add-item-title"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="add-item-description">Descripcion</label>
        <input
          type="text"
          name="add-item-description"
          value={fields.description}
          onChange={(e) =>
            setFields({ ...fields, description: e.target.value })
          }
          id="add-item-description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="add-item-image">url imagen</label>
        <input
          type="text"
          name="add-item-image"
          value={fields.image}
          onChange={(e) => setFields({ ...fields, image: e.target.value })}
          id="add-item-image"
        />
      </div>
      <div className="form-group">
        <label htmlFor="add-item-price">Precio</label>
        <input
          type="number"
          min="1"
          value={fields.price}
          onChange={(e) => setFields({ ...fields, price: e.target.value })}
          name="add-item-price"
          id="add-
                item-price"
        />
      </div>
      <button type="submit"> Agregar Item</button>
    </form>
  );
};

export default AddItemForm;
