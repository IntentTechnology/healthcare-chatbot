import { Suspense } from 'react'
import Dashboard from '@/components/Dashboard'
import Navigation from '@/components/Navigation'
import ProtectedRoute from '@/components/ProtectedRoutes'

export default function HealthDashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <Dashboard />
          </Suspense>
        </main>
      </div>
    </ProtectedRoute>
  )
}

