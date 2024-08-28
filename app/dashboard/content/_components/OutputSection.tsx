import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";


interface props{
  aiOutput:string
}

function OutputSection({aiOutput}:props) {

  const editorRef:any=useRef();

  useEffect(() => {
    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
    
  }, [aiOutput])
  

  return (
    <div>
      <div className="bg-white shadow-lg border rounded-lg">
        <div className="flex justify-between items-center p-5">
          <h2 className="text-lg font-semibold text-primary">Your Result</h2>
          <Button className="flex gap-3"
          onClick={()=>navigator.clipboard.writeText(aiOutput)}
          >
            <CopyIcon className="w-4 h-4" />
            Copy
          </Button>
        </div>

        <Editor
          ref={editorRef}
          initialValue="Welcome to ScriptAI-AI content generator...! Your Result will be appear here"
          initialEditType="wysiwyg"
          height="500px"
          useCommandShortcut={true}
          onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
        />
      </div>
    </div>
  );
}

export default OutputSection;
