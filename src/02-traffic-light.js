/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here
  color = color.toLowerCase();

  let signals;
  switch (color) {
    case "green":
      signals = "GO";
      break;
    case "yellow":
      signals = "SLOW DOWN";
      break;
    case "red":
      signals = "STOP";
      break;
    case "flashing red":
      signals = "STOP AND PROCEED WITH CAUTION";
      break;
    default:
      signals = "INVALID SIGNAL";
      break;
  }
  return signals;
}
