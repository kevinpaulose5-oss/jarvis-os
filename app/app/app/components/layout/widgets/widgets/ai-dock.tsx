export default function AiDock() {
  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="mb-4 text-2xl font-semibold">
        AI Assistant
      </h2>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-sm leading-relaxed text-gray-300">
          Your BioCharge is elevated today due to strong recovery,
          increased HRV, and reduced cumulative exertion.
        </p>
      </div>

      <input
        className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 p-3 outline-none"
        placeholder="Ask Jarvis anything..."
      />
    </div>
  );
}
