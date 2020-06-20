# Contributing guide
**On the team? go to [here](#development-workflow), otherwise keep reading**

Hi, welcome to this repository, this is the repo for the [Hololive Resistance](https://discord.gg/hololive-resistance) website. 

If you have suggestions: Create an issue

You want to contribute: Fork the repo, do your changes and feel free to create a PR (Pull Request).

Tips for when adding new features:

- Comment your code so others will be able to understand it
- Make sure in your PR you should give it a good title and list all the changes you made.
- For commits and PR's follow the [Git Commit Messages](#git-commit-messages) guidelines.

# Development workflow

## Table of contents

[GitHub](#github)
- [Repository page](#the-initial-page)
- [Issues page](#issues-page)
- [Pull Requests page](#pull-requests-page)
- [Good to know](#good-to-know)

[GitAhead client](#gitahead-client)
- [How to clone a repository](#clone-a-repository)
- [Creating a new branch](#how-to-create-a-new-branch)

[Git Commit Messages guidelines](#git-commit-messages)

[The actual workflow](#the-workflow-itself)
- [Working on code](#working-on-code)
- [Reviewing someone's PR](#reviewing-someone-else's-code)

## Get started

First of all, download the [GitAhead client](https://gitahead.github.io/gitahead.com/) and login with your GitHub account. A lot of useful links are pinned in the Discord channel or can be found in [#6](https://github.com/HL-Resistance/hlresistance-preview.github.io/issues/6).

## GitHub

### The initial page
![GitHub repo page, with beta features enabled](https://cdn.discordapp.com/attachments/723876866523529276/723878776655577208/unknown.png)
When you open the GitHub repository, you'll likely see something similar to this.
Most of it should speak for itself but here a list anyway:

![Branch and tag viewer](https://cdn.discordapp.com/attachments/723876866523529276/723879530305159228/unknown.png)

The branches and tags viewer, this way you can look at the code of someone else is working on (in case of branches) or a specific version (in case of tags).

### Issues page
![Issues page](https://cdn.discordapp.com/attachments/723876866523529276/724006101485617222/xzEvCAuPnGwAAAAASUVORK5CYII.png)
This is the issues page, but it also has a few other purposes, here's a list:
- Feature requests
- Discussion
- Help requests for coding
- And of course bugs

Make sure to try to use the correct labels whenever you can. If you see an issue that hasn't been assigned to anyone yet, feel free to assign it to yourself if you can do it. Otherwise ask if you can help by commenting.

### Pull requests page
![Pull Requests page](https://cdn.discordapp.com/attachments/723876866523529276/724008999485440020/vFCdQnQIAAAQIECBAgQIAAAQIECBAgQIAAgeMCfpPkwokQIAAAQIECBAgQIAAAQIECBAgQIAAgesHLz08Ln88AsAAAAASUVORK5C.png)
The pull requests page is very similar to the issues page and the thing about labels is the same. Make sure it's a draft and optionally add `WIP:` in front of the title.
<!--
    If Ek adds the WIP app, it should be the other way around.
    Drafting will be optional and adding "WIP:" in front should be preferred.
-->

## Good to know
- You can reference a Pull Request or Issue by using `#<ID>`, the ID can be found under the title on the overview page or next to the title on the issue page.
- In case you don't want to get spammed in your email from GitHub, you can disable the emails for specific notifications in your settings.
- GitHub has markdown, use it for longer issues or comments. Here is a [Cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet).
- Just as in Discord, you can ping users in a comment, issue or PR by using `@username`

## GitAhead client

### Clone a repository
Under the File menu you can clone the repository using the URL that is shown here in GitHub by clicking on the clone button:
![Git clone URL](https://cdn.discordapp.com/attachments/723876866523529276/723877829695242320/unknown.png)

### How to create a new branch
![Creating a new branch](https://cdn.discordapp.com/attachments/722434771422019584/723874342957613137/unknown.png)
First open the branch menu and press New Branch.


![Name the branch](https://cdn.discordapp.com/attachments/723876866523529276/723876877483114597/unknown.png)
Follow the naming scheme of `username-change_name`, so for example: `goldelysium-contribution_guide`.

### Creating commits
<!-- ![Commit message](URL) | Screenshot will be added later -->


## Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

## The workflow itself

### Working on code
Now you know how the tools work, here is how it generally goes:
1. A feature is requested in Discord or in an issue
2. Let people know you're going to work on it by commenting in Discord or assigning in case of an issue.
3. Create a new branch
4. Start working on it
5. Commit and push
6. Create a PR, make sure to mark it as WIP if it isn't done yet and reference the issue if needed
7. When you're done, let **someone else** review it and merge it

### Reviewing someone else's code
**These are the things you want to look for:**
- Typo's
- Can you understand the code?
- Are the comments enough that you'll still understand it later on?
- Check for trailing whitespaces if possible
- If code is commented out, ask if it can be removed

**Some tips:**
- Select the correct review type
- Look at older PR reviews
- Use multiline comments if it applies to multiple lines of code, you can do this by clicking on the `+` icon on the left side with the line numbers and drag it down until you selected all the lines you need.
-  Use Split mode instead of Unified, otherwise you may encounter issues with multiline comments
