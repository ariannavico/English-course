/**
 * Fallback shown while a lazily-loaded page chunk is fetched. Kept minimal and
 * accessible (announced to screen readers). Route chunks are small and usually
 * cached, so this is only briefly visible on first visit to a page.
 */
export function PageLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
        color: "var(--text-muted)",
        gap: "0.6rem",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 18,
          height: 18,
          border: "2px solid var(--border)",
          borderTopColor: "var(--primary)",
          borderRadius: "50%",
          animation: "eb1-spin 0.7s linear infinite",
        }}
      />
      Loading…
      <style>{"@keyframes eb1-spin{to{transform:rotate(360deg)}}"}</style>
    </div>
  );
}
