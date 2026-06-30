import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Writing from "./pages/Writing/Writing";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";

// Code-split: the markdown renderer (react-markdown) only loads when an
// article is opened, keeping it out of the initial bundle.
const WritingDetail = lazy(() => import("./pages/Writing/WritingDetail"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="writing" element={<Writing />} />
        <Route
          path="writing/:slug"
          element={
            <Suspense fallback={null}>
              <WritingDetail />
            </Suspense>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
