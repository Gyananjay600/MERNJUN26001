import { useState, useEffect } from "react";

function UserForm() {

    const initialState = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    };

    const [formData, setFormData] = useState(initialState);

    const [users, setUsers] = useState([]);

    // Load data from Local Storage
    useEffect(() => {

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        setUsers(storedUsers);

    }, []);

    // Handle Input Change
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    // Submit Form
    const handleSubmit = (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match!");

            return;

        }

        const updatedUsers = [...users, formData];

        setUsers(updatedUsers);

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        alert("Registration Successful!");

        setFormData(initialState);

    };

    // Reset Form
    const handleReset = () => {

        setFormData(initialState);

    };

    return (

        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

                <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">

                    User Registration Form

                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg mb-4"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg mb-4"
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg mb-4"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg mb-4"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg mb-6"
                        required
                    />

                    <div className="flex gap-4">

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg w-full"
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg w-full"
                        >
                            Reset
                        </button>

                    </div>

                </form>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-4">

                    Registered Users

                </h2>

                {

                    users.length === 0 ?

                        <p className="text-gray-500">

                            No users registered yet.

                        </p>

                        :

                        <div className="space-y-4">

                            {

                                users.map((user, index) => (

                                    <div
                                        key={index}
                                        className="border rounded-lg p-4 bg-gray-50"
                                    >

                                        <h3 className="font-bold">

                                            {user.name}

                                        </h3>

                                        <p>

                                            📧 {user.email}

                                        </p>

                                        <p>

                                            📞 {user.phone}

                                        </p>

                                    </div>

                                ))

                            }

                        </div>

                }

            </div>

        </div>

    );

}

export default UserForm;