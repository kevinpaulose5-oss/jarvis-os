"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { supabase } from "../lib/supabase/client";

export default function BioChargeWidget() {
  const [biocharge, setBiocharge] = useState<number | null>(null);

  useEffect(() => {
    async function loadBioCharge() {
      const { data, error } = await supabase
        .from("health_metrics")
        .select("biocharge")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setBiocharge(data.biocharge);
      }
    }

    loadBioCharge();
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="glass rounded-3xl p-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            BioCharge
          </p>

          <h2 className="mt-3 text-6xl font-black">
            {biocharge ?? "--"}
          </h2>

          <p className="mt-2 text-green-400">
            Live Recovery Score
          </p>
        </div>

        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-4xl font-bold text-cyan-300">
          {biocharge ?? "--"}
        </div>
      </div>
    </motion.div>
  );
}
