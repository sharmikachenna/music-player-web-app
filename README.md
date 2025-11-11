# 🎵 Music Player Web Application

This is a **Music Player Web App** created using **HTML**, **CSS**, and **JavaScript**.  
It allows you to **play, pause, add, delete, search, and like songs**, all within your web browser.  
The player also uses **Local Storage**, so even if you close or refresh the page, your added songs will stay saved permanently until you reset them.


---

## 💡 Purpose of This App

The **Music Player app** works exactly like a simple version of mobile music apps.  
It allows you to:

-  Play or pause any song  
-  Skip to the next or previous track  
-  Adjust volume  
-  Like your favorite songs  
-  Add custom songs  
-  Search by song or artist name  
-  Delete songs from your playlist  
-  Save your songs automatically in **Local Storage**

---

## ⚙️ Features 

**1. Play / Pause / Next / Previous:**  
These buttons allow you to control playback of songs. You can play or pause music, and switch between songs easily.

**2. Search Function:**  
You can type a part of the song name or artist name, and it will filter your playlist instantly.

**3. Like Button:**  
Each song has a heart button. Clicking on it marks that song as a favorite. You can later identify your liked songs easily.

**4. Add Song Option:**  
You can add your own songs manually. The player allows you to enter a song name, artist name, the link or path of the `.mp3` file, and an optional image for album art.

**5. Delete Song:**  
You can delete songs you no longer want in the playlist.

**6. Volume Control:**  
A slider lets you increase, decrease, or mute the sound.

**7. Progress Bar:**  
Shows how much of the song has been played.

**8. Local Storage:**  
Any songs you add are saved in the browser’s memory automatically. When you reopen the app, they will still be there.

**9. Reset Playlist:**  
If you want to go back to the default songs only, use the reset button. This clears the added songs and restores the original playlist.

---

## 🧱 Structure of the Project

The project usually contains the following files:

- **index.html:** This file contains the main structure of the music player. It includes the player layout, controls, and all sections visible on the screen.  
- **style.css:** This file handles the visual part — colors, layout design, animations, and overall theme.  
- **script.js:** This file contains all the logic — it controls how songs are played, added, searched, deleted, or stored.  
- **.mp3 files:** These are actual songs.  
- **Image files (.jpg ):** Used for displaying album art.  
- **README.md:** The documentation file that explains everything about the project.

---

## 🛠️ Technologies Used

- **HTML5:** Builds the main layout of the player and provides elements like audio player, buttons, and input fields.  
- **CSS3:** Adds styling, color themes, button effects, hover animations, and makes the app look attractive.  
- **JavaScript (ES6):** Handles all the main functionality like song control, playlist update, search, and local storage.  
- **Local Storage:** Saves your songs and settings even after reloading or closing the tab.  
- **Google Material Symbols:** Provides icons for buttons like play, pause, heart, volume, etc.

---

## 🎶 How to Add Songs 
Adding songs is one of the most important parts of this app. You can do this inside the **Add Song** section that appears on the webpage.

### Step 1:  “Add Song” section:


- Song Name  
- Artist Name  
- Song File Path  
- Image URL  

You will also see an **Add Song** button below them.

---

### Step 2: Enter details carefully

**1. Song Name:**  
Type the name that you want to display in your playlist.  
*Example:* Calm Down  

**2. Artist Name:**  
Enter the singer  name.  
*Example:* Rema, Selena Gomez  

**3. Song File Path:**  
This is the most important part. It tells the player where your `.mp3` file is located.  
You can enter:

- A **local path** (if your song file is in your project folder)  
  Example: `firstsong.mp3`  

- Or an **online link** (if your song is hosted somewhere online)  
  Example: `https://example.com/music/song.mp3`  

Make sure the link directly ends with `.mp3`.  
Links from **YouTube**, **Spotify**, or other streaming platforms will **not work**, because those are not direct audio links.

**4. Image URL (optional):**  
You can give your song an album cover.  
This can be either:

- A **local image file** (example: `image1.jpg`)  
- Or an **online image link** (example: `https://example.com/images/cover.jpg`)  

If you do not provide an image, a default picture will appear automatically.

---

### Step 3: Click “Add Song”

Once you fill in all the details, click on the **Add Song** button.  
Your song will immediately appear in the playlist and will also be saved to **Local Storage**.  
That means it will stay there even after refreshing or closing your browser.

---

### Step 4: Reset Playlist 

If you want to remove all manually added songs and go back to the original list, click the **Reset Playlist** button.  
This deletes your added songs and restores the default songs.

---

## 📂 About File Paths and Links

It’s important to understand how **links** and **file paths** work when adding songs or images.

### 1. Local File Path

If your `.mp3` or `.jpg` file is saved in the same folder as your `index.html`, you can directly use:

- `firstsong.mp3`  
- `image1.jpg`

---

### 2. Online Links

If your files are stored online, make sure they are public and directly end with `.mp3` or `.jpg`.  
*Example:*

- `https://example.com/music/song.mp3`  
- `https://example.com/images/cover.jpg`

⚠️ **Important Note:**
- Links from **YouTube** or **Spotify** will not play because they are not direct audio sources.  
- Use only links that directly download or stream `.mp3` files.  
- If you upload your songs to a website or hosting service, ensure the file is public.

---

## 💾 How Local Storage Works

- When you add a song, its details (name, artist, file path, and image) are saved in your browser’s **Local Storage**.  
- Even if you close or refresh the page, the data remains safe.  
- When you press the **Reset Playlist** button, all added songs are removed from Local Storage.  

This makes your playlist **personal and permanent** until you manually clear it.

---



## 🧠 How the App Works Internally (Simplified)

1. When the page loads, **JavaScript** automatically loads a list of default songs.  
2. When you click **Play**, the song starts using the built-in HTML audio feature.  
3. The **Next** and **Previous** buttons navigate through the playlist.  
4. The **Add Song** form allows new songs to be stored in both the playlist and browser’s Local Storage.  
5. The **Search Bar** filters songs instantly as you type.  
6. The **Like Button** toggles between liked and unliked states.  
7. **Local Storage** ensures songs remain until you reset the playlist.

---

## 🧩 Example of What Happens When You Add a Song

If you add a song named **“Calm Down”** by **“Rema”**, with a file named **firstsong.mp3** and image **image1.jpg**,  
then the app will automatically:

- Add the song to your playlist  
- Display its name and album art  
- Play it when selected  
- Save it permanently to Local Storage  

---

## 🧩 Conclusion

Building the **Music Player Web App** is **challenging** and requires effort, but it provides valuable learning.  
You gain hands-on experience with **HTML, CSS, JavaScript, and Local Storage** while creating a fully functional music player.  
Despite its difficulty, completing it boosts your **front-end development skills** and confidence. 


---

## 🚀 Live Demo

Experience the **Music Player Web App** live in your browser:  

## 👉 [Music Player](https://sharmikachenna.github.io/music-player-web-app/)  

----

# 👤 Author

Sharmika Chenna

