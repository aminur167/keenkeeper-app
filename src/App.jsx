import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Toast from "./components/Toast.jsx";
import { TimelineProvider, useTimeline } from "./context/TimelineContext.jsx";
import FriendDetails from "./pages/FriendDetails.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Stats from "./pages/Stats.jsx";
import Timeline from "./pages/Timeline.jsx";

function AppShell() {
  const { toast } = useTimeline();

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#f4f7f9] text-slate-800">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends/:id" element={<FriendDetails />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {toast && <Toast message={toast} />}
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <TimelineProvider>
      <AppShell />
    </TimelineProvider>
  );
}
