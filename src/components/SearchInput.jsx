"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const SearchInput = () => {
    const router = useRouter()
    const params = useSearchParams()
    console.log(router);
    const handleSearch = function (e) {
        e.preventDefault()
        const form = e.target;
        const value = form.search.value;

        const newParams = new URLSearchParams(params)

        if (!value) {
            router.push('/foods');
        } else {
            newParams.set("search", value)
            router.push(`?${newParams.toString()}`);
        }
    }
    return (
        <form onSubmit={handleSearch}>
            <input name='search' type="text" className='outline-1 rounded-sm mr-2.5 focus:ring-1 focus:ring-white' />
            <button>Search</button>
        </form>
    );
};

export default SearchInput;