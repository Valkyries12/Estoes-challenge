import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProject, editProject } from "../features/projectSlice";
import Swal from "sweetalert2";
import { useNavigate  } from "react-router-dom";

const ITEM_HEIGHT = 48;

const iconStyles = {
  marginRight: "12px",
};

const CustomizedMenus = ({ id }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = (id) => {
    setAnchorEl(null);
    navigate(`/editar-proyecto/${id}`);
  };

  const handleDelete = (id) => {
    setAnchorEl(null);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProject(id));
        Swal.fire("Deleted!", "Your project has been deleted.", "success");
      }
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => handleEdit(id)}>
          <FaRegEdit style={iconStyles} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleDelete(id)}>
          <FaTrash style={iconStyles} /> Delete
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CustomizedMenus;
