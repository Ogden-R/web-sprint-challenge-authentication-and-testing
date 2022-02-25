# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [x] Run `npm install` to install your dependencies.
- [x] Build your database executing `npm run migrate`.
- [x] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [x] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [x] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [x] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [x] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [x] Check Codegrade before the deadline to compare its results against your local tests.
- [x] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [x] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
    -   sessions are stored server-side and tokens are stored client-side. and tokens are better at handling a large number of clients at a time than sessions.

2. What does `bcryptjs` do to help us store passwords in a secure manner?
    -   bcrypt uses hashing to encode/encrypt confidential information, such as your password.it makes it nearly impossible to hack into, as you need not onl the hash, but also a 'secret' string held by the server.

3. How are unit tests different from integration and end-to-end testing?
    -   unit tests focus on single sections of code, like functions, while integration tests test how multiple sections of code interact with each other, or integrate. end to end testing goes through the motions of the UI as if it were actually happening. it tests fron start to finish the path the the user might take to ensure that there are no breaks or errors in the code.

4. How does _Test Driven Development_ change the way we write applications and tests?
    -   TDD makes it so that you only need to refactor code as needed AFTER you first have created the test, then written the code. it makes it so you dont have to keep going back and forth between everything to make them all match.
