export function labelFor(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}
