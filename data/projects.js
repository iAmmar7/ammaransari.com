const projects = [
  {
    id: 'paint-app-realtime',
    name: 'Paint App',
    summary: '💥 An effortless real-time paint application 💥',
    features: [
      '<p>Real-time drawing interaction with all the connected users 🌈</p>',
      '<p>NodeJS <strong>cluster mode</strong> with <strong>Redis</strong> and <strong>PM2</strong> integration 🛃</p>',
      '<p>Server deployment on <strong>Heroku</strong> 🔥</p>',
      '<p>Frontend deployment on <strong>Vercel</strong> 🔥</p>',
      '<p><strong>Automatic deployment</strong> on both platforms 🏃</p>',
      '<p>Text, Brush, Pen, and Rectangle draw ✏️ 🖌️ 🔡 🟥</p>',
      '<p>Color selection 🌈</p>',
      '<p>Increase or decrease the brush size 🖌️</p>',
      '<p>Increase or decrease the text size 🔡</p>',
      '<p>Custom hook to maintain <strong>history</strong> 💻</p>',
      '<p>Both <strong>Undo</strong> and <strong>Redo</strong> feature 🔄</p>',
      '<p><strong>Clear canvas</strong> and <strong>Download canvas</strong> image feature 🖼️</p>',
    ],
    domain: 'freelance',
    technologies: ['React JS', 'Canvas API', 'Node JS', 'Express JS', 'Socket IO', 'PM2', 'Heroku', 'Vercel'],
    thumbnail: '/images/projects/thumb-paint-app-realtime.png',
    code: 'https://github.com/iAmmar7/paint-app-realtime',
    url: 'https://paint-app-realtime.vercel.app',
  },
  {
    id: 'courierservice',
    name: 'Courier Service Management',
    summary: 'The Courier vendor management project for a specific client.',
    features: [
      '<p>Graphical view of over all companay stats using Recharts.</p>',
      '<p>Monitor rider and vendor activities via auto-generated stats.</p>',
      '<p>Add/Remove/Edit riders and vendors data.</p>',
      '<p>Tabular view of all the orders.</p>',
      '<p>Filters for each vendor and rider orders.</p>',
      '<p>Maintain three different status for each parcel.</p>',
      '<p>Tabular view filters according to the status of parcel and vendor and/or rider associated with that parcel.</p>',
      '<p>Monthly stats view with different filters.</p>',
      '<p>Performance measurement via top vendor and rider widget.</p>',
    ],
    domain: 'freelance',
    technologies: ['React JS', 'Redux JS', 'Material-UI', 'Bootstrap', 'Node JS', 'Express JS', 'MongoDB', 'Heroku'],
    thumbnail: '/images/projects/thumb-courierservice.png',
    code: 'https://github.com/iAmmar7/courierservice',
    url: 'https://agile-chamber-90213.herokuapp.com/',
  },
  {
    id: 'parking-app',
    name: 'Parking App',
    summary: 'Firebase cloud functions for a parking application',
    features: [
      '<p>Firebase functions</p>',
      '<p>Firebase triggers</p>',
      '<p>Firebase admin</p>',
      '<p>Firebase auth</p>',
      '<p>Firebase database</p>',
      '<p>Firebase user roles 🦹</p>',
    ],
    domain: 'freelance',
    technologies: ['Node JS', 'Firebase', 'Cloud Functions'],
    thumbnail: '/images/projects/thumb-parking-app.png',
    code: 'https://github.com/iAmmar7/parking-app',
    url: 'https://parking-app-f13ad.web.app',
  },
  {
    id: 'forecastware',
    name: 'ForecastWare',
    summary:
      '💥 Weather forecast cross-platform mobile application based on React Native with Expo Managed workflow 💥',
    features: [
      "<p>Device's <strong>current location</strong> 📌</p>",
      "<p>Location tracker using device's <strong>background location</strong> service 📌</p>",
      '<p>Temperature check on every 10000 meters location change 👾</p>',
      '<p><strong>Notification</strong> on temperature change 🌌</p>',
      '<p><strong>Background fetch</strong> job that runs after every 15 minutes to update the current location weather and display the notification ⏲️</p>',
      '<p><strong>Task manager</strong> to handle Background Fetch jobs 🥷</p>',
      '<p><strong>SQLite</strong> to store multiple locations data 🏪</p>',
      '<p>Mobile <strong>battery level monitor</strong>. The app will display a pop-up and close if the battery level goes down to 20% 🔋</p>',
      '<p><strong>Screenshot taker</strong> icon on different screens 📸</p>',
      '<p><strong>Weather map</strong> using Google Maps with different layouts for precipitation, clouds, pressure, temperature, and wind 🗺️</p>',
      "<p><strong>Barometer</strong> service to display the device's surrounding atmospheric pressure 🌡️</p>",
      '<p>In app web browser using expo-web for external links 🕸️</p>',
      '<p><strong>Sentry</strong> integration for crash report and performance monitoring 🔗</p>',
      '<p><strong>Snack</strong> integration for testing on different platforms 🔗</p>',
      '<p><strong>Search locations</strong> feature both for map and weather 🔍</p>',
      '<p>Combined <strong>custom theme</strong> using React Native Paper and React Native Navigation 🔥</p>',
      '<p><strong>Dark mode</strong> feature using Material Design practices 🔥</p>',
      '<p>The design of this app is inspired by <strong>Android Weather Application</strong> 📱</p>',
      "<p>Enabling the app theme color by user's mobile theme preference 🤳</p>",
      '<p>Store user preferences in <strong>AsyncStorage</strong> 🏬</p>',
      '<p>Temperature unit change feature; current support for Celsius, Fahrenheit, and Kelvin. 🔥</p>',
      '<p>Custom hooks 😻</p>',
      '<p>Custom lodash-like utility functions 😻</p>',
      '<p>Custom <strong>animation</strong> using Animatable library 😻</p>',
      '<p>Custom <strong>expo configuration</strong> for different platoforms 🔌</p>',
      '<p>For state management, this app is using <strong>React Context API</strong> 🧰</p>',
      '<p>The location data is being fetched from the <strong>Open Weather API</strong> 🧰</p>',
    ],
    domain: 'side project',
    technologies: [
      'React Native',
      'Expo',
      'Open Weather API',
      'Sentry',
      'React Navigation',
      'React Native Paper',
      'Context API',
      'Snack',
    ],
    thumbnail: '/images/projects/thumb-forecastware.jpeg',
    code: 'https://github.com/iAmmar7/forecastware',
    url: 'https://snack.expo.dev/@iammar7/forecastware_v44',
    apk: 'https://1drv.ms/u/s!Ajq4XZm81_iYgZcAtWMcejVA8hqjVQ?e=Jks2Ff',
  },
  {
    id: 'board-game',
    name: 'Board Game',
    summary: '💥 3 day challenge to build and deploy the board game. 💥',
    description:
      '<p>You’ve been selected as the new knight from King Arthur himself. Some bandits raided the local towns and stole some valuable items from the people. You need to collect those items and bring them back to the town folks. You will have to sneak into their base and collect all items without being detected, so stealth is your best friend.</p><br /><p>Rules:</p><br /><ol><li>Create a board of 20x20 cells.</li><li>The player will always spawn on (0,0) location of the board. (top left corner)</li><li>Enemies can spawn randomly on different locations of the board.</li><li>Items should also be spawn randomly on different locations of the board.</li><li>The player will move to the item location using keyboard (up,down,left,right) arrow keys.</li><li>You need to pick all items by moving to the cell block of the items.</li><li>Avoid touch enemies, because if you do, you’ll die immediately.</li><li>Complete the challenge in shortest amount of time.</li></ol><br /><p>Goal: Player needs to collect all items in shortest amount of time.</p>',
    domain: 'challenge',
    technologies: [
      'React JS',
      'Ant Design',
      'React Query',
      'Node JS',
      'Express JS',
      'MongooDB',
      'Mongoose ODM',
      'Firebase',
      'Heroku',
    ],
    thumbnail: '/images/projects/thumb-board-game.png',
    code: 'https://github.com/iAmmar7/board-game',
    url: 'https://board-game-175ec.web.app',
  },
  {
    id: 'firmfigure',
    name: 'FirmFigure',
    summary: 'An automated workflow for an audit firm',
    description:
      '<p>This application is for one of the <strong>audit firms</strong> based in <strong>KSA</strong>, which helps them to <strong>automate</strong> their daily routine tasks. It also allows the admin to see the progress of each team working inside the firm.</p>',
    features: [
      '<p>Five types of users; auditor, regional managers, area managers, moderators and an admin.</p>',
      '<p>Different authorization for different user roles using express middleware.</p>',
      '<p>Different user interface for each type of user according to his/her role.</p>',
      '<p>Graphical UI for the overall company stats with different filters.</p>',
      '<p>Initiate or fill issues form as an auditor.</p>',
      '<p>Feedback form for managers.</p>',
      '<p>Multiple image upload feature with image optimization on the server.</p>',
      '<p>Tabular view of all the issues/initiatives/feedback with all sorts of filters.</p>',
      '<p>Cron job to update the report status.</p>',
      '<p>Reminder view for station managers.</p>',
      '<p>Download each report into CSV format.</p>',
      '<p>Admin panel to add or remove different users.</p>',
      "<p>Monitor all users' recent activity as an admin.</p>",
    ],
    domain: 'freelance',
    technologies: ['React JS', 'Ant Design', 'Umi JS', 'Node JS', 'Express JS', 'MongoDB', 'Cron Job', 'DigitalOcean'],
    thumbnail: '/images/projects/thumb-firmfigure.png',
    code: 'https://github.com/iAmmar7/FirmFigure-FE',
    url: 'http://157.245.20.65:4000',
  },
  {
    id: 'park-cafe',
    name: 'Park Cafe',
    summary: 'Simple distribution app for Park Cafe',
    domain: 'freelance',
    technologies: ['React JS', 'React Query', 'Context API', 'Material UI', 'Firebase'],
    thumbnail: '/images/projects/thumb-park-cafe.png',
    code: 'https://github.com/iAmmar7/park-cafe',
    url: 'https://parkcafe.web.app',
  },
  {
    id: 'microfrontends-init',
    name: 'Microfrontends Init',
    summary: 'A Single-SPA based micro-frontends application developed with React, Angular, and Vue.',
    features: [
      '<p><strong>3 microfrontends</strong> running inside the root-config. 🔥</p>',
      '<p><strong>2 shared utility modules</strong> are used by all microfrontends. ⚓</p>',
      '<p>Navbar is built with <strong>VueJS</strong>. 🔥</p>',
      '<p>Auth module is built with <strong>React</strong>. ❤️</p>',
      '<p>Attendance module is built with <strong>Angular</strong>. ❤️‍🔥</p>',
      '<p>Home page is being rendered from the root-config. ⛓️</p>',
      '<p>Style guide shared module is built with <strong>Tailwind</strong>. 🔹</p>',
      '<p>API shared module is using Axios. 📲</p>',
      '<p>JSON server to perform authentication. 💥</p>',
    ],
    domain: 'side project',
    technologies: [
      'React JS',
      'Angular JS',
      'Vue JS',
      'Tailwind',
      'Microfrontends',
      'Single SPA',
      'Node JS',
      'JSON Server',
    ],
    thumbnail: '/images/projects/thumb-microfrontends-init.png',
    code: 'https://github.com/iAmmar7/microfrontends-init',
  },
  {
    id: 'vaccify',
    name: 'Vaccify',
    summary: 'An open-standard digital travel pass for COVID',
    contribution: 'Open source application where I contributed on the Frontend side with React and Reactstrap',
    technologies: ['React JS', 'Reactstrap', 'Blockchain'],
    domain: 'open-source',
    thumbnail: '/images/projects/thumb-vaccify.png',
    code: 'https://github.com/TrustNetPK',
    url: 'https://vaccify.pk',
  },
  {
    id: 'shoplaza',
    name: 'Shoplaza',
    summary: 'A basic view of multi vendor e-commerce mobile application 💥',
    features: [
      '<p>Authentication and Authorization with <strong>Firebase</strong> 🔥</p>',
      '<p><strong><CRUD</strong> operation for products 🛠️</p>',
      '<p><strong>AsyncStorage</strong> to store the auth token 🏪</p>',
      '<p>Add to cart and place order feature 🎁</p>',
      '<p>Admin view to add/modify/delete currently logged in user products 💯</p>',
      '<p><strong>Dark mode</strong> using <strong>React Context API</strong> 🔥</p>',
      '<p>This app is using the <strong>Open Sans</strong> font for all the text 🔠</p>',
      '<p>For state management, this app has been integrated with <strong>Redux</strong> using Redux Toolkit 🟣</p>',
    ],
    domain: 'side project',
    technologies: [
      'React Native',
      'Redux',
      'Context API',
      'Expo',
      'React Navigation',
      'Redux Toolkit',
      'Firebase',
      'Snack',
    ],
    thumbnail: '/images/projects/thumb-shoplaza.jpeg',
    code: 'https://github.com/iAmmar7/shoplaza',
    url: 'https://snack.expo.dev/@iammar7/shoplaza',
  },
  {
    id: 'redis-chat-challenge',
    name: 'Redis Chat Challenge',
    summary: 'A real-time chat application',
    description:
      '<p>Two day <a href="https://rb-hackfest.devpost.com">Hackathon</a> challenge to create a real-time chat application using Redis. 💥</p>',
    features: [
      '<p>Real-time chat with all the connected users 🌈</p>',
      '<p>NodeJS server with <strong>Redis</strong> and <strong>Socket IO</strong> integration 🛃</p>',
      '<p>Server deployment on <strong>Heroku</strong> 🔥</p>',
      '<p>Frontend deployment on <strong>Vercel</strong> 🔥</p>',
      '<p><strong>Automatic deployment</strong> on both platforms 🏃</p>',
      '<p>Create custom channel feature.</p>',
      '<p>Search in chat feature.</p>',
      '<p>Participant count feature.</p>',
    ],
    domain: 'challenge',
    technologies: ['Node JS', 'Express JS', 'Redis', 'Socket IO', 'React JS', 'Heroku', 'Vercel'],
    thumbnail: '/images/projects/thumb-redis-chat-challenge.png',
    code: 'https://github.com/iAmmar7/redis-chat-challenge',
    url: 'https://redis-chat-challenge-ll7n94qro-iammar7.vercel.app',
  },
  {
    id: 'Leaflet.DistortableImage',
    name: 'Leaflet.DistortableImage',
    summary: 'An open-source Leaflet extension to distort or "rubber sheet" images',
    contribution: 'Contributed as a JavaScript developer and fixed one of the issues related to the drag handler',
    domain: 'open-source',
    technologies: ['JavaScript', 'Leaflet'],
    thumbnail: '/images/projects/thumb-Leaflet.DistortableImage.png',
    code: 'https://github.com/publiclab/Leaflet.DistortableImage',
    url: 'https://publiclab.github.io/Leaflet.DistortableImage/examples/',
  },
  {
    id: 'stopwatch',
    name: 'Stopwatch',
    summary: 'A straightforward stopwatch application with laps history using Vanilla JS and Sass.',
    features: [
      '<p>Time laps</p>',
      '<p>Difference between the last time lapse.</p>',
      '<p>Built with pure JS and Sass.</p>',
      '<p>Responsive layout for mobile screen.</p>',
      '<p>LocalStorage usage to store the last timer and last history.</p>',
      '<p>Continue from the last time stored in LocalStorage.</p>',
    ],
    domain: 'side project',
    technologies: ['JavaScript', 'Sass', 'GithHub Page'],
    thumbnail: '/images/projects/thumb-stopwatch.png',
    code: 'https://github.com/iAmmar7/stopwatch',
    url: 'https://iammar7.github.io/stopwatch',
  },
];

export default projects;
