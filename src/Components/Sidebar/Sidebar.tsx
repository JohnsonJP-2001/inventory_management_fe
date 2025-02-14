import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaHome } from 'react-icons/fa';
import { TbHexagonLetterE, TbHexagonLetterP, TbHexagonLetterV } from 'react-icons/tb';
import { MenuItemListType } from '../../interface/sidebar.interface';
import { configData } from '../../config';

const SideBarMenuList: MenuItemListType[] = [
    {
        title: "Home",
        isActive: true,
        isDisabled: true,
    },
    {
        title: "Vendor",
        isActive: true,
        isDisabled: true,
    },
    {
        title: "Employee",
        isActive: true,
        isDisabled: true,
    },
    {
        title: "Product",
        isActive: true,
        isDisabled: true,
    }
]

const openedMixin = (theme: Theme): CSSObject => ({
    width: configData.DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: configData.DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export interface SideBarComponentProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBarComponent({ open, setOpen }: SideBarComponentProps) {

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [menuListData, setMenuListData] = React.useState<MenuItemListType[]>(JSON.parse(JSON.stringify(SideBarMenuList)))

    const getMenuIcon = (title: string) => {
        switch (title) {
            case "HOME":
                return <FaHome />;
            case "VENDOR":
                return <TbHexagonLetterV />;
            case "EMPLOYEE":
                return <TbHexagonLetterE />;
            case "PRODUCT":
                return <TbHexagonLetterP />;
            default:
                return <FaHome />;
        }
    }

    return (<Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            {menuListData.map((menuListItem, index) => {
                return <ListItem key={menuListItem.title} disablePadding>
                    <ListItemButton sx={[
                        {
                            minHeight: 48,
                            px: 2.5,
                        },
                        open
                            ? {
                                justifyContent: 'initial',
                            }
                            : {
                                justifyContent: 'center',
                            },
                    ]}>
                        <ListItemIcon sx={[
                            {
                                minWidth: 0,
                                justifyContent: 'center',
                            },
                            open
                                ? {
                                    mr: 3,
                                }
                                : {
                                    mr: 'auto',
                                },
                        ]}>
                            {getMenuIcon(menuListItem.title.toUpperCase())}
                        </ListItemIcon>
                        <ListItemText sx={[
                            open
                                ? {
                                    opacity: 1,
                                }
                                : {
                                    opacity: 0,
                                },
                        ]} primary={menuListItem.title} />
                    </ListItemButton>
                </ListItem>
            }
            )}
        </List>
    </Drawer>)
}