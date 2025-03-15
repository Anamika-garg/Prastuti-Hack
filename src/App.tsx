import { Routes, Route, Link } from "react-router-dom";
import { Expiration } from "./screens/Expiration";
import { Profile } from "./screens/Profile";
import { Recipes } from "./screens/Recipes";
import { Settings } from "./screens/Settings";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Expiration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};