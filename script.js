// ===============================
// 1. Sample movie "database"
// ===============================
const movies = [
    {
        title: "Inception",
        year: 2010,
        genres: ["sci-fi", "thriller"],
        description: "A thief enters people's dreams to steal secrets, with layers of reality and mind-bending twists.",
        tags: ["dream", "mind", "complex", "serious", "intense"]
    },
    {
        title: "Interstellar",
        year: 2014,
        genres: ["sci-fi", "drama"],
        description: "A group of astronauts travel through a wormhole to find a new home for humanity.",
        tags: ["space", "emotional", "slow", "serious", "future"]
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genres: ["action", "crime", "thriller"],
        description: "Batman faces the Joker in a dark and intense fight for Gotham.",
        tags: ["dark", "city", "superhero", "serious", "intense"]
    },
    {
        title: "La La Land",
        year: 2016,
        genres: ["romance", "drama", "musical"],
        description: "A jazz musician and an actress chase their dreams and fall in love in Los Angeles.",
        tags: ["music", "love", "dreams", "emotional", "colourful"]
    },
    {
        title: "The Notebook",
        year: 2004,
        genres: ["romance", "drama"],
        description: "A touching love story told through the memories of an elderly man.",
        tags: ["love", "emotional", "tearful", "old times"]
    },
    {
        title: "3 Idiots",
        year: 2009,
        genres: ["comedy", "drama"],
        description: "Three friends navigate engineering college, friendship and pressure from family.",
        tags: ["college", "india", "friendship", "funny", "feel-good"]
    },
    {
        title: "Zindagi Na Milegi Dobara",
        year: 2011,
        genres: ["drama", "adventure", "comedy"],
        description: "Three friends go on a road trip in Spain that changes their lives.",
        tags: ["friends", "road trip", "india", "travel", "feel-good", "funny"]
    },
    {
        title: "Toy Story",
        year: 1995,
        genres: ["animation", "family", "comedy"],
        description: "Toys come to life when humans are not around; a story of friendship and jealousy.",
        tags: ["kids", "family", "funny", "light", "cute"]
    },
    {
        title: "The Conjuring",
        year: 2013,
        genres: ["horror"],
        description: "Paranormal investigators try to help a family terrorised by a dark presence.",
        tags: ["scary", "ghost", "haunted", "dark"]
    },
    {
        title: "KGF: Chapter 1",
        year: 2018,
        genres: ["action", "drama"],
        description: "A powerful man rises from poverty to rule the gold mines of Kolar.",
        tags: ["mass", "violent", "stylish", "indian", "gangster"]
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genres: ["animation", "action"],
        description: "Teenager Miles Morales becomes Spider-Man and meets heroes from other dimensions.",
        tags: ["superhero", "colourful", "funny", "fast", "stylish"]
    },
    {
        title: "Coco",
        year: 2017,
        genres: ["animation", "family", "fantasy"],
        description: "A boy enters the Land of the Dead to discover his family's history and love for music.",
        tags: ["kids", "music", "family", "emotional", "colourful"]
    },
    {
        title: "Hereditary",
        year: 2018,
        genres: ["horror", "drama"],
        description: "A family uncovers dark secrets after the death of their secretive grandmother.",
        tags: ["scary", "slow", "disturbing", "dark"]
    },
    {
        title: "Yeh Jawaani Hai Deewani",
        year: 2013,
        genres: ["romance", "drama"],
        description: "A pair of former classmates meet again and explore love, friendship and travel.",
        tags: ["friends", "travel", "india", "love", "feel-good"]
    },
    {
        title: "Drishyam",
        year: 2013,
        genres: ["crime", "thriller", "drama"],
        description: "A simple man does everything he can to protect his family after a crime.",
        tags: ["family", "suspense", "india", "serious", "intense"]
    },
{
        title: "The Matrix",
        year: 1999,
        genres: ["sci-fi", "action"],
        description: "A hacker discovers the world is a simulation and joins a rebellion.",
        tags: ["virtual", "cyberpunk", "philosophy", "guns"]
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genres: ["fantasy", "adventure"],
        description: "A young hobbit begins a journey to destroy a powerful ring.",
        tags: ["epic", "magic", "middle-earth", "quest"]
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        genres: ["fantasy", "family"],
        description: "A boy discovers he is a wizard and joins a magical school.",
        tags: ["magic", "school", "kids", "british", "light"]
    },
    {
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        year: 2003,
        genres: ["adventure", "action", "fantasy"],
        description: "A blacksmith teams up with a pirate to rescue the governor's daughter.",
        tags: ["pirates", "sea", "fun", "swashbuckling"]
    },
    {
        title: "The Social Network",
        year: 2010,
        genres: ["drama"],
        description: "The story of the creation of Facebook and the conflicts around it.",
        tags: ["startup", "tech", "court", "biography"]
    },
    {
        title: "Whiplash",
        year: 2014,
        genres: ["drama", "music"],
        description: "A young drummer faces an abusive teacher in pursuit of greatness.",
        tags: ["music", "intense", "teacher", "obsession"]
    },
    {
        title: "Inside Out",
        year: 2015,
        genres: ["animation", "family"],
        description: "The emotions inside a young girl's mind struggle to help her adjust to change.",
        tags: ["feelings", "kids", "colourful", "emotional"]
    },
    {
        title: "Up",
        year: 2009,
        genres: ["animation", "adventure"],
        description: "An old man flies his house with balloons to fulfill a lifelong dream.",
        tags: ["emotional", "grandpa", "kids", "adventure"]
    },
    {
        title: "Logan",
        year: 2017,
        genres: ["action", "drama"],
        description: "An older Wolverine cares for a frail Professor X while protecting a young mutant.",
        tags: ["superhero", "dark", "emotional", "violent"]
    },
    {
        title: "Black Panther",
        year: 2018,
        genres: ["action", "sci-fi"],
        description: "T'Challa returns to Wakanda to become king and protect his nation.",
        tags: ["marvel", "africa", "royal", "tech"]
    },
    {
        title: "Get Out",
        year: 2017,
        genres: ["horror", "thriller"],
        description: "A Black man uncovers disturbing secrets when visiting his girlfriend's family.",
        tags: ["creepy", "social", "dark", "tense"]
    },
    {
        title: "A Quiet Place",
        year: 2018,
        genres: ["horror", "sci-fi"],
        description: "A family must stay silent to survive in a world filled with sound-sensitive creatures.",
        tags: ["tense", "family", "monsters", "silent"]
    },
    {
        title: "Moana",
        year: 2016,
        genres: ["animation", "adventure"],
        description: "A brave girl sails across the ocean to save her island.",
        tags: ["island", "music", "kids", "ocean"]
    },
    {
        title: "Frozen",
        year: 2013,
        genres: ["animation", "family", "musical"],
        description: "Two sisters struggle with love, fear and magical ice powers.",
        tags: ["music", "kids", "snow", "sisters"]
    },
    {
        title: "Klaus",
        year: 2019,
        genres: ["animation", "family"],
        description: "A postman and a toymaker bring joy to a gloomy town.",
        tags: ["christmas", "heartwarming", "kids", "snow"]
    },
    {
        title: "Andhadhun",
        year: 2018,
        genres: ["thriller", "black comedy"],
        description: "A blind pianist gets involved in a murder he did not expect.",
        tags: ["indian", "twist", "dark", "music"]
    },
    {
        title: "Barfi!",
        year: 2012,
        genres: ["romance", "drama", "comedy"],
        description: "A charming deaf-mute man and two women experience love and heartbreak.",
        tags: ["india", "sweet", "emotional", "feel-good"]
    },
    {
        title: "Tumbbad",
        year: 2018,
        genres: ["horror", "fantasy"],
        description: "A man searches for a hidden treasure guarded by an ancient deity.",
        tags: ["indian", "mythology", "dark", "creepy"]
    },
    {
        title: "Superbad",
        year: 2007,
        genres: ["comedy"],
        description: "Two awkward teens try to enjoy one last party before graduation.",
        tags: ["teen", "friends", "raunchy", "high school", "funny"]
    },
    {
        title: "The Hangover",
        year: 2009,
        genres: ["comedy"],
        description: "Three friends lose their groom-to-be during a wild night in Las Vegas.",
        tags: ["bachelor party", "chaos", "funny", "adult"]
    },
    {
        title: "PK",
        year: 2014,
        genres: ["comedy", "drama"],
        description: "An alien questions religious beliefs on Earth with a childlike innocence.",
        tags: ["india", "social", "funny", "thoughtful"]
    },
    {
        title: "Chennai Express",
        year: 2013,
        genres: ["action", "comedy", "romance"],
        description: "A man's train journey to fulfill his grandfather's wish turns into a wild adventure.",
        tags: ["india", "train", "funny", "masala"]
    },
    {
        title: "Padmaavat",
        year: 2018,
        genres: ["drama", "history"],
        description: "A queen's beauty and courage face the obsession of a brutal ruler.",
        tags: ["indian", "historic", "royal", "grand"]
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["drama"],
        description: "Two imprisoned men bond over years, finding hope and freedom in unexpected ways.",
        tags: ["prison", "hope", "slow", "emotional"]
    },
    {
        title: "Forrest Gump",
        year: 1994,
        genres: ["drama", "romance"],
        description: "A simple man unintentionally influences many historical events.",
        tags: ["inspiring", "emotional", "slow", "sweet"]
    },
    {
        title: "Interstellar",
        year: 2014,
        genres: ["sci-fi", "drama"],
        description: "A team of explorers travel through a wormhole to save humanity.",
        tags: ["space", "time", "science", "epic"]
    },
    {
        title: "The Prestige",
        year: 2006,
        genres: ["mystery", "drama", "thriller"],
        description: "Two magicians become fierce rivals with deadly consequences.",
        tags: ["magic", "twist", "dark", "obsession"]
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        genres: ["action", "crime", "drama"],
        description: "Batman returns to protect Gotham from the merciless Bane.",
        tags: ["superhero", "dc", "intense", "dark"]
    },
    {
        title: "Zindagi Na Milegi Dobara",
        year: 2011,
        genres: ["drama", "romance", "comedy"],
        description: "Three friends rediscover life on a road trip in Spain.",
        tags: ["india", "friendship", "travel", "feel-good"]
    },
    {
        title: "RRR",
        year: 2022,
        genres: ["action", "drama"],
        description: "Two revolutionaries fight for India’s freedom in a fictional epic.",
        tags: ["mass", "epic", "indian", "freedom"]
    },
    {
        title: "The Lion King",
        year: 1994,
        genres: ["animation", "family", "drama"],
        description: "Simba, a young lion, must accept his destiny as king.",
        tags: ["disney", "musical", "animals", "emotional"]
    },
    {
        title: "Jumanji: Welcome to the Jungle",
        year: 2017,
        genres: ["adventure", "comedy"],
        description: "Four teens get sucked into a magical video game world.",
        tags: ["fun", "jungle", "action", "teen"]
    },
    {
        title: "War",
        year: 2019,
        genres: ["action", "thriller"],
        description: "An Indian soldier hunts down his rogue mentor.",
        tags: ["india", "spy", "fight", "twist"]
    },
    {
        title: "Sanju",
        year: 2018,
        genres: ["biography", "drama"],
        description: "The rollercoaster life story of actor Sanjay Dutt.",
        tags: ["india", "biopic", "emotional"]
    },
    {
        title: "12 Angry Men",
        year: 1957,
        genres: ["drama", "crime"],
        description: "A jury deliberates the guilt of a teenager accused of murder.",
        tags: ["courtroom", "classic", "debate", "dialogue"]
    },
    {
        title: "The Godfather",
        year: 1972,
        genres: ["crime", "drama"],
        description: "The aging patriarch of an organized crime dynasty transfers control to his son.",
        tags: ["mafia", "classic", "serious"]
    },
    {
        title: "Gladiator",
        year: 2000,
        genres: ["action", "drama"],
        description: "A general-turned-gladiator seeks revenge for his murdered family.",
        tags: ["epic", "historic", "fight", "emotional"]
    },
    {
        title: "The Wolf of Wall Street",
        year: 2013,
        genres: ["biography", "comedy", "crime"],
        description: "The rise and fall of a stockbroker addicted to excess.",
        tags: ["finance", "wild", "adult", "dark comedy"]
    },
    {
        title: "Django Unchained",
        year: 2012,
        genres: ["western", "action"],
        description: "A freed slave teams up with a bounty hunter to rescue his wife.",
        tags: ["guns", "revenge", "stylish", "bold"]
    },
    {
        title: "Money Heist: The Phenomenon",
        year: 2020,
        genres: ["documentary"],
        description: "A documentary about the creation and impact of Money Heist.",
        tags: ["heist", "real", "behind-the-scenes"]
    },
    {
        title: "Soul",
        year: 2020,
        genres: ["animation", "drama"],
        description: "A music teacher’s soul gets separated from his body before a big break.",
        tags: ["disney", "life", "deep", "emotional"]
    },
    {
        title: "Ratatouille",
        year: 2007,
        genres: ["animation", "family"],
        description: "A rat dreams of becoming a chef in Paris.",
        tags: ["cooking", "cute", "feel-good"]
    },
    {
        title: "Baby Driver",
        year: 2017,
        genres: ["action", "crime"],
        description: "A talented getaway driver seeks freedom from a life of crime.",
        tags: ["music", "car chase", "stylish"]
    },
    {
        title: "Veer-Zaara",
        year: 2004,
        genres: ["romance", "drama"],
        description: "An Indian man and a Pakistani woman fall in love against all odds.",
        tags: ["india", "love", "emotional"]
    },
    {
        title: "La La Land",
        year: 2016,
        genres: ["romance", "musical"],
        description: "A hopeful actress and a jazz musician fall in love in LA.",
        tags: ["music", "love", "colourful"]
    },
    {
        title: "Jojo Rabbit",
        year: 2019,
        genres: ["comedy", "drama"],
        description: "A German boy in WWII discovers his mother is hiding a Jewish girl.",
        tags: ["satire", "emotional", "unique"]
    },
    {
        title: "Hera Pheri",
        year: 2000,
        genres: ["comedy"],
        description: "Three men find themselves in hilarious situations due to a mix-up.",
        tags: ["india", "funny", "classic"]
    },
    {
        title: "Don",
        year: 2006,
        genres: ["action", "thriller"],
        description: "A man is hired to impersonate a deadly crime boss.",
        tags: ["india", "twist", "stylish"]
    },
    {
        title: "The Truman Show",
        year: 1998,
        genres: ["drama", "sci-fi"],
        description: "A man discovers that his life is actually a TV show.",
        tags: ["mind-bending", "reality", "thoughtful"]
    },
    {
        title: "The Notebook",
        year: 2004,
        genres: ["romance", "drama"],
        description: "A young couple falls in love in the 1940s American South.",
        tags: ["love", "emotional", "classic"]
    },
    {
        title: "The Pursuit of Happyness",
        year: 2006,
        genres: ["drama", "biography"],
        description: "A struggling father never gives up on creating a better life for his son.",
        tags: ["inspiring", "emotional", "slow", "true story"]
    },
    {
        title: "Edge of Tomorrow",
        year: 2014,
        genres: ["sci-fi", "action"],
        description: "A soldier stuck in a time loop fights an alien invasion.",
        tags: ["time loop", "aliens", "fast", "smart"]
    },
    {
        title: "Shrek",
        year: 2001,
        genres: ["animation", "comedy", "family"],
        description: "An ogre sets out to rescue a princess in this fairy-tale parody.",
        tags: ["funny", "kids", "classic"]
    },
    {
        title: "How to Train Your Dragon",
        year: 2010,
        genres: ["animation", "adventure"],
        description: "A young Viking bonds with a rare dragon.",
        tags: ["fantasy", "dragons", "kids", "epic"]
    },
    {
        title: "Hotel Rwanda",
        year: 2004,
        genres: ["drama", "history"],
        description: "A hotel manager shelters refugees during the Rwandan genocide.",
        tags: ["true story", "emotional", "war"]
    },
    {
        title: "The Imitation Game",
        year: 2014,
        genres: ["biography", "drama", "war"],
        description: "Alan Turing works to crack Nazi codes during World War II.",
        tags: ["math", "war", "true story", "genius"]
    },
    {
        title: "The Conjuring",
        year: 2013,
        genres: ["horror", "thriller"],
        description: "Paranormal investigators help a family haunted by a dark presence.",
        tags: ["ghosts", "scary", "creepy"]
    },
    {
        title: "Annabelle",
        year: 2014,
        genres: ["horror"],
        description: "A haunted doll terrorizes a young family.",
        tags: ["possession", "doll", "creepy"]
    },
    {
        title: "Dhoom 2",
        year: 2006,
        genres: ["action", "thriller"],
        description: "A daring thief and stylish heists challenge the Mumbai police.",
        tags: ["india", "heist", "stylish", "fast"]
    },
    {
        title: "OMG: Oh My God!",
        year: 2012,
        genres: ["drama", "comedy"],
        description: "A shopkeeper sues God after his shop is destroyed.",
        tags: ["india", "social", "thoughtful"]
    },
    {
        title: "Bajrangi Bhaijaan",
        year: 2015,
        genres: ["drama", "family"],
        description: "A man helps a lost mute girl reunite with her family in Pakistan.",
        tags: ["india", "heartwarming", "emotional"]
    },
    {
        title: "Sita Ramam",
        year: 2022,
        genres: ["romance", "drama"],
        description: "A soldier receives a mysterious letter that changes his life.",
        tags: ["india", "love", "emotional", "beautiful"]
    },
    {
        title: "Kantara",
        year: 2022,
        genres: ["action", "drama"],
        description: "A village faces powerful forces connected to ancient traditions.",
        tags: ["india", "folklore", "mass"]
    },
    {
        title: "Ex Machina",
        year: 2014,
        genres: ["sci-fi", "thriller"],
        description: "A programmer interacts with an AI robot with hidden intentions.",
        tags: ["ai", "robot", "smart", "sci-fi"]
    },
    {
        title: "The Revenant",
        year: 2015,
        genres: ["adventure", "drama"],
        description: "A frontiersman seeks revenge after being left for dead.",
        tags: ["survival", "nature", "intense"]
    },
    {
        title: "Knives Out",
        year: 2019,
        genres: ["mystery", "comedy"],
        description: "A detective investigates a quirky family's murder mystery.",
        tags: ["whodunit", "funny", "smart"]
    },
    {
        title: "Arrival",
        year: 2016,
        genres: ["sci-fi", "drama"],
        description: "A linguist attempts to communicate with alien visitors.",
        tags: ["aliens", "deep", "slow", "mind-bending"]
    },
    {
        title: "Gravity",
        year: 2013,
        genres: ["sci-fi", "thriller"],
        description: "Astronauts must survive after their shuttle is destroyed in space.",
        tags: ["space", "tense", "survival"]
    },
    {
        title: "Doctor Strange",
        year: 2016,
        genres: ["sci-fi", "action"],
        description: "A surgeon becomes a master of the mystic arts.",
        tags: ["marvel", "magic", "visual"]
    },
    {
        title: "Guardians of the Galaxy",
        year: 2014,
        genres: ["action", "comedy", "sci-fi"],
        description: "A misfit band of heroes saves the galaxy with humor and heart.",
        tags: ["marvel", "funny", "space"]
    },
    {
        title: "Kung Fu Panda",
        year: 2008,
        genres: ["animation", "action"],
        description: "A clumsy panda becomes the legendary Dragon Warrior.",
        tags: ["kids", "martial arts", "funny"]
    },
    {
        title: "Coco",
        year: 2017,
        genres: ["animation", "family"],
        description: "A boy travels to the land of the dead to explore his family roots.",
        tags: ["music", "mexico", "emotional"]
    },
    {
        title: "Slumdog Millionaire",
        year: 2008,
        genres: ["drama", "romance"],
        description: "A Mumbai boy recounts his life while competing on a game show.",
        tags: ["india", "poverty", "love"]
    },
    {
        title: "Fanaa",
        year: 2006,
        genres: ["romance", "thriller"],
        description: "A blind woman falls in love with a mysterious man with a dark secret.",
        tags: ["india", "love", "twist"]
    },
    {
        title: "Cast Away",
        year: 2000,
        genres: ["drama", "adventure"],
        description: "A man stranded on a deserted island struggles to survive.",
        tags: ["survival", "island", "slow", "emotional"]
    }

];

