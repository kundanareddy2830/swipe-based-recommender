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
    features: [0.9, 0.6, 0.7, 0.4, 0.8],
    quote: "A picture is worth a thousand words, a mind map is worth a thousand pictures."
  },
  {
    id: 2,
    title: "Pomodoro Technique",
    description: "Master focused study sessions with the science-backed Pomodoro method. 25 minutes of intense concentration followed by 5-minute breaks dramatically improves productivity.",
    imageUrl: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&w=900&q=80",
    tags: ["focus", "productivity", "time-management"],
    features: [0.3, 0.9, 0.5, 0.7, 0.4],
    quote: "The key is not to prioritize what's on your schedule, but to schedule your priorities."
  },
  {
    id: 3,
    title: "Interactive Flashcards",
    description: "Enhance memorization through digital flashcards with spaced repetition. This system automatically prioritizes difficult material, optimizing your study time for maximum retention.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tags: ["memory", "interactive", "efficient"],
    features: [0.6, 0.7, 0.9, 0.6, 0.5],
    quote: "Memory is the mother of all wisdom."
  },
  {
    id: 4,
    title: "Deep Research Methods",
    description: "Develop advanced academic research skills using professional databases and analytical frameworks. Learn to identify credible sources and synthesize complex information.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    tags: ["research", "academic", "analysis"],
    features: [0.5, 0.8, 0.4, 0.9, 0.6],
    quote: "Research is formalized curiosity. It is poking and prying with a purpose."
  },
  {
    id: 5,
    title: "Concept Visualization",
    description: "Convert abstract theories into tangible visual models. This approach makes even the most complex concepts accessible by engaging your visual processing capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    tags: ["visual", "conceptual", "understanding"],
    features: [0.9, 0.5, 0.6, 0.7, 0.8],
    quote: "If you can't explain it simply, you don't understand it well enough."
  },
  {
    id: 6,
    title: "Collaborative Learning",
    description: "Accelerate understanding through group study sessions. Explaining concepts to others reinforces your own knowledge while different perspectives reveal new insights.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    tags: ["teamwork", "discussion", "exchange"],
    features: [0.5, 0.6, 0.9, 0.7, 0.7],
    quote: "Alone we can do so little; together we can do so much."
  },
  {
    id: 7,
    title: "Structured Note-Taking",
    description: "Master the Cornell Method and other powerful note-taking systems. These structured approaches organize information during lectures for efficient review and deeper understanding.",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    tags: ["organization", "efficiency", "retention"],
    features: [0.7, 0.8, 0.5, 0.8, 0.6],
    quote: "The palest ink is better than the best memory."
  },
  {
    id: 8,
    title: "Immersive Learning",
    description: "Transform passive studying into active engagement through immersive learning environments. Virtual simulations and real-world applications cement abstract knowledge.",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80",
    tags: ["interactive", "experiential", "engaging"],
    features: [0.8, 0.7, 0.9, 0.6, 0.8],
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
  },
  {
    id: 9,
    title: "Creative Problem-Solving",
    description: "Break through academic obstacles with design thinking and lateral reasoning. These creative frameworks help tackle complex problems from unexpected angles.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    tags: ["creativity", "problem-solving", "innovation"],
    features: [0.6, 0.5, 0.7, 0.6, 0.9],
    quote: "Creativity is intelligence having fun."
  },
  {
    id: 10,
    title: "Deliberate Practice",
    description: "Optimize skill acquisition through systematic, focused practice targeting specific weaknesses. This evidence-based approach is how experts in every field achieve mastery.",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80",
    tags: ["mastery", "focus", "practice"],
    features: [0.4, 0.9, 0.6, 0.8, 0.5],
    quote: "It's not that I'm so smart, it's just that I stay with problems longer."
  },
  {
    id: 11,
    title: "Gamified Learning",
    description: "Turn study sessions into engaging games with achievement systems and progress tracking. Gamification triggers dopamine release, making learning addictively enjoyable.",
    imageUrl: "https://images.unsplash.com/photo-1638697106371-ba00070668e9?auto=format&fit=crop&w=900&q=80",
    tags: ["fun", "motivation", "interactive"],
    features: [0.7, 0.5, 0.9, 0.4, 0.8],
    quote: "Learning is not a spectator sport."
  },
  {
    id: 12,
    title: "Academic Writing Workshop",
    description: "Develop professional-level writing skills through structured practice of thesis development, argumentation, and stylistic refinement. Polish your prose to scholarly standards.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    tags: ["writing", "communication", "analysis"],
    features: [0.3, 0.7, 0.4, 0.9, 0.6],
    quote: "The art of writing is the art of discovering what you believe."
  },
  {
    id: 13,
    title: "Data Visualization",
    description: "Transform complex datasets into intuitive visual representations. This crucial skill helps identify patterns and communicate findings clearly across scientific disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    tags: ["statistics", "visual", "analysis"],
    features: [0.9, 0.6, 0.5, 0.8, 0.7],
    quote: "Numbers have an important story to tell. They rely on you to give them a clear and convincing voice."
  },
  {
    id: 14,
    title: "Mindfulness for Focus",
    description: "Enhance concentration through evidence-based mindfulness techniques. These practices strengthen attention networks in the brain, reducing distraction and mental fatigue.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    tags: ["focus", "wellness", "mental-clarity"],
    features: [0.4, 0.9, 0.3, 0.5, 0.6],
    quote: "The present moment is the only time over which we have dominion."
  },
  {
    id: 15,
    title: "Creative Expression",
    description: "Integrate artistic methods into your learning process. Drawing, diagramming, and conceptual modeling activate different neural pathways, enhancing comprehension and retention.",
    imageUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80",
    tags: ["creativity", "visual", "personalization"],
    features: [0.8, 0.4, 0.6, 0.5, 0.9],
    quote: "Creativity is contagious, pass it on."
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
  }, [recommender]);

  // Update recommendations whenever user preferences change
  const updateRecommendations = () => {
    const recs = recommender.getRecommendations(slides);
    setRecommendations(recs);
  };

  const handleLike = () => {
    const currentSlide = slides[index];
    recommender.updateModel(currentSlide.features, true);
    setUserPrefs([...recommender.userPreferenceVector]);
    
    // Update viewed items
    const newViewedItems = new Set(viewedItems);
    newViewedItems.add(index);
    setViewedItems(newViewedItems);
    localStorage.setItem('viewedItems', JSON.stringify(Array.from(newViewedItems)));
    
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
    const currentSlide = slides[index];
    recommender.updateModel(currentSlide.features, false);
    setUserPrefs([...recommender.userPreferenceVector]);
    
    // Update viewed items
    const newViewedItems = new Set(viewedItems);
    newViewedItems.add(index);
    setViewedItems(newViewedItems);
    localStorage.setItem('viewedItems', JSON.stringify(Array.from(newViewedItems)));
    
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
      if (index + 1 < slides.length) {
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
    trackMouse: true
  });

  // Pick an interest category based on user preferences
  const getUserInterestCategory = () => {
    const maxIndex = userPrefs.indexOf(Math.max(...userPrefs));
    return featureDimensions[maxIndex];
  };

  return (
    <div className="app-container">
      <h1 className="title">
        Discover<span className="title-accent">AI</span>
      </h1>
      
      {!showRecommendations ? (
        <div className="card-container">
          <div
            className={`card ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}
            {...swipeHandlers}
          >
            <div className="card-media">
              <img
                src={slides[index].imageUrl}
                alt={slides[index].title}
                className="card-image"
              />
              <div className="card-media-overlay">
                {showQuote && (
                  <div className="quote-container">
                    <p className="quote-text">"{slides[index].quote}"</p>
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
              <h2 className="card-title">{slides[index].title}</h2>
              <p className="card-description">{slides[index].description}</p>
              <div className="tag-container">
                {slides[index].tags.map(tag => (
                  <span key={tag} className="tag">
                    <span className="tag-dot"></span>
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Show recommendation confidence */}
              {index > 0 && (
                <div className="confidence-badge">
                  <span className="pulse-dot"></span>
                  {Math.round(recommender.getSimilarityScore(slides[index].features) * 100)}% Match
                </div>
              )}
            </div>
          </div>
          
          <div className="interaction-hint">
            <div className="hint-icon">👆</div>
            <p>Swipe or use buttons below</p>
          </div>
        </div>
      ) : (
        <div className="recommendation-panel scale-in">
          <div className="panel-header">
            <h2 className="panel-title">Your Discoveries</h2>
            {interactionCount > 3 && (
              <div className="interest-badge">
                You seem to enjoy <span>{getUserInterestCategory()}</span>
              </div>
            )}
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
                Swipe right on places you'd love to visit for personalized recommendations!
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
                  </div>
                ))}
              </div>
            </>
          )}
          
          <div className="action-buttons">
            <button 
              onClick={() => {
                setShowRecommendations(false);
                if (index >= slides.length) {
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
            <span>Swipe right to like, left to dislike</span>
          </div>
        </>
      )}
      
      <div className="progress-stats">
        {viewedItems.size}/{slides.length}
      </div>
    </div>
  );
}

export default App;