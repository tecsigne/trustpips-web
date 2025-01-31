import {
  LuFacebook as Facebook,
  LuInstagram as Instagram,
  LuTwitter as Twitter,
  LuLinkedin as Linkedin,
  LuMail as Mail,
  LuPhone as Phone,
  LuMapPin as MapPin,
} from "react-icons/lu";

export const siteName = "Tecsigne";

export const RouteNames = {
    Home: {
      path: "/",
      label: "Home",
      showIn: ["nav", "mobile"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    Services: {
      path: "/services",
      label: "Services",
      showIn: ["nav", "mobile", "footer-nav"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    Portfolio: {
      path: "/portfolio",
      label: "Portfolio",
      showIn: ["nav", "mobile", "footer-nav"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    About: {
      path: "/about",
      label: "About",
      showIn: ["nav", "mobile", "footer-nav"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    Contact: {
      path: "/contact",
      label: "Contact",
      showIn: ["footer-nav"],
      Icon: ``,
      isBordered: true,
      hasBackground: false,
      type: "link",
    },

    Faq: {
      path: "/faq",
      label: "FAQ",
      showIn: ["footer-support"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    Terms: {
      path: "/terms",
      label: "Terms",
      showIn: ["footer-support"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    Privacy: {
      path: "/privacy",
      label: "Privacy",
      showIn: ["footer-support"],
      Icon: ``,
      isBordered: false,
      hasBackground: false,
      type: "link",
    },

    Mail: {
      path: "mailto:tecsigne@gmail.com",
      label: "info@tecsigne.com",
      showIn: ["footer-contact"],
      Icon: Mail,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },

    Call: {
      path: "tel:+2348134652794",
      label: "+(234) 8134-652-794",
      showIn: ["footer-contact"],
      Icon: Phone,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },

    Location: {
      path: "",
      label: "Lagos, Nigeria",
      showIn: ["footer-contact"],
      Icon: MapPin,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },

    Instagram: {
      path: "https://www.instagram.com/tecsigne1/",
      label: "Instagram",
      showIn: ["footer-social"],
      Icon: Instagram,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },

    Facebook: {
      path: "https://shorturl.at/gmzHO",
      label: "Facebook",
      showIn: ["footer-social"],
      Icon: Facebook,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },

    Twitter: {
      path: "https://twitter.com/tecsigne39822",
      label: "Twitter",
      showIn: ["footer-social"],
      Icon: Twitter,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },

    Linkedin: {
      path: "https://shorturl.at/lpILZ",
      label: "Linkedin",
      showIn: ["footer-social"],
      Icon: Linkedin,
      isBordered: false,
      hasBackground: false,
      type: "hash",
    },
  },
  allRoutes = Object.keys(RouteNames).map((key) => RouteNames[key]),
  navRoutes = allRoutes.filter((route) => route.showIn.includes("nav")),
  mobileNavRoutes = allRoutes.filter((route) =>
    route.showIn.includes("mobile")
  ),
  footerNavRoutes = allRoutes.filter((route) =>
    route.showIn.includes("footer-nav")
  ),
  footerSupportRoutes = allRoutes.filter((route) =>
    route.showIn.includes("footer-support")
  ),
  footerContactRoutes = allRoutes.filter((route) =>
    route.showIn.includes("footer-contact")
  ),
  footerSocialRoutes = allRoutes.filter((route) =>
    route.showIn.includes("footer-social")
  );
