import {
  Activity,
  Brain,
  LayoutDashboard,
  Settings
} from "lucide-react";

const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Health",
    icon: Activity
  },
  {
    label: "AI",
    icon: Brain
  },
  {
    label: "Settings",
    icon: Settings
  }
];

export default function Sidebar() {
  return (
    <aside className="glass hidden w-72 border-r border-white/10 p-6 lg:block">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-wide text-cyan-300">
          JARVIS
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Personal AI Operating System
        </p>
      </div>

      <nav className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-white/10"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
