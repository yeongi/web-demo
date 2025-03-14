import { usePageController } from "./usePageController";
import { PAGE_ARR } from "../constant/page";

const RootLayout = () => {
  const { renderPage, handlePageChange } = usePageController();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <header
        style={{ width: "100%", padding: "1rem", backgroundColor: "sky" }}
      >
        <h1>Header</h1>
        <nav>
          {PAGE_ARR.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </nav>
      </header>
      <main style={{ flex: 1, width: "100%", padding: "1rem" }}>
        {renderPage()}
      </main>
      <footer
        style={{ width: "100%", padding: "1rem", backgroundColor: "whitegray" }}
      >
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default RootLayout;
