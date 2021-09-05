export const menuItems = [
  {
    id: 1,
    label: "Menu",
    isTitle: true,
  },
  {
    id: 2,
    label: "Dashboard",
    icon: "ri-dashboard-line",
    badge: {
      variant: "success",
      text: "1",
    },
    link: "/admin",
  },
  {
    id: 11,
    label: "Administrator",
    icon: "ri-user-settings-fill",
    link: "/admin/user",
  },
  {
    id: 3,
    label: "KBBI",
    icon: "ri-book-line",
    link: "/admin/kbbi",
  },
  {
    id: 4,
    label: "Translate",
    icon: "ri-translate",
    subItems: [
      {
        id: 5,
        label: "ENG - IND",
        link: "/admin/eng-ind",
      },
      {
        id: 6,
        label: "IND - ENG",
        link: "/admin/ind-eng",
      },
    ],
  },
  {
    id: 7,
    label: "Arti Nama",
    icon: "ri-price-tag-3-fill",
    link: "/admin/artinama",
  },
  {
    id: 8,
    label: "Glossary",
    icon: "ri-double-quotes-l",
    link: "/admin/glossary",
  },
  {
    id: 9,
    label: "Report",
    icon: "ri-error-warning-fill",
    link: "/admin/report",
  },
  {
    id: 10,
    label: "Advertism",
    icon: "ri-advertisement-fill",
    link: "/admin/adv",
  },
];
