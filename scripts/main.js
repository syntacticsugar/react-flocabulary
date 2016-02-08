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
        <AuxiliaryPanel imageFullSize={true} toggleFullScreen={this.toggleFullScreen}/>
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

/*
// not using this anymore
var SinglePanelOnly = React.createClass({
  render : function() {
    return (
      <div className='expanded-view'>
        <h1>poof!</h1>
        <img src="./images/london-huge.jpg" />
        <button onClick={this.props.toggleFullScreen} className='button-toggle-fullscreen btn btn-link'>
            <i className="fa fa-expand"></i>EXPAND/CLOSE
        </button>
        <p>
          London is the capital ...
        </p>
      </div>
    )
  }
});
*/

var ThreeColumnLayout = React.createClass({
  render : function() {
    return (
      <div className="react-wrapper">
        <nav className="clearfix">
          <img src='./images/flocabulary-logo.png' />
          <ul className="left-tertiary-nav">
            <li className='dropdown'>Songs & Videos<span className="caret"></span></li>
            <li>About<span className="caret"></span></li>
            <li className="search-field"><i className="fa fa-search"></i></li>
          </ul>
          <ul className="right-tertiary-nav">
            <li className="join-class"><a href='#'>Join a Class</a></li>
            <li className="sign-in"><a href='#'>Sign In</a></li>
            <li className="sign-up"><a href='#'>Sign Up</a></li>
          </ul>
        </nav>
        <header className='main-header'>
          <span className='header-breadcrumbs'>Songs & Videos &gt; Language Arts &gt; Reading & Writing &gt; Five Elements of a Story</span>
          <h1>Five Elements of a Story</h1>
          <p>"Five Things"</p>
        </header>
        <div className='main-content row'>
            <div className='left-menu col-xs-12 col-sm-3 col-md-3 col-md-offset-1 col-lg-2'>
              <ul className="nav nav-stacked">
                <li><i className="fa fa-apple"></i>Video</li>
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
                <div className='col-xs-12 col-md-4 col-lg-4'>
                  <AuxiliaryPanel imageFullSize={false} toggleFullScreen={this.props.toggleFullScreen} />
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
});
var AuxiliaryPanel = React.createClass({
  render : function() {
    if (this.props.imageFullSize) {
      var imageClass="largerImage";
    } else {
      var imageClass="smallerImage";
    }
    return (
      <div className="auxiliary-panel">
        <div className="meta-details">
          <span className='image-browser'>
            <a href='#'><i className="fa fa-angle-left"></i></a>
            <a href='#'><i className="fa fa-angle-right"></i></a>
          </span>
          <span className='pagination'>1 of 10</span>
          <button onClick={this.props.toggleFullScreen} className='button-toggle-fullscreen btn btn-link'>
            <i className="fa fa-expand"></i>
          </button>
        </div>
        <figure className='image-wrapper'>
          <img className={imageClass} src="./images/london-huge.jpg" />
          <figcaption>A bird's eye view of London</figcaption>
        </figure>
        <p>
          London is the capital and most populous city of England and the United Kingdom.[3][4] Standing on the River Thames, London has been a major settlement for two millennia. It was founded by the Romans, who named it Londinium.[5] London's ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core.[6] The bulk of this conurbation forms Greater London,[7][8][note 1] a region of England governed by the Mayor of London and the London Assembly.[9][note 2] The conurbation also covers two English counties: the small district of the City of London and the county of Greater London. The latter constitutes the vast majority of London,[10] though historically it was split between Middlesex (a now abolished county), Essex, Surrey, Kent and Hertfordshire.
        </p>
      </div>
    )
  }
});
var Lyrics = React.createClass({
  render : function() {
    return (
        <div className='col-xs-12 col-sm-7 col-md-6 col-lg-6'>
            <div className='lyrics-text'>
                  <a href='#'>Setting, that's like where it's going down,</a> <br/>
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

                  <a href='#'>Plot is the action, the quest for satisfaction, </a><br/>
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
