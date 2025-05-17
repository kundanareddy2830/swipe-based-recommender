import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './App.css';

const slides = [
  {
    id: 1,
    title: "Visual Mind Mapping",
    description: "Transform complex ideas into colorful, visual mind maps. This technique helps organize information spatially, making connections between concepts clear and memorable.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    tags: ["visual", "organization", "creative"],
    subjectTags: ["science", "humanities", "language learning"],
    features: [0.9, 0.6, 0.7, 0.4, 0.8],
    quote: "A picture is worth a thousand words, a mind map is worth a thousand pictures.",
    difficulty: "Beginner",
    timeCommitment: "10-15 min",
    implementationHints: "Start with a central concept and branch outward, using colors to categorize related ideas. Add small drawings to enhance visual memory.",
    gettingStarted: "1. Place main topic in center. 2. Add primary branches for main ideas. 3. Add secondary branches for supporting details. 4. Use colors and images.",
    resources: "https://tonybuzan.com/about/mind-mapping/"
  },
  {
    id: 2,
    title: "Pomodoro Technique",
    description: "Master focused study sessions with the science-backed Pomodoro method. 25 minutes of intense concentration followed by 5-minute breaks dramatically improves productivity.",
    imageUrl: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&w=900&q=80",
    tags: ["focus", "productivity", "time-management"],
    subjectTags: ["all subjects", "exam preparation", "writing"],
    features: [0.3, 0.9, 0.5, 0.7, 0.4],
    quote: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    difficulty: "Beginner",
    timeCommitment: "25 min sessions",
    implementationHints: "Use a dedicated timer and commit to no distractions during the focus period. Completely disconnect from work during breaks.",
    gettingStarted: "1. Choose a task. 2. Set timer for 25 minutes. 3. Work until timer rings. 4. Take 5-minute break. 5. Every 4 pomodoros, take longer 15-30 minute break.",
    resources: "https://francescocirillo.com/pages/pomodoro-technique"
  },
  {
    id: 3,
    title: "Interactive Flashcards",
    description: "Enhance memorization through digital flashcards with spaced repetition. This system automatically prioritizes difficult material, optimizing your study time for maximum retention.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tags: ["memory", "interactive", "efficient"],
    subjectTags: ["language learning", "terminology", "definitions"],
    features: [0.6, 0.7, 0.9, 0.6, 0.5],
    quote: "Memory is the mother of all wisdom.",
    difficulty: "Beginner",
    timeCommitment: "15-20 min daily",
    implementationHints: "Keep cards simple with one concept per card. Use images when possible. Review daily for best results.",
    gettingStarted: "1. Identify key concepts to memorize. 2. Create question/answer pairs. 3. Review cards daily. 4. Trust the spaced repetition algorithm.",
    resources: "https://apps.ankiweb.net/"
  },
  {
    id: 4,
    title: "Deep Research Methods",
    description: "Develop advanced academic research skills using professional databases and analytical frameworks. Learn to identify credible sources and synthesize complex information.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    tags: ["research", "academic", "analysis"],
    subjectTags: ["humanities", "sciences", "thesis preparation"],
    features: [0.5, 0.8, 0.4, 0.9, 0.6],
    quote: "Research is formalized curiosity. It is poking and prying with a purpose.",
    difficulty: "Advanced",
    timeCommitment: "Ongoing",
    implementationHints: "Develop a systematic approach to note-taking that links sources to your thesis points. Create an organizational system for your findings.",
    gettingStarted: "1. Define research question. 2. Identify key databases for your field. 3. Learn boolean search operators. 4. Evaluate source credibility. 5. Organize findings systematically.",
    resources: "https://scholar.google.com/"
  },
  {
    id: 5,
    title: "Concept Visualization",
    description: "Convert abstract theories into tangible visual models. This approach makes even the most complex concepts accessible by engaging your visual processing capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    tags: ["visual", "conceptual", "understanding"],
    subjectTags: ["physics", "mathematics", "engineering"],
    features: [0.9, 0.5, 0.6, 0.7, 0.8],
    quote: "If you can't explain it simply, you don't understand it well enough.",
    difficulty: "Intermediate",
    timeCommitment: "30-60 min",
    implementationHints: "Sketch relationships between variables. Use diagrams to represent processes and color to indicate relationships.",
    gettingStarted: "1. Identify the abstract concept. 2. List key components. 3. Sketch visual relationships. 4. Refine and simplify. 5. Test understanding by explaining from your visual.",
    resources: "https://www.visual-paradigm.com/tutorials/"
  },
  {
    id: 6,
    title: "Collaborative Learning",
    description: "Accelerate understanding through group study sessions. Explaining concepts to others reinforces your own knowledge while different perspectives reveal new insights.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    tags: ["teamwork", "discussion", "exchange"],
    subjectTags: ["all subjects", "problem solving", "complex topics"],
    features: [0.5, 0.6, 0.9, 0.7, 0.7],
    quote: "Alone we can do so little; together we can do so much.",
    difficulty: "Intermediate",
    timeCommitment: "1-2 hours",
    implementationHints: "Establish clear goals for the session. Assign roles like facilitator, note-taker, and timekeeper to maintain focus.",
    gettingStarted: "1. Form a group of 3-5 people. 2. Set specific learning objectives. 3. Prepare materials in advance. 4. Take turns explaining concepts. 5. Challenge and question each other.",
    resources: "https://www.gse.harvard.edu/news/uk/09/09/benefits-collaborative-learning"
  },
  {
    id: 7,
    title: "Structured Note-Taking",
    description: "Master the Cornell Method and other powerful note-taking systems. These structured approaches organize information during lectures for efficient review and deeper understanding.",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    tags: ["organization", "efficiency", "retention"],
    subjectTags: ["lectures", "reading comprehension", "all subjects"],
    features: [0.7, 0.8, 0.5, 0.8, 0.6],
    quote: "The palest ink is better than the best memory.",
    difficulty: "Beginner",
    timeCommitment: "During lectures + 10 min review",
    implementationHints: "Divide your page into sections: a narrow left column for cues, a wide right column for notes, and a bottom section for summaries.",
    gettingStarted: "1. Create template with cue column (2.5\") and note column (6\"). 2. Take notes in right column during lecture. 3. Write cues in left column after lecture. 4. Summarize at bottom of page.",
    resources: "http://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/"
  },
  {
    id: 8,
    title: "Immersive Learning",
    description: "Transform passive studying into active engagement through immersive learning environments. Virtual simulations and real-world applications cement abstract knowledge.",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80",
    tags: ["interactive", "experiential", "engaging"],
    subjectTags: ["sciences", "language learning", "history"],
    features: [0.8, 0.7, 0.9, 0.6, 0.8],
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    difficulty: "Advanced",
    timeCommitment: "Variable (1-3 hours)",
    implementationHints: "Look for VR applications in your field. For languages, find native speaker conversation groups or immersion environments.",
    gettingStarted: "1. Identify interactive resources for your subject. 2. Schedule dedicated immersion sessions. 3. Remove distractions during immersion. 4. Reflect and take notes afterward.",
    resources: "https://www.classvrready.com/education"
  },
  {
    id: 9,
    title: "Creative Problem-Solving",
    description: "Break through academic obstacles with design thinking and lateral reasoning. These creative frameworks help tackle complex problems from unexpected angles.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    tags: ["creativity", "problem-solving", "innovation"],
    subjectTags: ["engineering", "business", "mathematics"],
    features: [0.6, 0.5, 0.7, 0.6, 0.9],
    quote: "Creativity is intelligence having fun.",
    difficulty: "Intermediate",
    timeCommitment: "30-90 min",
    implementationHints: "Start with divergent thinking (generate many possibilities) then move to convergent thinking (evaluate and select options).",
    gettingStarted: "1. Define problem clearly. 2. Generate multiple solutions without judgment. 3. Consider wild ideas. 4. Combine and refine ideas. 5. Evaluate and implement best solution.",
    resources: "https://www.ideou.com/pages/design-thinking"
  },
  {
    id: 10,
    title: "Deliberate Practice",
    description: "Optimize skill acquisition through systematic, focused practice targeting specific weaknesses. This evidence-based approach is how experts in every field achieve mastery.",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80",
    tags: ["mastery", "focus", "practice"],
    subjectTags: ["mathematics", "music", "languages"],
    features: [0.4, 0.9, 0.6, 0.8, 0.5],
    quote: "It's not that I'm so smart, it's just that I stay with problems longer.",
    difficulty: "Advanced",
    timeCommitment: "1 hour daily",
    implementationHints: "Focus intensely on your weakest areas. Seek immediate feedback and make incremental adjustments to technique.",
    gettingStarted: "1. Identify specific skill to improve. 2. Break down into components. 3. Focus on weakest component. 4. Get expert feedback. 5. Repeat with progressive difficulty.",
    resources: "https://jamesclear.com/deliberate-practice-theory"
  },
  {
    id: 11,
    title: "Gamified Learning",
    description: "Turn study sessions into engaging games with achievement systems and progress tracking. Gamification triggers dopamine release, making learning addictively enjoyable.",
    imageUrl: "https://images.unsplash.com/photo-1638697106371-ba00070668e9?auto=format&fit=crop&w=900&q=80",
    tags: ["fun", "motivation", "interactive"],
    subjectTags: ["languages", "facts memorization", "skill building"],
    features: [0.7, 0.5, 0.9, 0.4, 0.8],
    quote: "Learning is not a spectator sport.",
    difficulty: "Beginner",
    timeCommitment: "15-30 min daily",
    implementationHints: "Set up a reward system with points, levels, and achievements. Create friendly competition with study partners.",
    gettingStarted: "1. Choose a learning app with gamification. 2. Set daily XP goals. 3. Maintain streaks. 4. Compete with friends. 5. Reward milestones with real-life treats.",
    resources: "https://www.duolingo.com/"
  },
  {
    id: 12,
    title: "Academic Writing Workshop",
    description: "Develop professional-level writing skills through structured practice of thesis development, argumentation, and stylistic refinement. Polish your prose to scholarly standards.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    tags: ["writing", "communication", "analysis"],
    subjectTags: ["essays", "research papers", "humanities"],
    features: [0.3, 0.7, 0.4, 0.9, 0.6],
    quote: "The art of writing is the art of discovering what you believe.",
    difficulty: "Advanced",
    timeCommitment: "2-3 hours per session",
    implementationHints: "Break writing into stages: outlining, drafting, revising for structure, and polishing for style. Seek feedback after each major revision.",
    gettingStarted: "1. Study exemplary papers in your field. 2. Create detailed outline. 3. Write a fast first draft. 4. Revise for structure and argument. 5. Polish language and citations.",
    resources: "https://owl.purdue.edu/owl/purdue_owl.html"
  },
  {
    id: 13,
    title: "Data Visualization",
    description: "Transform complex datasets into intuitive visual representations. This crucial skill helps identify patterns and communicate findings clearly across scientific disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tags: ["statistics", "visual", "analysis"],
    subjectTags: ["data science", "research", "sciences"],
    features: [0.9, 0.6, 0.5, 0.8, 0.7],
    quote: "Numbers have an important story to tell. They rely on you to give them a clear and convincing voice.",
    difficulty: "Intermediate",
    timeCommitment: "1-2 hours",
    implementationHints: "Choose the right visualization for your data type and question. Simplify displays and highlight key insights with color and annotations.",
    gettingStarted: "1. Clarify your data story. 2. Select appropriate chart type. 3. Clean and prepare data. 4. Create basic visualization. 5. Refine for clarity and impact.",
    resources: "https://www.tableau.com/learn/training"
  },
  {
    id: 14,
    title: "Mindfulness for Focus",
    description: "Enhance concentration through evidence-based mindfulness techniques. These practices strengthen attention networks in the brain, reducing distraction and mental fatigue.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    tags: ["focus", "wellness", "mental-clarity"],
    subjectTags: ["all subjects", "test preparation", "stress management"],
    features: [0.4, 0.9, 0.3, 0.5, 0.6],
    quote: "The present moment is the only time over which we have dominion.",
    difficulty: "Beginner",
    timeCommitment: "10-15 min daily",
    implementationHints: "Start with guided meditations focused on breath awareness. Practice before study sessions to prepare your mind for focused work.",
    gettingStarted: "1. Find quiet environment. 2. Sit comfortably with back straight. 3. Focus on your breath. 4. Notice when mind wanders and return focus gently. 5. Practice daily for best results.",
    resources: "https://www.mindful.org/meditation/mindfulness-getting-started/"
  },
  {
    id: 15,
    title: "Creative Expression",
    description: "Integrate artistic methods into your learning process. Drawing, diagramming, and conceptual modeling activate different neural pathways, enhancing comprehension and retention.",
    imageUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
    tags: ["creativity", "visual", "personalization"],
    subjectTags: ["arts", "sciences", "conceptual learning"],
    features: [0.8, 0.4, 0.6, 0.5, 0.9],
    quote: "Creativity is contagious, pass it on.",
    difficulty: "Beginner",
    timeCommitment: "20-40 min",
    implementationHints: "Don't worry about artistic skill - focus on meaningful representation. Use metaphors and analogies to connect new ideas to known concepts.",
    gettingStarted: "1. Choose a complex concept to visualize. 2. Brainstorm visual metaphors. 3. Sketch initial ideas without judgment. 4. Refine your visual to highlight key relationships. 5. Explain it to someone.",
    resources: "https://www.ted.com/talks/graham_shaw_why_people_believe_they_can_t_draw"
  }
];

