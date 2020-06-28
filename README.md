
## Instructions

Start by accessing the directory `kasa-reservation` from the terminal, then run `npm install` to make sure server-side dependencies are loaded. Then navigate into the directory `client`, and run `npm install` once more to do the same for client-side dependencies.

After npm finishes installing, navigate into the `server` directory, and then run the command `node server.js` to start up the Express server. If all is running as expected, you should see the message 'Connected to Port 5000' at http://localhost:5000 in your web browser.

Lastly, cd into `client` and run the following:

`npm run build` then `npm run start` to run the app in production mode. Prod mode will allow for offline support. Othewise, to run the app in dev mode, run `npm run dev`. Head over to http://localhost:3000 to start browsing the app.

## Notes

For this project, it requires data to be loaded from the server when the user is online, but to load cached data when offline. Given that the data is reservation details - which is unlikely to change unless the user actively makes a change to the reservation - there are other approaches to consider. 

I would consider using the Stale-While-Revalidate approach to caching reservation details in the reservation page, and maybe set a cache expiration age. A lot of times users will look up their reservation details to only view it and not make any changes, so this will cut down on some data loading expenses. When a user does make a change, then we could also clear related cached data.

--

Given more time, here are a few things that I would implement:

- A more responsive UI (ie. breakpoints for phones/tablets)
- Loading state
- More robust error handling
- Maintain some state when navigating between pages (ie. search results)

## Comments/Feedback

This was my first time working with the VueJS/NuxtJS framework, so I'd love to hear any comments and feedback regarding best practices or if there's any areas of improvement I can work on. Otherwise, it was really fun learning this new framework :)
