import { createContext } from "react";
import useMediaQuery from "../utils/mediaQuery";

const MediaQueryContext = createContext();

function MediaQueryProvider({ children }) {
  const isMobile = useMediaQuery('(max-width: 599px)');
  const isMobileDescription = useMediaQuery('(max-width: 567px)');
  const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1023px) and (orientation: portrait)');
  
  return (
    <MediaQueryContext.Provider value={{ isMobile, isTablet, isMobileDescription }}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export { MediaQueryProvider };
export default MediaQueryContext;