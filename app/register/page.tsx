'use client';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signup } from "../apis/fetchApi";
import React, { useState } from "react";
import axios from "axios";

const Page: React.FC = () => {
    const router = useRouter();

    // Define state for each input
    const [age, setAge] = useState<number | string>('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    // Handle form submission
    const handleRegister = async () => {
        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }

        const payload = {
            age,
            address,
            email,
            password,
        };

        try {
            
            const data = await signup(payload);
            
            if(data){
                router.push('/login');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return(
        <>
         <div className="mt-28 w-1/3  bg-white border rounded-2xl flex flex-col p-5 gap-5 pb-8">
                <div className="flex justify-center items-center w-full text-beamin font-semibold text-[26px]">
                    Sign up
                </div>
                <div className="flex flex-col w-full gap-3">
                    <Input 
                        placeholder="Age" 
                        className="h-[40px]" 
                        value={age} 
                        onChange={(e) => setAge(parseInt(e.target.value))} 
                    />
                </div>
                <div className="flex flex-col w-full gap-3">
                    <Input 
                        placeholder="Address" 
                        className="h-[40px]" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full gap-3">
                    <Input 
                        placeholder="Email" 
                        className="h-[40px]" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full ">
                    <Input.Password
                        placeholder="Password"
                        className="h-[40px]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div className="flex flex-col w-full ">
                    <Input.Password
                        placeholder="Re-enter password"
                        className="h-[40px]"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <button 
                        className="w-full h-[40px] uppercase text-white bg-beamin rounded-lg" 
                        onClick={handleRegister}
                    >
                        Signup
                    </button>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-gray-600">Bạn đã có tài khoản? </span>
                    <Link className="text-beamin cursor-pointer" href={"/login"}> Đăng nhập</Link>
                </div>  
            </div>
        </>
    );
}

export default Page;