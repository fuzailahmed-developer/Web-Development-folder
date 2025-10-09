import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center'>
            <div className='border py-3 px-6 m-10 w-[250px] rounded-lg'>
                <p className='font-bold text-2xl text-center'>Login</p>
                <label htmlFor="email" className='mt-3 inline-block'>
                    Email : <br /> <input type="email" placeholder='Enter Email' autoComplete='off' id='email' className='shadow-md border pl-2 rounded mt-2'/>
                </label>
                <br />
                <label htmlFor="password" className='mt-3 inline-block'>
                    Password : <br /> <input type="password" placeholder='Enter Password' autoComplete='off' id='password' className='shadow-md border pl-2 rounded '/>
                </label>
                <br />
                <button className='mt-5 bg-blue-500 text-white rounded-md py-1 px-4 inline-block'>Login</button>
            </div>
        </div>
    )
}

export default Login