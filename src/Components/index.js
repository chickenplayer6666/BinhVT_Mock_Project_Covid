import AuthRoute from "./GuardRouters/AuthRoute/AuthRoute";
import PrivateRoute from "./GuardRouters/PrivateRoute/PrivateRoute";

import ArticleNews from "./Layout/News/Article/ArticleNews";
import Countries from "./Layout/Countries/Countries";
import DetailCountry from "./Layout/DetailCountry/DetailCountry"
import Header from './Layout/Header/Header';
import MainLayout from "./Layout/MainLayout/MainLayout";
import Navbar from "./Layout/Navbar/Navbar";
import News from "./Layout/News/News";
import Overview from "./Layout/Overview/Overview";
import SearchCountry from "./Layout/SearchCountry/SearchCountry";
import Sidebar from "./Layout/Sidebar/Sidebar";
import StatisticalChart from "./Layout/StatisticalChart/StatisticalChart";
import StatisticsCard from "./Layout/StatisticsCard/StatisticsCard";
import SubNavbar from "./Layout/Navbar/SubNavbar/SubNavbar";
import WorldMap from "./Layout/WorldMap/WorldMap"

import Error from "./Share/Error/Error"
import Loading from "./Share/Loading/Loading"
import Login from "./Share/Login/Login";
import NotFound from "./Share/NotFound/NotFound";
import Register from "./Share/Register/Register";

export {
  AuthRoute,
  PrivateRoute,
  ArticleNews,
  Countries,
  DetailCountry,
  Header,
  MainLayout,
  Navbar,
  News,
  Overview,
  SearchCountry,
  SubNavbar,
  Sidebar,
  StatisticalChart,
  StatisticsCard,
  WorldMap,
  Error,
  Loading,
  Login,
  NotFound,
  Register
};