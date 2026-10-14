import type { Metadata } from 'next'
import OperationsDashboard from '@/features/operations/page'

export const metadata: Metadata = {
  title: 'Operations Center | TTI Tours',
  description: 'TTI Tours internal operations dashboard — bookings, permits, fleet, and field manifest.',
}

export default function OperationsPage() {
  return <OperationsDashboard />
}
