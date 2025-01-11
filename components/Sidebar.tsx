import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

type RecentChat = {
  id: string;
  title: string;
  preview: string;
}

const recentChats: RecentChat[] = [
  { id: '1', title: 'Diet Advice', preview: 'What are some healthy snack options?' },
  { id: '2', title: 'Exercise Routine', preview: 'Can you suggest a beginner workout plan?' },
  { id: '3', title: 'Sleep Improvement', preview: 'How can I improve my sleep quality?' },
  { id: '4', title: 'Stress Management', preview: 'What are some effective stress relief techniques?' },
  { id: '5', title: 'Heart Health', preview: 'What are the best foods for heart health?' },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Recent Chats</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {recentChats.map((chat) => (
          <Link href={`/chat/${chat.id}`} key={chat.id}>
            <Button variant="ghost" className="w-full justify-start mb-2 text-left">
              <div>
                <div className="font-medium">{chat.title}</div>
                <div className="text-sm text-gray-500 truncate">{chat.preview}</div>
              </div>
            </Button>
          </Link>
        ))}
      </ScrollArea>
    </div>
  )
}

