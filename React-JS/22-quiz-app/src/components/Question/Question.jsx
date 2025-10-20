import React, { useState } from 'react'

const Question = ({isOver , setResult}) => {


    const [count, setCount] = useState(0)


    const quizData = [
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Central Style Sheets",
                "Cascading Style Sheets",
                "Cascading Simple Sheets",
                "Cars SUVs Sailboats"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hot Mail",
                "How To Make Lasagna",
                "Hyperlinks and Text Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "What year was JavaScript launched?",
            options: ["1996", "1995", "1994", "none of the above"],
            answer: "1995"
        },
        {
            question: "Which company developed JavaScript?",
            options: ["Netscape", "Google", "Microsoft", "Sun Microsystems"],
            answer: "Netscape"
        },
        {
            question: "Which HTML tag is used to define an internal stylesheet?",
            options: ["<style>", "<css>", "<script>", "<link>"],
            answer: "<style>"
        },
        {
            question: "Which property is used to change the background color in CSS?",
            options: ["bgcolor", "color", "background-color", "background"],
            answer: "background-color"
        },
        {
            question: "How do you write a comment in JavaScript?",
            options: [
                "<!-- comment -->",
                "// comment",
                "# comment",
                "** comment **"
            ],
            answer: "// comment"
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: ["<script>", "<js>", "<javascript>", "<scripting>"],
            answer: "<script>"
        },
        {
            question: "Which method can be used to select an element by ID in JavaScript?",
            options: [
                "getElementById()",
                "getElementsByClassName()",
                "querySelectorAll()",
                "getElementsByTagName()"
            ],
            answer: "getElementById()"
        }
    ];

    const handleOption = (text) => {
        if (quizData[count].answer == text) {
            setResult(prev => prev + 1)
            setCount(prev => (prev < quizData.length - 1 ? prev + 1 : isOver(true)))
        } else{
            setCount(prev => (prev < quizData.length - 1 ? prev + 1 : isOver(true)))
        }
    }


    return (
        <div className='text-center'>
            <h1 className='font-bold text-3xl'>Question?</h1>
            <h2 className='font-bold text-2xl'>{quizData[count]?.question}</h2>
            <div className='flex flex-col gap-2 justify-center items-center [&>*]:bg-blue-500 [&>*]:text-white [&>*]:py-2 [&>*]:px-6 [&>*]:rounded-md mt-6'>
                {
                    quizData[count]?.options.map((btn,index) => (
                        <button key={index} onClick={() => handleOption(btn)}>{btn}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Question