import { Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/ActivityDashboard";

function App() {
  const [activities, SetActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => SetActivities(response.data));
    return () => {};
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
