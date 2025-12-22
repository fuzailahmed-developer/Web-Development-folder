import React, { useEffect, useState } from "react";
import style from "./search.module.css";
import loadingImg from "./assets/fade-stagger-circles.svg";
import { ref, onValue, query, orderByChild, startAt, endAt, remove } from "firebase/database";
import { db } from "./utils/firebase";
import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const filtering = () => {
    if (!input.trim()) {
      setFilteredUsers([]);
      return;
    }

    setLoading(true);

    const usersRef = query(
      ref(db, "Users"),
      orderByChild("name"),
      startAt(input),
      endAt(input + "\uf8ff")
    );

    onValue(
      usersRef,
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setFilteredUsers([]);
        } else {
          const arr = Object.entries(data).map(([id, user]) => ({
            id,
            ...user,
          }));
          setFilteredUsers(arr);
        }
        setLoading(false);
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await remove(ref(db, `Users/${id}`));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => filtering(), 300);
    return () => clearTimeout(t);
  }, [input]);

  return (
    <div className={style.my_container}>
      <button className={style.btn}>
        <Link to={"/read"}>List</Link>
      </button>

      <div className={style.input_div}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          placeholder="Enter User Name"
          autoFocus
        />
      </div>

      {loading ? (
        <div className={style.loading_img}>
          <img src={loadingImg} width={200} height={100} />
        </div>
      ) : (
        <div className={style.content_container}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div className={style.content_div} key={user.id}>
                <div>
                  <span>Name</span>
                  <span>{user.name}</span>
                </div>
                <div>
                  <span>Email</span>
                  <span>{user.email}</span>
                </div>
                <div>
                  <span>Password</span>
                  <span>{user.password}</span>
                </div>
                <div>
                  <button
                    className={style.simple_btn}
                    style={{ width: "80%", marginInline: "auto" }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={style.message_div}>
              <h1>Enter correct user name…!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
