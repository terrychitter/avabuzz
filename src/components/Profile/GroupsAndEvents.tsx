import Grid from "@mui/material/Grid";
import Group from "./Group";
import Events from "./Events";

const GroupsAndEvents = () => {
  return (
    <Grid container spacing={1}>
      {/* Groups */}
      <Grid item xs={12} sm={6}>
        <Group />
      </Grid>
      {/* Events */}
      <Grid item xs={12} sm={6}>
        <Events />
      </Grid>
    </Grid>
  );
};

export default GroupsAndEvents;
