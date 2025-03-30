"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@stackframe/stack'
import Image from 'next/image';
import React from 'react'

const ExpertsList = [
    {
        name: "Lecture on Topic",
        icon: "/interview.png"
    },
    {
        name: "Mock Interview",
        icon: "/interview.png"
    },
    {
        name: "Languages",
        icon: "/interview.png"
    },
    {
        name: "Meditation",
        icon: "/meditation.png"
    },
    {
        name: "QnA Time",
        icon: "/interview.png"
    },
]

function FeatureAssistant() {
    const user = useUser();
  return (
    <div>
        <div className='flex justify-between items-center'>
        <div>
        <h2 className='font-medium text-gray-500'>My Workspace</h2>
        <h2 className='text-3xl font-bold'>Welcome back, {user.displayName}</h2>
        </div>
        <Button>Profile</Button>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-10 mt-10'>
            {ExpertsList.map((item, index) => (
                <div key={index} className='p-3 bg-secondary rounded-3xl flex items-center flex-col justify-center'>
                    <Image className='bg-transparent' src={item.icon} alt={item.name} height={120} width={120} />
                    <h1 className='mt-2'>{item.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureAssistant