"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/Template'
import Templates from '@/app/(data)/Templates'
import { log } from 'console'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment, {Moment} from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'

interface PROPS{
  params:{
    'template-slug':string
  }
}

function CreateNewContent(props:PROPS) {

  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
  const [loading, setloading] = useState(false);
  const [AiOuput, setAiOuput] = useState<string>('');
  const {user}=useUser();
  const {totalWords, setTotalWords} = useContext(TotalUsageContext)
  const router=useRouter();

  const GenerateAIContent=async(formData:any)=>{
    if(totalWords>=10000)
    {
      console.log("please upgrade");
      router.push('/dashboard/billing')
      return ;
    }
    setloading(true);
    const selectedPrompt=selectedTemplate?.aiPrompt;

    const FinalAiPrompt=JSON.stringify(formData)+", "+selectedPrompt;

    const result=await chatSession.sendMessage(FinalAiPrompt);

    //console.log(result.response.text());
    setAiOuput(result?.response.text());
    await SaveInDB(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
    setloading(false);

  }

  const SaveInDB=async(formData:any,slug:any,aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY')
    });
    console.log(result);
  }

  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
      </Link>
      
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      {/* form section */}
      <FormSection selectedTemplate={selectedTemplate} 
      userFormInput={(v:any)=>GenerateAIContent(v)}
      loading={loading}/>

      {/* output section */}
      <div className='col-span-2'><OutputSection aiOutput={AiOuput}/></div>
    </div>
    </div>
  )
}

export default CreateNewContent
