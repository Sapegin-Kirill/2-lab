import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key="lab1" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab1">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 1" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="lab2" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab2">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 2" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="lab3" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab3">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 3" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="lab4" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab4">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 4" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="lab5" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab5">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 5" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="lab6" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab6">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 6" />
                    </ListItemButton>
                </ListItem>
                <ListItem key="lab7" disablePadding>
                    <ListItemButton component={RouterLink} to="/lab8">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Лабораторная 8" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}