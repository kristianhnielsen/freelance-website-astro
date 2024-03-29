---
title: "Decoding URLs: A Quick Guide To Website Addresses"
description: Discover the elements of URLs that shape your web browsing experience. We look into what information is in a URL, making it easier for you to understand where a link is taking you before you click it.
published: 2023-06-05
language: "en"
author: Kristian Nielsen
images:
  {
    hero:
      {
        src: "https://images.unsplash.com/photo-1509239129736-8c395375220d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=12",
        alt: "Sign on wooden fence saying 'This way' with an arrow",
      },
    thumbnail:
      {
        src: "https://images.unsplash.com/photo-1509239129736-8c395375220d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=12",
        alt: "Sign on wooden fence saying 'This way' with an arrow",
      },
  }
---

Uniform Resource Locators (URLs) are what we use to tell the computer where we want to go. While the principle of URLs also somewhat apply to how you find your files on your computer, there are a few more elements in the network URLs you will find when browsing the web.

<div class="url-example">
  <p>
    <a href="#scheme" class="scheme">scheme://</a>
    <a href="#subdomain" class="subdomain">subdomain.</a>
    <a href="#second-level-domain-sld" class="sld">SLD</a>
    <a href="#top-level-domain-tld" class="tld">.TLD</a>
    <a href="#port" class="port">:PORT</a>
    <a href="#path" class="path">/path</a>
    <a href="#query-and-parameters" class="params">?key=value</a>
    <a href="#fragment" class="fragment">#fragment</a>
  </p>
</div>

## URL Parts

URLs consists of different parts, but only the base URL is mandatory for the browser to understand it, and typically the browser will help you to add the scheme for you.

<div class="url-example">
  <p>
    Base URL: 
    <a href="#scheme" class="scheme">scheme://</a>
    <a href="#second-level-domain-sld" class="sld">SLD</a>
    <a href="#top-level-domain-tld" class="tld">.TLD</a>
    </p>
</div>

### Scheme

The scheme for websites are `http` or `https`, but there are also other schemes like `mailto` to open an e-mail client, or `tel` to open a phone client. If you have ever accessed another computer or servers file system, you may be familiar with the `ftp` scheme.

Todays browsers default to `https`, so you dont write that _every_ time.

<details><summary>mailto scheme example</summary><a href="mailto:myname@gmail.com">mailto:myname@gmail.com</a></details>
<details><summary>tel scheme example</summary><a href="tel:+1 123456789">tel:+1 123456789</a></details>

### Subdomain

Subdomains like "blog", "offers", or language indicators are used by some websites to bucket content into subdomains for readablility or management purposes. In the early 2000's, many websites had an `m.` subdomain to better manage the mobile versions of a website.

However since the early 2010's, responsive design became a thing, and handling styling for different screen sizes was handled in the same CSS.

### Second-Level Domain (SLD)

This is the primary name of your website. This helps visitors know where they are, which brand they are visiting, and will also be the name of reference when they tell their friends to visit a website.

### Top-Level Domain (TLD)

TLDs are a called top-level because this is the very first thing your computer uses to locate your where your website lives. If this was a physical address, the TLD would be the country you live in.

In a nutshell, when you type in `google.com`, your computer asks your network provider for the IP address to the .com domain. Then it asks the .com domain for the address to `google`. This means that you can have wildly different websites with the same SLD, but different TLD.

We even have geographical TLDs like `.fr`, `.jp`, `.uk`, but there are also more general TLDs to indicate your type of website e.g. `.com` for commercial, `.gov` for government websites, and `.org` for organisations.

In recent years, more and more types of TLDs have become popular to finetune your audience and show your type of website, for example:

- **.dev** for developers and their portfolio websites
- **.me** for personal websites, blogs, portfolios
- **.wiki** for informational websites
- **.kids** for kid-friendly content

<img src="https://images.unsplash.com/photo-1530406472580-81dc39c4babe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1692&q=12" alt="view from dark tunnel through an open gate to a grassy sunlit field" style="width: 100%; object-fit: cover; max-height: 500px;" />

### Port

Ports tell the computer which "doors" are open to incoming requests. Defaults to port 443 for `https` and port 80 for `http`.
Ports do not play a big role in URLs for security reasons, however they are widely used in other services that connect through the internet:

- **Port 25** : Simple Mail Transfer Protocol (SMTP) which sends e-mails.
- **Port 143** : Internet Message Access Protocol (IMAP) for general management of e-mail account.
- **Port 1194** : OpenVPN for creating secure point-to-point connections.
- **Port 631** : Internet Printing Protocol to connect to network printers.

### Path

If you do not specify a path, you will be taken to the homepage, the intended starting point. However going directly to any other page on the website, like a specific news article or your social media profile page, requires you to add a path to the subpage.

### Query and Parameters

Have you ever noticed, that when you search on Google, your URL changes?
This is because the URL contains information about what you searched for. For example, if you search "what is a url", the URL will be `google.com/search?q=what+is+a+url`. A URL cannot contain spaces and will typically be replaced with a plus sign (+) or `%20`.

<div class="url-example">
  <a href="https://google.com/search?q=what+is+a+url" target="_blank">
    <span class="scheme">https://</span>
    <span class="sld">google</span>
    <span class="tld">.com</span>
    <span class="path">/search</span>
    <span class="params">?q=what+is+a+url</span>
  </a>
</div>

Query is marked with a question mark (?), and everything that comes after are the query parameters in so-called key-value pairs. These tell the website that you want to see a filtered or specific version of the website.

A URL can have many parameters seperated by `&`, which can help finding exactly the page you want to see. That could be search results on Amazon, where you have already search on `pillow`, and selected the materials, price range, and that you sort by price low to high. All this information in URL.

While you might rarely write these manually, having queries and parameters are essential for sharing the exact same website on e.g. social media.

### Fragment

Fragments indicate a specific part of a webpage. This could be a secondary headline on a news article you wish to share. If the URL contains the fragment, it will automatically scroll to that part of the page.

You can try this fragment link: <a href="#second-level-domain-sld">Go to SLD</a>.

A fragment in the URL doesn't change the content of a page like what parameters or subpage/paths do.

## Conclusion

By gaining an understanding of the components of a URL, you become a savvy online navigator.
With this knowledge you can better distinguish between secure and unsecure links, lowering the risks of falling victim to malicious intent, and allows you to see if the link is taking you where the link text tells you it's going.
Practice being aware of the URLs, change them if you need to, and browse the web like a pro.

<style lang="scss">
  .url-example {
    display: flex; 
    margin: 30px 0; 
    font-size: 16px;
    font-weight: 700; 

    @media (max-width: 700px) {
      font-size: 12px;
      }

    & p {
      display: flex; 
      gap: 3px;
      flex-wrap: wrap;
      font-size: inherit;
    }
    
    & a {
      text-decoration: none;
      font-size: inherit;
    }
  }

  .scheme {
    color: #c93b93;
  }

  .subdomain {
    color: #cd7f65;
  }  

  .sld {
    color: #856dd0;
  }

  .tld {
    color: #ce69b5;
  }
  
  .path {
    color:#7db3c5;
  }
  
  .params {
    color:#4e7683;
  }

  .fragment {
    color:#cbbb8b;
  }

  .port {
    color:#6dd085;
  }
</style>
