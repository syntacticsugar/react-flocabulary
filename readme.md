#Flocabulary UI Developer Assignment

Use the delivered image/screenshot and turn it into clickable CSS, and use JS to create a fullscreen toggle.

Click [here for the finished project] (http://syntacticsugar.github.io/react-flocabulary/ "Flocabulary 3-Column-Layout")

The first thing I did was draw on a piece of paper a rough mockup, or *"wireframe"* of the React component tree: [here is the picture I took with my cell phone] (http://syntacticsugar.github.io/react-flocabulary/images/2016-02-08__flocabulary.jpg "Pencil drawing") 

## Questions

During my coding process, I ran into some interesting questions wondering how some technical parts of the layout are actually designed and engineered, and became curious to learn how they were architected in *real life*:

1. Lyrics:  I assume all the lyrics are extracted from a database or json file.  Lyrics, like lines of poetry, need particular line breaks, which I hacked together by using just `<br/>`s for now.  I initially thought, "I can store that in a Json file and be done with it".  But I see **some** lines are anchors/links; so this is **NOT** easily just some simple copy-and-paste that a staff member drops into a WSIWYG editor.  How?  I initially considered storing the lyrics via Json in some sort of one-dimensional array, but the anchor link is a bit tricky...
2. Left nav li options:  Each has its own svg icon, and URL path; I wonder if they created components for each li option?  

## Issues
1. Had some trouble vertical aligning a couple things, I got the alignment alright in most areas, but in the righter-most panel, I had to use an extra line to align the "1 of 10" pagination text.
2. <strike>Did not make the page fully responsive; it was low on my priority</strike>
3. <strike>add icons to left menu</strike>
4. `inline-block` on anchor links of `ul.right-tertiary` glitch
5. Video not responsive
6. Adds fallback font, though not happy with it.
