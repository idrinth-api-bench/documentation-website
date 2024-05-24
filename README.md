# @idrinth/api-bench/website

## Description

Website made using React to show the ideas behind the API benchmark implementation portraying the provided README.

## Installation

### Read before installing

You must have a github token set in your account in order to be able to contribute to this project. If you try to contribute without one, you won't be able to since the github api will limit your access.

### What are github tokens?

Github tokens are identifiers that you can set with specific rights(as in power of management) in your account. These tokens are required when contributing with open source so that you can be identified when making requests to the github API.

### How do I get a token?

1) Click your profile picture on the GitHub website after logging in.
2) In the menu that will appear, click on `settings`.
3) Now, on the Settings screen, scroll down to the very bottom of the page and click on `<>Developer settings`.
4) Once you're there, click on `Personal access tokens`.
5) Now, click on Tokens(classic) (or anything similar in case github updated since the time of this tutorial 5/19/2024).  
6) Now, click on `Generate new token`. 
7) Now, we're on the token creation process. Don't worry, nothing can go wrong here.  You can add a note to your token as a reminder to what it was created for, in case this token will be used in the future.
8) You can set an expiration time for your token for extra safety if you must, but that's up for personal preference.
9) Now, specifically for this repository, your token must have **only** two permissions:
- [X] public_repo
- [X] read:org
10) Now, click on `Generate token`.
11) We're almost there: you're now facing your token. Copy that, you'll need it in a second.
12) Now, either create or find a file called `.env`.
13) Inside that file, create or change the value of the variable `GITHUB_API_TOKEN` to the value of your token, like this:

```ini
GITHUB_API_TOKEN=gh_api_token_with_read_org_and_read_repo
```

14) Now you can install the dependencies by typing the installation command.

### Installation command

```bash
npm ci
```

## Running the app
If you encounter any problems with this, try checking the [Token tutorial](#how-do-i-get-a-token) right above this section.


```bash
# development watch mode
npm run dev
# production mode
npm run start
```
## [Issues](https://github.com/idrinth-api-bench/issues)

This is the issue repository for a typescript framework meant to performance test anything even remotely rest-like and related tools.
