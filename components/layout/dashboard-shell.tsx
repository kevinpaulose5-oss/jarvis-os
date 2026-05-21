"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Sidebar from "./sidebar";

import BioChargeWidget from "@/widgets/biocharge-widget";
import AiDock from "@/widgets/ai-dock";

import { supabase } from "../../lib/supabase/client";

interface HealthMetrics {
  sleep_hours: number;
  hrv: number;
  heart_rate: number;
  steps: number;
}

export default function DashboardShell() {
  const [metrics, setMetrics] =
    useState<HealthMetrics | null>(null);

  useEffect(() => {
    async function loadMetrics() {
      const { data, error } = await supabase
        .from("health_metrics")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setMetrics(data);
      }
    }

    loadMetrics();
  }, []);

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
                <p className="text-sm text-gray-300">
                  Sleep
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {metrics?.sleep_hours ?? "--"}h
                </h3>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">
                  HRV
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {metrics?.hrv ?? "--"}
                </h3>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">
                  Heart Rate
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {metrics?.heart_rate ?? "--"}
                </h3>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">
                  Steps
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {metrics?.steps ?? "--"}
                </h3>
              </div>
            </div>
          </div>

          <AiDock />
        </div>
      </main>
    </div>
  );
}
