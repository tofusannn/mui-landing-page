"use client";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { KeyboardArrowDown, Translate } from "@mui/icons-material";
import Image from "next/image";
import { cloneElement, ReactElement, useState } from "react";

interface Props {
  window?: () => Window;
  children?: ReactElement<{ elevation?: number }>;
}

interface MenuItemData {
  label: string;
  submenu: string[];
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const menuItems: MenuItemData[] = [
  {
    label: "Product",
    submenu: ["Features", "Pricing", "Integrations"],
  },
  {
    label: "Solution",
    submenu: ["For Developers", "For Teams", "For Enterprises"],
  },
  {
    label: "Tools",
    submenu: ["API", "CLI", "SDK"],
  },
];

export default function Navbar(props: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [submenu, setSubmenu] = useState<string[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseEnter = (
    event: React.MouseEvent<HTMLElement>,
    submenuItems: string[]
  ) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(submenuItems);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubmenu([]);
  };

  const open = Boolean(anchorEl);

  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{
          height: "64px",
          backgroundColor: "#fff",
          borderColor: "#fff",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src="/logo.png" alt="Logo" width={178} height={32} />
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ ml: "2rem", px: "30px" }}
            >
              {menuItems.map((menu) => (
                <div key={menu.label}>
                  <MenuItemBar
                    aria-controls={open ? `${menu.label}-menu` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    // onMouseEnter={(e) => handleMouseEnter(e, menu.submenu)}
                    // onMouseLeave={handleClose}
                  >
                    {menu.label} <KeyboardArrowDown />
                  </MenuItemBar>
                  <Menu
                    id={`${menu.label}-menu`}
                    anchorEl={anchorEl}
                    open={open && submenu === menu.submenu}
                    onClose={handleClose}
                    MenuListProps={{
                      onMouseLeave: handleClose,
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {submenu.map((item) => (
                      <MenuItem key={item} onClick={handleClose}>
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ))}
              <MenuItemBar>API</MenuItemBar>
              <MenuItemBar>Pricing</MenuItemBar>
            </Stack>
            <Stack direction={"row"} sx={{ ml: "auto" }}>
              <Button sx={{ color: "#333", fontSize: "14px" }}>
                <Translate />
                <KeyboardArrowDown />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ml: "10px",
                  color: "#e82255",
                  fontSize: "14px",
                  borderColor: "#e82255",
                  textTransform: "none",
                }}
              >
                Log in / Sign up
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

const MenuItemBar = styled(Button)(({}) => ({
  color: "#333",
  fontSize: "14px",
  textTransform: "none",
  fontFamily: `Poppins, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif !important`,
}));
