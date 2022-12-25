import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} - BLOG.</title>
    </Helmet>
  );
}

export default PageTitle;
