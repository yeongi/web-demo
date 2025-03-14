import { useState } from "react";
import { ProfileListPage } from "../pages/ProfileListPage/ProfileListPage";
import type { PAGE_ARR } from "../constant/page";

type Page = (typeof PAGE_ARR)[number];

export const usePageController = () => {
  const [currentPage, setCurrentPage] = useState<Page>();

  const renderPage = (): React.ReactNode => {
    switch (currentPage) {
      case "LoginPage":
        return <p>Login Page Content</p>;
      case "ProfileListPage":
        return <ProfileListPage />;
      default:
        return <p>hello world</p>;
    }
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  return {
    renderPage,
    handlePageChange,
  };
};
