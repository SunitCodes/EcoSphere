import { TreePine, Recycle, Zap, Droplets, Leaf } from "lucide-react";

export function EnvironmentalImpact() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md flex flex-col min-w-[320px]">
      {/* Header */}
      <div className="flex items-center gap-2 font-semibold text-2xl mb-1">
        <Leaf className="text-green-700" size={30}/> Environmental Impact</div>
      <div className="text-gray-500 text-sm mb-6 pt-2 pl-10">
        Your positive contributions this month
      </div>

      {/* Grid layout 2x2 */}
      <div className="grid grid-cols-2 gap-12 p-8">
        {/* Trees Planted */}
        <div className="flex items-center gap-3">
          <span className="bg-green-100 p-2 rounded-full flex items-center justify-center">
            <TreePine className="w-6 h-6 text-green-700" />
          </span>
          <div className="flex flex-col">
            <span className="text-gray-700 text-sm font-medium">
              Trees Planted
            </span>
            <span className="text-green-700 font-bold text-lg">12</span>
          </div>
        </div>

        {/* Waste Reduced */}
        <div className="flex items-center gap-3">
          <span className="bg-green-50 p-2 rounded-full flex items-center justify-center">
            <Recycle className="w-6 h-6 text-green-700" />
          </span>
          <div className="flex flex-col">
            <span className="text-gray-700 text-sm font-medium">
              Waste Reduced
            </span>
            <span className="text-green-700 font-bold text-lg">
              8.5<sup className="ml-1 text-xs">kg</sup>
            </span>
          </div>
        </div>

        {/* Energy Saved */}
        <div className="flex items-center gap-3">
          <span className="bg-yellow-50 p-2 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-amber-500" />
          </span>
          <div className="flex flex-col">
            <span className="text-gray-700 text-sm font-medium">
              Energy Saved
            </span>
            <span className="text-amber-500 font-bold text-lg">
              24<sup className="ml-1 text-xs">kWh</sup>
            </span>
          </div>
        </div>

        {/* Water Conserved */}
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 p-2 rounded-full flex items-center justify-center">
            <Droplets className="w-6 h-6 text-blue-500" />
          </span>
          <div className="flex flex-col">
            <span className="text-gray-700 text-sm font-medium">
              Water Conserved
            </span>
            <span className="text-blue-500 font-bold text-lg">
              156<sup className="ml-1 text-xs">L</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
