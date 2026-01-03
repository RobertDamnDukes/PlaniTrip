import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function startPlanning() {

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