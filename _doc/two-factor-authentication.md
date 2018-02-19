---
title:  "Two-factor authentication (aka 2-step authentication)"
categories: linux admin howto
---

**Shortcut**: If you want to skip the introduction, click [this direct link](https://mytoken.auckland.ac.nz){:target="_blank"}.

## What is 2-factor authentication

Please refer to : [What is 2-factor authentication](https://superuoa.custhelp.com/app/answers/detail/a_id/7442/kw/two%20factor%20authentication){:target="_blank"}

## When do you need to use 2-factor authentication:

If you have sudo privileges on a Linux VM you need to log in through 2-factor authentication. Otherwise you can login with your University password.


## How to set up 2-factor authentication:

Everybody can use Google Authenticator (phone app) to provide the 2nd factor. Staff or PostDocs can also request a YubiKey (little USB device that provides the 2nd factor), which some researchers find more convenient to use than Google Authenticator.

### Setting up Google Authenticator:

- [What is Google Authenticator](https://superuoa.custhelp.com/app/answers/detail/a_id/7576/kw/Google%20Authenticator){:target="_blank"}

- Install Google Authenticator
    - [On your Android phone](https://superuoa.custhelp.com/app/answers/detail/a_id/7666/kw/Google%20Authenticator){:target="_blank"}
    - [On your iPhone](https://superuoa.custhelp.com/app/answers/detail/a_id/7569/kw/Google%20Authenticator){:target="_blank"}

- [Register your Google Authenticator app](https://superuoa.custhelp.com/app/answers/detail/a_id/7564/kw/Google%20Authenticator/related/1){:target="_blank"}

### Setting up YubiKey:

- [Get a YubiKey](https://superuoa.custhelp.com/app/answers/detail/a_id/7459/kw/YubiKey/related/1){:target="_blank"}
- [Register your YubiKey](https://superuoa.custhelp.com/app/answers/detail/a_id/7581/kw/Google%20Authenticator/related/1){:target="_blank"}


## How to use 2-factor authentication:

Instead of just typing your password you have to type 
```
<password><:><token>
```
, where token is provided by pressing the YubiKey or typing the 6- or 7-digit number provided by the Google Authenticator app on your phone.

