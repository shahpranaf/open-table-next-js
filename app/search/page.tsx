import Link from 'next/link'
import React from 'react'
import NavBar from '../components/NavBar'
import Header from './components/Header'
import SearchSidebar from './components/SearchSidebar'
import RestaurantCard from './components/RestaurantCard'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Searh | OpenTable',
    description: 'Generated by create next app',
}

function Search() {
    return (
        <>
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSidebar />
                <div className="w-5/6">
                    <RestaurantCard />
                </div>
            </div>
        </>
    )
}

export default Search