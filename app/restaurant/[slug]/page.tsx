import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'
import Header from './components/Header'
import RestaurantNavBar from './components/RestaurantNavBar'
import Title from './components/Title'
import Images from './components/Images'
import Description from './components/Description'
import Rating from './components/Rating'
import Reviews from './components/Reviews'
import Reservation from './components/Reservation'

function RestaurantDetails() {
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                    <RestaurantNavBar />
                    <Title />
                    <Rating />
                    <Description />
                    <Images />
                    <Reviews />
            </div>
            <Reservation />
        </>
    )
}

export default RestaurantDetails