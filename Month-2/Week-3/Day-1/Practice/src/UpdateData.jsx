import  { useState } from "react";
import axios from "axios";

const UpdateData = () => {
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    age: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdate() {
    try {
      const result = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${formData.id}`,
        {
          fullName: formData.fullName,
          age: formData.age,
        }
      );

      console.log("Update Success:", result.data);
    } catch (error) {
      console.error("Update Error:", error);
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter ID"
        name="id"
        value={formData.id}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        placeholder="Enter your name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        placeholder="Enter your age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateData;