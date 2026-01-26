import { IoHomeOutline } from "react-icons/io5";
import { FaRegClipboard, FaRegUser, FaRegChartBar, FaDollarSign } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

export const sidebardata = [
  {
    icon: IoHomeOutline,
    heading: "Dashboard",
  },
  {
    icon: FaRegClipboard,
    heading: "Orders",
  },
  {
    icon: FaRegUser,
    heading: "Customer",
  },
  {
    icon: GoPackage,
    heading: "Products",
  },
  {
    icon: FaRegChartBar,
    heading: "Analytics",
  },
];

export const carddata = [
  {
    title: "Sales",
    background: "#BFA15D",
    barvalue: 70,
    value: 2300,
    png: FaDollarSign,
    series: [
      {
        name: "Revenue",
        data: [10, 17, 20, 90],
      },
    ],
  },
  {
    title: "Revenue",
    background: "#1f2937", // gray-800
    barvalue: 80,
    value: 5400,
    png: BsCurrencyDollar,
    series: [
      {
        name: "Revenue",
        data: [20, 30, 40, 100],
      },
    ],
  },
  {
    title: "Expense",
    background: "#374151", // gray-700
    barvalue: 60,
    value: 1800,
    png: HiOutlineCurrencyDollar,
    series: [
      {
        name: "Expense",
        data: [15, 25, 35, 60],
      },
    ],
  },
];
