import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./getUserCredientials.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function GetLogin() {

    return (
        <div className="fullWindow">
            <div class="wrapper">
                <div class="card-switch">
                    <label class="switch">
                        <input type="checkbox" class="toggle"></input>
                        <span class="slider"></span>
                        <span class="card-side"></span>
                        <div class="flip-card__inner">
                            <div class="flip-card__front">
                                <div class="title">Log in</div>
                                <form class="flip-card__form" action="">
                                    <input class="flip-card__input" name="email" placeholder="Email" type="email"></input>
                                    <input class="flip-card__input" name="password" placeholder="Password" type="password"></input>
                                    <button class="flip-card__btn">Let`s go!</button>
                                </form>
                            </div>
                            <div class="flip-card__back">
                                <div class="title">Sign up</div>
                                <form class="flip-card__form" action="">
                                    <input class="flip-card__input" placeholder="Name" type="name"></input>
                                    <input class="flip-card__input" name="email" placeholder="Email" type="email"></input>
                                    <input class="flip-card__input" name="password" placeholder="Password" type="password"></input>
                                    <button class="flip-card__btn">Confirm!</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}