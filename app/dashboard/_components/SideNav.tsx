"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Home, LucideFileClock, Settings, WalletCardsIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';  // Import the Link component from Next.js
import UsageTrack from './UsageTrack';

const SideNav = () => {

    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: '/dashboard'
        },
        {
            name: "History",
            icon: LucideFileClock,
            path: '/dashboard/history'
        },
        {
            name: "Billing",
            icon: WalletCardsIcon,
            path: '/dashboard/billing'
        },
        {
            name: "Setting",
            icon: Settings,
            path: '/dashboard/setting'
        }
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path])

    return (
        <div className='h-screen relative p-2 shadow-sm border bg-white'>
            <div className='flex justify-center border-b-2 shadow-sm'>
                <Image src='/Final srciptai.png' alt='logo' width={200} height={50} />
            </div>
            <div className='mt-10'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path} passHref>
                        <div className={`flex items-center gap-2 p-3 mb-2 cursor-pointer hover:bg-primary hover:text-white rounded-lg ${path == menu.path && 'bg-primary text-white'}`}>
                            <menu.icon className='h-7 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack/>
            </div>
        </div>
    );
}

export default SideNav;
