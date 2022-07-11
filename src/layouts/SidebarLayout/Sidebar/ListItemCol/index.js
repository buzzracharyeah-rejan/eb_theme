import React from 'react';

import { ItemList } from '../../consts';
import { useNavigate } from 'react-router-dom';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MuiList, MuiListItem, MuiListItemButton, MuiListItemIcon, MuiListItemText } from './ListItemCol.styles';

const ListItemCol = ({ open }) => {
  const navigate = useNavigate();
  return (
    <MuiList>
      {ItemList.map((item, index) => (
        <MuiListItem
          key={item.id}
          disablePadding
          sx={{ display: 'block', py: '2.5px' }}
          onClick={() => navigate(item.path)}
        >
          <MuiListItemButton
            sx={{
              px: 2.5,
            }}
          >
            <MuiListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </MuiListItemIcon>
            <MuiListItemText primary={item.label} sx={{ display: open ? '' : 'none' }} />
          </MuiListItemButton>
        </MuiListItem>
      ))}
    </MuiList>
  );
};

export default ListItemCol;
