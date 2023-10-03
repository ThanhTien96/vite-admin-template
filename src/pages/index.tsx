import ErrorPage from './ErrorPage';

export const NotFoundPage = ErrorPage[404];
export const NoAuthorizedPage = ErrorPage[403];
export const ServerErrorPage = ErrorPage[500];

export {default as HomePate} from './HomePage';
export {default as LoadingPage} from './LoadingPage';
export {default as LoginPage} from './LoginPage';
