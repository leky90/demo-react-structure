import { useState } from "react";
import Icon from "../atoms/Icon";
import { NavItem } from "../molecules";
import DropdownNav from "../molecules/DropdownNav";

function CartIcon() {
  const [openCart, setOpenCart] = useState(false);

  const toggleDropdownCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="mini-cart">
      <Icon iconClass="fas fa-shopping-cart" onClick={toggleDropdownCart} />
      <DropdownNav display={openCart}>
        <NavItem>Product 1</NavItem>
        <NavItem>Product 2</NavItem>
        <NavItem>Product 3</NavItem>
        <NavItem>Product 4</NavItem>
      </DropdownNav>
    </div>
  );
}

export default CartIcon;
