import ErrorPage, { ErrorPageProps } from "./ErrorPage";


interface StatusErrorPageType {
    403: React.FC;
    404: React.FC;
    500: React.FC;
}

const renderErrorPage = (props: ErrorPageProps): React.ReactElement => (<ErrorPage {...props} />);


const Page: StatusErrorPageType = {
    403: () => renderErrorPage({
        title: "403",
        subTitle: "Sorry, you are not authorized to access this page.",
        status: "403",
    }),
    404: () =>
    renderErrorPage({
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      status: "404",
    }),
  500: () =>
    renderErrorPage({
      title: "500",
      subTitle: "Sorry, something went wrong.",
      status: "500",
    }) 
};

export default Page;