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

  function handleLogoClick() {
    setLogoClickCount((prev) => {
      const newCount = prev + 1;
      console.log("Logo clicked:", newCount);
      return newCount;
    });
  }

  return (
    <div className="fullWindow">
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