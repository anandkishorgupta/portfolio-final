import ReactGA from "react-ga4";

// Initialize GA
export const initGA = () => {
  ReactGA.initialize("G-XXXXXXXXXX"); // <-- Replace with your GA4 Measurement ID
  ReactGA.debug = true; // optional: shows GA debug logs in console
};

// Track page view
export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = ({ category, action, label }) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
