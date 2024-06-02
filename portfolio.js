async function generatePortfolio() {
    // Load Pyodide
    const pyodide = await loadPyodide({ indexURL : "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/" });

    // Define Python script
    const pythonCode = `
    import random

    # Lists of phrases and templates
    names = ["Alex Smith", "Jordan Brown", "Taylor Davis", "Morgan Lee"]
    ages = [18, 19, 20, 21, 22]
    majors = ["Computer Science", "Mathematics", "Physics", "Biology"]
    courses = ["Introduction to Programming", "Calculus I", "Physics II", "Organic Chemistry"]
    activities = ['KidsAccomplish', 'Humanism.Yale-NUS', 'European Horizons Yale-NUS Chapter', 'Urban Culture Society', 'Yale-NUS Literary Collective', 'Yale-NUS Habitat for Humanity Campus Chapter', 'Yale-NUS Student Government', 'Ashen Light: Astronomy Club', 'Civic Affairs Society (CAS)', 'Community Impact (ComPact)', 'Debate Society', 'Emerging Markets Institute', 'GAMBIT: Yale-NUS Chess Club', "Good Ol' Yale-NUS Adventure Club (GOYAC)", 'EcoPlanet', 'Improv Comedy Conglomerate', 'Japan Society', 'Let Them Eat Cake: Yale-NUS Baking Club', "Singers' Guild", 'Society of Latinx', 'Society of Yale-NUS College Dancers (sYNCd)', 'Southeast Asian Society', 'The Afro Society', 'The Architecture Collective', 'The G Spot', 'The Mocktant', 'The Octant: A Yale-NUS Student Publication', 'The Roosevelt Institute at Yale-NUS College', 'Tònes', 'Visual Art Society', 'Yale-NUS Ballroom Society', 'Yale-NUS Chamber Music Collective', 'Yale-NUS Christian Fellowship', 'Yale-NUS Consulting Group', 'Yale-NUS Contract Bridge Club', 'Yale-NUS Entrepreneurship Society', 'Yale-NUS Farming Collective', 'Yale-NUS Fashion Society', 'Yale-NUS Film Society', 'Yale-NUS Global China Connection', 'Yale-NUS Historians', 'Yale-NUS Philosophy Society', 'Yale-NUS Quiz Bowl Society', 'Yale-NUS Scuba Environments Association', 'Yale-NUS Student Investment Group', 'Yale-NUS Technology', 'Yale-NUS Undergraduate Society for Academic Research', 'Yale-NUS United Nations Society', 'Yale-NUS Womxn in Business', 'YNC_Hacks', 'YNDUS: South Asian Student Society', 'Yale-NUS Muslim Students Association']
    achievements = ["Dean's list", "First place in regional math competition", "Published research paper in undergraduate journal", "Elected as student body president"]
    personal_statements = [
        "I am passionate about using technology to solve real-world problems.",
        "My goal is to pursue a career in research and contribute to scientific advancements.",
        "I strive to make a positive impact through my academic and extracurricular pursuits.",
        "My diverse experiences have shaped my commitment to lifelong learning."
    ]
    
    # Function to generate a random student portfolio
    def generate_portfolio():
        name = random.choice(names)
        age = random.choice(ages)
        major = random.choice(majors)
        selected_activities = random.sample(activities, 2)  # Select 2 random activities
        num_free_time_activities = random.randint(2, 4)
        free_time_activities = random.sample(activities, num_free_time_activities)
        personal_statement = random.choice(personal_statements)
        
        portfolio = (
            f"{name} is a {age}-year-old majoring in {major}. "
            f"On campus, {name} is involved in {selected_activities[0]} and {selected_activities[1]}. "
            f"In {name}'s free time, {name} enjoys {', '.join(free_time_activities[:-1])}, and {free_time_activities[-1]}. "
            f"{personal_statement}"
        )
        
        return portfolio
    
    # Return generated portfolio
    portfolio = generate_portfolio()
    
`;

    // Run Python code
    await pyodide.runPythonAsync(pythonCode);

    // Get generated portfolio directly
    const portfolio = pyodide.globals.get("portfolio");

    // Display portfolio in HTML
    document.getElementById("portfolio").innerText = portfolio;
}

// Call generatePortfolio function when the page is loaded
generatePortfolio();
