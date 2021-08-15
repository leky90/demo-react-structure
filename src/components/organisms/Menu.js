import { Nav, NavItem, DropdownNav } from "../molecules";

const DropdownShop = function () {
  return (
    <DropdownNav>
      <NavItem url="/shop-category">Shop category</NavItem>
      <NavItem url="/shop-detail">Shop detail</NavItem>
    </DropdownNav>
  );
};

const DropdownBlog = function () {
  return (
    <DropdownNav>
      <NavItem url="/blog-category">Blog</NavItem>
      <NavItem url="/blog-detail">Blog detail</NavItem>
      <NavItem url="/blog-detail">Blog category</NavItem>
    </DropdownNav>
  );
};

function Menu() {
  return (
    <Nav>
      <NavItem url="/home">Home</NavItem>
      <NavItem url="/shop" dropdown={<DropdownShop />}>
        Shop
      </NavItem>
      <NavItem url="/blog" dropdown={<DropdownBlog />}>
        Blog
      </NavItem>
      <NavItem url="/contact">Contact</NavItem>
    </Nav>
  );
}

export default Menu;
