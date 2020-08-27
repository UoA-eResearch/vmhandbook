---
title:  "Two-factor authentication (aka 2-step authentication)"
categories: linux admin howto
---



If you're familiar with 2FA, you can directly go to [this direct link](https://mytoken.auckland.ac.nz){:target="_blank"} and activate Google Authenticator.


## What is 2-factor authentication

Please refer to : [What is 2-factor authentication](https://www.auckland.ac.nz/en/about-us/about-the-university/identity-and-access-management/two-factor-authentication.html){:target="_blank"}

## When do you need to use 2-factor authentication:

If you have sudo privileges on a Linux VM you need to log in through 2-factor authentication. Otherwise you can login with your University password.


## How to set up 2-factor authentication:

Everybody can use Google Authenticator (phone app) or Authy to provide the 2nd factor.

### Setting up Google Authenticator:

- [Download Google Authenticator](https://www.auckland.ac.nz/en/about-us/about-the-university/identity-and-access-management/two-factor-authentication/download-google-authenticator.html){:target="_blank"}


### Setting up Authy:

- [Download Authy](https://www.auckland.ac.nz/en/about-us/about-the-university/identity-and-access-management/two-factor-authentication/download-authy.html){:target="_blank"}



## How to use 2-factor authentication:

Instead of just typing your password you have to type 
```
<password><:><token>
```
, where token is provided by pressing the YubiKey or typing the 6- or 7-digit number provided by the Google Authenticator app on your phone.


## References

[Two-Factor Authentication](https://www.auckland.ac.nz/en/about-us/about-the-university/identity-and-access-management/two-factor-authentication.html){:target="_blank"}
