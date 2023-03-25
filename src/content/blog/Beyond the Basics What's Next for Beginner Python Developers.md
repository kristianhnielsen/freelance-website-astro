---
title: "Beyond the Basics: What's Next for Beginner Python Developers?"
description: If you're a beginner Python developer wondering where to go next, check out these valuable skills to learn, including file management, webscraping, and executable file creation.
published: 2023-03-25
language: "en"
author: Kristian Nielsen
images:
  {
    thumbnail:
      {
        src: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=12",
        alt: "A sticky note that says 'Python', held by a man who is out of focus",
      },

    hero:
      {
        src: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=12",
        alt: "A sticky note that says 'Python', held by a man who is out of focus",
      },
  }
---

## Introduction

If you're reading this post, chances are you're already familiar with the fundamentals of Python. Maybe you've gone through a beginner tutorial or two, may be wondering what to learn next.

In this blog post, we'll explore some valuable skills that you can learn with Python, beyond the beginner level. From file management to webscraping, GUI development, and executable file creation, we'll provide you with some practical ideas on where to start and how to evolve your skills. By the end of this post, you'll have a better understanding of the various skills you can learn with Python and how they can help you advance your career or personal projects. So let's dive in and explore some of the valuable skills you can learn with Python!

## What To Learn

At this point, you have probably seen many lists of beginner project ideas. You have done a text-based adventure, a mortgage calculator, and a number-guessing game. Everyones learning path is different, but here you will finds Python skills, which _I_ find absolutely essential as a Python developer, and most are cornerstones in my best projects.

### File managing

You know how it can be a pain to manage your files on your computer. Imagine a script that could help with the most tedious file management. Learn how to work with local files with the `shutil` (shell utilities) module, which lets you copy, move, rename, and delete files in your Python programs.

You could write a script which deletes any files in your `Downloads` folder, if they are older than 3 months. Or a script that could organize all your pictures into different folder based on when the picture was taken. 

Pair this with some automation e.g. with Windows' built-in `Task Scheduler`, and you will never lose a file again.

### Webscraping

Being able to get information from one or multiple websites can be an invaluable way to retrieve data, which may otherwise be in accessible. 

Do you need to find the top 5 skills employers in _your_ area or country look for, when hiring Python programmers? Build a scrape job ad websites, and collect the data yourself. 

Do you need to track the price of an item on Amazon? Scrape Amazon on a daily basis, and save the price in a file.

Webscraping has a long list of possible applications, but in many cases, gathering data is often the first of many steps.<br><br>

Consider using the following modules:
- `requests` Downloads webpages.
- `bs4` (BeautifulSoup4) Parses HTML.
- `selenium` Launches and controls a web browser. This is particularly useful for webpages that are client-side rendered with `Javascipt`.The selenium module is also able to fill in forms and simulate mouse clicks in this browser.

<img src="https://images.unsplash.com/photo-1600463241302-88b0e1a51175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=12" alt="spider web with blurred green forrest background">

### GUI

Learning to build with a Graphical User Interface, i.e. a window with buttons and text fields etc. can be challanging, but it is invalueable to be able to show others what you have made, in a language they can understand. Having the best Python program, is useless, if you cannot make it accessible to others. Granted, there are many other ways to do so e.g. API to a website, store data locally etc. This could be the first step of making something others might pay you for.

I can reccommend trying the `PySimpleGUI` module or `Tkinter` module to make a GUI.

### Executable file

Sharing your projects with other people can be challenging if they are not technical. Being able to make an executable file for _anyone_ to run, even without having installed Python on their computer or being technical, is an important next step in finishing a project. Combine this with a user-friendly GUI, you can start making money.

Get started with the `PyInstaller` module.

## Conclusion

Learning new skills as a Python developer is crucial for enhancing your abilities and advancing your career. The skills mentioned in this blog post are all practical and valuable for any Python developer to learn. By mastering these skills, you can increase your efficiency, gather valuable data, showcase your projects to a wider audience, and even monetize your work. So, embrace the rabbit hole, and don't be afraid to dive in and explore, to become a better Python developer.
