var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
  getInitialState: function() {
    return  {
      expanded : false
    }
  },
  render : function() {
    return (
      <div className="react-wrapper">
        <nav>
          <span className="logo"></span>
        </nav>
        <header className='main-header'>
          <span className='header-breadcrumbs'>Songs & Videos &gt; Language Arts &gt; Reading & Writing &gt; </span>
          <h1>Five Elements of a Story</h1>
          <caption>"Five Things"</caption>
        </header>
        <div className='row'>
            <div className='col-xs-4 col-md-4 col-lg-3'>
              <ul>
                <li>Video</li>
                <li>Quick Review</li>
                <li>Interactive Lyrics</li>
              </ul>
            </div>
            <div className='col-md-8 col-lg-8'>
              <div className=''>Video playback controls</div>
            </div>
        </div>
      </div>


    )
  }
})

ReactDOM.render(<App/>, document.querySelector('#content-wrapper'));
