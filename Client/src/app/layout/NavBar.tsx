import { Group } from "@mui/icons-material";
import {
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  AppBar,
  Box,
} from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg , #182a73 0% , #218aae 69%, #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h6" fontWeight="bold">
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem" }}>
              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  frontweight: "bold",
                }}
              >
                Activities
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem" }}>
              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  frontweight: "bold",
                }}
              >
                About
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: "2rem" }}>
              <MenuItem
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  frontweight: "bold",
                }}
              >
                Contact
              </MenuItem>
            </Box>
            <Box>
              <Button size="large" variant="contained" color="warning">
                Creat Activity
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
