import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// type RecentChat = {
//   id: string;
//   title: string;
//   preview: string;
// }

const suggestedPrompts = [
  "What are some tips for maintaining a healthy diet?",
  "How can I improve my sleep quality?",
  "What exercises are best for cardiovascular health?",
  "How can I manage stress effectively?",
];

export function Sidebar({ setInput, isLoading, handleSubmit }: any) {
  const handleSuggestedPrompt = async (prompt: string) => {
    setInput(prompt);
    const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
    await handleSubmit(fakeEvent);
  };

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Suggested questions:</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="mb-4">
          {/* <h3 className="text-sm font-semibold mb-2">Suggested questions:</h3> */}
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="p-10"
                onClick={() => handleSuggestedPrompt(prompt)}
                disabled={isLoading}
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
