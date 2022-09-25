# Tract-Viewer
Using Flask powered Back-End  to access GEO packages and display results on a React powered Front-End taking advantage of Material UI for a minimalistic design..

**To Run Back end:**
- cd backend
- python3 -m venv .venv
- source  .venv/bin/activate
- pip install -r requirements.txt
- flask run --no-debugger
- You should have you back end running on port 5000 now.

**To Run Front end:**
- cd frontend/tract-viewer
- npm install
- npm start
- You should have your front end running on port 3000 now

This runs the app in the development mode. 

**NOTE:** 
You might have to run both the front-end/back-end on a different ports so on the prompt select y/yes and and Open follow the link to view it in your browser.

If you have set your back end to run on another port please make sure to update the proxy port in your package.json file ./Tract-Viewer/frontend/tract-viewer/package.json

Working application would look like this on your browser:
<img width="1450" alt="Screen Shot 2022-09-24 at 3 26 55 PM" src="https://user-images.githubusercontent.com/23152855/192115216-64d52a83-c763-44ce-b4c2-6968ee31836d.png">

**Potential Improvements**
- Pagination on Back End to lighten the weight of the response
- Adding Pagination on the Front end 
- Adding a Search functionality so users with details like geoid, tract number or name can find them much quickly
