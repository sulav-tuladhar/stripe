'use client'
import { Button, Input } from '@material-tailwind/react'
import React from 'react'

function UserInfoComponent() {
    return (
        <div className='p-6 rounded-xl shadow-xl'>
            <h1 className='mb-4'>Please Fill Up The Form</h1>
            <form className='flex flex-col gap-6'>
                <Input variant="outlined" label="Full Name" placeholder="Outlined" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                <Input variant="outlined" label="Email" placeholder="Outlined" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                <Input variant="outlined" label="Phone" placeholder="Outlined" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                <Button ripple={true} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Checkout</Button>
            </form>
        </div>
    )
}

export default UserInfoComponent
