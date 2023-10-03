# TicTacToe

TicTacToe is a simple JavaScript game built to allow users to play one or several games of TicTacToe. It was built to work like the original TicTacToe game.

## Features

### Home page

- User is welcomed and introduced to the rules of the game TicTacToe.
- A small explanation of how to navigate the site is provided.
- A clickable start button is provided at the bottom of the page that, when clicked, redirects the user to the game page.

### Game page

- User is presented with a gameboard.
- Hovering over the board makes the cursor change to a pointer.
- Clicking a cell makes an X or O symbol appear, swapping between each click on the gameboard.
- If someone has won or the game is drawn, no more symbols can be put on the board.

#### Interactive Buttons

Below the gameboard, there are two buttons:

- The button on the left, named "Restart," clears all the symbols on the gameboard.
- The button on the right, named "Info," redirects the user to the home page, where they can review the rules or learn how to interact with the site.

#### Scoreboard

- When either the player using the X's or O's wins, their score increases on the scoreboard below.
- This feature allows users to keep track of who has won if played multiple times.

#### Winning Message

- When a match concludes with a tie or when someone has won, a message pops up underneath the gameboard, declaring the winner or indicating if it's a draw.

## Features Left to Implement

There are several features I plan to implement in the future:

- Make the winning screen and restart button be connected to a pop-up window that shows up when a game is concluded.
- Style both the home-page and the game-page to make them more appealing.
- Make the game more suitable to play on larger screens.
- Implement a feature where the person who went second last round gets to go first the next round.

## Technologies

The following technologies were used in the development of this project:

- **HTML:** The structure of the website was developed using HTML as the main language.
- **CSS:** The website was styled using custom CSS in an external file.
- **JavaScript:** The game play logic was created using JavaScript in an external file.
- **Code Anywhere:** The integrated development environment (IDE) used for coding the project.
- **GitHub:** Source code is hosted on GitHub and deployed using GitHub Pages.
- **Git:** Used for version control, allowing for commits and code pushes during development.
- **Font Awesome:** Icons obtained from [Font Awesome](https://fontawesome.com/) were used for the favicon.
- **Favicon.io:** Favicon files were created at [Favicon.io](https://favicon.io/favicon-converter/).

## Testing 

## Deployment

### Version Control

The site was created using the Codeanywhere editor and pushed to github to the remote repository ‘tictactoe’.

The following git commands were used throughout development to push code to the remote repo:

```git add .``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - <https://iijozza.github.io/tictactoe/>

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

## Credits 

- [Build Tic Tac Toe With JavaScript - Tutorial](https://www.youtube.com/watch?v=Y-GkMjUZsmM&t=1847s)
    *Code was used from this youtube tutorial to create the game board and the two different symbols.
- [TicTacToe icon](https://www.flaticon.com/free-icon/tic-tac-toe_566294?term=tic+tac+toe&page=1&position=1&origin=tag&related_id=566294)
    *The favicon used was a free icon from flaticon.com.
- Special thanks to Carolina Leguizamon and Daniel Ahlberg for their valuable contributions in testing the website.
