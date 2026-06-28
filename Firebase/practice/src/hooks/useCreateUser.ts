import { useState } from "react";
import type { UserType } from "../types/user";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../firebase/config";
import toast from "react-hot-toast";

const useCreateUser = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const createUser = async ({
    fullName,
    email,
    password,
  }: UserType): Promise<void> => {
    setLoading(true);

    try {
      const collectionRef = collection(database, "users");

      await addDoc(collectionRef, {
        fullName,
        email,
        password,
        createdAt: serverTimestamp(),
      });

      toast.success("User created successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, createUser };
};

export default useCreateUser;