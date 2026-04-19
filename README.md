# jellyfin-Top10
Add a top 10 netflix style movie screen on jellyfin

<img width="1234" height="337" alt="Screenshot 2026-04-19 alle 15 16 43" src="https://github.com/user-attachments/assets/f8798b53-447c-45b5-b480-039a589770b4" />

<h2>Install Instructions:</h2>

1. Install the JS Injector plugin - https://github.com/n00bcodr/Jellyfin-JavaScript-Injector

2. Within Plugins > JS Injector, add a script, name it "Top 10" or similar for reference, then paste the raw code of the jellyfin-top10.js file in this project, then save.

3. Hard refresh your browser (ctrl + f5, shift + refresh, or clear site data) and test!

4. <h2>Info:</h2>
To make the script work, create a collection with "Smartlist" plugin called Top 10, the collection must be created by play count and must include 10 films, then use the "Collection section" plugin and add the new top 10 collection section. then go to the "Home screen section" plugin and activate the collection, for the numbers i added a js code via js injector. Below I put a screenshot of the "Collection Sections" plugin settings

<img width="829" height="541" alt="Screenshot 2026-04-19 alle 15 23 42" src="https://github.com/user-attachments/assets/2253d918-4606-4e66-b2be-0e80a9267f95" />

