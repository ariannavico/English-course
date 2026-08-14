import { useState } from "react";
import type { ThemePreference } from "@/types";
import { Button, Card } from "@/components/ui";
import { PageHeader } from "@/components/layout/PageHeader";
import { useProgress } from "@/hooks/useProgress";
import { useTheme } from "@/hooks/useTheme";
import styles from "./pages.module.css";

const THEMES: ThemePreference[] = ["light", "dark", "system"];

export function SettingsPage() {
  const { settings, updateSettings, resetAll } = useProgress();
  const { setTheme } = useTheme();
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="stack">
      <PageHeader title="Settings" description="Preferences are saved on this device." />

      <Card title="Appearance">
        <div className={styles.settingRow}>
          <div>
            <div style={{ fontWeight: 600 }}>Theme</div>
            <div className="subtle">Light, dark, or follow your system.</div>
          </div>
          <div className="row">
            {THEMES.map((t) => (
              <Button
                key={t}
                size="sm"
                variant={settings.theme === t ? "primary" : "default"}
                onClick={() => setTheme(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.settingRow}>
          <div>
            <div style={{ fontWeight: 600 }}>Show Italian</div>
            <div className="subtle">Display Italian glosses next to examples.</div>
          </div>
          <Button
            size="sm"
            variant={settings.showItalian ? "primary" : "default"}
            onClick={() => updateSettings({ showItalian: !settings.showItalian })}
          >
            {settings.showItalian ? "On" : "Off"}
          </Button>
        </div>
      </Card>

      <Card title="Practice">
        <div className={styles.settingRow}>
          <div>
            <div style={{ fontWeight: 600 }}>Daily goal</div>
            <div className="subtle">Exercises per daily practice session.</div>
          </div>
          <select
            className={styles.field}
            value={settings.dailyGoal}
            onChange={(e) => updateSettings({ dailyGoal: Number(e.target.value) })}
            aria-label="Daily goal"
          >
            {[5, 10, 15, 20].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </Card>

      <Card title="Data">
        <div className={styles.settingRow}>
          <div>
            <div style={{ fontWeight: 600 }}>Reset all progress</div>
            <div className="subtle">
              Deletes progress, streak and stats from this device. Cannot be undone.
            </div>
          </div>
          {confirming ? (
            <div className="row">
              <Button size="sm" onClick={() => setConfirming(false)}>
                Cancel
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  resetAll();
                  setConfirming(false);
                }}
              >
                Confirm reset
              </Button>
            </div>
          ) : (
            <Button size="sm" variant="danger" onClick={() => setConfirming(true)}>
              Reset
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
