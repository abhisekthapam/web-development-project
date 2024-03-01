import { useState, useEffect } from "react";
import { navbarList } from "./TheNavbarConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function TheSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = {
    Home: "/",
    Menu: "/menu",
    Profile: "/username",
    Order: "/your-order",
  };

  const initialActiveTab = localStorage.getItem("activeTab") || "Menu";
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = (title) => {
    setActiveTab(title);
    localStorage.setItem("activeTab", title);

    if (routes[title]) {
      navigate(routes[title]);
    } else if (title === "Logo") {
      navigate(routes["Home"]);
      setActiveTab("Home");
    }
  };

  useEffect(() => {
    const pathname = location.pathname;
    const tabFromURL = Object.keys(routes).find(
      (key) => routes[key] === pathname
    );
    if (tabFromURL) {
      setActiveTab(tabFromURL);
      localStorage.setItem("activeTab", tabFromURL);
    }
  }, [location.pathname]);

  const handleKeyPress = (event, title) => {
    if (event.key === "Enter") {
      handleTabClick(title);
    }
  };

  const renderNavbarItem = (item) => {
    const isProfile = item.title === "Profile";
    return (
      <div
        onClick={() => handleTabClick(item.title)}
        onKeyDown={(e) => handleKeyPress(e, item.title)}
        key={item.title}
        className={`flex items-center cursor-pointer focus:outline-none ${
          activeTab === item.title ? "primary-color" : "stylish-border"
        }`}
        tabIndex={0}
      >
        {item.icon}
        {!isProfile && (
          <p className={`${activeTab === item.title ? "font-semibold" : ""}`}>
            {item.title}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-between p-6 mx-[5%] pl-[5%] h-[10vh]">
      <div className="flex items-center w-[30%]">
        <div
          onClick={() => handleTabClick("Logo")}
          onKeyDown={(e) => handleKeyPress(e, "Logo")}
          className="flex items-center cursor-pointer focus:outline-none"
          tabIndex={0}
          title="Tokri Logo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="100" height="" viewBox="0 0 2000 853"><g transform="matrix(1,0,0,1,-1.2121212121212466,-1.0715843928212507)"><svg viewBox="0 0 396 169" data-background-color="#ffffff" preserveAspectRatio="xMidYMid meet" height="853" width="2000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,0.21230687266915993)"><svg viewBox="0 0 395.52 168.57538625466168" height="168.57538625466168" width="395.52"><g><svg viewBox="0 0 395.52 168.57538625466168" height="168.57538625466168" width="395.52"><g><svg viewBox="0 0 395.52 168.57538625466168" height="168.57538625466168" width="395.52"><g id="textblocktransform"><svg viewBox="0 0 395.52 168.57538625466168" height="168.57538625466168" width="395.52" id="textblock"><g><svg viewBox="0 0 395.52 168.57538625466168" height="168.57538625466168" width="395.52"><g transform="matrix(1,0,0,1,0,0)"><svg width="395.52" viewBox="1.4 -32.2 93.83999999999999 40.00000000000001" height="168.57538625466168" data-palette-color="#bb84e8"><path d="M13.55 3.65L13.55 3.65Q11.65 3.65 10 3.05 8.35 2.45 7.35 1.13 6.35-0.2 6.35-2.4L6.35-2.4Q6.35-4.2 7.38-5.75 8.4-7.3 9.8-8.25L9.8-8.25Q10.1-8.5 10.48-8.75 10.85-9 11.2-9L11.2-9 11.3-9Q11.15-8.65 10.53-8.18 9.9-7.7 9.15-6.95 8.4-6.2 7.83-5.1 7.25-4 7.25-2.5L7.25-2.5Q7.25 0.05 8.78 1.3 10.3 2.55 12.7 2.55L12.7 2.55Q13.7 2.55 14.83 2.3 15.95 2.05 16.9 2.15L16.9 2.15 16.95 2.1Q17.05 2 17.28 1.98 17.5 1.95 17.65 1.9L17.65 1.9Q18.05 1.5 18.98 1.1 19.9 0.7 20.98 0.35 22.05 0 22.83-0.33 23.6-0.65 23.65-0.85L23.65-0.85 24.1-0.8Q24.2-1 24.33-1.18 24.45-1.35 24.65-1.35L24.65-1.35 24.75-1.35Q25-1.6 25.45-1.93 25.9-2.25 26.25-2.15L26.25-2.15Q26.45-2.6 26.8-2.75 27.15-2.9 27.2-3.4L27.2-3.4 27.45-3.4Q27.9-3.95 28.63-4.48 29.35-5 29.85-5.5L29.85-5.5 30.05-5.45 30.1-5.5Q30.3-5.7 30.5-6.05 30.7-6.4 31.05-6.3L31.05-6.3 30.95-6.7Q31.3-6.8 31.88-7.38 32.45-7.95 32.7-7.95L32.7-7.95 32.75-8.35 32.8-8.3 32.8-8.35 33.05-8.35Q33.1-8.6 33.2-8.85 33.3-9.1 33.65-9L33.65-9Q33.8-9.3 34.08-9.63 34.35-9.95 34.55-10.2L34.55-10.2Q34.65-10.6 34.65-10.7 34.65-10.8 34.65-10.8L34.65-10.8Q34.65-10.8 34.65-10.85 34.65-10.9 34.7-10.95L34.7-10.95Q34.85-10.95 35.2-11.43 35.55-11.9 35.88-12.38 36.2-12.85 36.3-12.8L36.3-12.8Q36.5-13.1 36.8-13.73 37.1-14.35 37.35-14.55L37.35-14.55 37.5-14.95Q37.6-14.95 37.58-14.93 37.55-14.9 37.65-14.9L37.65-14.9Q37.7-14.9 37.7-14.95 37.7-15 37.65-15L37.65-15Q37.85-15.25 38-15.53 38.15-15.8 38.3-16.05L38.3-16.05Q38.3-16.3 38.63-16.78 38.95-17.25 39.2-17.2L39.2-17.2Q39.2-17.25 39.15-17.32 39.1-17.4 39.1-17.45L39.1-17.45Q39.1-17.8 39.4-17.7L39.4-17.7 39.45-17.5 39.5-17.5 39.55-17.55 39.55-17.8 39.4-18.2 39.85-18.25 39.85-18.65 40.25-18.75 40.25-19.35Q40.5-19.5 40.83-20.1 41.15-20.7 41.2-20.95L41.2-20.95 41.45-21Q41.5-21.1 41.48-21.23 41.45-21.35 41.45-21.4L41.45-21.4Q41.95-21.75 42.05-22.25L42.05-22.25Q42.25-22.35 42.45-22.7 42.65-23.05 42.75-23.25L42.75-23.25Q42.75-23.5 42.88-23.68 43-23.85 43.05-24.05L43.05-24.05Q42.9-24.1 42.25-24.25 41.6-24.4 41.6-24.6L41.6-24.6 41.55-24.6Q41.45-24.5 41.25-24.5L41.25-24.5Q40.75-24.5 40.35-24.88 39.95-25.25 39.55-25.35L39.55-25.35 39.55-25.3Q39.75-25.1 39.7-24.9L39.7-24.9 38.9-25.2 38.95-25.4 39.1-25.35 39.1-25.4 38.6-25.6 38.45-25.3 38.05-25.6Q37.65-25.7 37.23-25.73 36.8-25.75 36.4-25.95L36.4-25.95Q36.3-25.85 36.15-25.85L36.15-25.85Q35.8-25.85 35.55-26.13 35.3-26.4 35.05-26.45L35.05-26.45Q34.85-26.15 34.5-26.15L34.5-26.15 34.6-26.55 34.4-26.6 34.3-26.3Q34.2-26.4 34.05-26.4L34.05-26.4 33.75-26.6 33.6-26.5 33.2-26.5 33.25-26.8 33.2-26.8 33.15-26.75Q32.85-26.6 32.4-26.6L32.4-26.6Q32.1-26.6 31.8-26.65 31.5-26.7 31.15-26.75L31.15-26.75 31.1-27Q30.95-26.95 30.75-27L30.75-27 30.7-27.05 30.6-26.8Q30.2-26.9 29.95-26.9 29.7-26.9 29.25-26.9L29.25-26.9Q28.65-26.9 28.03-27.08 27.4-27.25 26.8-27.25L26.8-27.25Q26.55-27.25 26.28-27.3 26-27.35 25.75-27.4L25.75-27.4Q25.55-27.25 25.3-27.25L25.3-27.25Q25.1-27.25 24.93-27.28 24.75-27.3 24.55-27.35L24.55-27.35 24.5-27.15 24.35-27.15Q24.2-27.15 23.7-27.13 23.2-27.1 22.73-27.05 22.25-27 22.2-26.85L22.2-26.85Q22-26.85 21.75-26.83 21.5-26.8 21.25-26.85L21.25-26.85Q21-26.55 20.03-26.4 19.05-26.25 18.15-26.15 17.25-26.05 17.2-25.8L17.2-25.8Q14.55-25.3 11.95-23.98 9.35-22.65 7.25-20.65 5.15-18.65 3.88-16.1 2.6-13.55 2.6-10.65L2.6-10.65Q2.6-10 2.8-9.3 3-8.6 3-8.25L3-8.25Q3-8.15 2.9-8.15L2.9-8.15Q2.7-8.25 2.6-8.58 2.5-8.9 2.2-8.9L2.2-8.9 2.05-8.75Q1.6-9.05 1.5-9.68 1.4-10.3 1.4-10.8L1.4-10.8Q1.4-12.65 2.1-14.53 2.8-16.4 3.9-18.13 5-19.85 6.2-21.15L6.2-21.15Q6.75-21.7 7.4-22.15 8.05-22.6 8.7-23.1L8.7-23.1Q8.8-23.2 9.2-23.45 9.6-23.7 10.03-23.98 10.45-24.25 10.45-24.3L10.45-24.3Q11-24.5 12.1-25.05 13.2-25.6 14.35-26.1 15.5-26.6 16.15-26.6L16.15-26.6 16.25-26.6Q16.45-26.9 17.63-27.2 18.8-27.5 20.33-27.75 21.85-28 23.15-28.13 24.45-28.25 24.9-28.2L24.9-28.2 24.95-28.25Q25.1-28.4 25.35-28.4L25.35-28.4Q25.55-28.4 25.73-28.35 25.9-28.3 26.05-28.25L26.05-28.25Q26.35-28.4 26.7-28.4L26.7-28.4Q26.95-28.4 27.2-28.38 27.45-28.35 27.65-28.3L27.65-28.3Q27.75-28.35 27.95-28.35L27.95-28.35Q28.25-28.35 28.58-28.28 28.9-28.2 29.1-28.15L29.1-28.15Q29.25-28.3 29.45-28.3L29.45-28.3Q29.75-28.3 30.15-28.1L30.15-28.1Q30.2-28.2 30.45-28.2L30.45-28.2Q30.75-28.2 31.03-28.13 31.3-28.05 31.6-27.95L31.6-27.95 31.7-28.15Q32.7-27.95 33.9-27.7 35.1-27.45 36.15-27.45L36.15-27.45Q36.25-27.45 36.73-27.35 37.2-27.25 37.2-27.1L37.2-27.1Q37.2-27.15 37.4-27.15L37.4-27.15Q37.6-27.1 38.15-27 38.7-26.9 38.65-26.8L38.65-26.8Q38.7-26.8 38.8-26.83 38.9-26.85 38.95-26.85L38.95-26.85Q39.5-26.85 39.98-26.63 40.45-26.4 40.95-26.3L40.95-26.3 40.95-26.35 41.1-26.45Q41.3-26.35 41.93-26.18 42.55-26 42.75-26L42.75-26Q43-26 43-26.15L43-26.15 43.2-26.1 43.35-25.8 43.8-25.7 43.8-25.75Q44.15-26.25 44.43-27.08 44.7-27.9 44.7-28.5L44.7-28.5Q44.7-29 44.45-29.28 44.2-29.55 44.2-29.9L44.2-29.9Q44.2-29.9 44.2-29.93 44.2-29.95 44.25-29.95L44.25-29.95 44.4-30Q45.05-29.9 46.18-29.88 47.3-29.85 48.2-29.55 49.1-29.25 49.1-28.25L49.1-28.25Q49.1-27.65 48.88-26.88 48.65-26.1 48.45-25.55L48.45-25.55Q48.55-25.25 48.85-25.15 49.15-25.05 49.4-25L49.4-25 49.5-25.25 49.7-25.2 49.7-25 50-25.15Q50.1-24.95 50.25-24.95 50.4-24.95 50.55-24.95L50.55-24.95 50.7-24.95 50.75-24.7Q50.8-24.75 50.85-24.7L50.85-24.7 50.9-24.95Q51.05-24.9 51.15-24.8 51.25-24.7 51.4-24.65L51.4-24.65Q51.4-24.65 51.43-24.68 51.45-24.7 51.45-24.65L51.45-24.65Q51.5-24.7 51.6-24.7L51.6-24.7Q51.8-24.7 51.9-24.58 52-24.45 52.15-24.4L52.15-24.4 52.2-24.35 52.25-24.45 52.4-24.7Q52.65-24.65 52.93-24.58 53.2-24.5 53.45-24.45L53.45-24.45 53.4-24.2 53.45-24.2Q53.55-24.25 53.8-24.25L53.8-24.25Q54.2-24.25 54.58-24.13 54.95-24 55.35-23.9L55.35-23.9Q55.75-23.85 55.78-23.73 55.8-23.6 55.95-23.55L55.95-23.55 55.95-23.6Q56.25-23.75 56.65-23.75L56.65-23.75Q57.45-23.75 58.2-23.58 58.95-23.4 59.7-23.25L59.7-23.25Q59.75-23.3 59.95-23.3L59.95-23.3Q60.05-23.3 60.23-23.28 60.4-23.25 60.5-23.25L60.5-23.25Q61.5-23.25 62.95-23.43 64.4-23.6 65.83-23.98 67.25-24.35 68.1-24.95L68.1-24.95Q68.35-25.15 68.58-25.4 68.8-25.65 69.15-25.65L69.15-25.65Q68.85-24.5 67.8-23.63 66.75-22.75 65.33-22.15 63.9-21.55 62.48-21.25 61.05-20.95 60-20.95L60-20.95Q59.65-20.95 59.33-20.98 59-21 58.7-21.05L58.7-21.05Q58.25-21.15 57.78-21.13 57.3-21.1 56.85-21.2L56.85-21.2Q56.8-21.25 56.75-21.25 56.7-21.25 56.7-21.3L56.7-21.3 56.6-21.35Q56.5-21.3 56.3-21.3L56.3-21.3Q54.6-21.3 53-21.8 51.4-22.3 49.75-22.5L49.75-22.5 49.65-22.55 49.6-22.55Q49.5-22.65 49.25-22.75 49-22.85 48.8-22.9L48.8-22.9 48.6-22.85 48.45-22.85Q48.15-22.85 47.7-22.95 47.25-23.05 47.3-23.25L47.3-23.25Q47.15-23.1 46.7-22.33 46.25-21.55 45.7-20.6 45.15-19.65 44.7-18.95 44.25-18.25 44.05-18.3L44.05-18.3Q44-18 43.6-17.45 43.2-16.9 42.75-16.43 42.3-15.95 42-15.85L42-15.85 41.85-15.8 41.8-15.8Q41.8-15.65 41.73-15.43 41.65-15.2 41.4-15.25L41.4-15.25Q41.35-15.05 40.83-14.35 40.3-13.65 39.6-12.8 38.9-11.95 38.27-11.28 37.65-10.6 37.45-10.4L37.45-10.4 37.45-10.3Q37.6-10.15 37.6-10.1L37.6-10.1Q37.6-9.95 37.27-9.98 36.95-10 36.9-9.9L36.9-9.9Q36.7-9.45 36.45-9.08 36.2-8.7 35.6-8.8L35.6-8.8 35.55-8.65 35.7-8.4Q35.35-8.4 34.98-8.03 34.6-7.65 34.45-7.35L34.45-7.35 34.35-7.25 34.2-7.2 34.2-7.15Q34.2-6.95 33.65-6.43 33.1-5.9 32.33-5.3 31.55-4.7 30.88-4.28 30.2-3.85 29.9-3.85L29.9-3.85 29.85-3.85 29.85-3.8Q29.05-3.3 28.43-2.83 27.8-2.35 27.05-1.8L27.05-1.8 26.85-1.4Q26.5-1.15 25.98-1.03 25.45-0.9 25.25-0.55L25.25-0.55Q25.25-0.55 25.2-0.53 25.15-0.5 25.15-0.45L25.15-0.45Q24.65-0.45 23.88 0.2 23.1 0.85 22.55 1.1L22.55 1.1Q20.55 2.05 18.18 2.85 15.8 3.65 13.55 3.65ZM55.75-8.55L55.75-8.55Q55.9-8.55 55.8-8.33 55.7-8.1 55.7-8L55.7-8 54.05-5.95Q53.65-5.45 53.15-5.13 52.65-4.8 52.2-4.35L52.2-4.35Q52.05-4.15 51.7-4 51.35-3.85 51.15-3.65L51.15-3.65Q50.95-3.45 50.17-3.33 49.4-3.2 49.1-3.2L49.1-3.2Q49.05-3.2 48.95-3.3L48.95-3.3 48.75-3Q48.25-2.2 47.57-1.55 46.9-0.9 46.2-0.35L46.2-0.35Q45.85-0.05 45.47 0.23 45.1 0.5 44.7 0.7L44.7 0.7Q44.3 0.9 43.65 0.9L43.65 0.9Q42.95 0.9 42.3 0.65L42.3 0.65Q41.35 0.3 40.85-0.55L40.85-0.55Q40.65-0.9 40.47-1.3 40.3-1.7 40.3-2.2L40.3-2.2Q40.3-2.75 40.45-3.18 40.6-3.6 40.75-4L40.75-4Q41.65-6.2 43.2-8.15L43.2-8.15Q43.3-8.25 43.47-8.55 43.65-8.85 43.85-9.15L43.85-9.15Q43.6-8.95 43.27-8.68 42.95-8.4 42.7-8.15L42.7-8.15Q42.4-7.8 42.22-7.65 42.05-7.5 41.65-7L41.65-7Q41.55-6.8 41.1-6.48 40.65-6.15 40.55-6.15L40.55-6.15Q40.4-6.15 40.47-6.43 40.55-6.7 41.35-7.5L41.35-7.5Q41.5-7.6 41.6-7.75 41.7-7.9 41.8-8.05L41.8-8.05 43.3-9.8 44.9-11.25Q45.15-11.5 45.67-12.08 46.2-12.65 47.15-13.4L47.15-13.4Q47.4-13.6 47.92-14.18 48.45-14.75 48.65-14.95L48.65-14.95Q48.9-15.2 49.15-15.1L49.15-15.1 49.35-15.35Q49.65-15.75 49.95-15.73 50.25-15.7 50.6-16L50.6-16 51.05-16.35 51.1-16.35 51.1-16.4Q51.35-16.5 51.47-16.68 51.6-16.85 51.9-16.85L51.9-16.85Q52.3-16.85 52.9-16.4 53.5-15.95 54-15.43 54.5-14.9 54.6-14.5L54.6-14.5Q54.6-14.4 54.6-14.35 54.6-14.3 54.65-14.2L54.65-14.2Q54.9-13.95 54.9-13.3L54.9-13.3Q54.9-12.55 54.6-11.68 54.3-10.8 53.97-10.08 53.65-9.35 53.45-9.05L53.45-9.05Q53.45-9.05 53.37-9.22 53.3-9.4 53.15-9.15L53.15-9.15 52.9-8.8 52.95-8.4 52.85-8.05 52.8-8.05Q52.65-7.75 52.22-7.2 51.8-6.65 51.2-5.9L51.2-5.9Q50.9-5.55 50.55-5.1 50.2-4.65 49.9-4.25L49.9-4.25 50.05-4.25Q50.55-4.25 51.17-4.6 51.8-4.95 52.2-5.25L52.2-5.25Q52.9-5.65 53.47-6.28 54.05-6.9 54.7-7.6L54.7-7.6Q54.9-7.85 55.05-8.03 55.2-8.2 55.4-8.4L55.4-8.4Q55.55-8.55 55.75-8.55ZM47.55-5.2L47.55-5.2Q48.1-5.6 49.05-6.43 50-7.25 51.35-9.1L51.35-9.1Q51.55-9.35 52-10.13 52.45-10.9 52.55-11.15L52.55-11.15Q52.8-11.7 53.02-12.33 53.25-12.95 53.25-13.6L53.25-13.6Q53.25-14.3 53.2-14.63 53.15-14.95 52.8-14.95L52.8-14.95Q52.4-14.95 51.55-14.45L51.55-14.45 51.15-14.05Q49.85-13.25 48.55-12.2L48.55-12.2Q48.5-12.15 48.42-12.13 48.35-12.1 48.35-12L48.35-12Q48.25-12 47.85-11.55 47.45-11.1 47.1-10.65 46.75-10.2 46.75-10.15L46.75-10.15Q46.65-9.95 46.32-9.8 46-9.65 46.05-9.3L46.05-9.3 45.7-9.3 45.8-8.9 45.55-8.9 45.55-8.85Q45.55-8.5 45.2-8.4L45.2-8.4Q45.1-8.3 45.1-8.4L45.1-8.4Q45.05-8.25 44.97-8.22 44.9-8.2 44.8-8.1L44.8-8.1 44.5-7.5 44.25-6.85Q44.2-6.85 43.87-6.6 43.55-6.35 43.55-6.3L43.55-6.3 43.6-6.05Q43.25-6 43.2-5.75 43.15-5.5 43.05-5.25L43.05-5.25 43.05-4.9 42.4-3.65 42.1-3.15Q42.05-3.1 42-2.95 41.95-2.8 42-2.8L42-2.8 42-2.75 42.1-2.75 42.15-3.15Q42.25-2.95 42.3-2.53 42.35-2.1 42.3-1.85L42.3-1.85Q42.25-1.65 42.17-1.38 42.1-1.1 42.1-0.85L42.1-0.85 42.1-0.45Q42.1-0.1 42.55 0 43 0.1 43.25 0.05L43.25 0.05Q43.35 0 43.82-0.25 44.3-0.5 44.72-0.78 45.15-1.05 45.1-1.15L45.1-1.15 45.15-1.1 45.3-1.1Q45.4-1.35 45.75-1.55 46.1-1.75 46.3-1.95L46.3-1.95Q46.65-2.25 47.02-2.58 47.4-2.9 47.65-3.25L47.65-3.25 48.15-3.95Q47.45-4.1 47.45-4.7L47.45-4.7Q47.45-4.9 47.55-5.2ZM67.75 6.95L67.65 7.55Q67.55 7.8 67.09 7.8L67.09 7.8Q66.7 7.8 66.09 7.45L66.09 7.45 65.5 6.9Q65.3 6.65 65.15 6.35 65 6.05 64.75 5.8L64.75 5.8Q64.5 5.4 64.27 5.1 64.05 4.8 63.85 4.45L63.85 4.45Q63.55 3.75 63.37 3.08 63.2 2.4 63 1.75L63 1.75Q62.65 0.55 62.45-0.63 62.25-1.8 62.15-2.95L62.15-2.95Q62.05-3.9 62-4.83 61.95-5.75 61.85-6.7L61.85-6.7 61.85-7 60.15-4.9Q59.85-4.5 59.57-4.1 59.3-3.7 59-3.3L59-3.3 58.5-2.5 58.1-2.05Q57.95-1.75 57.67-1.03 57.4-0.3 57.15-0.2L57.15-0.2Q57.1-0.2 57.07-0.18 57.05-0.15 57-0.15L57-0.15Q56.8-0.15 56.55-0.4L56.55-0.4Q56.15-0.65 55.8-1.05 55.45-1.45 55.45-1.95L55.45-1.95Q55.45-2.2 55.52-2.43 55.6-2.65 55.6-2.95L55.6-2.95Q55.7-3.05 55.7-3.3L55.7-3.3 56.15-4.3Q56.65-5.55 57.45-6.8L57.45-6.8Q57.5-6.85 57.6-7 57.7-7.15 57.65-7.15L57.65-7.15 58.4-8.45Q58.55-8.75 58.82-9.05 59.1-9.35 59.1-9.7L59.1-9.7 59.15-9.7Q59.35-9.85 59.57-10.23 59.8-10.6 59.9-10.8L59.9-10.8Q60.3-11.4 60.7-12.03 61.1-12.65 61.5-13.3L61.5-13.3 62.15-14.1Q62.9-15.15 63.7-16.2 64.5-17.25 65.15-18.3L65.15-18.3 65.15-18.4 65.2-18.4 65.2-18.45Q65-18.4 64.84-18.2 64.7-18 64.55-17.85L64.55-17.85Q64.09-17.35 63.7-16.9 63.3-16.45 62.9-15.95L62.9-15.95 62.15-15.15 61.7-14.5Q60.9-13.55 60.02-12.6 59.15-11.65 58.3-10.65L58.3-10.65 55.35-7.4Q54.75-6.75 54.55-6.75L54.55-6.75Q54.45-6.75 54.45-6.85L54.45-6.85Q54.45-6.95 54.55-7.13 54.65-7.3 54.75-7.5L54.75-7.5 55.35-8.15 56.65-9.5Q56.9-9.75 57.12-10.05 57.35-10.35 57.6-10.6L57.6-10.6 58.4-11.5 59.35-12.65Q62.1-15.7 64.8-18.78 67.5-21.85 70.05-25.1L70.05-25.1Q70.3-25.4 70.5-25.75 70.7-26.1 70.9-26.4L70.9-26.4 73.75-30.2Q74-30.5 74.27-30.8 74.55-31.1 74.75-31.4L74.75-31.4 75.15-32 75.65-32.2Q76-32.2 76.57-31.98 77.15-31.75 77.57-31.4 78-31.05 77.84-30.6L77.84-30.6Q77.84-30.55 77.37-30.08 76.9-29.6 76.4-29.15 75.9-28.7 75.8-28.65L75.8-28.65Q75.7-28.55 75.7-28.55L75.7-28.55Q75.45-28.25 75.22-27.93 75-27.6 74.75-27.35L74.75-27.35Q74.59-27.15 74.02-26.63 73.45-26.1 72.95-25.6 72.45-25.1 72.45-24.9L72.45-24.9Q72.3-24.9 72.3-24.95L72.3-24.95 71.55-23.9 69.84-22.1 69.3-21.5Q69-21.15 68.75-20.78 68.5-20.4 68.2-20L68.2-20 67.2-19.05 66.9-18.4 66.45-18Q66.34-17.9 66.02-17.4 65.7-16.9 65.4-16.4 65.09-15.9 65.09-15.75L65.09-15.75Q64.7-15.5 64.55-15.05L64.55-15.05 64.3-15.05Q64.25-14.85 64.12-14.68 64-14.5 63.85-14.35L63.85-14.35 63.65-13.85 63.2-13.35 62.85-12.8Q62.75-12.65 62.67-12.48 62.6-12.3 62.5-12.15L62.5-12.15 62.25-11.85Q62.95-12.3 63.75-12.3L63.75-12.3Q64.25-12.3 64.5-12.1L64.5-12.1Q65.55-13.7 66.5-14.88 67.45-16.05 68.09-16.15L68.09-16.15Q68.4-16.2 68.62-16.55 68.84-16.9 69.27-17.2 69.7-17.5 70.55-17.4L70.55-17.4Q70.8-17.35 71.12-17.2 71.45-17.05 71.7-17.15L71.7-17.15Q71.8-17.2 71.9-17.2L71.9-17.2Q72.09-17.2 72.09-16.95 72.09-16.7 72.4-16.6L72.4-16.6Q72.8-16.5 73.12-16.3 73.45-16.1 73.5-15.85L73.5-15.85Q73.55-15.75 73.59-15.58 73.65-15.4 73.65-15.3L73.65-15.3Q73.65-15.05 73.45-15.05L73.45-15.05Q73.34-15.05 72.84-15.3L72.84-15.3Q72.8-15.35 72.65-15.35L72.65-15.35Q72.34-15.35 71.95-15.18 71.55-15 71.25-14.9L71.25-14.9Q70.95-14.8 70.7-14.48 70.45-14.15 70.15-14.05L70.15-14.05Q69.59-13.9 68.84-13.48 68.09-13.05 67.5-12.65 66.9-12.25 66.8-12.05L66.8-12.05Q66.59-11.8 66.2-11.68 65.8-11.55 65.3-11.25L65.3-11.25 64.9-10.75Q64.84-10.65 64.7-10.58 64.55-10.5 64.45-10.4L64.45-10.4Q64.4-10.3 64.4-10.15L64.4-10.15Q64.34-9.9 64.25-9.18 64.15-8.45 64-8.35L64-8.35Q64-8.9 63.97-8.55 63.95-8.2 63.95-7.45L63.95-7.45Q63.95-6.4 63.97-5.08 64-3.75 64.05-3.45L64.05-3.45Q64.09-2.7 64.07-2.13 64.05-1.55 64.09-0.9L64.09-0.9Q64.2-0.7 64.15-0.55 64.09-0.4 64.15-0.25L64.15-0.25 64.3 0.2Q64.34 0.35 64.4 0.8 64.45 1.25 64.34 1.3L64.34 1.3Q64.4 1.4 64.4 1.55L64.4 1.55Q64.4 1.75 64.3 1.85 64.2 1.95 64.3 2.1L64.3 2.1 64.8 2.35 64.55 2.7Q64.65 2.9 64.87 3.38 65.09 3.85 65 3.95L65 3.95Q65.15 4.15 65.2 4.35 65.25 4.55 65.3 4.8L65.3 4.8Q65.4 4.95 65.72 5.63 66.05 6.3 66.4 6.9 66.75 7.5 66.95 7.5L66.95 7.5Q67.34 7.55 67.47 6.98 67.59 6.4 67.65 6.15L67.65 6.15 67.75 5.8Q67.8 5.8 67.82 5.83 67.84 5.85 67.8 5.85L67.8 5.85Q67.8 5.95 67.77 6.38 67.75 6.8 67.8 6.85L67.8 6.85Q67.8 6.9 67.75 6.9 67.7 6.9 67.75 6.95L67.75 6.95ZM57.2-2.25L57.2-2.25 57.7-2.8 61.1-7.3 61.75-8.15Q61.7-8.95 61.75-9.6 61.8-10.25 62-11.45L62-11.45 61.55-10.85Q61.4-10.65 61.15-10.48 60.9-10.3 60.9-9.95L60.9-9.95Q60.85-9.85 60.77-9.47 60.7-9.1 60.6-9.1L60.6-9.1Q60.6-9.05 60.62-9 60.65-8.95 60.65-8.9L60.65-8.9Q60.65-8.5 60.3-8.33 59.95-8.15 59.8-7.8L59.8-7.8Q59.65-7.6 59.55-7.35 59.45-7.1 59.35-6.85L59.35-6.85 59.2-6.35 58.65-5.6 58.3-4.6Q58-4.1 57.6-3.5 57.2-2.9 57.2-2.25ZM68.44 2.35L68.44 2.35Q68.09 2.25 67.64 2.08 67.19 1.9 67.04 1.45L67.04 1.45Q66.99 1.35 66.99 1.05L66.99 1.05Q66.99 0.65 67.19 0.35 67.39 0.05 67.54-0.25L67.54-0.25Q68.04-1.1 68.62-1.9 69.19-2.7 69.79-3.5L69.79-3.5Q70.19-4.05 70.59-4.65 70.99-5.25 71.39-5.75L71.39-5.75Q71.39-5.75 71.54-5.95 71.69-6.15 72.34-6.9L72.34-6.9 72.29-6.9Q72.29-7.1 72.34-7.1L72.34-7.1Q72.49-7.25 72.49-7.5L72.49-7.5Q72.64-7.6 72.87-7.95 73.09-8.3 73.19-8.3L73.19-8.3 73.09-8.45Q73.39-8.7 73.69-9.22 73.99-9.75 74.19-10.1L74.19-10.1Q74.74-10.8 75.32-11.43 75.89-12.05 76.24-12.85L76.24-12.85 76.29-12.95 76.24-12.95Q76.04-12.8 75.74-12.8L75.74-12.8Q75.49-12.8 75.22-12.95 74.94-13.1 74.69-13.25L74.69-13.25 74.34-13.45Q74.09-13.15 73.79-12.88 73.49-12.6 73.19-12.25L73.19-12.25 70.39-9.05 69.29-7.9Q69.04-7.65 68.84-7.65L68.84-7.65Q68.64-7.65 68.64-7.8L68.64-7.8Q68.64-8 69.04-8.4L69.04-8.4Q69.59-8.95 70.14-9.47 70.69-10 71.19-10.55L71.19-10.55Q71.59-11.05 71.99-11.53 72.39-12 72.74-12.5L72.74-12.5Q73.04-12.9 73.39-13.28 73.74-13.65 73.94-14.1L73.94-14.1 73.94-14.15Q73.94-14.25 73.87-14.38 73.79-14.5 73.79-14.65L73.79-14.65Q73.79-14.95 73.89-15.33 73.99-15.7 74.09-15.95L74.09-15.95Q74.64-17 75.42-17.9 76.19-18.8 76.99-19.7L76.99-19.7Q77.29-20.05 77.64-20.4 77.99-20.75 78.34-21L78.34-21 78.99-21.45 79.49-21.7Q79.84-21.65 80.47-21.2 81.09-20.75 80.99-20.35L80.99-20.35Q80.99-20.1 80.52-19.63 80.04-19.15 79.84-18.9L79.84-18.9 79.09-18 78.69-17.7 78.09-17.05Q77.94-16.85 77.77-16.7 77.59-16.55 77.44-16.4L77.44-16.4Q77.34-16.2 77.14-16.2L77.14-16.2Q76.94-15.85 76.22-15.38 75.49-14.9 75.49-14.5L75.49-14.5Q75.44-14.45 75.29-14.05 75.14-13.65 75.49-13.65L75.49-13.65 75.49-13.7 75.54-13.7Q75.64-13.7 75.99-13.83 76.34-13.95 76.34-14L76.34-14 76.49-14Q76.64-14.15 76.82-14.2 76.99-14.25 77.14-14.3L77.14-14.3Q77.34-14.4 77.47-14.5 77.59-14.6 77.79-14.65L77.79-14.65Q77.94-14.7 78.24-14.7L78.24-14.7Q78.84-14.7 79.37-14.33 79.89-13.95 80.14-13.45L80.14-13.45 80.19-13.35Q80.19-13.2 80.04-13.1L80.04-13.1 79.39-12.75 78.99-12.45 78.69-12.35 77.99-11.7 77.94-11.65Q77.79-11.65 77.79-11.55L77.79-11.55Q77.59-11.25 77.39-11.25L77.39-11.25 77.34-11.25 77.34-11Q77.29-10.95 77.19-10.83 77.09-10.7 76.99-10.7L76.99-10.7Q76.84-10.7 76.84-10.65L76.84-10.65 76.79-10.65 76.84-10.5Q76.49-10.4 76.29-10.2L76.29-10.2Q76.14-10.05 76.09-9.9 76.04-9.75 75.94-9.65L75.94-9.65Q75.79-9.45 75.44-9.1 75.09-8.75 75.04-8.55L75.04-8.55Q75.04-8.5 74.99-8.5L74.99-8.5 74.99-8.45 74.64-8.25Q74.64-8.05 74.29-7.68 73.94-7.3 73.62-6.98 73.29-6.65 73.29-6.5L73.29-6.5 73.34-6.35 73.29-6.35Q73.09-6.2 72.69-5.7 72.29-5.2 72.29-4.95L72.29-4.95 72.24-4.95Q72.24-4.95 72.07-4.88 71.89-4.8 71.64-4.2L71.64-4.2Q71.49-4.1 71.07-3.55 70.64-3 70.64-2.8L70.64-2.8Q70.64-2.75 70.59-2.75L70.59-2.75Q70.34-2.4 70.12-1.75 69.89-1.1 70.09-1.1L70.09-1.1Q70.94-1.65 71.79-2.4L71.79-2.4Q72.49-3.1 73.27-3.8 74.04-4.5 74.74-5.2L74.74-5.2Q75.24-5.75 75.82-6.38 76.39-7 76.89-7.5L76.89-7.5 77.84-8.4Q77.99-8.55 78.04-8.55L78.04-8.55Q78.14-8.55 77.89-8.15 77.64-7.75 77.54-7.65L77.54-7.65Q77.19-7.3 76.87-6.83 76.54-6.35 76.29-6.1L76.29-6.1Q75.84-5.65 75.47-5.13 75.09-4.6 74.64-4.15L74.64-4.15Q74.49-3.95 74.29-3.8 74.09-3.65 73.89-3.45L73.89-3.45Q73.54-3.1 73.22-2.63 72.89-2.15 72.59-1.75L72.59-1.75Q72.49-1.6 72.24-1.28 71.99-0.95 71.99-0.8L71.99-0.8 71.94-0.75 71.39 0Q71.19 0.25 71.07 0.23 70.94 0.2 70.79 0.45L70.79 0.45 70.54 0.7Q69.94 1.75 68.89 2.2L68.89 2.2Q68.84 2.2 68.64 2.23 68.44 2.25 68.44 2.35ZM78.24-8.5L78.24-8.5Q78.09-8.5 78.09-8.7L78.09-8.7Q78.09-8.9 78.24-8.9L78.24-8.9Q78.29-8.9 78.42-8.97 78.54-9.05 78.59-9.05L78.59-9.05Q78.64-9.05 78.64-9L78.64-9Q78.64-8.9 78.47-8.7 78.29-8.5 78.24-8.5ZM90.04-17.5L90.04-17.5Q90.04-17.5 89.49-17.6 88.94-17.7 88.34-18.05L88.34-18.05Q88.19-18.2 87.87-18.4 87.54-18.6 87.74-18.85L87.74-18.85Q87.84-19 87.99-19L87.99-19Q88.14-19.2 88.32-19.35 88.49-19.5 88.59-19.7L88.59-19.7Q89.54-20.9 90.62-21.93 91.69-22.95 92.84-23.9L92.84-23.9Q93.24-24.25 93.59-24.6 93.94-24.95 94.39-25.15L94.39-25.15Q94.94-25.4 95.09-25.25 95.24-25.1 95.24-25.1L95.24-25.1Q95.24-25.05 95.19-25.05L95.19-25.05Q95.09-24.75 94.99-24.55L94.99-24.55Q94.79-24.3 94.49-24.08 94.19-23.85 94.09-23.55L94.09-23.55Q94.09-23.4 94.04-23.4L94.04-23.4Q93.84-23.2 93.32-22.7 92.79-22.2 92.79-21.95L92.79-21.95Q92.64-21.95 92.64-21.9L92.64-21.9 92.59-21.9Q92.54-21.55 92.29-21.35 92.04-21.15 91.79-20.9L91.79-20.9Q91.59-20.7 91.49-20.43 91.39-20.15 91.24-19.9L91.24-19.9Q91.09-19.7 90.92-19.58 90.74-19.45 90.64-19.25L90.64-19.25Q90.44-18.9 90.54-18.48 90.64-18.05 90.54-17.65L90.54-17.65Q90.49-17.5 90.27-17.48 90.04-17.45 90.04-17.5ZM76.59 1.05L76.59 1.05Q75.29 0.55 75.44-0.95L75.44-0.95 75.64-1.35Q75.89-1.75 76.04-2.15 76.19-2.55 76.39-2.9L76.39-2.9Q77.44-4.7 78.52-6.48 79.59-8.25 80.79-9.95L80.79-9.95Q80.84-10 80.87-10.08 80.89-10.15 80.94-10.15L80.94-10.15 80.94-10.25Q81.19-10.45 81.64-11.13 82.09-11.8 82.62-12.58 83.14-13.35 83.49-13.75L83.49-13.75Q83.14-13.5 82.77-13.2 82.39-12.9 82.09-12.5L82.09-12.5Q81.94-12.3 81.37-11.68 80.79-11.05 80.09-10.28 79.39-9.5 78.84-8.88 78.29-8.25 78.14-8.05L78.14-8.05Q77.54-7.4 77.29-7.4L77.29-7.4Q77.19-7.4 77.19-7.5L77.19-7.5Q77.19-7.7 77.54-8.15L77.54-8.15 79.14-9.95Q79.49-10.35 79.82-10.68 80.14-11 80.44-11.35L80.44-11.35Q80.69-11.6 80.92-11.9 81.14-12.2 81.39-12.45L81.39-12.45 82.19-13.3Q82.44-13.55 82.67-13.88 82.89-14.2 83.14-14.45L83.14-14.45Q84.64-16 85.24-16.4 85.84-16.8 86.19-16.55L86.19-16.55Q86.29-16.65 86.44-16.65L86.44-16.65Q86.59-16.65 86.74-16.57 86.89-16.5 86.99-16.45L86.99-16.45Q87.19-16.35 87.59-16.07 87.99-15.8 88.24-15.48 88.49-15.15 88.19-14.85L88.19-14.85Q87.89-14.5 87.49-14.35 87.09-14.2 86.74-13.85L86.74-13.85Q86.49-13.65 86.22-13.4 85.94-13.15 85.79-12.85L85.79-12.85 85.74-12.8Q85.79-12.25 85.04-11.68 84.29-11.1 83.89-10.7L83.89-10.7Q83.74-10.55 83.64-10.2L83.64-10.2 83.59-10.2 83.34-10.15Q83.24-9.8 82.92-9.58 82.59-9.35 82.59-8.95L82.59-8.95Q82.29-8.85 82.07-8.3 81.84-7.75 81.59-7.75L81.59-7.75 81.59-7.6Q81.59-7.35 81.29-7.03 80.99-6.7 80.79-6.7L80.79-6.7Q80.79-6.65 80.79-6.55 80.79-6.45 80.74-6.45L80.74-6.45Q80.54-6.3 80.54-5.9L80.54-5.9 80.39-5.9 80.39-5.85 80.49-5.6 80.19-5.55Q80.14-5.35 79.84-4.88 79.54-4.4 79.29-4.4L79.29-4.4 79.29-4.35 79.24-4.35 79.49-4.1 79.44-4.1 79.44-4.05 79.39-4.05Q79.19-4.15 79.09-4.15L79.09-4.15 79.09-4.1Q79.19-3.9 79.19-3.8L79.19-3.8Q79.19-3.5 78.84-3.5L78.84-3.5Q78.84-3.45 78.84-3.45L78.84-3.45 78.94-3.35 78.94-3.3Q78.59-3.25 78.59-2.75L78.59-2.75 78.49-2.75 78.39-2.8Q78.29-2.45 78.17-2.08 78.04-1.7 77.89-1.35L77.89-1.35Q77.84-1.1 77.72-0.88 77.59-0.65 77.59-0.35L77.59-0.35 77.64-0.35 77.64-0.4Q78.19-0.8 78.94-1.23 79.69-1.65 80.19-2.15L80.19-2.15 84.09-5.85 85.59-7.3Q85.69-7.4 85.99-7.65 86.29-7.9 86.49-8L86.49-8Q86.59-8.05 86.79-7.98 86.99-7.9 86.89-7.8L86.89-7.8 85.49-6.6Q84.84-6.1 84.59-5.6 84.34-5.1 83.69-4.55L83.69-4.55Q83.24-4.15 82.84-3.7 82.44-3.25 81.99-2.85L81.99-2.85 80.64-1.65Q80.19-1.25 79.77-0.75 79.34-0.25 78.84 0.15L78.84 0.15 78.19 0.7Q77.99 0.85 77.67 1 77.34 1.15 77.04 1.15L77.04 1.15Q76.89 1.15 76.59 1.05ZM87.09-8.2L87.09-8.2Q86.99-8.2 86.99-8.4L86.99-8.4Q86.99-8.6 87.09-8.6L87.09-8.6Q87.19-8.6 87.32-8.68 87.44-8.75 87.49-8.75L87.49-8.75Q87.54-8.75 87.54-8.7L87.54-8.7Q87.54-8.6 87.37-8.4 87.19-8.2 87.09-8.2Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#bb84e8" class="wordmark-text-0" data-fill-palette-color="primary" id="text-0"></path></svg></g></svg></g></svg></g></svg></g></svg></g><defs></defs></svg><rect width="395.52" height="168.57538625466168" fill="none" stroke="none" visibility="hidden"></rect></g></svg></g></svg>
        </div>
      </div>
      <div className="flex justify-between w-[70%] mr-[5%]">
        {navbarList.map((item) => renderNavbarItem(item))}
        <div
          onClick={() => handleTabClick("Profile")}
          onKeyDown={(e) => handleKeyPress(e, "Profile")}
          className="flex items-center cursor-pointer focus:outline-none"
          tabIndex={0}
        >
          <CgProfile />
        </div>
      </div>
    </div>
  );
}
