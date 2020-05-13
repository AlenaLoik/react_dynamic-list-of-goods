import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import Good from './Good';

type AppState = {
  goods: Good[];
  isLoaded: boolean;
};

const getGoods = () => {
  return fetch('https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json')
    .then(response => response.json());
};

class App extends React.Component<{}, AppState> {
  state = {
    goods: [] as Good[],
    isLoaded: false,
  };

  filterGoods = (viewParam: string) => {
    this.setState({
      isLoaded: true,
    });

    switch (viewParam) {
      case 'red':
        getGoods()
        .then((data) => {
          this.setState({
            goods: data.filter((good: Good) => (
              good.color === 'red'
            )),
          });
        });
        break;
      case 'sort 5':
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
    const statuses = ['all', 'sort 5', 'red'];

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <ul className="filters">
          {statuses.map(status => (
            <li className="filters__button">
              <a
                className="filters__link"
                href={`#/${status}`}
                onClick={() => (this.filterGoods(status))}
              >
                {status}
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
