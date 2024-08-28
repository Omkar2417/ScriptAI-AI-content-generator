"use client";

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

const MAX_CREDITS = 10000;

function UsageTrack() {
  const { user } = useUser();
  const {totalWords, setTotalWords} = useContext(TotalUsageContext)

  useEffect(() => {
    const fetchAndCalculateUsage = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        // Fetch AI responses from the database for the current user
        const data = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

        // Calculate the total word count from all AI responses
        const wordCount = data.reduce((acc, item) => acc + (item.aiResponse?.split(' ').length || 0), 0);
        setTotalWords(wordCount);
      }
    };

    fetchAndCalculateUsage();
  }, [user]);
  
  // Calculate the progress percentage based on total words used
  const progress = Math.min((totalWords / MAX_CREDITS) * 100, 100);

  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium my-2'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full'>
          <div
            className='h-2 bg-white rounded-full'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <h2 className='text-sm my-1'>{totalWords}/{MAX_CREDITS} credits used</h2>
      </div>
      <Button variant={'secondary'} className='w-full my-3 text-primary outline hover:rounded-2xl hover:transition'>
          Upgrade
        </Button>
    </div>
  );
}

export default UsageTrack;
