export default (string: string) =>
  string
    ? string.replace(/[.*+?^${}<>()|[\]\\]/g, "\\$&")
    : ''