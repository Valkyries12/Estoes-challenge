import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import RowTable from "./RowTable";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  typography: {
    textAlign: "start",
    fontSize: "16px",
    fontWeight: "bold",
  },
  tableHead: {
    padding: "15px 4px",
    border: "1px solid #D9D9D9",
  },
};

const ListadoTable = ({ data }) => {
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <Paper
      sx={
        matches
          ? {
              width: "85%",
              overflow: "hidden",
              margin: "0 auto",
              border: "1px solid #D9D9D9",
              borderRadius: "4px",
            }
          : { width: "100%" }
      }
    >
      <Grid
        container
        style={styles.tableHead}
        direction="row"
        justifyContent="space-around"
        sx={matches ? { display: "flex" } : { display: "none" }}
      >
        <Grid item xs={2}>
          <Typography style={styles.typography}>Project name</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Project Manager</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Assigned to</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Status</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={styles.typography}>Action</Typography>
        </Grid>
      </Grid>

      {data.map((item) => (
        <RowTable key={item.id} dataRow={item} />
      ))}
    </Paper>
  );
};

export default ListadoTable;
