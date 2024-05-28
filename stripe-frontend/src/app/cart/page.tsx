import CartSummaryComponent from '@/components/cart/cartSummary/CartSummary.component'
import CartTableComponent from '@/components/cart/cartTable/CartTable.component'
import UserInfoComponent from '@/components/cart/userInfo/UserInfo.component'
import React from 'react'
// import { useSelector } from 'react-redux';

function Page() {

  return (
    <main className='flex pt-6 gap-8'>
      <CartTableComponent />
      <div className='flex flex-col gap-6'>
        <CartSummaryComponent />
        <UserInfoComponent />
      </div>
    </main>
  )
}

export default Page
