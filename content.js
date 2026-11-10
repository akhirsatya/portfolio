/*
  CONTENT FILE — edit this file to update your portfolio.
  You do not need to touch index.html, style.css, or main.js for normal updates.

  HOW TO ADD A PROJECT
  1. Put the images in the assets/ folder (WebP or JPG, around 2000px wide is plenty).
  2. Copy one of the project blocks below and paste it into the "projects" list.
  3. Fill in the fields. Anything you leave empty ("") is simply not shown.
  4. Add a "caseStudy" block if you want the card to open a full case study page.
     Without it, the card shows "Case study coming soon".
  5. Set hidden: true to keep a project off the site until it is ready.
*/

window.SITE = {
  contact: {
    email: "akhirsatya17@gmail.com",
    whatsapp: "6289626307963",          // digits only, with country code
    whatsappLabel: "+62 896-2630-7963", // how the number is displayed
    linkedin: "https://www.linkedin.com/in/akhir-satya",
    linkedinLabel: "linkedin.com/in/akhir-satya"
  },

  // Shows a dashed "More case studies coming soon" card at the end of the grid
  showMoreCard: true,

  projects: [
    {
      id: "aeon-mall",                       // used in the page link: project.html?p=aeon-mall
      title: "AEON MALL Indonesia app",
      type: "Mobile app",
      year: "",                              // e.g. "2026". Empty = not shown
      cover: "assets/aeon-cover.webp",
      coverAlt: "AEON MALL Indonesia mobile app screens",
      hidden: false,
      caseStudy: {
        summary: "Designed end-to-end, from initial concepts and user flows to high-fidelity UI, design system implementation, prototyping, and product release.",
        hero: "assets/aeon-cover.webp",
        heroAlt: "AEON MALL Indonesia mobile app, key screens",
        meta: {
          Role: "Product Designer",
          Platform: "Mobile app",
          Timeline: "",
          Team: ""
        },
        // Each section has a title on the left and text and/or images on the right.
        // Add as many sections as you like (Problem, Process, Final design, Outcome...).
        sections: [
          {
            title: "Screens",
            text: [],
            images: [
              { src: "assets/aeon-screens.webp", alt: "AEON MALL Indonesia mobile app, screen overview" }
            ]
          }
        ]
      }
    },

    {
      id: "grand-indonesia",
      title: "Grand Indonesia App",
      type: "Mobile app",
      year: "",
      cover: "assets/gi-cover.webp",
      coverAlt: "Grand Indonesia mobile app screens",
      hidden: false
      // No caseStudy yet, so the card says "Case study coming soon"
    },

    // ---- Add these when you have the covers and case studies ready ----
    // Remove "hidden: true" to publish them.
    {
      id: "collegos",
      title: "Collegos Student & Admin App",
      type: "Mobile app · Web admin",
      year: "",
      cover: "assets/collegos-cover.webp",
      coverAlt: "Collegos student and admin app screens",
      hidden: true
    },
    {
      id: "trofi-pos",
      title: "Trofi POS App",
      type: "POS app",
      year: "",
      cover: "assets/trofi-cover.webp",
      coverAlt: "Trofi POS app screens",
      hidden: true
    }
  ]
};
