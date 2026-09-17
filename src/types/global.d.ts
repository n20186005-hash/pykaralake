/**
 * Ambient declarations for the inline (`is:inline`) browser scripts used by the layout and pages.
 * Without this file TypeScript reports `Property '…' does not exist on type 'Window'` for the
 * consent, analytics and PWA install hooks.
 */

/** `beforeinstallprompt` is not in lib.dom yet; keep the members optional so a plain Event fits. */
interface PykaraInstallPromptEvent extends Event {
  prompt?: () => Promise<void>;
  userChoice?: Promise<unknown>;
}

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  __pykaraConsent?: {
    key: string;
    loadGA: () => void;
  };
  __pykaraInstall?: {
    deferred: PykaraInstallPromptEvent | null;
  };
}
