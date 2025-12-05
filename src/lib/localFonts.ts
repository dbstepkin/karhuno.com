// Lightweight shim to avoid next/font Google network fetch during builds.
// Returns objects compatible with the shape used across the codebase.

type FontOptions = Record<string, any>;

export function Montserrat(_opts?: FontOptions) {
  return {
    variable: "",
    className: "",
  };
}

export function Roboto(_opts?: FontOptions) {
  return {
    variable: "",
    className: "",
  };
}
