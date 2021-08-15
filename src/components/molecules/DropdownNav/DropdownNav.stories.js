import NavItem from "../NavItem/NavItem";
import DropdownNav from "./DropdownNav";

export default {
  component: DropdownNav,
  title: "Components/Molecules/DropdownNav",
};

export const StoryDropdownNav = (args) => (
  <DropdownNav {...args}>
    <NavItem>Product 1</NavItem>
    <NavItem>Product 2</NavItem>
    <NavItem>Product 3</NavItem>
    <NavItem>Product 4</NavItem>
  </DropdownNav>
);

StoryDropdownNav.args = {
  display: true,
};
