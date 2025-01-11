import Chat from '@/components/Chat'
import Navigation from '@/components/Navigation'

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Chat />
      </main>
    </div>
  )
}

