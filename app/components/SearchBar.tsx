"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function SearchBar() {
    const router = useRouter();
    const [searchKey, setSearchKey] = useState("");

    const handleSearch = () => {
        router.push('/search');
    }

    return (
        <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
                className="rounded  mr-3 p-2 w-[450px]"
                type="text"
                placeholder="State, city or town"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={handleSearch}>
                Let's go
            </button>
        </div>
    )
}

export default SearchBar