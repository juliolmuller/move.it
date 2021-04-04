<h1 title="Move.It" align="center">
  <img src=".github/icon.svg" width="24px" alt="Move.It" />
  Move.It
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=5965E0&label=created%20at&message=Mar%202021" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/move.it?label=updated%20at&labelColor=000000&color=5965E0" alt="Update Date" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=5965E0&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/move.it?labelColor=000000&color=5965E0" alt="Project License" />
</p>

<p align="center">
  <img src="./.github/moveit.svg" alt="Application Overview" width="100%">
</p>

Application developed during the fourth edition of [Next Level Week](https://nextlevelweek.com/), delivered by [RocketSeat](https://rocketseat.com.br/). The objective was to build a web application promote work breaks using [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique#:~:text=The%20Pomodoro%20Technique%20is%20a,length%2C%20separated%20by%20short%20breaks.). The project sought to implement the idea using **React.js** and **Next.js**, without a robust backend for that.

[Check out the application running!](https://moveit-app-nlw.vercel.app/)

## :trophy: Lessons Learned

- Building a *React* application on top of Vercel's amazing framework *Next*;
- Using TypeScript in a *React*/*Next* app to make development easier;
- Using *React Context API* for shared state management;
- Easy SSR (*Server-Side Rendering*) with *Next* page routing;
- Exchanging data with backend using *cookies*;
- Deploying a *Next* application in Vercel cloud platform;

## :rocket: Technologies & Resources

**Frontend/Backend:**
- [React.js](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [JS Cookies](https://github.com/js-cookie/js-cookie)

**Development:**
- TypeScript
- [Visual Studio Code](https://code.visualstudio.com/)
- Node.js routines with NPM

## :hammer: Setting up the Environment

Make sure to have **Node.js 14+** installed in your machine and its `node` and `npm` shortcuts available through the command line, then use the following routines to run each part of the project:

```bash
$ npm install     # install required dependencies
$ npm run dev     # install development server
$ npm run build   # build production version
$ npm start       # run node server with built files
```

## :zap: Features Implementations

The main idea of the project was developed during the week of the event and the result is the one found in [release v1.0](https://github.com/juliolmuller/move.it/releases/tag/v1.0). Afterwards, any incoming commits are intended to be incremental updates to improve the application, as proposed at the end of the event.

Besides, both v1.0 and v2.0 have their layouts available at **[Figma](http://figma.com/)**.

- [Version 1.0](https://www.figma.com/file/64gZyPvtUXACuDhkZMjUiV/Move.it-1.0)
  - [x] Create project using `create-next-app` using TypeScript;
  - [x] Understand *Next* key functionalities and folders structure;
  - [x] Define custom fonts based on *Figma* project;
  - [x] Define base HTML file and meta tags;
  - [x] Create key *React* components;
  - [x] Make use of *Next* component-level CSS modules;
  - [x] Create *React Context* to deal with challenges, experience and level;
  - [x] Create *React Context* to deal with count down;
  - [x] Configure relative data persistance using *cookies*;
  - [x] Configure browser *notification API* to display a message when count down finishes;
  - [x] Add ring tone when notification is displayed;
  - [x] Deploy application to Vercel's server;

- [Version 2.0](https://www.figma.com/file/xJprnDedmSVr46Lj4NmB5w/Move.it-2.0)
  - [ ] Add authentication and profile system;
  - [ ] Add animations and transitions;
  - [ ] Create page to rank users;
  - [ ] Make application responsive;
  - [ ] Convert application to be a PWA;

---

Also checkout the project developed in [NLW #2](https://github.com/juliolmuller/proffy) and [NLW #3](https://github.com/juliolmuller/happy)
