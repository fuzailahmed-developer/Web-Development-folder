import { doc, getDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { database } from "../firebase/config";
import type { UserType } from "../types/user";

const useFetchUser = () => {
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState<UserType>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFetchUser = useCallback(
    async (id: string): Promise<boolean> => {
      setLoading(true);

      try {
        const docRef = doc(database, "users", id);
        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) {
          return false;
        }

        const user = snapshot.data() as UserType;

        setInputs(user);

        return true;
      } catch (error) {
        console.log(error);
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    inputs,
    loading,
    handleChange,
    handleFetchUser,
  };
};

export default useFetchUser;



