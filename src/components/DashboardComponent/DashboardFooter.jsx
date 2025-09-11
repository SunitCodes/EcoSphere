import { Users, Globe2, Sparkles } from "lucide-react";

export default function DashboardFooter() {
  return (
    <div className="bg-white border border-green-100 rounded-3xl text-center py-12 px-2 mt-8">
      <div className="flex justify-center items-center gap-2 font-bold text-green-700 text-xl mb-2">
        <Sparkles className="w-6 h-6" />
        Keep Going!
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="text-gray-600 text-base mb-2">
        You're making a real difference! Every lesson learned and challenge completed brings us closer to a sustainable future.
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-2 text-green-600 font-medium">
        <span className="flex items-center gap-2">
          <Users className="w-5 h-5" /> 
          2,847 students learning together
        </span>
        <span className="flex items-center gap-2 text-green-600">
          <Globe2 className="w-5 h-5" />
          Making global impact
        </span>
      </div>
    </div>
  );
}
