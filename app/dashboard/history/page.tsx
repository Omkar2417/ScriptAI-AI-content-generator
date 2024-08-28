"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import moment from "moment";

function HistoryPage() {
  const { user } = useUser();
  const [historyData, setHistoryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const data = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

        setHistoryData(data);
      }
    };

    fetchHistory();
  }, [user]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Your AI Content History</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-5 text-left">Template</th>
              <th className="py-3 px-5 text-left">AI Response</th>
              <th className="py-3 px-5 text-left">Date</th>
              <th className="py-3 px-5 text-left">Words</th>
              <th className="py-3 px-5 text-center">Copy</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-5">{item.templateSlug}</td>
                <td className="w-72 line-clamp-3">
                  {item.aiResponse}
                </td>
                <td className="py-3 px-5">{moment(item.createdAt, 'DD/MM/YYYY').format('MMM DD, YYYY')}</td>
                <td className="py-3 px-5">{item.aiResponse.split(" ").length}</td>
                <td className="py-3 px-5 text-center">
                  <button
                    onClick={() => navigator.clipboard.writeText(item.aiResponse)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryPage;
