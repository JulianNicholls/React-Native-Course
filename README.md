# React-Native-Course
Code from the Stephen Grider React Native course on 
[Udemy](https://www.udemy.com/course/the-complete-react-native-and-redux-course)

## PROBLEMS

If you have any unexpected problems, for example where you have exactly the 
same code as Stephen but you have big red messages instead of an app.

**TRY STOPPING THE SERVER AND RUNNING `npm start` AGAIN.**

This is particularly true if you have messages like `Cannot load module "94"`
or it disavows knowledge of a file that you've just created
which is truly mystifying :-)

Another thing is that you can't leave expo running during sleep 
or when you install new npm modules. It *will not work*, and you will get the 
mystifying errors.

## Progress

  Lecture 249 - Form Reset and navigation

## Differences from Stephen

### Actions

I always create a set of 'types' for the action creators, this avoids any 
possibility of typos between action creators and reducers, e.g.

  ``` 
  dispatch({ type: 'LOAD_POSTS', posts });
  ...
  
  const postsReducer = (posts, action) => {
    switch (action.type) {
      case 'LAOD_POSTS':    // Oops, should be 'LOAD_POSTS'
        ...
  ```

### First App

* My rn-starter directory is more or less untouched from Stephen's zip file.
  I have started my first app in a directory called `first`.

* I have styled everything much more in the first app.

* I have added prop types to all the screens and components, because ESLint whines 
  about them being missing :-)

### Food

* I rarely, if ever, use the name `payload` for the data contained in a Redux /
  reducer action. The main exception to this is when using `redux-promise` which 
  requires that the promised data name has to be `payload`.

* My classes in the foodie app are generally `Restaurant` where Stephen 
  uses `Result(s)`

* The filtering in my foodie app is a lot more complicated than Stephen's.
  In the UK, the Yelp API frequently returns much less information, including
  an empty or missing `price` field.

  As a consequence of the previous, in addition to the lists with the three 
  tiers of price, I have another list where the price range is unknown.

  Also, so many of the restaurants don't even have a single picture, so I have 
  added a placeholder image to the restaurant lists, and have taken care of it 
  on the restaurant detail page as well.

* I have changed the context in the blog app to use a custom hook, because there
  is no reason to ever expose the context directly.

### Blog

* Where Stephen passes the ID of a post to update or delete, I pass the complete 
  post.

* I have no clue why Stephen removes the call to dispatch for adding posts
  to the list in memory, necessitating a roundtrip to the server. This would be 
  disastrous in a real application where there are potentially hundreds of posts
  to load from a remote server.

  Premature optimisation is to be avoided, but when the code is already there 
  and tested, why would you stop using it?

### Track and Track Server

* I always use the terms 'log in' and 'log out', to make a contrast with 'sign up',
  hence my login route is `/login` rather than `/signin` and my login and signup 
  screens are `LoginScreen` and `SignupScreen` respectively.

* I have checked the return value from `requestPermissionsAsync` so that I can 
  detect the request being denied on iOS and not continue to attempt to get 
  location data.

* My LocationContext is called GeoContext because there were too many things called
  location(s). it also means that I can use `useGeo()` to return the context, leaving
  `useLocation()` free for Stephen's thing.

* Stephen is not going the right way about recording. The context
  already knows whether recording is in progress, it does not need to be 
  communicated from outside, where it's being retrieved from the context anyway...

  His method actually breaks the recording process so badly that he has to spend
  multiple videos fixing the problem that he created.

* My _mockLocation makes a wigglier line than Stephen's by not adding to both
  latitude and longitude every time. I also slowed the update rate down to every 2s.

### Git client

I have used Git at the command-line for more than 10 years. Over that time, I have tried
many different graphical shells for Git, without finding one that was easier
and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

### Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.

