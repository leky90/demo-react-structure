import { Header, Footer } from "../organisms";
import { Container, Row, Col } from "../atoms";

function SidebarLayout({
  children,
  sidebarSize = 25,
  leftSidebar,
  rightSidebar,
}) {
  return (
    <div className="sidebar-layout">
      <Header />
      <Container>
        <Row>
          {leftSidebar && <Col size={sidebarSize}>{leftSidebar}</Col>}
          <Col>{children}</Col>
          {rightSidebar && <Col size={sidebarSize}>{rightSidebar}</Col>}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default SidebarLayout;
