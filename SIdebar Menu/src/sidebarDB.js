import React from "react";
import {
  GrHomeRounded,
  GrArticle,
  GrShop,
  GrContactInfo,
  GrCube,
  GrUserNew,
  GrLinkedinOption,
  GrTwitter,
  GrInstagram,
  GrFacebook,
  GrGithub
} from "react-icons/gr";

export const links = [
  {
    url: "/",
    title: "Home",
    icon: <GrHomeRounded />
  },
  {
    url: "/blogs",
    title: "Blogs",
    icon: <GrArticle />
  },
  {
    url: "/shop",
    title: "Shop",
    icon: <GrShop />
  },
  {
    url: "/about",
    title: "About",
    icon: <GrUserNew />
  },
  {
    url: "/contact",
    title: "Contact",
    icon: <GrContactInfo />
  },
  {
    url: "/projects",
    title: "Projects",
    icon: <GrCube />
  }
];

export const socials = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <GrLinkedinOption />
  },
  {
    title: "Twitter",
    url: "https://www.twitter.com",
    icon: <GrTwitter />
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com",
    icon: <GrInstagram />
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com",
    icon: <GrFacebook />
  },
  {
    title: "GitHub",
    url: "https://www.github.com",
    icon: <GrGithub />
  }
];
