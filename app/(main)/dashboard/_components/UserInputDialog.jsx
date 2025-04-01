import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LoaderCircle } from 'lucide-react'

const CoachingExpert = [
    {
        name: 'Joanna',
        avatar: '/t1.jpg'
    },
    {
        name: 'Sallie',
        avatar: '/t2.jpg'
    },
    {
        name: 'Mathhew',
        avatar: '/t3.jpg'
    },
]

function UserInputDialog({children, ExpertsList}) {
    const [selectedExpert, setSelectedExpert] = useState() 
    const [topic, setTopic] = useState()
    const createDiscussionRoom = useMutation(api.DiscussionRoom.CreateNewroom)
    const [loading, setLoading] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const onClickNext = async () => {
        setLoading(true)
        const result = await createDiscussionRoom({
            topic: topic,
            CoachingExpert: ExpertsList?.name,
            expertName: selectedExpert
        })
        console.log(result)
        setLoading(false)
        setOpenDialog(false)
    }
  return (
    <div>
        <Dialog open={openDialog} onOpenDialog={setOpenDialog}>
  <DialogTrigger>{children}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{ExpertsList.name}</DialogTitle>
      <DialogDescription>
        <div className='mt-1 '>
            <h2 className='font-semibold'>Enter a topic to master skills in {ExpertsList.name}</h2>
            <Textarea placeholder="Enter your topic here.." onChange={(e) => setTopic(e.target.value)} value={topic} className="mt-2"/>
            <h2 className='mt-2 font-semibold'>Select your AI teacher</h2>
            <div className='grid grid-cols-3 md:grid-cols-5'>
            { 
                CoachingExpert.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center mr-4' onClick={() => setSelectedExpert(item.name)}>
                        <div className={`flex hover:scale-105 gap-3 ${selectedExpert === item.name ? 'scale-105' : ''}`} >
                        <Image src={item.avatar} alt={item.name} height={100} width={100} className=' rounded-lg mt-2  transition-all cursor-pointer'/>
                        </div>
                        <h2 className='text-gray-500 font-semibold'>{item.name}</h2>
                    </div>
                ))  
            }
            </div>
        </div>
        <div className='flex mt-2 justify-end'>
            <Button onClick={onClickNext} disable={(!selectedExpert || !topic || loading)}>{loading && <LoaderCircle className='animate-spin'/>}Next</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default UserInputDialog