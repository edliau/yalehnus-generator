import random

# Lists of phrases and templates
firstNames = ["Alex", "Jordan", "Taylor", "Morgan"]
lastNames = ["Smith", "Brown", "Davis", "Lee"]
ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
years = ["Freshman", "Sophomore", "Junior", "Senior"]
majors = ['Anthropology', ' Arts and Humanities', 'Economics', 'Environmental Studies', 'Global Affairs', 'History', 'Life Sciences', 'Literature', 'Mathematical, Computational and Statistical Sciences (MCS)', 'Philosophy', ' Philosophy, Politics and Economics (PPE)', 'Physical Sciences', 'Psychology', 'Urban Studies']
courses = ['Anthropology', ' Arts and Humanities', 'Economics', 'Environmental Studies', 'Global Affairs', 'History', 'Life Sciences', 'Literature', 'Mathematical, Computational and Statistical Sciences (MCS)', 'Philosophy', ' Philosophy, Politics and Economics (PPE)', 'Physical Sciences', 'Psychology', 'Urban Studies', 'Chinese Studies', ' Global Antiquity', 'Innovation and Design']
stuorgs = ['KidsAccomplish', 'Humanism.Yale-NUS', 'European Horizons Yale-NUS Chapter', 'Urban Culture Society', 'Yale-NUS Literary Collective', 'Yale-NUS Habitat for Humanity Campus Chapter', 'Yale-NUS Student Government', 'Ashen Light: Astronomy Club', 'Civic Affairs Society (CAS)', 'Community Impact (ComPact)', 'Debate Society', 'Emerging Markets Institute', 'GAMBIT: Yale-NUS Chess Club', "Good Ol' Yale-NUS Adventure Club (GOYAC)", 'EcoPlanet', 'Improv Comedy Conglomerate', 'Japan Society', 'Let Them Eat Cake: Yale-NUS Baking Club', "Singers' Guild", 'Society of Latinx', 'Society of Yale-NUS College Dancers (sYNCd)', 'Southeast Asian Society', 'The Afro Society', 'The Architecture Collective', 'The G Spot', 'The Mocktant', 'The Octant: A Yale-NUS Student Publication', 'The Roosevelt Institute at Yale-NUS College', 'Tònes', 'Visual Art Society', 'Yale-NUS Ballroom Society', 'Yale-NUS Chamber Music Collective', 'Yale-NUS Christian Fellowship', 'Yale-NUS Consulting Group', 'Yale-NUS Contract Bridge Club', 'Yale-NUS Entrepreneurship Society', 'Yale-NUS Farming Collective', 'Yale-NUS Fashion Society', 'Yale-NUS Film Society', 'Yale-NUS Global China Connection', 'Yale-NUS Historians', 'Yale-NUS Philosophy Society', 'Yale-NUS Quiz Bowl Society', 'Yale-NUS Scuba Environments Association', 'Yale-NUS Student Investment Group', 'Yale-NUS Technology', 'Yale-NUS Undergraduate Society for Academic Research', 'Yale-NUS United Nations Society', 'Yale-NUS Womxn in Business', 'YNC_Hacks', 'YNDUS: South Asian Student Society', 'Yale-NUS Muslim Students Association', 'Yale-NUS Brewhouse']
pronouns = ["he is","she is","they are"]
causes = ["collects funds for the crisis in Gaza", "raises awareness for Palestine", "campaigns for reduced fossil fuel usage", "raises awareness for endangered species worldwide", "collects trash while kayaking at Sembawang", "packs pads for Go With The Flow", "raises awareness on sexual wellness", "advocates for voter consicousness in Singapore", "voices opinions about court rulings in Singapore"]
activities = ["aggressively drinking coffee", "downing wine by the bucketful", "endlessly yapping about the meaning of life", "spending a ridiculous amount of time scrolling TikTok", "being unhealthily obsessed with YNC Polls results", "hitting literally any gym except the YNC one", "debating the political future of Singapore in the dining hall", "drawing portraits in the Elm courtyard", "playing low-stakes mahojong with liquid supplements", "ballroom dancing with friends even though they have no idea how to", "yapping at Agora while their work chills in the library", "making many Octobox runs", "consuming a healthy amount of SuperSnacks waffles", "running to Brewhouse at 10:45am for that order", "updating their LinkedIn profile in class", "reading The Intelligent Investor", "watching their stock portfolio 10x", "cafe-hopping and thrift shopping at Joo Chiat", "taking a weekend trip to Bali for a dive", "doing photoshoots in every nook and cranny of campus", "practicing music in the music rooms", "providing live music in the common lounges", "playing pool in the Saga buttery", "playing ping-pong in the Cendana courtyard", "doing their nails in JB"]

# Function to generate a random student portfolio
def generate_portfolio():
    firstName = random.choice(firstNames)
    lastName = random.choice(lastNames)
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
    cause = random.choice(causes)
    
    portfolio = (
        f"{firstName} {lastName} is a {age}-year-old {year} majoring in {major} {minor}. "
        f"While on campus, {firstName} is involved in {selected_stuorgs[0]} and {selected_stuorgs[1]}. "
        f"{pronoun.capitalize()} also {cause} when {pronoun} able."
        f"In {firstName}'s free time, {pronoun} found {', '.join(free_time_activities[:-1])}, and {free_time_activities[-1]}. "
    )
    
    return portfolio

# Return generated portfolio
generate_portfolio()
