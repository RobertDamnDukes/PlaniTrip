import { useState } from "react";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartPlanning from "./startplanning/page"
import GetLogin from "./login/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jet Setter",
  description: "Save time planning so you have more time relaxing.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <input type="checkbox" id="sidebar-active"></input>
          <label htmlFor="sidebar-active" className="open-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" /></svg>
            </label>
            <a>Logo</a>
            <a className="active-link">Planning</a>
            <a>Flights</a>
            <a className="home-link">About</a>
            <svg className="settings-btn marginToRight" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e8eaed">
              <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 ```html 99t99.5 41Zm-2-140Z"></path>
            </svg>
            <button className="sign-up-button">
              Sign up
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </div>
        </nav>
        <StartPlanning />
        <footer className="footer-twotier" role="contentinfo">
          <div className="footer-twotier__top">
            <div className="footer-twotier__top-container">
              <div className="footer-twotier__brand">
                <svg className="logo" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" aria-labelledby="logoTitleTiered">
                  <title id="logoTitleTiered">Your Brand Logo</title>
                  <text x="0" y="25" font-family="Arial, sans-serif" font-size="28" font-weight="bold">BRAND</text>
                </svg>
                <p>A professional footer for websites that mean business. Organize your links and present a polished image.</p>
              </div>
              <div className="footer-twotier__links">
                <h3 className="footer-twotier__heading">Products</h3>
                <ul>
                  <li><a href="#">Web Templates</a></li>
                  <li><a href="#">Code Snippets</a></li>
                  <li><a href="#">UI Kits</a></li>
                  <li><a href="#">Design Assets</a></li>
                </ul>
              </div>
              <div className="footer-twotier__links">
                <h3 className="footer-twotier__heading">Company</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-twotier__bottom">
            <div className="footer-twotier__bottom-container">
              <p className="footer-twotier__copyright">
                &copy; 2025 Jet Setter. All rights reserved.
              </p>
              <div className="footer-twotier__social" aria-label="Social Media">
                <ul>
                  <li><a href="#" aria-label="Our Twitter Profile"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></a></li>
                  <li><a href="#" aria-label="Our GitHub Profile"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
