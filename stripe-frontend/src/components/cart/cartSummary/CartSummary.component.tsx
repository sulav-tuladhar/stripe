'use client'
import { ProductsInterface } from '@/lib/features/order/orderSlice';
import React from 'react'
import { useSelector } from 'react-redux';

function CartSummaryComponent() {
    const products = useSelector((state: any) => state.order.products);
    var totalPrice: number = 0;
    var quantities: number = 0;
    products?.map((product: ProductsInterface) => {
        totalPrice += product.price * product.quantity
        quantities += product.quantity
    })
    return (
        <div className='p-6 rounded-xl shadow-xl w-[26rem]'>
            <h1>Payment Summary</h1>
            <div className='flex flex-col gap-2'>
                <span className='flex justify-between'>
                    <p>Total Products In Cart</p> <p>{products.length}</p>
                </span>
                <span className='flex justify-between'>
                    <p>Quantity In Cart</p> <p>{quantities}</p>
                </span>
                <hr />
                <span className='flex justify-between'>
                    <p>Total</p> <p>${totalPrice}</p>
                </span>
            </div>
        </div>
    )
}

export default CartSummaryComponent
