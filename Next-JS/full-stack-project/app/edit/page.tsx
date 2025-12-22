import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Edit = () => {
    return (
        <div className='bg-zinc-950 flex justify-center items-center h-screen'>
            <div className='max-w-md w-full border border-white rounded-lg text-white px-5 py-7 flex flex-col gap-y-6 text-center '>
                <div className='flex items-center flex-col gap-y-4'>
                    <h1 className='text-2xl letter-spacing-add font-medium'>Edit Profile</h1>
                    <div className='border w-20 h-20  flex justify-center items-center rounded-full hover:text-blue-400 hover:border-blue-400 transition-all duration-200 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>
                </div>


                <div className="grid w-full items-center gap-3">
                    <Label htmlFor="Name">Name</Label>
                    <Input type="Name" id="Name" placeholder="Change Your Name" />
                </div>

                <div className='flex flex-col gap-y-3'>
                    <Button variant={'secondary'}>
                        Save
                    </Button>
                    <Button className='bg-transparent hover:text-zinc-300 hover:bg-transparent'>
                        Back to home
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Edit