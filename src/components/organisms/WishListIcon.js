import { Icon } from "../atoms";

function WishListIcon() {
  const redirectToWishlistPage = () => {
    alert("chuyen trang");
  };

  return <Icon iconClass="fas fa-heart" onClick={redirectToWishlistPage} />;
}

export default WishListIcon;
