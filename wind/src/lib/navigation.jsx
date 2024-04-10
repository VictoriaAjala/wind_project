import { FiHome, FiBox, FiShoppingCart, FiDatabase, FiUsers, FiSettings, FiTrendingUp } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

export const Dashboard_sidebar_links = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <FiHome />
    },
    {
        key: 'product',
        label: 'Product',
        path: '/product',
        icon: <FiBox />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <FiShoppingCart />
    },
    {
        key: 'users',
        label: 'Users',
        path: '/users',
        icon: <FiUsers />
    },
    {
        key: 'banner',
        label: 'Banner',
        path: '/banner',
        icon: <FiDatabase />
    },
    {
        key: 'revenue',
        label: 'Revenue',
        path: '/revenue',
        icon: <FiTrendingUp />
    },
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <FiSettings />
    },
]

export const Dashboard_sidebar_bottom_links = [
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <BiLogOut />
    },
]
