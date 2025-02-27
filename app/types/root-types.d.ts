interface NavItemType {
    name: string;
    icon: string;
    url: string;
}

interface NavItemSummaryType {
    title: string,
    size: 20,
    latestDate: string,
    icon: string,
    url: string
}

interface DropdownMenuItemInterface {
    label: string,
    icon: string,
    value: string
}

interface SortTypeInterface {
    label: string,
    value: string
}

interface RecentFileInterface {
    fileName: string,
    icon: string,
    date: string
}

interface UserFileInterface {
    fileName: string,
    icon: string,
    size: number,
    date: string,
    creator: string
}