'use client';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import TypeSelector from './type';
import AreaSelector from './area';
import FilterSelector from './filter';
import ResultFood from './result';
import { useSearchParams } from 'next/navigation';
import { searchFoods } from '../apis/fetchApi';

const Page: React.FC = () => {
    const searchParams = useSearchParams();
    const search = searchParams?.get('q');
    const [items, setItems] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await searchFoods({
                    name: search
                });
                
                if(response){
                    setItems(response);
                }
            } catch(error){
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [search]);

    return (
        <>
            <div className='w-full flex flex-row justify-between items-center border-b border-solid'>
                <div className='flex flex-row gap-3'>
                    <AreaSelector />
                    <TypeSelector />
                </div>
                <div className='flex items-center justify-center '>
                    <FilterSelector></FilterSelector>
                </div>

            </div>
            <div className='my-3 flex flex-row'>
                Results
            </div>
            <ResultFood items={items} />
        </>
    )
}
export default Page;