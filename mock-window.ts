// This file sets up global mocks required for SSR (Server-Side Rendering)
// It must be imported before any other application code to run before module evaluating.

if (typeof window === 'undefined') {
  (globalThis as any).window = {
    document: {
      createElement: () => ({}),
      documentElement: { style: {} },
      head: { appendChild: () => {} }
    }
  };
}
