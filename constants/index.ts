interface NavItems {
  name: string;
  icon: string;
  url: string;
}

export const NAV_ITEMS: NavItems[] = [
  {
    name: "Dashboard",
    icon: "/assets/icons/dashboard.svg",
    url: "/",
  },
  {
    name: "Documents",
    icon: "/assets/icons/documents.svg",
    url: "/documents",
  },
  {
    name: "Images",
    icon: "/assets/icons/images.svg",
    url: "/images",
  },
  {
    name: "Media",
    icon: "/assets/icons/video.svg",
    url: "/media",
  },
  {
    name: "Divers",
    icon: "/assets/icons/others.svg",
    url: "/others",
  },
];

//

export const USAGE_SUMMARY_SAMPLE = [
  {
    title: "Documents",
    size: 20,
    latestDate: "2020-02-02",
    icon: "/assets/icons/file-document-light.svg",
    url: "/documents",
  },
  {
    title: "Images",
    size: 20,
    latestDate: "2020-02-02",
    icon: "/assets/icons/file-image-light.svg",
    url: "/images",
  },
  {
    title: "Media",
    size: 20,
    latestDate: "2020-02-02",
    icon: "/assets/icons/file-video-light.svg",
    url: "/media",
  },
  {
    title: "Divers",
    size: 20,
    latestDate: "2020-02-02",
    icon: "/assets/icons/file-other-light.svg",
    url: "/others",
  },
];

export const ACTION_DROPDOWN_ITEMS = [
  {
    label: "Renommer",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Partager",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "Télécharger",
    icons: "assets/icons/download.svg",
    value: "delete",
  },
];

export const SORT_TYPES = [
  {
    label: "Date de création (nouveau)",
    value: "$createAt-desc",
  },
  {
    label: "Date de création (ancien)",
    value: "$createdAt-asc",
  },
  {
    label: "Nom (A-Z)",
    value: "name-asc",
  },
];
