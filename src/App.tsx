import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';
import Good from './Good';

type AppState = {
  goods: Good[];
  viewParam: string;
};

const getGoods = () => {
  return fetch('https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json')
    .then(response => response.json());
};

class App extends React.Component<{}, AppState> {
  state = {
    goods: [] as Good[],
    viewParam: 'all',
  };

  componentDidMount() {
    getGoods()
      .then((data) => {
        this.setState({
          goods: data,
        });
      });
  }

  updateGoodsToShow = (status: string) => {
    this.setState({ viewParam: status });
  };

  getGoods = (viewParam: string) => {
    let goodsView = [];
    const { goods } = this.state;

    switch (viewParam) {
      case 'red':
        goodsView = goods.filter(good => (
          good.color === 'red'
        ));
        break;
      case 'sort 5':
        goodsView = goods.sort((goodPrew, goodCurr) => (
          goodPrew.name.localeCompare(goodCurr.name))).slice(0, 6);
        break;
      default:
        goodsView = goods;
    }

    return goodsView;
  };

  render() {
    const statuses = ['all', 'sort 5', 'red'];
    const { viewParam } = this.state;
    const goodsView = this.getGoods(viewParam);

    return (
      <>
        <h1>Dynamic list of Goods</h1>
        <ul className="filters">
          {statuses.map(status => (
            <li className="filters__button">
              <a
              className="filters__link"
                href={`#/${status}`}
                onClick={() => (this.updateGoodsToShow(status))}
              >
                {status}
              </a>
            </li>
          ))}
        </ul>
        <GoodsList goods={goodsView} />
      </>
    );
  }
}

export default App;
