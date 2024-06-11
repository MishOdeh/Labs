'use client';
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { Reveal } from './reveal';
import Link from 'next/link';

export function LetsTalk() {
    return (
        <WavyBackground className="max-w-screen-xl mx-auto my-auto pb-40">
            <h2 className="text-3xl font-extrabold lg:text-4xl text-emerald-200">
                Let's Talk.
            </h2>
            <Reveal
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                }}
            >
                <p className="leading-7 text-emerald-100">
                    Tell us about your project and we'll set up a time for a
                    no-commitment consultation. Not sure yet what you want to
                    build? Reach out anyway – we'd love to brainstorm with you.
                </p>
            </Reveal>
            <div className="flex gap-4">
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 },
                    }}
                >
                    <Link href="mailto:hello@coinbits.app" target="_blank">
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Say Hi!
                        </button>
                    </Link>
                </Reveal>
            </div>
        </WavyBackground>
    );
}
