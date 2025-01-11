import Chat from '@/components/Chat'
import Navigation from '@/components/Navigation'
import { Sidebar } from '@/components/Sidebar'
import ProtectedRoute from '@/components/ProtectedRoutes'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Chat />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}

