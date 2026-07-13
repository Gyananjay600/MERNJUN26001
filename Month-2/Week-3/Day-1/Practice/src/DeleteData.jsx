import  { useState } from "react";
import axios from "axios";

const DeleteData = () => {
  const [id, setId] = useState("");

  function handleChange(e) {
    setId(e.target.value);
  }

  async function handleDelete() {
    try {
      const result = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      console.log("Delete Success:", result.data);
      alert("Data deleted successfully!");
    } catch (error) {
      console.error("Delete Error:", error);
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter ID to delete"
        value={id}
        onChange={handleChange}
      />

      <br />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteData;