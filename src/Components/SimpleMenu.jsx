import * as React from "react";
import { Grid, IconButton, Drawer, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const DrawerContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Utilise une disposition en colonne
  alignItems: "center", // Centre les éléments horizontalement
  padding: theme.spacing(2),
  background: "#3B3B3B", // Ajout de la couleur de fond
  color: "white",
  height: "100%", // Définir la hauteur à 100% pour remplir le Drawer
}));

export default function SimpleMenu() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const handleClick = (path) => {
    setOpenDrawer(false);
  };

  const MenuButton = styled(Button)(({ theme }) => ({
    color: "white",
    fontSize: "1em",
    margin: "10px 0", // Ajout de marge entre les boutons
    "&:hover": {
      backgroundColor: "#90BAAD",
    },
  }));

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div style={{ height: "80px", justifyContent: "center", display: "flex" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={11}
          backgroundColor="#717C89"
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={1}>
            <img src={logo} alt="logo" style={{ height: "70px" }} />
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // Ajout pour aligner verticalement au centre
            }}
          >
            {isSmallScreen ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{ mr: 2 }}
                style={{ marginLeft: "auto", marginRight: "16px" }} // Ajustement pour aligner à droite
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <MenuButton onClick={() => handleClick("tableaudebordadmin")}>
                  Tableau de bord
                </MenuButton>
                <MenuButton onClick={() => handleClick("listebenevoles")}>
                  Liste des bénévoles
                </MenuButton>
                <MenuButton onClick={() => handleClick("missions")}>
                  Missions
                </MenuButton>
                <MenuButton onClick={() => handleClick("affectations")}>
                  Affectations
                </MenuButton>
                <MenuButton onClick={() => handleClick("planning")}>
                  Planning
                </MenuButton>
              </>
            )}

            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={handleDrawerClose}
            >
              <IconButton
                onClick={handleDrawerClose}
                sx={{ ml: "auto", mt: 2 }}
              >
                <CloseIcon />
              </IconButton>
              <DrawerContent
                style={{ background: "#3B3B3B" }} // Ajout de la couleur de fond
              >
                <MenuButton onClick={() => handleClick("tableaudebordadmin")}>
                  Tableau de bord
                </MenuButton>
                <MenuButton onClick={() => handleClick("listebenevoles")}>
                  Liste des bénévoles
                </MenuButton>
                <MenuButton onClick={() => handleClick("missions")}>
                  Missions
                </MenuButton>
                <MenuButton onClick={() => handleClick("affectations")}>
                  Affectations
                </MenuButton>
                <MenuButton onClick={() => handleClick("planning")}>
                  Planning
                </MenuButton>
              </DrawerContent>
            </Drawer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
