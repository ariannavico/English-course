import { RouterProvider } from "react-router-dom";
import { AppProviders } from "./providers/AppProviders";
import { AuthProvider, useAuth } from "./providers/AuthProvider";
import { router } from "./routes";

export function App() {
  return (
    <AuthProvider>
      <AuthedApp />
    </AuthProvider>
  );
}

/**
 * Renders the app under the active profile. Keying the subtree by `dataKey`
 * remounts every provider and page when the profile switches (sign in / out),
 * so they re-read their data synchronously from the new namespace.
 */
function AuthedApp() {
  const { status, dataKey } = useAuth();

  if (status === "loading") {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "100dvh", color: "var(--text-muted)" }}>
        Loading…
      </div>
    );
  }

  return (
    <AppProviders key={dataKey}>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
