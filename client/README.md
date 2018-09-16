# Beds for Baltimore

Beds for Baltimore is a project that aims to centralize data about the homeless shelters in Baltimore. Rather than trawling through pages of search results trying to find a phone number, Beds for Baltimore is a tool to be used by shelter administrators to keep their information updated and easily accessible. Beds for Baltimore tells users the number of empty beds, if any, available at the shelter.

## Technical Details

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It consists of a React client styled with Bootstrap/Reactstrap and served by a [MongoDB-Atlas](https://www.mongodb.com/) database and [MongoDB Stitch](https://www.mongodb.com/cloud/stitch).

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

To run the project locally you will need to have npm installed (we are using version 6.4.1):

```
git clone https://github.com/richardshu/BedsForBaltimore.git
cd BedsForBaltimore
npm install
npm start
```

The page will reload if you make edits.<br>

## Contributing

We welcome your[feedback](https://github.com/richardshu/BedsForBaltimore/issues)!  Or [submit a pull request](https://github.com/richardshu/BedsForBaltimore/pulls) if you are feeling industrious.

## To Do

* Include more data about individual shelters, such as male/female/coed flags, images, and descriptions of other services offered
* Integrate Maps API for location-based searching
* Implement search functionality (currently displaying shelters in order of number of available beds)
* Implement shelter administrator secure user login and privileges
* Work with shelters to determine the best way to keep bed availability data as close to real-time as possible
* Display times that individual shelters' bed availability was last updated
