"use client";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ProductsList = () => {
  const [productData, setProductData] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState();
  const [isSuccess, setIsSuccess] = useState("");
  const [files, setFiles] = useState("");

  const handleEditItem = (item: any) => {
    setUsername(item.username);
    setAge(item.age);
    setEmail(item.email);
    setId(item.user_id);
    setIsUpdate(true);
  };

  const resetFrom = () => {
    setFiles("");
    setEmail("");
    setUsername("");
    setAge("");
  };

  const handleAddData = async () => {
    debugger;
    console.log(files);
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("age", age);
      formData.append("email", email);
      formData.append("file", files);

      const res = await fetch("http://localhost:3000/api/users", {
        method: "post",
        body: formData,
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.success) {
        toast.success("User Successfully added!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsSuccess(data);
        resetFrom();
      } else {
        toast.error(data.error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("An error occurred while adding the user", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleUpdateData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "put",
        body: JSON.stringify({ username, age, email }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("User Successfully Update!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsSuccess(data);
        setIsUpdate(false);
        resetFrom();
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred while updating the user", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "delete",
      });

      const data = await res.json();

      if (data.success) {
        toast.success("User Successfully Delete!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsSuccess(data.success);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred while deleting the user", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    isUpdate ? handleUpdateData() : handleAddData();
  };

  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((res) => {
        setProductData(res);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [isSuccess]);

  return (
    <div>
      <ToastContainer />
      <h1>Add User</h1>
      <form onSubmit={onSubmit} style={{ marginLeft: "34%" }}>
        <div>
          <label>Name:</label>
          <input
            className="userFiled"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Age:</label>
          <input
            className="userFiled"
            value={age}
            type="text"
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            className="userFiled"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="userFiled"
            type="file"
            name="file"
            onChange={(e: any) => setFiles(e.target.files?.[0])}
          />
          <br />
          <button className="addBtn" type="submit">
            {isUpdate ? "Update User" : "Add User"}
          </button>
        </div>
      </form>
      <h1>Product List</h1>
      {productData.map((item: any, key) => (
        <div key={key}>
          <p>name: {item.username}</p>
          <p>Email: {item.email}</p>
          <button onClick={() => handleEditItem(item)}>Edit</button>
          <button onClick={() => handleDeleteItem(item.user_id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
