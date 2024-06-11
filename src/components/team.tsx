'use client';
import React from 'react';
import { CoolToolTip } from './ui/animated-tooltip';
const people = [
    {
        id: 1,
        name: 'Maher Janajri',
        designation: 'CEO & Co-Founder',
        image: '/assets/img/maher.png',
    },
    {
        id: 2,
        name: 'Yousef Janajri',
        designation: 'CTO & Co-Founder',
        image: '/assets/img/yousef.jpg',
    },
    {
        id: 3,
        name: 'Dave Birnbaum',
        designation: 'Director of Product',
        image: '/assets/img/dave.jpg',
    },
    {
        id: 4,
        name: 'Maciej Małecki',
        designation: 'Senior Engineer',
        image: '/assets/img/maciej.jpg',
    },
    {
        id: 5,
        name: 'Rachouan Rejeb',
        designation: 'Design Lead',
        image: '/assets/img/rach.jpg',
    },

    {
        id: 6,
        name: 'Alex',
        designation: 'Back End',
        image: '/assets/img/alex.jpg',
    },
    {
        id: 7,
        name: 'Mishaal AlOdah',
        designation: 'Engineer In Test',
        image: '/assets/img/mishaal.png',
    },
    {
        id: 8,
        name: 'David Waugh',
        designation: 'Content Specialist',
        image: '/assets/img/david.jpg',
    },
    {
        id: 9,
        name: "Anas Da'amseh",
        designation: 'FP&A',
        image: '/assets/img/anas.jpg',
    },
];

export function Team() {
    return (
        <div className="flex flex-row items-center justify-center my-10 w-full">
            <CoolToolTip items={people} />
        </div>
    );
}
