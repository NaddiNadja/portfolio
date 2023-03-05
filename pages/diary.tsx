import React from "react";
import Diary from "components/projects/diary";
import { PageTitleContext } from "./_app";

const DiaryPage = () => {
  const page = React.useContext(PageTitleContext);
  React.useEffect(() => {
    page.setTitle("Digital diary");
  }, [page]);

  return <Diary />;
};

export default DiaryPage;
