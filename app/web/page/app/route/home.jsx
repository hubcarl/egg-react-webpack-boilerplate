import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, del } from '../store/actions';

class Home extends Component {
  render() {
    const { add, del, list } = this.props;
    const id = list.length + 1;
    const item = {
      id,
      title: `Egg+React 服务端渲染骨架-${id}`,
      summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染骨架项目',
      hits: 550 + id,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
    };
    const titleStyle = {
      textAlign: 'center',
      marginTop: '40px',
      marginBottom: '40px'
    };
    return <div className="redux-nav-item">
      <h4 style={{...titleStyle}}>基于 Egg + React + Webpack 前端渲染 Asset 骨架项目, 开发前请阅读<a href="https://www.yuque.com/easy-team/egg-react/asset"> Egg + React + Asset 渲染 </a></h4>
      <div className="container">
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12 col-sm-9">
            <ul className="smart-artiles" id="articleList">
              {list.map(function(item) {
                return <li key={item.id}>
                  <div className="point">+{item.hits}</div>
                  <div className="card">
                    <h2><a href={item.url} target="_blank">{item.title}</a></h2>
                    <div>
                      <ul className="actions">
                        <li>
                          <time className="timeago">{item.moduleName}</time>
                        </li>
                        <li className="tauthor">
                          <a href="#" target="_blank" className="get">Sky</a>
                        </li>
                        <li><a>+收藏11</a></li>
                        <li>
                          <span className="timeago">{item.summary}</span>
                        </li>
                        <li>
                          <span className="redux-btn-del" onClick={() => del(item.id)}>Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="redux-btn-add" onClick={() => add(item)}>Add</div>
    </div>;
  }
}


const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, { add, del })(Home);
