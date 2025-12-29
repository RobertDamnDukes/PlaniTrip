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
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]); // I think this sets the variables to hold the value of a table row

  function listTodos() { // this is how we pull from our tables. pulls from Todo with the observe query, then subscribes to that table subset
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {  // calls for the dialoge that gets a user input and sends it to the Todo table
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <div className="fullWindow">  
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
          <a className="active-link">Flights</a>
          <a>Travel </a>
          <a className="home-link">About</a>
          <a><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="m382-80-18.67-126.67q-17-6.33-34.83-16.66-17.83-10.34-32.17-21.67L178-192.33 79.33-365l106.34-78.67q-1.67-8.33-2-18.16-.34-9.84-.34-18.17 0-8.33.34-18.17.33-9.83 2-18.16L79.33-595 178-767.67 296.33-715q14.34-11.33 32.34-21.67 18-10.33 34.66-16L382-880h196l18.67 126.67q17 6.33 35.16 16.33 18.17 10 31.84 22L782-767.67 880.67-595l-106.34 77.33q1.67 9 2 18.84.34 9.83.34 18.83 0 9-.34 18.5Q776-452 774-443l106.33 78-98.66 172.67-118-52.67q-14.34 11.33-32 22-17.67 10.67-35 16.33L578-80H382Zm55.33-66.67h85l14-110q32.34-8 60.84-24.5T649-321l103.67 44.33 39.66-70.66L701-415q4.33-16 6.67-32.17Q710-463.33 710-480q0-16.67-2-32.83-2-16.17-7-32.17l91.33-67.67-39.66-70.66L649-638.67q-22.67-25-50.83-41.83-28.17-16.83-61.84-22.83l-13.66-110h-85l-14 110q-33 7.33-61.5 23.83T311-639l-103.67-44.33-39.66 70.66L259-545.33Q254.67-529 252.33-513 250-497 250-480q0 16.67 2.33 32.67 2.34 16 6.67 32.33l-91.33 67.67 39.66 70.66L311-321.33q23.33 23.66 51.83 40.16 28.5 16.5 60.84 24.5l13.66 110Zm43.34-200q55.33 0 94.33-39T614-480q0-55.33-39-94.33t-94.33-39q-55.67 0-94.5 39-38.84 39-38.84 94.33t38.84 94.33q38.83 39 94.5 39ZM480-480Z" /></svg></a>
          <a>Login</a>
        </div>
      </nav>
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