import { createContext } from "react";
import useMediaQuery from "../utils/mediaQuery";

const MediaQueryContext = createContext();

function MediaQueryProvider({ children }) {
  const isMobile = useMediaQuery('(max-width: 599px)');
  const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1024px)');
  
  return (
    <MediaQueryContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export { MediaQueryProvider };
export default MediaQueryContext;