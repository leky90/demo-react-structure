import { Col, Container, Row, ImageLink } from "../atoms";
import { Menu, SearchIcon, WishListIcon, CartIcon } from "./";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col>
            <ImageLink
              src="data:image/webp;base64,UklGRuIBAABXRUJQVlA4TNUBAAAvc4AFEH8AEIT/cQsRE5E4yLW2f22bT4YwlbnKyQX0ZOvGoa3MfAXBPWPdyR57Onkuw8TOWqYLiLdOzT/M0Tvo95d8jm8gov8TIKn3yeN3WdXnS6ClTuaAsE6WgTt1sgX8jPX17dJ4XrpXOKpzfX060XcxOHF/yJooXA2k7v6+vr6+i1mjm3gglSD8S6deAYe2QGswChyT1LUGVDKqYrYaJaNRKsMwdHRhO63DOkBemid+x9diVI0OA+ioJjNDdWFnUyzCQzieYKUGk5rydHpajXU4BS98nRG4twkG1mFaC8ADYHikUPgH5GNd4ARY7tFeoFnznlAj4LQGoaZgWtI8FBU/C0WtQ97I6yw4qdfTKMUiyKkLnNQFNBtTEGoBWmNFxYqSIisrRVYgRRCoChWZc3Dm0hKEsTPGnSSBz8mzBe3WCvZwLDReSCIVgVUGJzvyTHtOAIFG0mxCk06A0yqEVi/+jNUFHNFKmhWY1CJUzgIZSZ+/PS0naLa0CUSkmcM+Mwf8n5lpj3CzcHzbtm2L0OFZwE5W8rTFgI4ItwTtkqpwxlOuiTYtJdqERkklqHi0CVS20rw0DiUDAknd4Hxnt3CNURq9AW4qmWra1ZNRDbt6MkoJAA=="
              alt="logo"
              url={"https://google.com"}
            />
          </Col>
          <Col>
            <Menu />
          </Col>
          <Col>
            <SearchIcon />
            <WishListIcon />
            <CartIcon />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
