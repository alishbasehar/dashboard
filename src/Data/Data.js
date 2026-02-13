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
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    barvalue: 70,
    value: 2300,
    png: FaDollarSign,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    background: "linear-gradient(135deg, #10b981, #059669)",
    barvalue: 80,
    value: 5400,
    png: BsCurrencyDollar,
    series: [
      {
        name: "Revenue",
        data: [80, 100, 70, 90, 120, 150, 130],
      },
    ],
  },
  {
    title: "Expense",
    background: "linear-gradient(135deg, #f43f5e, #e11d48)",
    barvalue: 60,
    value: 1800,
    png: HiOutlineCurrencyDollar,
    series: [
      {
        name: "Expense",
        data: [20, 30, 25, 35, 40, 50, 45],
      },
    ],
  },
];
