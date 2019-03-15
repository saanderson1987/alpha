Live at https://alpha-movie-app.herokuapp.com/
--Please allow a few moments for site to load, as the free-tier server goes to sleep after disuse--

This app uses Sinatra on the back end and React on the front end.
I have made use of a Sinatra-React [starter repo](https://github.com/alanbsmith/react-sinatra-example) to make setup easier.

The database is simple, consisting of just two tables, `users` and `favMovies`. Currently, the application has a single user whose id is hard coded in the application. A later version of the app would support multiple users. 

The table `favMovies` has a foreign key `user_id` as well as the columns `comment` and `rating`. I would consider creating two separate tables to store these last two values in order to record information related to the creation and modification of these specific values, and even a history of the values using record effective end dating, but for the simple purposes of this task, I have opted to keep the values in the same table.

`favMovies` also has a string column `imdb_id`, which links the record to a movie in the OMDB database.

The file `lib/app.rb` contains references to the application's routes, accessing the `favMovies` model and returning JSON representations of the favorite movie data.

The front end is divided into two main components, `<Search/>` and `<FavMovieList>`. `<Search/>` receives a search query from the user and calls the OMDB api to retrieve a list of movies that match the user's search query. When the list of movies is returned, the local api is then called for each movie in order to retrieve data related to the movie (if it is a favorite movie and the user's comments and rating), using the movie's `imdbID` and the current `userId`. If a corresponding record exists in the local database, it is displayed. 

The user has the ability to add a movie on the list to their list of favorite movies by clicking the heart with the plus sign. From there, they may add a rating and comment.

To remove a movie from their favorite move list, the user has only to click the heart once more, and confirm removal. 

I have decided to leave out the plot of the movie from the search list because the OMDB does not return that data from its search endpoint. That information could easily be added, however, by calling the OMDB endpoint which returns an individual movie's detailed information for every movie in the list, in the same way the the local api is called per movie.

In addition to creating a search query, the user can view and edit their list of favorite movies by clicking on the 'My Favorite Movies' tab. The list is populated by calling the application's local api `favMovies` endpoint, which returns a list of favorite movies for the current user. Then, the the OMDB api is called per favorite movie in order to present the movie details related to the favorite movie. 

Both components store their retrieved data in their React `state` object by using a object with keys representing the movie's `imdbID` and values representing objects containing movie data. This data structure was chosen over a simple array for performance reasons: items can easily be added, changed, or deleted without having to perform the multiple api calls required to populate the full list.

One limitation of storing the retrieved data in each component's state is that the search query results are not saved-- if a user clicks from the 'Search for Movie' tab to the 'My Favorite Movies' tab, the query results are lost. Storing this data in a global application state, either in the `App` component, using the React Context api, or using a library like Redux, woud fix this issue. 

If had had more time to complete this task, I would have added better error handling on all fronts. I also would have added tests. Normally I create tests at the same time as I develop, but to increase the velocity of this task, I forwent them. In addition, I would make the view adaptable to all media. Finally, it would probably be wise to refactor some of the components by extracting even more components to keep the code clean.

I have developed the UI with a primary focus of ease of use. I have acheived this by taking into account a sensible and familiar layout and organization of data. The view is clear and uncluttered. The sans serif font for headers is wide and pleasant, while the text for more detailed information like the movie plot and comments is a serif font that is easy to read. Familiar and attractive icons prevents cluttering the screen with large buttons and they provide quick access to manipulate data. 

With more time, I might add the ability to finish entering or editing a comment by simply pressing the return key. I also might represent the rating with an animated image of starts. I fear that the way to remove a favorite movie is not immediately apparent (click a filled red heart to get the confirm remove dialog), but users of the popular Instagram app would quickly recognize this (unclick a heart in Instagram to 'unlike' a photo). Also, some might appreciate a more colorful UI as well as the addition of animations that begin when an item is clicked or hovered over to give it a more responsive and interactive feel.