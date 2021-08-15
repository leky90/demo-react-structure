import { Header, Footer } from "../organisms";

function OneColumnLayout({ children }) {
  return (
    <div className="one-column-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default OneColumnLayout;
