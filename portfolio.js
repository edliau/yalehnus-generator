let pyodide;

async function loadPyodideIfNeeded() {
    if (!pyodide) {
        document.getElementById("generate-button").disabled = true;
        pyodide = await loadPyodide({ indexURL : "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/" });
        document.getElementById("generate-button").disabled = false;
    }
}

async function generatePortfolio() {
    // Load Pyodide if not already loaded
    await loadPyodideIfNeeded();

    // Define Python script
    const pythonCode = `
import random

# Lists of phrases and templates
firstNames = ["Alexander", "Benjamin", "Charlotte", "David", "Eleanor", "Felix", "Grace", "Hannah", "Isaac", "Jasmine", "Kai", "Liam", "Megan", "Nathan", "Olivia", "Penelope", "Quentin", "Ryan", "Sophia", "Tyler", "Uma", "Victoria", "William", "Xavier", "Yasmin", "Zachary", "Aaron", "Bella", "Cameron", "Daniel", "Emma", "Fiona", "Gavin", "Hailey", "Iris", "Jack", "Kara", "Lucas", "Madeline", "Noah", "Owen", "Paige", "Quinn", "Rachel", "Samuel", "Tara", "Ulysses", "Vanessa", "Wesley", "Xander", "Yvette", "Brian", "Chloe", "Dylan", "Ethan", "Faith", "Gabriel", "Hazel", "Ivy", "Jordan", "Kaitlyn", "Logan", "Mia", "Nora", "Oscar", "Phoebe", "Reed", "Sarah", "Thomas", "Uriah", "Violet", "Wyatt", "Xiomara", "Yvonne", "Zane"]
lastNames = ["Tan", "Lee", "Ng", "Lim", "Ong", "Teo", "Yeo", "Chia", "Goh", "Ho", "Koh", "Chan", "Wong", "Yap", "Liew", "Sim", "Chew", "Lai", "Chong", "Yee", "Kang", "Pang", "Foo", "Heng", "Fong", "Nguyen", "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Ng", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Rahman", "Tan", "Chandra", "Mani", "Ibrahim", "Mohamed", "Kumar", "Raj", "Lai", "Abdul", "Singh", "Rao", "Menon", "Cheong", "Tan", "Wei", "Jiang"]
ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
locations = ['Shirdi, India', 'Johor Bahru, Malaysia', 'Shizuoka, Japan', 'Ruwaished, Jordan', 'Woodlands, Singapore', 'Yew Tee, Singapore', 'Toa Payoh, Singapore', 'Jurong East, Singapore', 'Bukit Batok, Singapore', 'Bishan, Singapore', 'Bangkok, Thailand', 'Parit Sulong, Malaysia', 'Ulaanbaatar, Mongolia', 'Tennessee, USA', 'Wyoming, USA', 'Seoul, Korea', 'Aberdeen, Scotland', 'Liverpool, UK', 'Enugu, Nigeria', 'Harare, Zimbabwe', 'Cape Town, South Africa', 'La Paz, Bolivia', 'Natal, Brazil', 'Christchurch, New Zealand', 'Yogyakarta, Indonesia', 'Medan, Indonesia', 'Sagada, the Philippines', 'Kunming, China']
years = ["Freshman", "Sophomore", "Junior", "Senior"]
majors = ['Anthropology', ' Arts and Humanities', 'Economics', 'Environmental Studies', 'Global Affairs', 'History', 'Life Sciences', 'Literature', 'Mathematical, Computational and Statistical Sciences (MCS)', 'Philosophy', ' Philosophy, Politics and Economics (PPE)', 'Physical Sciences', 'Psychology', 'Urban Studies']
courses = ['Anthropology', ' Arts and Humanities', 'Economics', 'Environmental Studies', 'Global Affairs', 'History', 'Life Sciences', 'Literature', 'Mathematical, Computational and Statistical Sciences (MCS)', 'Philosophy', ' Philosophy, Politics and Economics (PPE)', 'Physical Sciences', 'Psychology', 'Urban Studies', 'Chinese Studies', ' Global Antiquity', 'Innovation and Design']
stuorgs = ['KidsAccomplish', 'Humanism.Yale-NUS', 'European Horizons Yale-NUS Chapter', 'Urban Culture Society', 'Yale-NUS Literary Collective', 'Yale-NUS Habitat for Humanity Campus Chapter', 'Yale-NUS Student Government', 'Ashen Light: Astronomy Club', 'Civic Affairs Society (CAS)', 'Community Impact (ComPact)', 'Debate Society', 'Emerging Markets Institute', 'GAMBIT: Yale-NUS Chess Club', "Good Ol' Yale-NUS Adventure Club (GOYAC)", 'EcoPlanet', 'Improv Comedy Conglomerate', 'Japan Society', 'Let Them Eat Cake: Yale-NUS Baking Club', "Singers' Guild", 'Society of Latinx', 'Society of Yale-NUS College Dancers (sYNCd)', 'Southeast Asian Society', 'The Afro Society', 'The Architecture Collective', 'The G Spot', 'The Mocktant', 'The Octant: A Yale-NUS Student Publication', 'The Roosevelt Institute at Yale-NUS College', 'Tònes', 'Visual Art Society', 'Yale-NUS Ballroom Society', 'Yale-NUS Chamber Music Collective', 'Yale-NUS Christian Fellowship', 'Yale-NUS Consulting Group', 'Yale-NUS Contract Bridge Club', 'Yale-NUS Entrepreneurship Society', 'Yale-NUS Farming Collective', 'Yale-NUS Fashion Society', 'Yale-NUS Film Society', 'Yale-NUS Global China Connection', 'Yale-NUS Historians', 'Yale-NUS Philosophy Society', 'Yale-NUS Quiz Bowl Society', 'Yale-NUS Scuba Environments Association', 'Yale-NUS Student Investment Group', 'Yale-NUS Technology', 'Yale-NUS Undergraduate Society for Academic Research', 'Yale-NUS United Nations Society', 'Yale-NUS Womxn in Business', 'YNC_Hacks', 'YNDUS: South Asian Student Society', 'Yale-NUS Muslim Students Association', 'Yale-NUS Brewhouse']
pronouns = ["He","She","They"]
activities = ["aggressively drinking coffee from UTown Starbucks", "downing wine by the glassful at night", "endlessly yapping about the meaning of life over meals", "spending a ridiculous amount of time scrolling TikTok on their bed", "being unhealthily obsessed with YNC Polls results", "hitting up literally any gym except the YNC one", "debating the political future of Singapore in the dining hall", "drawing portraits in the Elm courtyard", "playing low-stakes mahojong with liquid supplements", "ballroom dancing with friends even though they have no idea how to", "yapping at Agora while their work chills in the library", "making way too many Octobox runs", "consuming a healthy amount of SuperSnacks waffles", "running to Brewhouse at 10:45am", "updating their LinkedIn profile in class", "reading The Intelligent Investor", "watching their stock portfolio 10x", "cafe-hopping at Joo Chiat", "taking a weekend trip to Bali for a dive", "doing photoshoots in every nook and cranny of campus", "practicing music in the music rooms", "providing live music in the common lounges", "playing pool in the Saga buttery", "playing ping-pong in the Cendana courtyard", "doing their nails in JB"]

# Function to generate a random student portfolio
def generate_portfolio():
    firstName = random.choice(firstNames)
    lastName = random.choice(lastNames)
    location = random.choice(locations)
    age = random.choice(ages)
    year = random.choice(years)
    major = random.choice(majors)
    course = random.choice([m for m in courses if m != major])
    minor_value = random.random()
    if minor_value < 0.25:
        minor = f" with a minor in {course}" 
    elif minor_value < 0.5:
        minor = f" with a second major in {random.choice([m for m in majors if m != major])}"
    elif minor_value < 0.75:
        minor = f" with a double degree in Law"
    else:
        minor = ""
    selected_stuorgs = random.sample(stuorgs, 2)  # Select 2 random activities
    num_free_time_activities = random.randint(2, 4)
    free_time_activities = random.sample(activities, num_free_time_activities)
    pronoun = random.choice(pronouns)
    
    portfolio = (
        f"{firstName} {lastName} is a {age}-year-old {year} from {location}, majoring in {major} {minor}. "
        f"While on campus, {firstName} is involved in {selected_stuorgs[0]} and {selected_stuorgs[1]}. "
        f"{pronoun} can be found {', '.join(free_time_activities[:-1])}, and {free_time_activities[-1]}. "
    )
    
    return portfolio

# Return generated portfolio
generate_portfolio()

`;

    // Run Python code
    const portfolio = await pyodide.runPythonAsync(pythonCode);

    // Display portfolio in HTML with transition effect
    const portfolioElement = document.getElementById("portfolio");
    portfolioElement.classList.remove("loaded");
    portfolioElement.innerText = portfolio;
    setTimeout(() => {
        portfolioElement.classList.add("loaded");
    }, 100);
}

document.getElementById("generate-button").addEventListener("click", generatePortfolio);