const moviePlatforms = {
    "Inception": ["Netflix"],
    "Interstellar": ["Amazon Prime Video"],
    "The Dark Knight": ["Netflix"],
    "La La Land": ["SonyLIV"],
    "The Notebook": ["Netflix"],
    "3 Idiots": ["Netflix", "Amazon Prime Video"],
    "Zindagi Na Milegi Dobara": ["Netflix"],
    "Yeh Jawaani Hai Deewani": ["Netflix"],
    "Drishyam": ["Disney+ Hotstar"],
    "KGF: Chapter 1": ["Amazon Prime Video"],
    "Dil Chahta Hai": ["Netflix"],
    "Baahubali: The Beginning": ["Netflix"],
    "RRR": ["Netflix", "ZEE5"],
    "Dangal": ["Netflix"],
    "Barfi!": ["Netflix"],
    "Andhadhun": ["Netflix"],
    "Tumbbad": ["Amazon Prime Video"],
    "PK": ["Netflix"],
    "Chennai Express": ["Netflix"],
    "Hera Pheri": ["Amazon Prime Video"],
    "Don": ["Netflix"],
    "Bajrangi Bhaijaan": ["Disney+ Hotstar"],
    "Sanju": ["Netflix"],
    "Sita Ramam": ["Amazon Prime Video"],
    "Kantara": ["Amazon Prime Video"],
    "Slumdog Millionaire": ["Amazon Prime Video"],
    "Forrest Gump": ["Netflix"],
    "The Shawshank Redemption": ["Amazon Prime Video"],
    "The Godfather": ["Amazon Prime Video"],
    "The Matrix": ["Amazon Prime Video"],
    "The Social Network": ["Netflix"],
    "The Wolf of Wall Street": ["Netflix"],
    "Whiplash": ["Amazon Prime Video"],
    "Moana": ["Disney+ Hotstar"],
    "Frozen": ["Disney+ Hotstar"],
    "Up": ["Disney+ Hotstar"],
    "Inside Out": ["Disney+ Hotstar"],
    "Coco": ["Disney+ Hotstar"],
    "Toy Story": ["Disney+ Hotstar"],
    "Avengers: Endgame": ["Disney+ Hotstar"],
    "Spider-Man: Into the Spider-Verse": ["Netflix"],
    "Get Out": ["Amazon Prime Video"],
    "A Quiet Place": ["Netflix"],
    "Hereditary": ["Amazon Prime Video"],
    "Mad Max: Fury Road": ["Amazon Prime Video"],
    "Edge of Tomorrow": ["Amazon Prime Video"],
    "Shrek": ["Netflix"],
    "How to Train Your Dragon": ["Netflix"],
    "Hotel Rwanda": ["Amazon Prime Video"],
    "The Imitation Game": ["Amazon Prime Video"],
    "Annabelle": ["Amazon Prime Video"],
    "Dhoom 2": ["Amazon Prime Video"],
    "OMG: Oh My God!": ["ZEE5"],
    "Kantara": ["Amazon Prime Video"],
    "Veer-Zaara": ["Amazon Prime Video"],
    "Jojo Rabbit": ["Disney+ Hotstar"],
    "Soul": ["Disney+ Hotstar"],
    "Kung Fu Panda": ["Netflix"],
    "Cast Away": ["Amazon Prime Video"]
    // You can keep adding mappings for remaining titles if you like.
};


