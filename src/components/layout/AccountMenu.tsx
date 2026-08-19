import { useState } from "react";
import { useAuth } from "@/app/providers/AuthProvider";

/**
 * Account control in the header. Hidden entirely when no backend is configured
 * (local-only mode). Otherwise: a "Sign in" button for guests, or an avatar that
 * opens a small menu with the account and a sign-out action.
 */
export function AccountMenu() {
  const { available, user, signIn, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  if (!available) return null;

  if (!user) {
    return (
      <button
        onClick={() => void signIn()}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "var(--primary)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "6px 12px",
          fontSize: "0.85rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    );
  }

  const initial = (user.name ?? user.email ?? "?").charAt(0).toUpperCase();

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Account"
        title={user.name ?? user.email ?? "Account"}
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid var(--border)",
          background: "var(--surface-2)",
          color: "var(--text)",
          cursor: "pointer",
          overflow: "hidden",
          padding: 0,
          fontWeight: 700,
        }}
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} referrerPolicy="no-referrer" />
        ) : (
          initial
        )}
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 40 }} aria-hidden />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "calc(100% + 6px)",
              zIndex: 50,
              minWidth: 200,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              boxShadow: "var(--shadow, 0 6px 18px rgba(0,0,0,.15))",
              padding: 8,
            }}
          >
            <div style={{ padding: "6px 8px", borderBottom: "1px solid var(--border)", marginBottom: 6 }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{user.name ?? "Signed in"}</div>
              {user.email && <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>{user.email}</div>}
              <div style={{ color: "var(--text-subtle)", fontSize: "0.72rem", marginTop: 2 }}>Synced to your account</div>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                void signOut();
              }}
              style={{
                width: "100%",
                textAlign: "left",
                background: "transparent",
                border: "none",
                borderRadius: 6,
                padding: "8px",
                cursor: "pointer",
                color: "var(--text)",
                fontSize: "0.88rem",
              }}
            >
              Sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
