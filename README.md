# @idrinth/api-bench/website

## Description

Website made using React to show the ideas behind the API benchmark
implementation portraying the provided README.

## Installation

### Read before installing

You must have a GitHub token set in your account in order to be able to
contribute to this project. If you try to contribute without one, you
won't be able to since the GitHub API will limit your access.

### What are GitHub tokens?

GitHub tokens are identifiers that you can set with specific rights
(as in power of management) in your account. These tokens are required
when contributing with open source so that you can be identified when
making requests to the GitHub API.

### How do I get a token?

1. Click your profile picture on the GitHub website after logging in.
2. In the menu that appears, click on `Settings`.
3. Now, on the Settings screen, scroll down to the very bottom of the
page and click on `<> Developer settings`.
4. Once you're there, click on `Personal access tokens`.
5. Now, click on `Generate new token`.
6. You can add a note to your token as a reminder of what it
was created for.
7. Set an expiration time for your token for extra safety, if you
wish.
8. Your token must have **only** two permissions:

  - [X] `public_repo`
  - [X] `read:org`

9. Click on `Generate token`.
10. Copy the token value that is generated.
11. Create or find a file called `.env`.
12. Inside that file, add or change the value of the variable
`GITHUB_API_TOKEN` to the value of your token, like this:

```ini
GITHUB_API_TOKEN=gh_api_token_with_read_org_and_read_repo
```

13. Now you can install the dependencies by typing the installation
command.

### Installation command

```bash
npm ci
```

## Running the app

If you encounter any problems with this, try checking the
[Token tutorial](#how-do-i-get-a-token) right above this section.

```bash
# development watch mode
npm run dev

# production mode
npm run start
```

## [Issues](https://github.com/idrinth-api-bench/issues)
