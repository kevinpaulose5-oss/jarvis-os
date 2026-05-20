"use client";

import { motion } from "framer-motion";

import Sidebar from "./sidebar";

import BioChargeWidget from "@/widgets/biocharge-widget";
import AiDock from "@/widgets/ai-dock";

export default function DashboardShell() {
  return (
    <div className="flex min-h-screen bg-background text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <BioChargeWidget />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="glass rounded-3xl p-6 lg:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold">
              Health Overview
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">Sleep</p>
                <h3 className="mt-2 text-3xl font-bold">7.4h</h3>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">HRV</p>
                <h3 className="mt-2 text-3xl font-bold">54</h3>
              </div>
            </div>
          </div>

          <AiDock />
        </div>
      </main>
    </div>
  );
}
