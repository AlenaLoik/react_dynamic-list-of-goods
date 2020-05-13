import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import Good from './Good';
import { getGoods } from './Api';

type AppState = {
  goods: Good[];
  isLoaded: boolean;
};

const FILTERS = { color: 'red', count: 'sort 5', showAll: 'all' };

class App extends React.Component<{}, AppState> {
  state = {
    goods: [],
    isLoaded: false,
  };

  filterGoods = (viewParam: string) => {
    this.setState({
      isLoaded: true,
    });

    switch (viewParam) {
      case FILTERS.color:
        getGoods()
          .then((data) => {
            this.setState({
              goods: data.filter((good: Good) => (
                good.color === FILTERS.color
              )),
            });
          });
        break;
      case FILTERS.count:
        getGoods()
          .then((data) => {
            this.setState({
              goods: data.sort((goodPrew: Good, goodCurr: Good) => (
                goodPrew.name.localeCompare(goodCurr.name))).slice(0, 6),
            });
          });
        break;
      default:
        getGoods()
          .then((data) => {
            this.setState({
              goods: data,
            });
          });
    }
  };

  render() {
    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <ul className="filters">
          {Object.values(FILTERS).map(filter => (
            <li className="filters__button">
            <a
              className="filters__link"
              href={`#/${filter}`}
              onClick={() => (this.filterGoods(filter))}
            >
              {filter}
            </a>
          </li>
        ))}
      </ul>
        {(this.state.isLoaded)
          ? <GoodsList goods={this.state.goods} />
          : ''}
      </>
    );
  }
}

export default App;
