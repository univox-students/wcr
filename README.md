Written by Samuel Lam (External Affairs Officer 2023-24). Last edited: 26/10/2023.

# Weir Common Room Website
This is the repository for the new website of the Weir (Middle) Common Room (WCR), revived from 2019. We appreciate feedback from the current and previous committee members from WCR and JCR. Special thanks to Ned Stevenson (JCR IT officer) and Tom Campbell (JCR LGBTQ+ officer, founder of [UniVox](https://univox.social/page/admin/home)).

The major changes are:
- A brand new look, of course.
- Dynamic contents containing [information of events](https://univox-students.github.io/wcr/#/whatson), [MCR society listing](https://univox-students.github.io/wcr/#/societiesAtoZ) and [current/past committee members](https://univox-students.github.io/wcr/#/governance).
- Transparency of governance: see [constitution](https://univox-students.github.io/wcr/static/media/WCR_constitution_2018.5586f46139fea762d51f.pdf)
- [Content management system](http://samuelchlam.herokuapp.com/admin): easier edit of contents for committee members (login required), with possibility of further decentralisation for easier maintenance.

# Action required before formally deploying the website
- [Domain name](#domain-name)
- [Permanent hosting solution](#permanent-hosting-solution)
- Moderation ([events](#events), [society](#society), [news](#news), [welfare information](#welfare-information), [Student Union votes](#su-votes))
- [Accessibility](#accessibility)
- [Privacy](#privacy)
- Technical documentation

## Domain name
Search from https://domains.squarespace.com/

| Domain Name | Pricing/year | Pricing to request for 3 years |
| :-- | :-- | :-- |
| univoxstudent.com | £9.6 | £28.8 |
| univoxstudent.co.uk | £16 | £48 |

## Permanent hosting solution

Rank by price

| Plans | Pricing/year | Pricing to request for 3 years |
| :-- | :-- | :-- |
| A (JCR/UniVox server) | Unknown | Unknown |
| Baseline (Wordpress Premium) \* \# | £84 | £252 |
| Baseline (Wix Basic) \* | £90 | £270 |
| C (Current state) | £100 | £300 |
| B (AWS) | £140 | £420 |
| Baseline (Squarespace Personal) \* | £144 | £432 |
| C (Upgraded) | £300 | £900 |
| Baseline (Wix Core) \* | £168 | £504 |
| Baseline (Wordpress Business) \* | £240 | £720 |

\* Not capable of current website architecture (would take too much time to develop a new website).
\# Limited flexibility of webpage design.

### Plan A: Hosting with the JCR/UniVox server
The JCR currently owns a server that is hosting UniVox, an in-college social media. We could potentially share the server with JCR. 

Advantages:
- full control of the server
- enable further decentralisation of the website (societies/committee members can log in to edit their individual entries)

Disadvantages:
- careful negotiation with JCR delgates are needed
- the cost of sharing the server is currently unknown
- not as easy to deploy (cannot streamline `git` and `rsync`)

### Plan B: Amazon Web Service (AWS)
- `t4g.micro` tier for AWS EC2 shared hosting (1GB RAM) and 8GB elastic storage in the Europe (London) server, 
- weekly backup retained in the next 3 months (length of term). 

Estimate is $168.66 = £140/year, assuming we are paying 3 years upfront (so an extra **£420** has to be requested in the next round budget). 

The estimate is done [here](https://calculator.aws/#/estimate?id=55890195ea50462b81cdaf2924afdc8e70ac0e88).

Alternative to storage is Amazon RDS for PostgreSQL: this is way much more expensive so haven't looked into this.

Advantages:
- very robust: website is hosted by a well-maintained platform
- enable further decentralisation of the website (societies/committee members can log in to edit their individual entries)

Disadvantages:
- the cost might not be accurate (I am still learning how AWS is being used)
- not as easy to deploy (cannot streamline `git` and `aws`)

### Plan C: Leave it as it is
The current state of website consists of three platforms:
- Frontend (main website): GitHub (free)
- Backend (content management system CMS + database): personal Heroku account ($5/month for CMS + $5/month for database)
- Image serving: Cloudinary (currently free for "1GB storage", 0.26/25 credits per month used so far)

The backend will be moved to an WCR account once my student plan is ended at early October 2024, and WCR will have to start paying $10/month (i.e. **$120 = £100/year**).

Advantage
- cheap
- easy to deploy (`npm run deploy` + `heroku git push main`)

Disadvantage
- not robust: we have to wake the CMS up everytime we visit the website, this means we have a long loading time. Also not good for scaling up the website (if we have too many events)
- the backend api is public: mostly ok when we don't store sensitive information on the website, but would be an issue if we want to decentralise the website further

**Remark:** there is an option for upgrading Heroku to [Standard 1X](https://www.heroku.com/pricing) plan $25/months to avoid the idle issue of CMS. We will enjoy a 512MB bandwith (half of the AWS plan). The total price for this option is $30/month, or $360/months.

### Wix is the cheapest, why not Wix?
- limited decentralisation (2 collaboration accounts), difficult to maintain

## Moderation

### Society
- Mandate an officer (e.g. external affairs officer) to keep a list of active societies who would like to interact with MCR each year
- A mid-year "give-it-a-go" campaign to encourage participations

### Events
- Secretary, social officers and external affairs officers to ensure event details are up-to-date. 
- Event details have to be sent out earlier.
- What event should we include? Certainly the MCR events, how about significant society/private events (e.g. unofficial BOPs, welfare week, the Martlets, UCMS)?

### Profiles
We should certainly include profile pages for current MCR members. How about the following?
- Past MCR members (up to when?)
- Peer Supporters?
- Junior Deans?
- Allow profile holders to edit their profiles themselves?

### News
- The website could be a good repository of all the MCR news, including the sheer amount of emails sent. Should we include some of the links to the emails (from Mailchimp)?

### Welfare information
- MCR version of "Where to get help?" is currently under development
- Welfare officers + external affairs officers to make sure the contacts are up-to-date.

### SU votes
External affairs officers / other SU reps to 
- explain what SU and council is and promote them
- make voting decisions accessible to the public for transparency

### Accessibility
Main issues are
- alternative texts for pictures: would mandate disability officer to review the website together
- grammatically correct paragraphs

For more information, refer to the [official WCAG guideline](https://www.w3.org/TR/WCAG/#non-text-content)

### Privacy
- Check that the website fulfills the GDPR requirements, especially when asking for email for the creation of CMS accounts.
- You may wish to incorporate Google Analytics to see how well you perform, but make sure GDPR requirements are satisfied. We also recommend [Osano](https://www.osano.com) for data privacy management.



# Handing over
The following information need to be updated
- Committees: Upcoming committees can you please do me a favor and submit a nice profile pic of yourself, otherwise we will use the default picture you have submitted to the election.
- Event page: need revamp - see below.

If you need help, Samuel will still be here to help out, you can find me by email (chun.lam18@imperial.ac.uk).

# A new framework
This website features the brand new `react.js` framework. In contrast with the previous `PHP` framework, `react.js` enjoys the ability to split up codes in different modules. The use of typescript ensures that the types of variables are correct. The documentation assumes that you are at least familiar with standard HTML and CSS languages. In addition, we are using GitLab for version management. (You should h) With prior frontend experience, you should be able to pick up this framework swiftly.

## Previewing the website on a local machine
1. Install the latest version `node.js` (download [here](https://nodejs.org/en/download/) or [install using your favourite package manager](https://nodejs.org/en/download/package-manager/))
2. Clone this repository into your PC
3. Start a terminal/command prompt **in the directory where the local copy of this website is living.** Then run the line `npm install` in your terminal to install all the necessary packages for your local preview.
4. You can then preview the website by running `npm start` in the terminal whilst on the repository. To view it, simply open a new tab in your web browser and type `http://localhost:3000/` into the address bar.

# Official React Links
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:
- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.
- `npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `npm run build` (only needed if you need a `build` folder to upload to the union server): Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- `npm run eject`: don't run that. The default webpack is good enough.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

### Other tutorials:
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)