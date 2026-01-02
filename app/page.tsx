"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [logoClickCount, setLogoClickCount] = useState(0);

  return (
    <div className="fullWindow">
      <div className="planning-section">
        <div className="location-inputs">
          <h1 className="location-search-header">Discover your next adventure</h1>
          <p>Explore flights, hotels, and car rentals all in one place.</p>
          <input className="location-entry-field" />
          <div className="datePicker-container">
            <div>
              <input type="text" id="arrivalDate" className="dateInput" placeholder="Start:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMYYYY" />
            </div>
            <span className="directional-icon">&#8594;</span>
            <div>
              <input type="text" id="departureDate" className="dateInput" placeholder="End:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMYYYY" />
            </div>
          </div>
          <button className="sign-up-button search-locations-go">
            Start Planning
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="locations-carousel">
        <div className="group">
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="group">
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <div className="location-card-back-image">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2019/09/featured_122.jpg" alt="Image of Swiss Alps" className="location-card-image-overlay" />
                    <div className=".location-card-text">
                      <strong className="location-card-text">Swiss Alps</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">Switzerland</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>Zermatt</strong>
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                    <p className="card-footer">
                      Mountain Views &nbsp; | &nbsp; Skiing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}


/* <main>
        <h1>My todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
        <div>
          🥳 App successfully hosted. Try creating a new todo.
          <br />
        </div>
      </main> */