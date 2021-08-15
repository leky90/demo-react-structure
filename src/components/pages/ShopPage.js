import ShopSidebar from "../organisms/ShopSidebar";
import SidebarLayout from "../templates/SidebarLayout";

function ShopPage() {
  return <SidebarLayout leftSidebar={<ShopSidebar />}>posts</SidebarLayout>;
}

export default ShopPage;
