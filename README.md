
# readme

No it's not github readme.md

It's a beautifully designed React based web application for you to read your favourite news articles from standard news journal with a feature to subscribe to the newsletter as well.

## Screenshots
![ezgif com-gif-maker](https://user-images.githubusercontent.com/39727166/130657532-b8253982-f7b4-4018-8bc7-b7e1a019043c.gif)
![screencapture-localhost-3000-2021-08-24-22_21_59](https://user-images.githubusercontent.com/39727166/130657809-2b980cf2-9335-4854-8c43-4d6fed602690.png)
![screencapture-localhost-3000-Articles-2021-08-24-22_22_56](https://user-images.githubusercontent.com/39727166/130657828-346bd355-4c5f-4cf4-8ea4-05d51b2d2073.png)
![screencapture-localhost-3000-sign-up-2021-08-24-22_22_26](https://user-images.githubusercontent.com/39727166/130657848-d75a4c9a-46ee-44db-a9dd-6cc6c596f964.png)
![screencapture-localhost-3000-Wotd-2021-08-24-22_22_43](https://user-images.githubusercontent.com/39727166/130657861-5903c3fe-9ac9-45bd-87d7-86865f5f13f8.png)


## Technical Description

1. The design and user interface component is implemented using React along with CSS.
2. Users can see featured news article from top news journal which is fetched using News API.
3. Users can also get themselves subscribed to the newsletter.
4. The subscription to the newsletter is provided through Mailchimp API.
5. Dedicated page for reading articles(to be updated soon).




## Install Package

Use the package manager [npm](https://docs.npmjs.com/) to install dependencies.

```bash
npm install
```

## Running on development server

Run the application on the development server(http://localhost:3000/)
```python
npm install
```
## Using API

Two APIs are used:

1. [MailChimp API](https://mailchimp.com/developer/)
2. [newsAPI](https://newsapi.org/)


Create an environment variable file(.env) and put your Mailchimp and News API Endpoint in a variable to use it into the project.

