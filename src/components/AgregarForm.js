import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { addProject, editProject } from "../features/projectSlice";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import moment from "moment";

const btnStyle = {
  backgroundColor: "#F5222D",
};

const validationSchema = yup.object({
  projectName: yup
    .string("Enter a project name")
    .required("Project name is required"),
  description: yup
    .string("Enter a description")
    .min(10, "Description should be of minimum 8 characters length")
    .required("Description is required"),
  projectManager: yup.string().required("Project manager is required!"),
  assignedTo: yup.string().required("Assignation is required!"),
  status: yup.string().required("Status is required!"),
});

const AgregarForm = () => {
  const { projects } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const matches = useMediaQuery("(min-width:700px)");

  let initialValues;
  if (id) {
    const selectedProject = projects.projects
      ? projects.projects.filter((item) => item.id === parseInt(id))
      : projects.filter((item) => item.id === parseInt(id));
    initialValues = {
      projectName: selectedProject[0].projectName,
      description: selectedProject[0].description,
      projectManager: selectedProject[0].projectManager,
      assignedTo: selectedProject[0].assignedTo,
      status: selectedProject[0].status,
      createdAt: selectedProject[0].createdAt
    };
  } else {
    initialValues = {
      projectName: "",
      description: "",
      projectManager: "",
      assignedTo: "",
      status: "",
      createdAt: ""
    };
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const cantidadProyectos = projects.projects
        ? projects.projects.length
        : projects.length;
      Swal.fire({
        title: "Are you sure?",
        text: "You will add this project to the list!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const format = "MM/DD/YYYY HH:mma";
          let date = new Date();
          if (id) {
            dispatch(
              editProject({
                id: parseInt(id),
                projectName: values.projectName,
                projectManager: values.projectManager,
                assignedTo: values.assignedTo,
                status: values.status,
                description: values.description,
                createdAt: moment(date).format(format)
              })
            );
          } else {
            dispatch(
              addProject({
                id: cantidadProyectos + 1,
                projectName: values.projectName,
                projectManager: values.projectManager,
                assignedTo: values.assignedTo,
                status: values.status,
                description: values.description,
                createdAt: moment(date).format(format)
              })
            );
          }

          Swal.fire("Added!", "Your project has been added.", "success");
          navigate("/");
        }
      });
    },
  });

  return (
    <Paper
      sx={
        matches
          ? {
              width: "50%",
              overflow: "hidden",
              margin: "0 auto",
              padding: "4%",
            }
          : {
              width: "90%",
              overflow: "hidden",
              margin: "0 auto",
              padding: "8%",
            }
      }
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { mb: 5 },
          }}
        >
          <TextField
            fullWidth
            id="projectName"
            name="projectName"
            label="Project name"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={
              formik.touched.projectName && Boolean(formik.errors.projectName)
            }
            helperText={formik.touched.projectName && formik.errors.projectName}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <FormControl
            sx={{
              mb: 5,
            }}
            fullWidth
          >
            <InputLabel id="projectManager">Project Manager</InputLabel>
            <Select
              labelId="projectManager"
              id="projectManager"
              name="projectManager"
              value={formik.values.projectManager}
              label="Project manager"
              onChange={formik.handleChange}
              error={
                formik.touched.projectManager &&
                Boolean(formik.errors.projectManager)
              }
              helperText={
                formik.touched.projectManager && formik.errors.projectManager
              }
            >
              <MenuItem value={"Walt Cossani"}>Walt Cossani</MenuItem>
              <MenuItem value={"Yvonne Jennings"}>Yvonne Jennings</MenuItem>
              <MenuItem value={"Janco Haasjes"}>Janco Haasjes</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              mb: 5,
            }}
            fullWidth
          >
            <InputLabel id="assignedTo">Assigned to</InputLabel>
            <Select
              labelId="assignedTo"
              id="assignedTo"
              name="assignedTo"
              value={formik.values.assignedTo}
              label="Assigned to"
              onChange={formik.handleChange}
              error={
                formik.touched.assignedTo && Boolean(formik.errors.assignedTo)
              }
              helperText={formik.touched.assignedTo && formik.errors.assignedTo}
            >
              <MenuItem value={"Teunisje Van den Corput"}>
                Teunisje Van den Corput
              </MenuItem>
              <MenuItem value={"Alex Harris"}>Alex Harris</MenuItem>
              <MenuItem value={"Nicolas Caruso"}>Nicolás Caruso</MenuItem>
              <MenuItem value={"Ignacio Truffa"}>Ignacio Truffa</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              mb: 5,
            }}
            fullWidth
          >
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              name="status"
              value={formik.values.status}
              label="Status"
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            >
              <MenuItem value={"Enabled"}>Enabled</MenuItem>
              <MenuItem value={"Disabled"}>Disabled</MenuItem>
            </Select>
          </FormControl>

          <Button style={btnStyle} variant="contained" type="submit">
            {id ? "Edit project" : "Create project"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AgregarForm;
