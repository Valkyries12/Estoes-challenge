import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteProject, addProject } from "../features/projectSlice"; 


const ITEM_HEIGHT = 48;

const iconStyles = {
  marginRight: "12px"
}

const CustomizedMenus = ({id}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = (id) => {
    setAnchorEl(null);
    console.log("edito ", id);
  };

  const handleDelete = (id) => {
    setAnchorEl(null);
    dispatch(deleteProject(id));
    console.log("borro ", id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        
          <MenuItem  onClick={() => handleEdit(id)}>
            <FaRegEdit style={iconStyles}/>Edit
          </MenuItem>
          <MenuItem  onClick={() => handleDelete(id)}>
            <FaTrash style={iconStyles}/> Delete
          </MenuItem>
        
      </Menu>
    </div>
  );
}

export default CustomizedMenus