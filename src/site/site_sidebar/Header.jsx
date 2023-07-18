import { home } from "/src/links.jsx";
import { ReactComponent as Logo } from "agent_factory.shared/ui/brand/maze_logo.svg";
import { Svg } from "react_utils/svgs";
import styled from "styled-components";

const StyleSidebarHeaderLink = styled(home.asComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.6;
  }
`;

function Header() {
  return (
    <StyleSidebarHeaderLink>
      <Svg size="70%" alt="site-logo">
        <Logo />
      </Svg>
    </StyleSidebarHeaderLink>
  );
}

export { Header };