// ===============================
// 1. Keyword → Genre mapping
// ===============================
const keywordToGenre = {
    "funny": "comedy",
    "laugh": "comedy",
    "comedy": "comedy",

    "romantic": "romance",
    "love": "romance",
    "cute": "romance",
    "romance": "romance",

    "scary": "horror",
    "ghost": "horror",
    "horror": "horror",
    "creepy": "horror",

    "space": "sci-fi",
    "sci-fi": "sci-fi",
    "future": "sci-fi",
    "aliens": "sci-fi",

    "emotional": "drama",
    "sad": "drama",
    "slow": "drama",
    "drama": "drama",

    "action": "action",
    "fight": "action",
    "battle": "action",
    "guns": "action",
    "mass": "action",

    "dark": "thriller",
    "thrilling": "thriller",
    "suspense": "thriller",
    "mystery": "thriller",

    "kids": "family",
    "family": "family",
    "cartoon": "animation",
    "animation": "animation",

    "college": "comedy",
    "school": "comedy",
    "friends": "comedy"
};

// ===============================
// 2. Scoring helper for search
// ===============================
function scoreMovie(movie, queryWords) {
    let score = 0;

    const allText = (
        movie.title + " " +
        movie.genres.join(" ") + " " +
        movie.description + " " +
        movie.tags.join(" ")
    ).toLowerCase();

    // Direct word matches
    queryWords.forEach(word => {
        if (!word) return;
        if (allText.includes(word)) {
            score += 3;
        }
    });

    // Genre mapping matches
    queryWords.forEach(word => {
        const mappedGenre = keywordToGenre[word];
        if (mappedGenre && movie.genres.includes(mappedGenre)) {
            score += 5;
        }
    });

    return score;
}

