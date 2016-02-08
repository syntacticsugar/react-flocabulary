#Flocabulary UI Developer Assignment

Use the delivered image/screenshot and turn it into clickable CSS, and use JS to create a fullscreen toggle.


## Questions

During my coding process, I ran into some interesting questions wondering how some technical parts of the layout are actually designed and engineered, and became curious to learn how they were architected in *real life*:

1. Lyrics:  I assume all the lyrics are extracted from a database or json file.  Lyrics, like lines of poetry, need particular line breaks, which I hacked together by using just `<br/>`s for now.  I initially thought, "I can store that in a Json file and be done with it".  But I see **some** lines are anchors/links; so this is **NOT** easily just some simple copy-and-paste that a staff member drops into a WSIWYG editor.  How?  I initially considered storing the lyrics via Json in some sort of one-dimensional array, but the anchor link is a bit tricky...
2. Left nav li options:  Each has its own svg icon, and URL path; I wonder if they created components for each li option?  
