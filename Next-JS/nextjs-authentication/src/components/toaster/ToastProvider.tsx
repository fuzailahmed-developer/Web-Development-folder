"use client"; // Must be a client component

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 1500,
        position: 'top-right'
      }}
    />
  );
}
