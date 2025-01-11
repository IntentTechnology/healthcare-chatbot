import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

async function fetchHealthData() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    heartRate: 75,
    bloodPressure: '120/80',
    steps: 8500,
    sleep: '7h 30m',
    calories: 2100,
    water: '2.5L'
  }
}

export default async function Dashboard() {
  const healthData = await fetchHealthData()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Health Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Heart Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{healthData.heartRate} bpm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blood Pressure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{healthData.bloodPressure} mmHg</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{healthData.steps}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sleep</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{healthData.sleep}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{healthData.calories} kcal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Water Intake</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{healthData.water}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

