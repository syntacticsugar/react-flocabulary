var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
  getInitialState: function() {
    return  {
      expanded : false
    }
  },
  toggleFullScreen : function() {
    this.setState({
      expanded : !this.state.expanded,
    })
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
          <p>"Five Things"</p>
        </header>
        <div className='row'>
            <div className='left-menu col-xs-4 col-md-2 col-md-offset-1 col-lg-2'>
              <ul>
                <li>Video</li>
                <li>Quick Review</li>
                <li>Interactive Lyrics</li>
              </ul>
            </div>
            <div className='col-md-8 col-lg-8'>
              <div className=''>Video playback controls</div>
              <Lyrics />
            </div>
        </div>
      </div>



    )
  }
})

var Lyrics = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-xs-1 col-md-5 col-lg-6'>
            <div className='lyrics'>
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
      </div>

    )
  }
})

ReactDOM.render(<App/>, document.querySelector('#content-wrapper'));
