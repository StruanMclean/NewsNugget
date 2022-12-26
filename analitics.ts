import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import DEV from "./package.json"

const firebaseConfig = {
  apiKey: "AIzaSyDqb6rprJXWE4_gz-xngO5tgrDQcqIktYo",
  authDomain: "newsnugget.firebaseapp.com",
  projectId: "newsnugget",
  storageBucket: "newsnugget.appspot.com",
  messagingSenderId: "1029219404045",
  appId: "1:1029219404045:web:4dc7811fb4d4fa15670844",
  measurementId: "G-BWSZ9JY387"
};

export function home_page_view() {
  if (!DEV["DEV"]) {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    logEvent(analytics, "page_view", {page_title: "home"})    
  }
}

export function topic_view(topic: string) {
  if (!DEV["DEV"]) {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    logEvent(analytics, "page_view", {page_title: topic})
  }
}

export function article_view(article: string) {
  if (!DEV["DEV"]) {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)

    logEvent(analytics, "page_view", {page_title: article})
  }
}