// Feature dimensions explanation
const featureDimensions = [
  "Visual learning",
  "Focus intensity", 
  "Interactive learning",
  "Academic rigor",
  "Creativity"
];

// Machine learning based recommendation engine
class RecommenderEngine {
  constructor() {
    this.userPreferenceVector = [0.5, 0.5, 0.5, 0.5, 0.5]; // Neutral starting point
    this.learningRate = 0.2;
    this.likedItems = new Set();
    this.dislikedItems = new Set();
  }

  // Update user preference model based on liked/disliked item
  updateModel(itemFeatures, isLiked) {
    const direction = isLiked ? 1 : -1;
    
    // Update each dimension of the preference vector
    this.userPreferenceVector = this.userPreferenceVector.map((prefValue, i) => {
      // Move preference towards item feature if liked, away if disliked
      const updatedValue = prefValue + (direction * this.learningRate * (itemFeatures[i] - prefValue));
      // Constrain values between 0 and 1
      return Math.min(Math.max(updatedValue, 0), 1);
    });
    
    // Track liked/disliked items
    if (isLiked) {
      this.likedItems.add(itemFeatures.toString());
    } else {
      this.dislikedItems.add(itemFeatures.toString());
    }
  }

  // Calculate similarity score between user preferences and item
  getSimilarityScore(itemFeatures) {
    // Cosine similarity between preference vector and item features
    let dotProduct = 0;
    let userMagnitude = 0;
    let itemMagnitude = 0;
    
    for (let i = 0; i < this.userPreferenceVector.length; i++) {
      dotProduct += this.userPreferenceVector[i] * itemFeatures[i];
      userMagnitude += Math.pow(this.userPreferenceVector[i], 2);
      itemMagnitude += Math.pow(itemFeatures[i], 2);
    }
    
    userMagnitude = Math.sqrt(userMagnitude);
    itemMagnitude = Math.sqrt(itemMagnitude);
    
    // Avoid division by zero
    if (userMagnitude === 0 || itemMagnitude === 0) return 0;
    
    return dotProduct / (userMagnitude * itemMagnitude);
  }

