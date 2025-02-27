

export const NAV_ITEMS: NavItemType[] = [
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


export const NAV_ITEMS_SUMMARIES: NavItemSummaryType[] = [
  {
    title: "Documents",
    size: 20,
    latestDate: "3:31am, 15 Feb",
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
    latestDate: "3:31am, 15 Feb",
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

export const DROPDOWN_MENU_ITEMS : DropdownMenuItemInterface[] = [
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
    icon: "assets/icons/download.svg",
    value: "telecharger",
  },

  {
    label: "Supprimer",
    icon: "assets/icons/download.svg",
    value: "delete",
  }
];

export const RECENT_FILES: RecentFileInterface[] = [
  {
    fileName: "1.jpg",
    icon: "/assets/images/files.png",
    date: "2020-02-02"
  },
  {
    fileName: "2.jpg",
    icon: "/assets/images/files.png",
    date: "2020-02-02"
  },
  {
    fileName: "3.jpg",
    icon: "/assets/images/files.png",
    date: "2020-02-02"
  },
  {
    fileName: "4.jpg",
    icon: "/assets/images/files.png",
    date: "2020-02-02"
  },
  {
    fileName: "5.jpg",
    icon: "/assets/images/files.png",
    date: "2020-02-02"
  },
  {
    fileName: "6.jpg",
    icon: "/assets/images/files.png",
    date: "2020-02-02"
  }
]

export const SORT_TYPES: SortTypeInterface[] = [
  {
    label: "Date de création (croissance)",
    value: "$createAt_desc",
  },
  {
    label: "Date de création (décroissance)",
    value: "$createdAt_asc",
  },
  {
    label: "Nom (croissant)",
    value: "$name_asc",
  },
  {
    label: "Nom (décroissance)",
    value: "$name_asc"
  },
  {
    label: "Taille (croissance)",
    value: "$size_asc"
  },
  {
    label: "Taille (décroissance)",
    value: "$size_desc"
  }
];

export const USER_FILES: UserFileInterface[] = [
  {
    fileName: "1.png",
    icon: "/assets/images/files.png",
    size: 200,
    date: "2020-02-02",
    creator: "Azim"
  },
  {
    fileName: "2.png",
    icon: "/assets/images/files.png",
    size: 200,
    date: "2020-02-02",
    creator: "Azim S"
  },
  {
    fileName: "3.png",
    icon: "/assets/images/files.png",
    size: 200,
    date: "2020-02-02",
    creator: "Azim SA"
  },
  {
    fileName: "4.png",
    icon: "/assets/images/files.png",
    size: 200,
    date: "2020-02-02",
    creator: "Azim"
  },
  {
    fileName: "5.png",
    icon: "/assets/images/files.png",
    size: 200,
    date: "2020-02-02",
    creator: "Azim"
  },
  {
    fileName: "6.png",
    icon: "/assets/images/files.png",
    size: 200,
    date: "2020-02-02",
    creator: "Azim"
  }
]