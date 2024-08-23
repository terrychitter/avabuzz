import { useTheme } from "@mui/material";
import {
  IconHome,
  IconHomeFilled,
  IconMessageCircle,
  IconMessageCircleFilled,
  IconPlanet,
  IconSquareRoundedPlusFilled,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
import Link from "../CustomComponents/CustomLink";
import AnimatedIconButton from "../CustomComponents/AnimatedIconButton";

type NavItemProps = {
  to: string;
  activeIcon: React.ElementType;
  inactiveIcon: React.ElementType;
};

const NavItem = ({
  to,
  activeIcon: ActiveIcon,
  inactiveIcon: InactiveIcon,
}: NavItemProps) => {
  const theme = useTheme();
  const location = useLocation();

  const iconSize = 30;
  const iconStroke = 1.2;
  const nonActiveColor = theme.palette.text.secondary;

  const isActive = location.pathname === to;

  return (
    <>
      <svg
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ position: "absolute" }}
      >
        <defs>
          <linearGradient
            id="gradient"
            gradientTransform="rotate(177, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop stopColor="#cd65f0" offset="50%" />
            <stop stopColor="#f15bb5" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      <AnimatedIconButton>
        <Link to={to}>
          {isActive ? (
            <ActiveIcon
              size={iconSize}
              stroke={iconStroke}
              fill="url(#gradient)"
              color="transparent"
            />
          ) : (
            <InactiveIcon
              size={iconSize}
              stroke={iconStroke}
              color={nonActiveColor}
            />
          )}
        </Link>
      </AnimatedIconButton>
    </>
  );
};

export const HomeNavItem = () => (
  <NavItem to="/home" activeIcon={IconHomeFilled} inactiveIcon={IconHome} />
);

export const DiscoverNavItem = () => (
  <NavItem to="/discover" activeIcon={IconPlanet} inactiveIcon={IconPlanet} />
);

export const NewPostNavItem = () => (
  <NavItem
    to="/new"
    activeIcon={IconSquareRoundedPlusFilled}
    inactiveIcon={IconSquareRoundedPlusFilled}
  />
);

export const ChatNavItem = () => (
  <NavItem
    to="/chat"
    activeIcon={IconMessageCircleFilled}
    inactiveIcon={IconMessageCircle}
  />
);

export const ProfileNavItem = () => (
  <NavItem to="/profile" activeIcon={IconUserFilled} inactiveIcon={IconUser} />
);
