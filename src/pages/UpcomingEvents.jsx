import React from "react"
import { Target, TimerIcon, Trophy, UsersIcon } from "lucide-react"

const challenges = [
  {
    id: "1",
    title: "Zero Waste Week Challenge",
    description:
      "Reduce your waste to zero for 7 consecutive days and document your journey",
    participants: 156,
    timeLeft: "3 days left",
    reward: 200,
    status: "register",
  },
  {
    id: "2",
    title: "Daily Energy Saver",
    description:
      "Reduce your household energy consumption by 20% today",
    participants: 100,
    timeLeft: "18 hours left",
    reward: 50,
    status: "full",
  },
  {
    id: "3",
    title: "Climate Action Month",
    description:
      "Complete 30 different climate-friendly actions throughout the month",
    participants: 234,
    timeLeft: "12 days left",
    reward: 500,
    status: "comming soon",
  },
  {
    id: "4",
    title: "Earth Day Special: Tree Planting",
    description:
      "Join the global tree planting initiative for Earth Day",
    participants: 1247,
    timeLeft: " 5 days left",
    reward: 300,
    status: "register",
  },
  {
    id: "5",
    title: "Plastic-Free July Prep",
    description:
      "Prepare for plastic-free July by finding alternatives to single-use plastics",
    participants: 78,
    timeLeft: "7 days left",
    reward: 150,
    status: "register",
  },
]

export default function UpcomingEvents() {
  return (
    <div className="py-8">
      <div className="min-h-screen bg-gray-50 px-8 py-6 rounded-2xl">
        {/* Page Header */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2 px-4">
            <Target size={30} className="text-green-600" />
            <h1 className="text-4xl font-bold tracking-tight">
              Upcoming Events
            </h1>
          </div>
          <p className="text-gray-600 px-4">
            Join exciting challenges, compete with classmates, and make a real
            environmental impact while earning eco-points.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid gap-6 md:grid-cols-4 p-4">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white shadow-md rounded-xl p-8 mb-6 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {challenge.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  {challenge.description}
                </p>

                {/* Row 1: Participants + Time */}
                <div className="flex justify-between text-sm text-gray-700 mb-2">
                  <div className="flex items-center gap-1">
                    <UsersIcon size={16} className="text-blue-600" />
                    <span>{challenge.participants} joined</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TimerIcon size={16} className="text-orange-600" />
                    <span>{challenge.timeLeft}</span>
                  </div>
                </div>

                {/* Row 2: Reward */}
                <div className="flex items-center justify-between text-sm text-gray-700 mb-6">
                  <div className="flex items-center gap-1">
                    <Trophy size={16} className="text-green-600" />
                    <span className="font-semibold text-green-600">
                      +{challenge.reward} pts
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                disabled={
                  challenge.status === "full" ||
                  challenge.status === "comming soon"
                }
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    challenge.status === "register"
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : challenge.status === "full"
                      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                      : challenge.status === "comming soon"
                      ? "bg-yellow-100 text-yellow-600 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700"
                  }`}
              >
                {challenge.status === "register"
                  ? "Join Challenge"
                  : challenge.status === "full"
                  ? "Full"
                  : challenge.status === "comming soon"
                  ? "Coming Soon"
                  : "View Results"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
