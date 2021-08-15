import BlogSidebar from "../organisms/BlogSidebar";
import SidebarLayout from "../templates/SidebarLayout";

function BlogPage() {
  return (
    <SidebarLayout sidebarSize={33} rightSidebar={<BlogSidebar />}>
      posts
    </SidebarLayout>
  );
}

export default BlogPage;
