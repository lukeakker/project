"use client"; // Add this if you use hooks like useState or useEffect

import axios from "axios";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        {/* Basic meta information */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>pomato</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        {/* External stylesheets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="icon" href="/images/fevicon.png" type="image/gif" />
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
      </Head>

      <div>
        <h1>Welcome to My App</h1>
        <ul>
          <li>
            <Link href="/admin/category">Manage Categories</Link>
          </li>
          <li>
            <Link href="/admin/product">Manage Products</Link>
          </li>
          <li>
            <Link href="/admin/inventory">Manage Inventory</Link>
          </li>
          <li>
            <Link href="/admin/customer">Manage Customers</Link>
          </li>
        </ul>
      </div>

      {/* Loader */}
      <div className="loader_bg">
        <div className="loader"><img src="/images/loading.gif" alt="Loading" /></div>
      </div>

      {/* Header */}
      <header>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.ejs"><img src="/images/logo.png" alt="Logo" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Brand</a></li>
                        <li><a href="#specials">Specials</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li className="last">
                          <a href="#"><img src="/images/search_icon.png" alt="Search Icon" /></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-6 offset-md-6">
                <div className="location_icon_bottum">
                  <ul>
                    <li><img src="/icon/call.png" alt="Call Icon" />(+1)732-843-0073</li>
                    <li><img src="/icon/email.png" alt="Email Icon" />mineshop@gmail.com</li>
                    <li><img src="/icon/loc.png" alt="Location Icon" />Plains</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The rest of the sections go here. */}
    </>
  );
};

export default Home;
