import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Analytics />
      <Home />
    </>
  );
};
export default App;
