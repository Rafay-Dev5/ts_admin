import { Outlet, useLocation } from "react-router-dom";
import { Grid, Link, Typography, useTheme } from "@mui/material";
import {
  Storefront,
  CardGiftcard,
  StackedBarChart,
  Feedback,
} from "@mui/icons-material";
import NotificationBarDX from "../components/notificationbardx";
import ToolbarDX from "../components/toolbardx";
import { useEffect, useState } from "react";
import { Pathname, PageTitles } from "../@types/pagetitles";

const AdminTemplate = () => {
  const theme = useTheme();
  const location = useLocation();

  const pageTitles = new Map([
    ["", "Dashboard"],
    ["merchantlist", "Merchants"],
    ["managemerchant", "Merchant Details"],
  ]);
  // {
  //   ["", "Dashboard"]
  //   ["merchantlist", "Merchants"],
  //   ["managemerchant", "Merchant Details",
  //   merchantbranch: "Merchant Branches",
  //   managemerchantbranch: "Merchant Branch Details",
  //   couponlist: "Coupons",
  //   managecoupon: "Coupon Details",
  //   feedbacklist: "Feedbacks",
  //   managefeedback: "Feedback Details",
  //   managequestion: "Feedback Question Details",
  //   feedbackquestion: "Feedback Questions",
  //   managefeedbackquestion: "Feedback Question Details",
  //   feedbacklocation: "",
  //   managefeedbacklocation: "Feedback Locations",
  // };

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const pathname = location.pathname.substring(1);
    console.log(pathname);
    setPageTitle(pageTitles.get(pathname) as string);
  }, [location]);

  return (
    <Grid container style={{ height: "100vh" }}>
      <NotificationBarDX />
      <Grid
        item
        style={{
          width: 100,
          backgroundColor: "purple",
          padding: 5,
          paddingTop: 16,
          color: "white",
          textAlign: "center",
        }}
      >
        <Link href="/" color="inherit">
          <StackedBarChart fontSize="large" />
          <Typography>Dashboard</Typography>
        </Link>
        <br />
        <Link href="/merchantlist" color="inherit">
          <Storefront fontSize="large" />
          <Typography>Merchants</Typography>
        </Link>
        <br />
        <Link href="/couponlist" color="inherit">
          <CardGiftcard fontSize="large" />
          <Typography>Coupons</Typography>
        </Link>
        <br />
        <Link href="/feedbacklist" color="inherit">
          <Feedback fontSize="large" />
          <Typography>Feedbacks</Typography>
        </Link>
      </Grid>
      <Grid item style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ToolbarDX />
        <div style={{ padding: 16 }}>
          <h1 style={{ color: "purple" }}>{pageTitle}</h1>
          <Outlet />
        </div>
      </Grid>
    </Grid>
  );
};

export default AdminTemplate;
