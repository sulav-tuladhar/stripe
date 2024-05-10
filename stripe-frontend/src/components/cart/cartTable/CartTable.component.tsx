'use client'
import React from 'react'

import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { deleteItem } from '@/lib/features/order/orderSlice';

const TABLE_HEAD = ["Name", "Quantity", "Amount", "Total", "Action"];

function CartTableComponent() {

    const dispatch = useDispatch<AppDispatch>();

    const deleteCartItem = (id: number) => {
        dispatch(deleteItem(id));
    }

    const TABLE_ROWS = useSelector((state: any) => state.order.products);
    return (
        <Card className="h-full w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader floated={false} shadow={false} className="rounded-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Your Cart
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-none px-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    id,
                                    image,
                                    title,
                                    price,
                                    quantity,
                                }: any,
                                index: number,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src={image}
                                                    alt={title}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                          >
                                                    {title}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                                                {quantity}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                                                {price}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <div className="flex items-center gap-3">

                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                                                        {price * quantity}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <button
                                                className='bg-red-600 p-2 text-[#fff] rounded-md text-[0.6rem] font-bold'
                                                onClick={() => deleteCartItem(id)}
                                            >
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Button variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        1
                    </IconButton>
                    <IconButton variant="text" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        2
                    </IconButton>
                    <IconButton variant="text" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        3
                    </IconButton>
                    <IconButton variant="text" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        ...
                    </IconButton>
                    <IconButton variant="text" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        8
                    </IconButton>
                    <IconButton variant="text" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        9
                    </IconButton>
                    <IconButton variant="text" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Next
                </Button>
            </CardFooter> */}
        </Card>
    )
}

export default CartTableComponent