// ===============================
// 3. Main search function
// ===============================
function findMovies(preferenceText) {
    const query = preferenceText.toLowerCase();
    const queryWords = query.split(/[^a-z]+/).filter(Boolean);

    const scored = movies.map(movie => ({
        movie,
        score: scoreMovie(movie, queryWords)
    }));

    const filtered = scored.filter(item => item.score > 0);

    filtered.sort((a, b) => b.score - a.score);

    // return top 6 movies
    return filtered.slice(0, 6).map(item => item.movie);
}

// ===============================
// 4. DOM references
// ===============================
const searchBtn = document.getElementById("searchBtn");
const preferencesInput = document.getElementById("preferences");
const resultsDiv = document.getElementById("results");

const searchSection = document.getElementById("searchSection");
const resultsSection = document.getElementById("resultsSection");
const detailSection = document.getElementById("detailSection");
const backBtn = document.getElementById("backBtn");

const detailTitle = document.getElementById("detailTitle");
const detailMeta = document.getElementById("detailMeta");
const detailPlatforms = document.getElementById("detailPlatforms");
const detailDesc = document.getElementById("detailDesc");
const detailTags = document.getElementById("detailTags");
const detailPoster = document.getElementById("detailPoster");
const similarMoviesDiv = document.getElementById("similarMovies");


