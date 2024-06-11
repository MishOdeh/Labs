'use client';
import { ExperienceCard } from '@/components/experience-card';
import { ProjectCard3d } from '@/components/project-card-3d';
import { Reveal } from '@/components/reveal';
import { Team } from '@/components/team';
import { LampDemo } from '@/components/ui/lamp';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TracingBeam } from '@/components/ui/tracing-beam';

import experiences from '@/lib/experiences.json';
import projects from '@/lib/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function Home() {
    return (
        <>
            <LampDemo />
            <div>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <h3 className="scroll-m-20 text-5xl font-semibold tracking-tight bg-clip-text text-teal-100 mb-4">
                        Coinbits Labs
                    </h3>
                    <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight bg-clip-text text-teal-50">
                        We build elegant software that scales.
                    </h3>
                </Reveal>

                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <p className="leading-7 max-w-screen-sm">
                        Coinbits Labs is a boutique full-stack software
                        development company that crafts innovative solutions for
                        the banking, fintech, bitcoin, payments, e-commerce, and
                        telehealth sectors.
                    </p>
                </Reveal>
                <div className="flex gap-4">
                    <TooltipProvider>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4 },
                            }}
                        >
                            <div className="px-20">
                                <Team />
                            </div>
                        </Reveal>
                    </TooltipProvider>
                </div>

                <Separator className="my-32" />
            </div>

            <div className="flex flex-col overflow-x-hidden">
                <section
                    id="experiences"
                    className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16 text-emerald-100"
                >
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-center w-full mb-10">
                        What we do best
                    </h2>
                    <div className="flex flex-col gap-4 md:hidden">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.title}
                                title={experience.title}
                                description={experience.description}
                            />
                        ))}
                    </div>
                    <TracingBeam className="px-6 hidden md:flex md:flex-col">
                        <div className="flex flex-col gap-4">
                            {experiences.map((experience) => (
                                <ExperienceCard
                                    key={experience.title}
                                    title={experience.title}
                                    description={experience.description}
                                />
                            ))}
                        </div>
                    </TracingBeam>
                </section>
                <Separator />
                <section
                    id="projects"
                    className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
                >
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-emerald-100">
                        Clients
                    </h2>
                    <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
                        {projects.map((projects, index) => (
                            <Reveal
                                key={projects.title}
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.4,
                                        delay: index / 30,
                                    },
                                }}
                            >
                                <ProjectCard3d
                                    title={projects.title}
                                    description={projects.description}
                                    imageUrl={projects.imageUrl}
                                    demoUrl={projects.demoUrl}
                                    skills={projects.skills}
                                />
                            </Reveal>
                        ))}
                    </div>
                </section>
                <Separator />
                <section
                    id="contact"
                    className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24"
                >
                    <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl  text-emerald-200">
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
                            Tell us about your project and we'll set up a time
                            for a no-commitment consultation. Not sure yet what
                            you want to build? Reach out anyway – we'd love to
                            brainstorm with you.
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
                            <Link
                                href="mailto:hello@coinbits.app"
                                target="_blank"
                            >
                                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    Say Hi!
                                </button>
                            </Link>
                        </Reveal>
                    </div>
                </section>
            </div>
        </>
    );
}
