import React, { useEffect, useState } from 'react';
import {
  X,
  Download,
  CheckCircle2,
  HardDrive,
  Wifi,
  WifiOff,
  BatteryCharging,
  BatteryFull,
  Cpu,
  ShieldCheck,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useOnlineStatus, useBatteryStatus } from '../hooks/useOnlineStatus';

const BLUE = '#0066FF';
const CARD = 'bg-white dark:bg-[#131F33]';
const CARD_SHADOW =
  'shadow-[0_8px_24px_-6px_rgba(71,85,105,0.16),0_2px_6px_rgba(71,85,105,0.06)] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6)] dark:ring-1 dark:ring-white/[0.06]';
const TILE = 'bg-[#EAF3FF] text-[#0066FF] dark:bg-[#12305C] dark:text-[#6AA6FF]';
const TEXT = 'text-slate-900 dark:text-slate-50';
const MUTED = 'text-slate-500 dark:text-slate-400';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tabId: string) => void;
  onResetDemoData: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onResetDemoData,
}) => {
  const isOnline = useOnlineStatus();
  const { batteryLevel, isCharging } = useBatteryStatus();
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [storageUsage, setStorageUsage] = useState<string>('Local');

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then((est) => {
        const kb = Math.round((est.usage || 0) / 1024);
        setStorageUsage(kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);
      }).catch(() => {});
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex bg-black/40 backdrop-blur-xs">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pocket Engine System Menu"
        className={`relative flex h-full w-[85%] max-w-[320px] flex-col justify-between overflow-y-auto pt-[max(1.25rem,env(safe-area-inset-top,0px))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] px-4 sm:px-5 ${CARD} shadow-2xl transition-transform`}
      >
        {/* Top bar */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06]">
            <div>
              <h2 className="text-[20px] font-extrabold tracking-tight text-[#0066FF] dark:text-[#4D94FF]">
                Pocket Engine
              </h2>
              <p className={`text-[11.5px] font-medium ${MUTED}`}>Local AI & 440+ Computer Course (Offline Edition)</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Engine Status Card */}
          <div className={`mt-4 rounded-2xl p-3.5 ${TILE}`}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
              <span className="text-[13px] font-bold">100% Offline Capable</span>
            </div>
            <p className="mt-1 text-[11.5px] leading-relaxed opacity-90">
              All neural inference, summaries, and chat histories operate entirely within your browser memory.
            </p>
          </div>

          {/* Device & Connection Status */}
          <div className="mt-4 space-y-2">
            <h3 className={`text-[11px] font-semibold uppercase tracking-wider ${MUTED}`}>
              System diagnostics
            </h3>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[12.5px] dark:bg-white/[0.03]">
              <span className={`flex items-center gap-2 ${TEXT}`}>
                {isOnline ? (
                  <Wifi className="h-4 w-4 text-emerald-500" />
                ) : (
                  <WifiOff className="h-4 w-4 text-amber-500" />
                )}
                Network Status
              </span>
              <span className={`font-semibold ${isOnline ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                {isOnline ? 'Connected' : 'Offline Mode'}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[12.5px] dark:bg-white/[0.03]">
              <span className={`flex items-center gap-2 ${TEXT}`}>
                {isCharging ? (
                  <BatteryCharging className="h-4 w-4 text-emerald-500" />
                ) : (
                  <BatteryFull className="h-4 w-4 text-[#0066FF]" />
                )}
                Battery
              </span>
              <span className={`font-semibold ${TEXT}`}>
                {batteryLevel !== null ? `${batteryLevel}%` : 'Normal'}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-[12.5px] dark:bg-white/[0.03]">
              <span className={`flex items-center gap-2 ${TEXT}`}>
                <HardDrive className="h-4 w-4 text-slate-400" />
                Cache Storage
              </span>
              <span className={`font-semibold ${TEXT}`}>{storageUsage}</span>
            </div>
          </div>

          {/* In-App PWA Install Prompt */}
          <div className="mt-5">
            {isInstalled ? (
              <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 p-3 text-[12.5px] font-medium text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Installed as native app</span>
              </div>
            ) : isInstallable ? (
              <button
                onClick={install}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-2xl text-[13px] font-bold text-white transition active:scale-95"
                style={{ background: BLUE, boxShadow: '0 8px 16px -4px rgba(0,102,255,0.45)' }}
              >
                <Download className="h-4 w-4" /> Install Pocket Engine App
              </button>
            ) : isIOS ? (
              <div className="rounded-2xl border border-slate-200 p-3 text-[11.5px] leading-relaxed text-slate-600 dark:border-white/10 dark:text-slate-300">
                <p className="font-semibold text-slate-800 dark:text-slate-100">Install on iPhone / iPad:</p>
                <p className="mt-1">Tap <strong>Share</strong> in Safari, then select <strong>Add to Home Screen</strong>.</p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] space-y-2">
          <button
            onClick={() => {
              onResetDemoData();
              onClose();
            }}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-[12px] font-medium text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5`}
          >
            <RotateCcw className="h-3.5 w-3.5" /> Restore Sample Conversations
          </button>
          <p className="text-center text-[10.5px] text-slate-400">
            Engineered for standalone privacy & speed.
          </p>
        </div>
      </div>
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