// ===============================
// 5. View switching
// ===============================
function showListView() {
    if (searchSection) searchSection.classList.remove("hidden");
    if (resultsSection) resultsSection.classList.remove("hidden");
    if (detailSection) detailSection.classList.add("hidden");
}

function showDetailView() {
    if (searchSection) searchSection.classList.add("hidden");
    if (resultsSection) resultsSection.classList.add("hidden");
    if (detailSection) detailSection.classList.remove("hidden");
}

if (backBtn) {
    backBtn.addEventListener("click", showListView);
}

// ===============================
// 6. Similarity for "Suggested Movies"
// ===============================
function similarityScore(a, b) {
    let score = 0;

    // genre overlap
    a.genres.forEach(g => {
        if (b.genres.includes(g)) score += 3;
    });

    // tag overlap
    a.tags.forEach(t => {
        if (b.tags.includes(t)) score += 1;
    });

    return score;
}

function getSimilarMovies(movie, max = 6) {
    const scored = movies
        .filter(m => m !== movie)
        .map(m => ({
            movie: m,
            score: similarityScore(movie, m)
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, max);

    return scored.map(item => item.movie);
}

// ===============================
// 7. Open detail page for a movie
// ===============================
function openMovieDetail(movieIndex) {
    const movie = movies[movieIndex];
    if (!movie) return;

    // Fill main info
   detailTitle.textContent = movie.title;
detailMeta.textContent = `${movie.genres.join(", ")} • ${movie.year}`;

const platforms = moviePlatforms[movie.title];
if (platforms && platforms.length > 0) {
    detailPlatforms.textContent = `Available on: ${platforms.join(", ")}`;
} else {
    detailPlatforms.textContent = `Available on: (Not specified)`;
}

detailDesc.textContent = movie.description;
detailTags.innerHTML = movie.tags
    .map(tag => `<span class="badge">${tag}</span>`)
    .join("");

    // Simple "poster": first letter of title
    const firstLetter = movie.title.charAt(0).toUpperCase();
    detailPoster.textContent = firstLetter;

    // Suggested similar movies
    const similar = getSimilarMovies(movie);
    if (similar.length === 0) {
        similarMoviesDiv.innerHTML = `
            <p class="placeholder-text">No strong similar movies found.</p>
        `;
    } else {
        const html = similar.map(m => {
            const idx = movies.indexOf(m);
            const genresText = m.genres.join(", ");
            const tagsHtml = m.tags
                .map(tag => `<span class="badge">${tag}</span>`)
                .join("");

            return `
                <article class="movie-card" data-id="${idx}">
                    <div class="movie-title">${m.title}</div>
                    <div class="movie-meta">${genresText} • ${m.year}</div>
                    <p class="movie-desc">${m.description}</p>
                    <div class="badges">${tagsHtml}</div>
                </article>
            `;
        }).join("");

        similarMoviesDiv.innerHTML = html;

        // Make suggested movie cards clickable too
        const simCards = similarMoviesDiv.querySelectorAll(".movie-card");
        simCards.forEach(card => {
            card.addEventListener("click", () => {
                const id = parseInt(card.dataset.id, 10);
                openMovieDetail(id);
            });
        });
    }

    showDetailView();
}

// ===============================
// 8. Render movie list (search results)
// ===============================
function renderMovies(movieList) {
    if (movieList.length === 0) {
        resultsDiv.innerHTML = `
            <p class="placeholder-text">
                No strong match found 😔<br/>
                Try words like: <b>funny</b>, <b>romantic</b>, <b>scary</b>, <b>college</b>, <b>space</b>, <b>family</b>...
            </p>
        `;
        return;
    }

    const html = movieList.map(movie => {
        const genresText = movie.genres.join(", ");
        const tagsHtml = movie.tags
            .map(tag => `<span class="badge">${tag}</span>`)
            .join("");

        const index = movies.indexOf(movie);

        return `
            <article class="movie-card" data-id="${index}">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">${genresText} • ${movie.year}</div>
                <p class="movie-desc">${movie.description}</p>
                <div class="badges">${tagsHtml}</div>
            </article>
        `;
    }).join("");

    resultsDiv.innerHTML = html;

    // Attach click events to open detail page
    const cards = resultsDiv.querySelectorAll(".movie-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const id = parseInt(card.dataset.id, 10);
            openMovieDetail(id);
        });
    });
}

// ===============================
// 9. Search button behaviour
// ===============================
searchBtn.addEventListener("click", () => {
    const text = preferencesInput.value.trim();

    if (text.length === 0) {
        resultsDiv.innerHTML = `<p class="placeholder-text">Please type something about the kind of movie you want 🎥</p>`;
        showListView();
        return;
    }

    const suggestions = findMovies(text);
    renderMovies(suggestions);
    showListView(); // stay in list mode after search
});
