import DropdownNav from "../DropdownNav/DropdownNav";
import NavItem from "./NavItem";

export default {
  component: NavItem,
  title: "Components/Molecules/NavItem",
};

export const RootNavItem = (args) => <NavItem {...args}>Product 1</NavItem>;

RootNavItem.args = {
  url: "#",
};

export const DropdownNavItem = (args) => <NavItem {...args}>Product 1</NavItem>;

DropdownNavItem.args = {
  url: "#",
  dropdown: (
    <DropdownNav>
      <NavItem>1</NavItem>
      <NavItem>2</NavItem>
      <NavItem>3</NavItem>
    </DropdownNav>
  ),
};
