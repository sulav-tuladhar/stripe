'use client'
import { toggleSideBar } from '@/lib/features/navigation/navigationSlice';
import { AppDispatch } from '@/lib/store';
import { Button, Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function NavComponent() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const cartItems = useSelector((state: any) => state.order.products);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const openDrawer = () => setIsDrawerOpen

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""            >
                <a href="#" className="flex items-center">
                    Products
                </a>
            </Typography>
            <Typography
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
        </ul>
    );


    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture="">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href='/'>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
                        placeholder="" onPointerEnterCapture="" onPointerLeaveCapture=""                >
                        Pasal
                    </Typography>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-1">
                        <Link href='/cart'>
                            <Button
                                placeholder="" onPointerEnterCapture="" onPointerLeaveCapture=""
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Cart ( {cartItems.length} )</span>
                            </Button>
                        </Link>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)} placeholder="" onPointerEnterCapture="" onPointerLeaveCapture=""                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm" className="" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture="">
                        <span>Log In</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm" className="" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture="">
                        <span>Sign in</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    )
}

export default NavComponent
