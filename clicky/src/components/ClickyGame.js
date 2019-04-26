import React from 'react';
import FlowerCard from './flowerCard/flowerCard';
import flowers from '../../src/pics.json';

class ClickyGame extends React.Component {

  state = {
    highScore: 0,
    count: 0,
    // value of initial array of flowers
    flowers: flowers,
    // value of the new array after one is clicked
    unselectedFlowers: flowers
  };

  componentDidMount() {
  };


  shuffleFlowers = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // there is an onClick attached to each flower via flowerCard.js
  // 'on-click' the selected flower's value is found and placed in a const variable
  // by .find() through the unselectedFlowers array, finding the image that matches the 'clicked'
  selectFlower = name => {
    const findFlower = this.state.unselectedFlowers.find(item => item.name === name);
    // THIRD: when an image is clicked and it is not found in the array (undefined)
    // we set a new state for the highScore, if the current count is greater than the high score,
    // than that 'count' is the new highScore.
    // The count is set back to 0.
    // and the unselecltedFlowers array is reset back to the original flowers array.
    if (findFlower === undefined) {
      this.setState({
        highScore: (this.state.count > this.state.highScore) ? this.state.count : this.state.highScore,
        count: 0,
        flowers: flowers,
        unselectedFlowers: flowers
      })
    }

    // FIRST: we make a new flowers array minus the image the matches the one the was clicked using the .filter()
    // we filter throught the array and find all images that do not match that images value,
    // and create a new array with just those images.
    else {
      const newFlowers = this.state.unselectedFlowers.filter(item => item.name !== name);
      // SECOND: we establish a new state for the unslectedFlowers array, updated with the newFlowers array value,
      // which holds one less image in it. So each time a new image in clicked, the array gets smaller and smaller.
      // the state of the 'count' is incremented by one every time the image registers and one found in the
      // unselectedFlowers(newFlowers) array.
      this.setState({
        count: this.state.count + 1,
        flowers: flowers,
        unselectedFlowers: newFlowers
      });
    }
    // after each image is clicked, use the suffleFlowers function above to suffle the flowers array
    // around in the window.
    this.shuffleFlowers(flowers)
  }



  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Clicky Game</h1>
          <p>High Score: {this.state.highScore}</p>
          <p>Current Count: {this.state.count}</p>
        </div>
        <div className="mb-4">
          <div className="card-header">
            <h3>Click images, but not the same one twice.</h3>
          </div>
          <div className="card-body">
            {
              this.state.flowers.map(flower => (
                <FlowerCard
                  name={flower.name}
                  image={flower.image}
                  selectedFlower={this.selectFlower}
                  count={this.state.count}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ClickyGame;