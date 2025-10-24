"use client";
import React from 'react';
import Heading from '../heading/Heading';
import { useRouter } from 'next/navigation';

const Contact = () => {

  const router = useRouter();

  const handleBtn = () => {
    router.push('/contact/whatsapp')
  };

  return (
    <div>
      <Heading text="Contact Page" />
      <button
        onClick={handleBtn}
        className="py-2 px-4 rounded bg-white text-black absolute top-[60%] left-1/2 transform -translate-1/2"
      >
        Contact Us
      </button>
    </div>
  );
};

export default Contact;
