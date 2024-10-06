'use client'
import HeaderNav from "@/components/headerNav";
import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { fetchAllFoods, fetchFoodCategory } from "../apis/fetchApi";

export default function Home() {
    const [items, setItems] = useState([]);
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseFoodCategory = await fetchFoodCategory();
                setItems(responseFoodCategory);
                const responseAllFoods = await fetchAllFoods();
                setFoods(responseAllFoods);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])

    const banneritems = [
        {
            id: '1',
            name: 'anh 1',
            url: '/images/map1.png',
        },
        {
            id: '2',
            name: 'anh 2',
            url: '/images/map2.png',
        },
        {
            id: '3',
            name: 'anh 32',
            url: '/images/map3.png',
        },
        {
            id: '3',
            name: 'anh 32',
            url: '/images/map4.png',
        }
    ]
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 pt-3 pl-8 pr-8  z-40">
                    <div className="flex flex-col fixed  bg-white w-64 rounded-2xl  pl-3 pt-2  pb-5 gap-3  ">
                        <span>Categories </span>
                        {items.map((item: any, index) => (
                            <div key={index} className="flex flex-col gap-3 cursor-pointer hover:bg-slate-100">
                                <div className="flex flex-row items-center gap-1">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-9 w-full  pt-3 pr-8 gap-3 flex flex-col">
                    <ScrollBar items={banneritems} ></ScrollBar>
                    {foods.length > 0 ? (
                        <>
                            <ScrollFood items={foods} />
                            <ScrollFood items={foods} />
                        </>
                    ) : (
                        <div>Loading foods...</div> // Optionally show a loading state
                    )}
                </div>

            </div>

        </>
    )
}