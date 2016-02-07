var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
  getInitialState : function() {
    return  {
      expanded : false
    }
  },
  toggleFullScreen : function() {
    this.setState({ expanded : !this.state.expanded });
  },
  render : function() {
    if (!this.state.expanded) {
      return (
        <ThreeColumnLayout toggleFullScreen={this.toggleFullScreen}/>
      )
    } else {
      return (
        <SinglePanelOnly toggleFullScreen={this.toggleFullScreen}/>
      )

    }
  }
});
var LeftListItem = React.createClass({
  render: ()=> {
    return (
      <li className="left-menu-item">
      </li>
    )
  }
});
var SinglePanelOnly = React.createClass({
  render : function() {
    return (
      <div className=''>
        <h1>poof!</h1>
        <button onClick={this.props.toggleFullScreen} className='button-toggle-fullscreen btn btn-link'>
            <i className="fa fa-expand"></i>EXPAND/CLOSE
        </button>
      </div>
    )
  }
});
var ThreeColumnLayout = React.createClass({
  render : function() {
    return (
      <div className="react-wrapper">
        <nav className="clearfix">
          <img src='./images/flocabulary-logo.png' />
          <ul className="left-tertiary-nav">
            <li>Songs & Videos</li>
            <li>About</li>
            <li className="search-field">Search</li>
          </ul>
          <ul className="right-tertiary-nav">
            <li className="join-class">Join a Class</li>
            <li className="sign-in">Sign In</li>
            <li className="sign-up">Sign Up</li>
          </ul>
        </nav>
        <header className='main-header'>
          <span className='header-breadcrumbs'>Songs & Videos &gt; Language Arts &gt; Reading & Writing &gt; </span>
          <h1>Five Elements of a Story</h1>
          <p>"Five Things"</p>
        </header>
        <div className='main-content row'>
            <div className='left-menu col-xs-4 col-md-2 col-md-offset-1 col-lg-2'>
              <ul className="nav nav-stacked">
                <li>Video</li>
                <li>Quick Review</li>
                <li>Interactive Lyrics</li>
                <li>Fill in the Blanks</li>
                <li>Quiz</li>
                <hr />
                <li>Teacher's Guide</li>
                <li>Handouts</li>
                <hr />
                <li>Credits</li>
              </ul>
            </div>
            <div className='col-md-8 col-lg-8'>
              <div className='video-playback'></div>
              <div className='row'>
                <Lyrics />
                <div className='right-panel col-xs-1 col-md-4'>
                  <span className='image-browser'></span>
                  <span className='pagination'>1 of 10</span>
                  <button onClick={this.props.toggleFullScreen} className='button-toggle-fullscreen btn btn-link'>
                    <i className="fa fa-expand"></i>EXPAND/CLOSE
                  </button>
                  <figure className='image-wrapper'>
                    <img src="./images/birds-eye-london.png" />
                    <figcaption>A bird's eye view of London</figcaption>
                  </figure>
                  <p>blah blah</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
});

var Lyrics = React.createClass({
  render : function() {
    return (
        <div className='col-xs-1 col-md-5 col-lg-6'>
            <div className='lyrics-text'>
                  Setting, that's like where it's going down, <br/>
                  Could be the train compartment, a castle or a town,  <br/>
                  Could be the Arctic winter - like "To Build a Fire,"  <br/>
                  The temperature's dropping, excitement is getting higher,  <br/>
                  Setting sets the scene so the scene seems set, <br/>
                  Could be the Italian restaurant where we met, <br/>
                  Setting gives us the where and the when, <br/>
                  Could be modern day, the future, or way back when. <br/><br/>

                  Plot, Character, Conflict, Theme, <br/>
                  Setting, yes these are the 5 things <br/>
                  That you're going to be needing <br/>
                  When you're reading or writing <br/>
                  A short story that's mad exciting. (x2)  <br/><br/>

                  Plot is the action, the quest for satisfaction, <br/>
                  What's going down, what's going to happen. <br/>
                  Four men at sea in an open boat, <br/>
                  Rowing and hoping that they can stay afloat. The plot:  <br/>
                  They have to make it to the beach, <br/>
                  But the waves are big, and the shore seems out of reach, <br/>
                  Plot is a series of events... <em>like Lemony Snicket,</em> <br/>
                  It could be crazy, wild or straight wicked. <br/>
            </div>
        </div>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#content-wrapper'));
