import { NextRequest, NextResponse } from "next/server";

const users = [
    {
        id: 1,
        name: "Ali Khan",
        email: "ali.khan@example.com",
        age: 24,
        country: "Pakistan",
        isActive: true
    },
    {
        id: 2,
        name: "Sara Ahmed",
        email: "sara.ahmed@example.com",
        age: 28,
        country: "UAE",
        isActive: false
    },
    {
        id: 3,
        name: "Omar Siddiqui",
        email: "omar.sid@example.com",
        age: 31,
        country: "Saudi Arabia",
        isActive: true
    },
    {
        id: 4,
        name: "Hina Malik",
        email: "hina.malik@example.com",
        age: 22,
        country: "Pakistan",
        isActive: true
    },
    {
        id: 5,
        name: "Zain Raza",
        email: "zain.raza@example.com",
        age: 27,
        country: "Qatar",
        isActive: false
    },
    {
        id: 6,
        name: "Fatima Noor",
        email: "fatima.noor@example.com",
        age: 25,
        country: "UK",
        isActive: true
    },
    {
        id: 7,
        name: "Bilal Ansari",
        email: "bilal.ansari@example.com",
        age: 30,
        country: "Canada",
        isActive: true
    },
    {
        id: 8,
        name: "Aisha Yousuf",
        email: "aisha.yousuf@example.com",
        age: 26,
        country: "Pakistan",
        isActive: false
    },
    {
        id: 9,
        name: "Hamza Tariq",
        email: "hamza.tariq@example.com",
        age: 29,
        country: "Malaysia",
        isActive: true
    },
    {
        id: 10,
        name: "Nimra Shah",
        email: "nimra.shah@example.com",
        age: 23,
        country: "USA",
        isActive: true
    }
];



export async function GET() {
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    let { name, age } = await request.json()
    return NextResponse.json({
        name,age
    })
}