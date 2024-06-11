'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function NavigationBar() {
    const menuItems = [
        { href: '#about', text: 'About' },
        { href: '#experiences', text: 'Experiences' },
        { href: '#projects', text: 'Projects' },
        { href: '#contact', text: 'Contact' },
    ];
    return (
        <>
            <NavigationMenu className="hidden sm:flex sm:sticky sm:top-0 bg-opacity-20 bg-gray-500 backdrop-blur-lg container py-1 justify-between max-w-screen-sm mx-auto rounded-lg mt-10">
                <Link href="/" passHref>
                    <Avatar className="cursor-pointer">
                        <AvatarImage
                            src="/assets/img/main-logo.png"
                            alt="@coinbitsapp"
                        />
                        <AvatarFallback>CBL</AvatarFallback>
                    </Avatar>
                </Link>
                <NavigationMenuList>
                    {menuItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={`${navigationMenuTriggerStyle()} bg-green-300 bg-opacity-5 text-emerald-50 font-semibold text-2xs`}
                                >
                                    {item.text}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Sheet>
                <SheetTrigger className="sm:hidden sticky top-0 bg-black bg-opacity-20 backdrop-blur-lg container py-2 justify-end flex z-10">
                    <Menu />
                </SheetTrigger>
                <SheetContent className="w-1/2">
                    <NavigationMenu className="flex flex-col w-full">
                        <NavigationMenuList className="w-full justify-end flex-col pt-4">
                            {menuItems.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <Link
                                        href={item.href}
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            {item.text}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </SheetContent>
            </Sheet>
        </>
    );
}