  // Get recommendations based on current user preference model
  getRecommendations(allItems, topN = 5) {
    // Filter out items already seen
    const unseenItems = allItems.filter(item => 
      !this.likedItems.has(item.features.toString()) && 
      !this.dislikedItems.has(item.features.toString())
    );
    
    if (unseenItems.length === 0) return [];
    
    // Score and rank items
    return unseenItems
      .map(item => ({
        ...item,
        score: this.getSimilarityScore(item.features)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);
  }

  // Save preferences to local storage
  saveToLocalStorage() {
    const data = {
      preferences: this.userPreferenceVector,
      liked: Array.from(this.likedItems),
      disliked: Array.from(this.dislikedItems)
    };
    localStorage.setItem('recommenderData', JSON.stringify(data));
  }

  // Load preferences from local storage
  loadFromLocalStorage() {
    try {
      const savedData = localStorage.getItem('recommenderData');
      if (savedData) {
        const data = JSON.parse(savedData);
        this.userPreferenceVector = data.preferences || this.userPreferenceVector;
        this.likedItems = new Set(data.liked || []);
        this.dislikedItems = new Set(data.disliked || []);
        return true;
      }
    } catch (e) {
      console.error("Error loading recommender data:", e);
    }
    return false;
  }

  // Reset all preferences
  resetPreferences() {
    this.userPreferenceVector = [0.5, 0.5, 0.5, 0.5, 0.5];
    this.likedItems = new Set();
    this.dislikedItems = new Set();
    localStorage.removeItem('recommenderData');
  }
}

function App() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [fade, setFade] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommender] = useState(() => new RecommenderEngine());
  const [recommendations, setRecommendations] = useState([]);
  const [userPrefs, setUserPrefs] = useState([0.5, 0.5, 0.5, 0.5, 0.5]);
  const [viewedItems, setViewedItems] = useState(new Set());
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [triedTechniques, setTriedTechniques] = useState(new Set());
  const [currentTip, setCurrentTip] = useState("");
  const [userGoals, setUserGoals] = useState([]);
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [newGoal, setNewGoal] = useState("");
  const [showSubjectFilter, setShowSubjectFilter] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showSwipeTutorial, setShowSwipeTutorial] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  // Study tips for the random tip feature
  const studyTips = [
    "Study in short, focused intervals rather than cramming for hours.",
    "Teaching a concept to someone else is one of the best ways to master it.",
    "Sleep is crucial for memory consolidation. Don't skip rest!",
    "Background music without lyrics can improve focus for some people.",
    "Regular exercise improves cognitive function and memory retention.",
    "Stay hydrated! Even mild dehydration impacts cognitive performance.",
    "Review material just before sleep to enhance memory consolidation.",
    "Connect new information to concepts you already understand.",
    "Alternate study locations to improve retention through environmental cues.",
    "Explain difficult concepts in your own words to test understanding.",
    "Test yourself regularly rather than just re-reading material.",
    "Create mental visualizations to encode abstract information.",
    "Take handwritten notes - the process enhances memory better than typing.",
    "Break complex topics into smaller, manageable chunks.",
    "Use all your senses when learning to create stronger memory associations."
  ];

  // Load saved preferences on startup
  useEffect(() => {
    const loaded = recommender.loadFromLocalStorage();
    if (loaded) {
      setUserPrefs([...recommender.userPreferenceVector]);
      updateRecommendations();
    }
    
    // Load viewed items if available
    const savedViewedItems = localStorage.getItem('viewedItems');
    if (savedViewedItems) {
      try {
        setViewedItems(new Set(JSON.parse(savedViewedItems)));
      } catch (e) {
        console.error("Error loading viewed items:", e);
      }
    }
    
    // Load tried techniques
    const savedTriedTechniques = localStorage.getItem('triedTechniques');
    if (savedTriedTechniques) {
      try {
        setTriedTechniques(new Set(JSON.parse(savedTriedTechniques)));
      } catch (e) {
        console.error("Error loading tried techniques:", e);
      }
    }
    
    // Load user goals
    const savedGoals = localStorage.getItem('userGoals');
    if (savedGoals) {
      try {
        setUserGoals(JSON.parse(savedGoals));
      } catch (e) {
        console.error("Error loading user goals:", e);
      }
    }
    
    // Set a random tip
    setRandomTip();
    
    // Check if swipe tutorial has been shown before
    if (localStorage.getItem('swipeTutorialShown')) {
      setShowSwipeTutorial(false);
    }
  }, [recommender]);
  
  // Function to set a random study tip
  const setRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * studyTips.length);
    setCurrentTip(studyTips[randomIndex]);
  };
  
  // Function to mark a technique as tried
  const markAsTried = (id) => {
    const newTriedTechniques = new Set(triedTechniques);
    newTriedTechniques.add(id);
    setTriedTechniques(newTriedTechniques);
    localStorage.setItem('triedTechniques', JSON.stringify(Array.from(newTriedTechniques)));
  };
  
  // Function to add a new goal
  const addGoal = () => {
    if (newGoal.trim() !== "") {
      const updatedGoals = [...userGoals, { text: newGoal, completed: false, date: new Date().toISOString() }];
      setUserGoals(updatedGoals);
      setNewGoal("");
      localStorage.setItem('userGoals', JSON.stringify(updatedGoals));
    }
    setShowGoalForm(false);
  };
  
  // Function to toggle goal completion status
  const toggleGoalCompletion = (index) => {
    const updatedGoals = [...userGoals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setUserGoals(updatedGoals);
    localStorage.setItem('userGoals', JSON.stringify(updatedGoals));
  };
  
  // Function to remove a goal
  const removeGoal = (index) => {
    const updatedGoals = userGoals.filter((_, i) => i !== index);
    setUserGoals(updatedGoals);
    localStorage.setItem('userGoals', JSON.stringify(updatedGoals));
  };
  
  // Function to toggle subject filter
  const toggleSubjectFilter = () => {
    setShowSubjectFilter(!showSubjectFilter);
  };
  
  // Function to handle subject selection
  const handleSubjectSelection = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };
  
  // Get all unique subject tags
  const allSubjectTags = [...new Set(slides.flatMap(slide => slide.subjectTags))].sort();
  
  // Filter slides by selected subjects if any are selected
  const filteredSlides = selectedSubjects.length > 0
    ? slides.filter(slide => slide.subjectTags.some(tag => selectedSubjects.includes(tag)))
    : slides;

  // Update recommendations whenever user preferences change
  const updateRecommendations = () => {
    const recs = recommender.getRecommendations(filteredSlides);
    setRecommendations(recs);
  };

  const handleLike = () => {
    const currentSlide = filteredSlides[index];
    recommender.updateModel(currentSlide.features, true);
    setUserPrefs([...recommender.userPreferenceVector]);
    
    // Update viewed items
    const newViewedItems = new Set(viewedItems);
    newViewedItems.add(index);
    setViewedItems(newViewedItems);
    localStorage.setItem('viewedItems', JSON.stringify(Array.from(newViewedItems)));
    
    // Hide swipe tutorial
    setShowSwipeTutorial(false);
    localStorage.setItem('swipeTutorialShown', 'true');
    
    // Save preferences
    recommender.saveToLocalStorage();
    
    // Update recommendations
    updateRecommendations();
    
    setFeedback("You liked this!");
    setSwipeDirection("right");
    setInteractionCount(prev => prev + 1);
    triggerNextCard();
  };

  const handleDislike = () => {
    const currentSlide = filteredSlides[index];
    recommender.updateModel(currentSlide.features, false);
    setUserPrefs([...recommender.userPreferenceVector]);
    
    // Update viewed items
    const newViewedItems = new Set(viewedItems);
    newViewedItems.add(index);
    setViewedItems(newViewedItems);
    localStorage.setItem('viewedItems', JSON.stringify(Array.from(newViewedItems)));
    
    // Hide swipe tutorial
    setShowSwipeTutorial(false);
    localStorage.setItem('swipeTutorialShown', 'true');
    
    // Save preferences
    recommender.saveToLocalStorage();
    
    // Update recommendations
    updateRecommendations();
    
    setFeedback("You disliked this!");
    setSwipeDirection("left");
    setInteractionCount(prev => prev + 1);
    triggerNextCard();
  };

  const triggerNextCard = () => {
    setFade(true);
    setTimeout(() => {
      // Check if we've gone through all slides
      if (index + 1 < filteredSlides.length) {
        setIndex(index + 1);
        setFade(false);
        setFeedback("");
        setSwipeDirection(null);
        setShowQuote(false);
      } else {
        setShowRecommendations(true);
        setFade(false);
        setFeedback("");
        setSwipeDirection(null);
        setShowQuote(false);
      }
    }, 600);
  };

  const handleReset = () => {
    recommender.resetPreferences();
    setUserPrefs([...recommender.userPreferenceVector]);
    setViewedItems(new Set());
    localStorage.removeItem('viewedItems');
    setIndex(0);
    setShowRecommendations(false);
    setRecommendations([]);
    setFeedback("Preferences reset!");
    setInteractionCount(0);
  };

  const toggleQuote = () => {
    setShowQuote(!showQuote);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleDislike,
    onSwipedRight: handleLike,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
    delta: 10, // Lower threshold to detect swipes
    swipeDuration: 250, // Shorter duration for a swipe to be detected
    touchEventOptions: { passive: false } // Improve touch handling
  });

  // Set up keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showRecommendations) return;
      
      if (e.key === 'ArrowRight') {
        handleLike();
      } else if (e.key === 'ArrowLeft') {
        handleDislike();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showRecommendations, index]);
  
  // Pick an interest category based on user preferences
  const getUserInterestCategory = () => {
    const maxIndex = userPrefs.indexOf(Math.max(...userPrefs));
    return featureDimensions[maxIndex];
  };

  return (
    <div className="app-container">
      <h1 className="title">
        Learn<span className="title-accent">Smart</span>
      </h1>
      
      {/* Random Study Tip */}
      <div className="tip-banner">
        <span className="tip-icon">💡</span>
        <p className="tip-text">{currentTip}</p>
        <button className="tip-refresh-btn" onClick={setRandomTip} aria-label="New Tip">
          🔄
        </button>
      </div>
      
      {/* Subject Filter */}
      <div className="filter-section">
        <button className="filter-toggle" onClick={toggleSubjectFilter}>
          {showSubjectFilter ? "Hide Filters" : "Filter by Subject"} {showSubjectFilter ? "▲" : "▼"}
        </button>
        
        {showSubjectFilter && (
          <div className="subject-filter-container">
            {allSubjectTags.map(subject => (
              <button 
                key={subject}
                className={`subject-tag ${selectedSubjects.includes(subject) ? 'selected' : ''}`}
                onClick={() => handleSubjectSelection(subject)}
              >
                {subject}
              </button>
            ))}
            {selectedSubjects.length > 0 && (
              <button 
                className="clear-filters"
                onClick={() => setSelectedSubjects([])}
              >
                Clear All
              </button>
            )}
          </div>
        )}
      </div>
      
      {!showRecommendations ? (
        <div className="card-container">
          <div
            className={`card ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}
            {...swipeHandlers}
          >
            <div className="card-media">
              <img
                src={filteredSlides[index].imageUrl}
                alt={filteredSlides[index].title}
                className="card-image"
              />
              <div className="card-media-overlay">
                {showQuote && (
                  <div className="quote-container">
                    <p className="quote-text">"{filteredSlides[index].quote}"</p>
                  </div>
                )}
                <button 
                  className="quote-toggle-btn" 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleQuote();
                  }}
                >
                  {showQuote ? "✕" : '"'}
                </button>
              </div>
            </div>
            
            <div className="card-content">
              <h2 className="card-title">{filteredSlides[index].title}</h2>
              <p className="card-description">{filteredSlides[index].description}</p>
              
              <div className="tag-section">
                <div className="tag-container">
                  {filteredSlides[index].tags.map(tag => (
                    <span key={tag} className="tag">
                      <span className="tag-dot"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                className={`try-btn ${triedTechniques.has(filteredSlides[index].id) ? 'tried' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  markAsTried(filteredSlides[index].id);
                }}
                disabled={triedTechniques.has(filteredSlides[index].id)}
              >
                {triedTechniques.has(filteredSlides[index].id) ? "✓ Tried" : "Mark as Tried"}
              </button>
            </div>
          </div>
          
          <div className="interaction-hint">
            <div className="hint-icon">👆</div>
            <p>Swipe <span className="swipe-direction">◀ left</span> or <span className="swipe-direction">right ▶</span></p>
          </div>
        </div>
      ) : (
        <div className="recommendation-panel scale-in">
          <div className="panel-header">
            <h2 className="panel-title">Your Learning Path</h2>
            {interactionCount > 3 && (
              <div className="interest-badge">
                You seem to prefer <span>{getUserInterestCategory()}</span>
              </div>
            )}
          </div>

          {/* User Goals Section */}
          <div className="goals-section">
            <div className="section-header">
              <h3 className="section-title">Learning Goals</h3>
              <button 
                className="add-goal-btn" 
                onClick={() => setShowGoalForm(true)}
              >
                + Add Goal
              </button>
            </div>
            
            {showGoalForm && (
              <div className="goal-form">
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="Enter a new learning goal..."
                  className="goal-input"
                />
                <div className="goal-form-buttons">
                  <button className="save-goal-btn" onClick={addGoal}>Save</button>
                  <button className="cancel-btn" onClick={() => setShowGoalForm(false)}>Cancel</button>
                </div>
              </div>
            )}
            
            <div className="goals-list">
              {userGoals.length === 0 ? (
                <p className="empty-goals-message">Add some learning goals to track your progress!</p>
              ) : (
                userGoals.map((goal, index) => (
                  <div key={index} className={`goal-item ${goal.completed ? 'completed' : ''}`}>
                    <div className="goal-checkbox" onClick={() => toggleGoalCompletion(index)}>
                      {goal.completed ? '✓' : ''}
                    </div>
                    <div className="goal-text">{goal.text}</div>
                    <button className="remove-goal-btn" onClick={() => removeGoal(index)}>✕</button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="progress-section">
            <h3 className="section-title">Techniques You've Tried</h3>
            <div className="techniques-grid">
              {slides.map(slide => (
                <div 
                  key={slide.id} 
                  className={`technique-item ${triedTechniques.has(slide.id) ? 'tried' : ''}`}
                >
                  <img 
                    src={slide.imageUrl} 
                    alt={slide.title} 
                    className="technique-image"
                  />
                  <div className="technique-overlay">
                    <span className="technique-title">{slide.title}</span>
                    {triedTechniques.has(slide.id) && (
                      <span className="tried-badge">✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User preference visualization */}
          <div className="preference-section">
            <h3 className="section-title">Your Preference Profile</h3>
            <div className="preference-grid">
              {featureDimensions.map((label, i) => (
                <div key={label} className="preference-item">
                  <div className="preference-label">
                    <span>{label}</span>
                    <span className="preference-value">{Math.round(userPrefs[i] * 100)}%</span>
                  </div>
                  <div className="preference-bar">
                    <div 
                      className="preference-fill" 
                      style={{ 
                        width: `${userPrefs[i] * 100}%`,
                        background: `var(--preference-color-${i+1})`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {recommendations.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">👋</div>
              <p className="description">
                Swipe right on techniques you'd like to try for personalized recommendations!
              </p>
            </div>
          ) : (
            <>
              <div className="recommendation-header">
                <h3 className="section-title">Based on your preferences</h3>
              </div>
              <div className="recommendation-list">
                {recommendations.map((rec, idx) => (
                  <div key={rec.id} className={`rec-item fade-in`} style={{animationDelay: `${idx * 0.1}s`}}>
                    <img src={rec.imageUrl} alt={rec.title} className="rec-image" />
                    <div className="rec-content">
                      <div className="rec-title">{rec.title}</div>
                      <div className="rec-description">
                        {rec.description.length > 80 ? rec.description.substring(0, 80) + '...' : rec.description}
                      </div>
                      <div className="rec-tags">
                        {rec.tags.map(tag => (
                          <span key={tag} className="rec-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="confidence-badge">
                      <span className="match-percentage">{Math.round(rec.score * 100)}%</span>
                    </div>
                    <button
                      className={`try-btn-small ${triedTechniques.has(rec.id) ? 'tried' : ''}`}
                      onClick={() => markAsTried(rec.id)}
                      disabled={triedTechniques.has(rec.id)}
                    >
                      {triedTechniques.has(rec.id) ? "✓ Tried" : "Try"}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          
          <div className="action-buttons">
            <button 
              onClick={() => {
                setShowRecommendations(false);
                if (index >= filteredSlides.length) {
                  setIndex(0);
                }
              }} 
              className="action-button"
            >
              <span className="button-icon">🔄</span>
              Continue Exploring
            </button>
            
            <button 
              onClick={handleReset} 
              className="secondary-button"
            >
              Reset Preferences
            </button>
          </div>
        </div>
      )}

      {!showRecommendations && (
        <>
          <div className="buttons">
            <button 
              className="btn dislike" 
              onClick={handleDislike}
              aria-label="Dislike"
            >
              <span className="btn-icon">👎</span>
              <span className="btn-effect"></span>
            </button>
            <button 
              className="btn like" 
              onClick={handleLike}
              aria-label="Like"
            >
              <span className="btn-icon">👍</span>
              <span className="btn-effect"></span>
            </button>
          </div>
          {feedback && (
            <p className="feedback-message">{feedback}</p>
          )}
          <div className="swipe-tip">
            <span>Swipe right/left or use arrow keys ◀ ▶</span>
          </div>
        </>
      )}
      
      {/* Swipe Tutorial Overlay */}
      {showSwipeTutorial && !showRecommendations && (
        <div className="swipe-tutorial-overlay">
          <div className="tutorial-content">
            <h3>How to Use</h3>
            <div className="tutorial-swipe-demo">
              <div className="demo-hand">👆</div>
              <div className="demo-arrows">
                <div className="demo-arrow left">👈 Swipe left if not interested</div>
                <div className="demo-arrow right">Swipe right if interested 👉</div>
              </div>
              <div className="keyboard-controls">
                <p>You can also use:</p>
                <div className="key-row">
                  <span className="key">◀</span> Arrow Left to dislike
                  <span className="key">▶</span> Arrow Right to like
                </div>
              </div>
            </div>
            <button className="tutorial-got-it" onClick={() => {
              setShowSwipeTutorial(false);
              localStorage.setItem('swipeTutorialShown', 'true');
            }}>Got it!</button>
          </div>
        </div>
      )}
      
      <div className="progress-stats">
        {viewedItems.size}/{filteredSlides.length}
      </div>
    </div>
  );
}

export default App;