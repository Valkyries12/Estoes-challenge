import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CustomizedMenus from "./CustomizedMenus";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  typography: {
    textAlign: "start",
    fontSize: "13px",
    color: "#595959",
    fontWeigth: "600",
  },
  typographyProjectName: {
    textAlign: "start",
    fontSize: "15px",
    color: "#595959",
    fontWeigth: "600",
  },
  typographyCreatedAt: {
    fontSize: "11px",
    color: "#8C8C8C",
    textAlign: "start"
  },
  tableRow: {
    padding: "12px 4px",
    borderBottom: "1px solid #D9D9D9",
    alignItems: "center"
  },
  menu: {
      textAlign: "start"
  }
};

const RowTable = ({ dataRow }) => {
    const matches = useMediaQuery("(min-width:700px)");
  return (
      <Grid
        container
        style={styles.tableRow}
        direction="row"
        justifyContent="space-around"
      >
        <Grid item xs={matches ? 2 : 5}>
          <Typography style={styles.typographyProjectName}>
            {dataRow.projectName}
          </Typography>
          <Typography style={styles.typographyCreatedAt}>
            {dataRow.createdAt && `Creation date: ${dataRow.createdAt}`}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={matches ? { display: "block" } : { display: "none" }}>
          <Typography style={styles.typography}>
            {dataRow.projectManager}
          </Typography>
        </Grid>
        <Grid item xs={matches ? 2 : 4}>
          <Typography style={styles.typography}>
            {dataRow.assignedTo}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={matches ? { display: "block" } : { display: "none" }}>
          <Typography style={styles.typography}>{dataRow.status} </Typography>
        </Grid>
        <Grid item xs={2} style={styles.menu}>
              <CustomizedMenus key={dataRow.id}  id={dataRow.id} />
        </Grid>
      </Grid>
   
  );
};

export default RowTable;
