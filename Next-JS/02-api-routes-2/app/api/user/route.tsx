import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "Ali Khan", age: 24, email: "ali.khan@example.com", city: "Karachi" },
  { id: 2, name: "Sara Ahmed", age: 22, email: "sara.ahmed@example.com", city: "Lahore" },
  { id: 3, name: "Bilal Hussain", age: 28, email: "bilal.hussain@example.com", city: "Islamabad" },
  { id: 4, name: "Ayesha Malik", age: 26, email: "ayesha.malik@example.com", city: "Rawalpindi" },
  { id: 5, name: "Usman Raza", age: 30, email: "usman.raza@example.com", city: "Faisalabad" },
  { id: 6, name: "Fatima Noor", age: 21, email: "fatima.noor@example.com", city: "Multan" },
  { id: 7, name: "Zain Ali", age: 25, email: "zain.ali@example.com", city: "Hyderabad" },
  { id: 8, name: "Hassan Javed", age: 29, email: "hassan.javed@example.com", city: "Peshawar" },
  { id: 9, name: "Nimra Iqbal", age: 23, email: "nimra.iqbal@example.com", city: "Quetta" },
  { id: 10, name: "Rehan Siddiqui", age: 27, email: "rehan.siddiqui@example.com", city: "Sialkot" }
];


export async function GET(request:NextRequest){
    return NextResponse.json(
        users
    )
}