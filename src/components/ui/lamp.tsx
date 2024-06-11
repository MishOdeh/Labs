'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';

export function LampDemo() {
    const name = [{ text: 'Coinbits' }, { text: 'Labs' }];
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.05,
                    duration: 0.6,
                    ease: 'easeInOut',
                }}
                className="mt-8 bg-gradient-to-br from-slate-50 to-cyan-50 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <header className="flex flex-col sm:flex-row justify-center items-center  gap-4 mt-16 text-emerald-50">
                    <div className="flex flex-col gap-2 w-full">
                        <TypewriterEffectSmooth words={name} />
                    </div>
                </header>
            </motion.h1>{' '}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                <Image
                    src={'/assets/img/main-logo.png'}
                    alt="Coinbits Labs"
                    fill
                    className="rounded-md main-logo spin max-w-16 max-h-16 mx-auto my-auto mb-24"
                />
            </motion.div>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <>
            <div
                className={cn(
                    'relative flex min-h-screen min-w-screen-xl flex-col items-center justify-center overflow-hidden max-w-screen-xs md:max-w-screen-lg mx-auto opacity-90 bg-dark-900 rounded-md',
                    className,
                )}
                style={{ height: '100%', width: '100%' }}
            >
                <div className="relative flex w-full flex-1 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0.5, width: '15rem' }}
                        whileInView={{ opacity: 0.3, width: '30rem' }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            ease: 'linear',
                        }}
                        style={{
                            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                        }}
                        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                    >
                        <div className="absolute  w-[100%] left-0 bg-dark-600 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                        <div className="absolute  w-40 h-[100%] left-0 bg-dark-900  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0.5, width: '15rem' }}
                        whileInView={{ opacity: 0.3, width: '30rem' }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            ease: 'easeInOut',
                        }}
                        style={{
                            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                        }}
                        className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                    >
                        <div className="absolute  w-10 h-[100%] right-0 bg-dark-900  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                        <div className="absolute  w-[10%] right-0 bg-dark-600 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    </motion.div>

                    <div className="absolute top-1/2 h-48 w-full bg-cyan-950 opacity-0.1 blur-xl">
                        <div
                            style={{
                                maskImage:
                                    'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
                            }}
                            className="absolute w-1/2 h-full left-0 bg-transparent"
                        />
                        <div
                            style={{
                                maskImage:
                                    'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
                            }}
                            className="absolute w-1/2 h-full right-0 bg-transparent"
                        />
                    </div>

                    <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-20 blur-3xl" />
                    <motion.div
                        initial={{ width: '8rem' }}
                        whileInView={{ width: '16rem' }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
                    />
                    <motion.div
                        initial={{ width: '15rem' }}
                        whileInView={{ width: '30rem' }}
                        transition={{
                            delay: 0.1,
                            duration: 0.6,
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] opacity-90 h-[0.2vh] bg-cyan-400"
                    />

                    <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 opacity-0 " />
                </div>
                <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                    {children}
                </div>
            </div>
        </>
    );
};
