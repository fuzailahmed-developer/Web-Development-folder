import type { UserType } from "../types/user"

// validation.ts
export const validateUser = (data: UserType) => {
  if (!data.fullName) return "Full name is required";
  if (!data.email) return "Email is required";
  if (!data.password) return "Password is required";

  return null;
}