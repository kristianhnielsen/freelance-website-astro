---
title: "Why You Should Not Use Google Analytics"
description: This blog post highlights concerns over Google Analytics' compliance with GDPR and user privacy. It provides alternatives to Google Analytics that are GDPR-compliant and maintain user data privacy.
published: 2023-04-16
language: "en"
author: Kristian Nielsen
images:
  {
    thumbnail:
      {
        src: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=12",
        alt: "A sticky note that says 'Python', held by a man who is out of focus",
      },

    hero:
      {
        src: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=12",
        alt: "A sticky note that says 'Python', held by a man who is out of focus",
      },
  }
---

Businesses and website owners use web analytics tools to monitor website traffic, user activity, and other important information so they can make smart choices about their online presence. Google Analytics is a popular online analytics tool that many website owners use to track user behavior, and other valuable information. Privacy advocates have expressed concerns over the General Data Protection Regulation's (GDPR) compliance.

## The GDPR and Its Importance

The European Union's (EU) General Data Protection Regulation (GDPR) is a privacy law that establishes standards for the collection, processing, and storing of personal data. By regulating how companies gather and use personal data about users, it aims to preserve the privacy rights of EU citizens and residents.

Regardless of whether a company is based, the GDPR applies to all businesses that handle the personal data of EU citizens or residents. It requires that businesses ask for individuals' explicit consent before collecting their personal information and put in place the necessary organizational and technical safeguards to protect the security and privacy of the data.

GDPR violations could lead to hefty fines and other legal repercussions.

## Types of Web Analytics

There are two kinds of web analytics: client-side and server-side.

Client-side analytics monitor user activity on a website using JavaScript code. Real-time tracking of user activities is possible thanks to the insertion of this code into the website and execution of it on the user's device. For companies trying to optimize their website, this type of analytics provides in-depth information on user behavior, such as pageviews, time on site, and clickthrough rates. Client-side analytics do have one drawback, though, which is that they can cause websites run slower. This can be annoying for users. Users may also disable client-side analytics with adblockers or privacy settings, which means the information gathered might not be as detailed.

Server-side analytics monitors user activity on a website's back end. In other words, user data is gathered and processed on the website's server rather than the user's computer or other mobile device. One major benefit of server-side analytics is that they are unaffected by adblockers or privacy settings. Server-side analytics, however, might not offer as much in-depth data on user behavior as client-side analytics. Server-side analytics can also identify bots and crawlers, which can be difficult to distinguish from actual users and may produce less accurate results Businesses might have to use additional tools in addition to server-side analytics to get a complete picture of user behavior.

## Google Analytics and GDPR Compliance

A client-side web analytics tool is Google Analytics. Information about the user's IP address, device kind, browser type, and location are just a few examples of the data that is gathered. This data is then stored on Google's servers and used to generate reports on website traffic and user behavior.

<img src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=12" alt="document cabinet with a document labeled as 'Classified'">

However, Google Analytics and Google Tag Manager are not GDPR-compliant by default. Before collecting users' personal data, website owners must get their explicit permission in order to be complying with GDPR. This means informing users in plain terms about the data being gathered, how it will be used, and with whom it will be shared.

Although Google has added Consent Mode to Google Tag Manager, and [lobbies for GDPR changes](https://techcrunch.com/2022/01/19/google-lobbies-for-new-privacy-shield/), this does not fix the core of Google's GDPR problem.

Google sends the data to a different server when you use Google Analytics or Google Tag Manager, and that server filters the data and provides it to Google Analytics as requested. This means that even if consent defaults were put up with Google Analytics gtag.js during the initial configuration function, you are still providing Google with their users' personal information. As a result, if you configure the data you see in Google Analytics, you might believe that you are GDPR compliant, but Google has already collected the data at this point.

**Read more**: [The Austrian Data Protection Authority decides that using Google Analytics violates GDPR](https://noyb.eu/en/austrian-dsb-eu-us-data-transfers-google-analytics-illegal)

## Reasons to Avoid Google Analytics

Google Analytics is free, and if something seems too good to be true, it probably is.

The only way for a website owner to use Google Analytics in a GDPR compliant manner, is to initialize the standard config script from Google Analytics (gtag.js) or Google Tag Manager _after_ explicit consent from the user has been given.

Doing so, you lose out on the data which does not require consent, such as page views and custom events (i.e. how many users click this button).

The use of Google Analytics without technical know-how and additional configurations violate user privacy rights by collecting and processing personal data without explicit consent. This can result in fines and legal penalties under GDPR.

## Alternatives to Google Analytics

There are plenty of web analytics tools that brand themselves as compliant with GDPR and other major privacy regulations. Many of these have servers in EU, so you are not moving any data outside of the EU, and some of them are don’t use cookies at all, so you don’t need to have an annoying cookie disclaimer.

Popular privacy friendly web analytics services include:

- <p><a href="https://plausible.io/" target="_blank" rel="noopener noreferrer">Plausible</a> &rarr; Easy to use and privacy-friendly Google Analytics alternative</p>
- <p><a href="https://usefathom.com/" target="_blank" rel="noopener noreferrer">Fathom</a> &rarr; Is a Google Analytics alternative that doesn’t compromise visitor privacy for data. </p>
- <p><a href="https://matomo.org/" target="_blank" rel="noopener noreferrer">Matomo</a> &rarr; Take back control with Matomo – a powerful web analytics platform that gives you 100% data ownership.</p>

## Conclusion

You should carefully consider the privacy and security implications of using Google Analytics. There are GDPR-compliant alternatives that offer insights into website performance while maintaining user data privacy. The cost of GDPR-compliant web analytics may be outweighed by the time and effort required to make Google Analytics compliant.

When selecting a web analytics platform, it's important to put user privacy first.
