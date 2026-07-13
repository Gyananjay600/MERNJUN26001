import  { useState } from "react";
import axios from "axios";

const PostData = () => {
  const [formData, setFormData] = useState({
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

  async function handleRegister() {
    try {
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );

      console.log("Register Success:", result.data);
    } catch (error) {
      console.error("Register Error:", error);
    }
  }

  return (
    <div>
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

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default PostData;