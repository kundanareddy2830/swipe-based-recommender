import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './App.css';

const slides = [
  {
    id: 1,
    title: "Sunset Beach",
    description: "Experience tranquility as the sun dips below the horizon, painting the sky with vibrant hues. Perfect for unwinding after a long day.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    tags: ["nature", "relaxation", "beach"],
    features: [0.9, 0.7, 0.2, 0.1, 0.8] // Features: [nature, relaxation, adventure, urban, scenic]
  },
  {
    id: 2,
    title: "Mountain Trail",
    description: "Challenge yourself on this scenic mountain trail. Breathe in the fresh air and enjoy panoramic views at every turn.",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    tags: ["adventure", "nature", "hiking"],
    features: [0.8, 0.3, 0.9, 0.1, 0.9]
  },
  {
    id: 3,
    title: "City Skyline",
    description: "Marvel at the dazzling city lights and the energy of urban life. A perfect spot for night photography and city lovers.",
    imageUrl: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=900&q=80",
    tags: ["city", "nightlife", "photography"],
    features: [0.2, 0.4, 0.5, 0.9, 0.7]
  },
  {
    id: 4,
    title: "Forest Retreat",
    description: "Reconnect with nature in a serene forest retreat. Listen to the rustling leaves and chirping birds for a peaceful escape.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    tags: ["nature", "relaxation", "forest"],
    features: [0.9, 0.9, 0.2, 0.0, 0.7]
  },
  {
    id: 5,
    title: "Desert Adventure",
    description: "Embark on a thrilling journey across golden sands and endless dunes. Perfect for adventure seekers and stargazers.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
    tags: ["adventure", "desert", "stargazing"],
    features: [0.6, 0.3, 0.9, 0.1, 0.8]
  },
  {
    id: 6,
    title: "Historic Castle",
    description: "Step into history and explore the mysteries of this ancient castle. Ideal for history buffs and architecture enthusiasts.",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
    tags: ["history", "architecture", "castle"],
    features: [0.3, 0.5, 0.6, 0.7, 0.8]
  },
  {
    id: 7,
    title: "Tropical Paradise",
    description: "Relax on white sandy beaches with crystal clear waters and swaying palm trees. The ultimate tropical getaway.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    tags: ["beach", "relaxation", "tropical"],
    features: [0.7, 0.9, 0.3, 0.1, 0.8]
  },
  {
    id: 8,
    title: "Winter Wonderland",
    description: "Enjoy the magic of winter with snow-covered trees and cozy cabins. Perfect for a romantic escape or family fun.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    tags: ["winter", "snow", "cozy"],
    features: [0.7, 0.8, 0.4, 0.2, 0.9]
  },
  {
    id: 9,
    title: "Cherry Blossom Park",
    description: "Witness the breathtaking beauty of cherry blossoms in full bloom. A must-visit for nature lovers and photographers.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=900&q=80",
    tags: ["nature", "spring", "flowers"],
    features: [0.9, 0.7, 0.2, 0.4, 0.8]
  },
  {
    id: 10,
    title: "Modern Art Museum",
    description: "Explore innovative and inspiring works at this world-class art museum. A haven for creativity and inspiration.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80",
    tags: ["art", "museum", "creativity"],
    features: [0.3, 0.5, 0.4, 0.9, 0.6]
  },
  {
    id: 11,
    title: "Gourmet Food Festival",
    description: "Taste culinary delights from around the world at this vibrant food festival. A paradise for foodies.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    tags: ["food", "festival", "culture"],
    features: [0.2, 0.6, 0.5, 0.8, 0.7]
  },
  {
    id: 12,
    title: "Tech Innovation Expo",
    description: "Discover the latest in technology and innovation. Perfect for tech enthusiasts and curious minds.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
    tags: ["technology", "innovation", "expo"],
    features: [0.1, 0.3, 0.6, 0.9, 0.5]
  },
  {
    id: 13,
    title: "Wildlife Safari",
    description: "Experience the thrill of seeing wild animals in their natural habitat. A must for adventure and wildlife lovers.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=900&q=80",
    tags: ["wildlife", "adventure", "nature"],
    features: [0.8, 0.4, 0.9, 0.1, 0.7]
  },
  {
    id: 14,
    title: "Yoga Retreat",
    description: "Find your inner peace and rejuvenate your mind and body at this tranquil yoga retreat.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    tags: ["wellness", "relaxation", "yoga"],
    features: [0.6, 0.9, 0.2, 0.3, 0.5]
  },
  {
    id: 15,
    title: "Book Lovers' Haven",
    description: "Lose yourself in a world of stories at this cozy book café. Perfect for readers and writers alike.",
    imageUrl: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=900&q=80",
    tags: ["books", "cafe", "relaxation"],
    features: [0.4, 0.8, 0.2, 0.7, 0.5]
  }
];

// Feature dimensions explanation
const featureDimensions = [
  "Nature-oriented",
  "Relaxation level",
  "Adventure level", 
  "Urban factor",
  "Visual appeal"
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
      } else {
        setShowRecommendations(true);
        setFade(false);
        setFeedback("");
        setSwipeDirection(null);
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
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleDislike,
    onSwipedRight: handleLike,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="app-container">
      <h1 className="title">
        Swipe Recommender AI
      </h1>
      
      {!showRecommendations ? (
        <div
          className={`card ${swipeDirection ? `swipe-${swipeDirection}` : ''}`}
          {...swipeHandlers}
        >
          <img
            src={slides[index].imageUrl}
            alt={slides[index].title}
            style={{
              width: "100%",
              height: 260,
              objectFit: "cover",
              borderRadius: "var(--border-radius-sm) var(--border-radius-sm) 0 0",
              marginBottom: 18
            }}
          />
          <h2 className="title">{slides[index].title}</h2>
          <p className="description">{slides[index].description}</p>
          <div className="tag-container">
            {slides[index].tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          
          {/* Show recommendation confidence */}
          {index > 0 && (
            <div className="confidence-badge">
              Recommendation match: {Math.round(recommender.getSimilarityScore(slides[index].features) * 100)}%
            </div>
          )}
        </div>
      ) : (
        <div className="recommendation-panel scale-in">
          <h2 className="title">Recommended For You</h2>

          {/* User preference visualization */}
          <div style={{ marginBottom: 24, width: "100%" }}>
            <h3>Your Preference Profile</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {featureDimensions.map((label, i) => (
                <div key={label} style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span>{label}</span>
                    <span>{Math.round(userPrefs[i] * 100)}%</span>
                  </div>
                  <div className="preference-bar">
                    <div className="preference-fill" style={{ width: `${userPrefs[i] * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {recommendations.length === 0 ? (
            <p className="description">
              Swipe right on slides to get personalized recommendations!
            </p>
          ) : (
            <>
              <div style={{ marginBottom: 16 }}>
                <h3>Based on your preferences, you might like:</h3>
              </div>
              {recommendations.map((rec, idx) => (
                <div key={rec.id} className={`rec-item fade-in`} style={{animationDelay: `${idx * 0.1}s`}}>
                  <img src={rec.imageUrl} alt={rec.title} style={{
                    width: 70,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: "var(--border-radius-sm)"
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "1.08rem", color: "var(--text-primary)" }}>{rec.title}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                      {rec.description.length > 80 ? rec.description.substring(0, 80) + '...' : rec.description}
                    </div>
                    <div style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: 4, 
                      marginTop: 6 
                    }}>
                      {rec.tags.map(tag => (
                        <span key={tag} style={{
                          background: "rgba(106, 130, 251, 0.12)",
                          color: "#6a82fb",
                          borderRadius: 8,
                          padding: "2px 8px",
                          fontSize: "0.78rem",
                          fontWeight: 500
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="confidence-badge">
                    {Math.round(rec.score * 100)}% Match
                  </div>
                </div>
              ))}
            </>
          )}
          
          <button 
            onClick={() => {
              setShowRecommendations(false);
              if (index >= slides.length) {
                setIndex(0);
              }
            }} 
            className="action-button"
          >
            Continue Swiping
          </button>
          
          <button 
            onClick={handleReset} 
            className="secondary-button"
          >
            Reset Preferences
          </button>
        </div>
      )}

      {!showRecommendations && (
        <>
          <div className="buttons">
            <button className="btn dislike" onClick={handleDislike}>
              👎
            </button>
            <button className="btn like" onClick={handleLike}>
              👍
            </button>
          </div>
          {feedback && (
            <p className="feedback-message">{feedback}</p>
          )}
          <div style={{ marginTop: 12, color: "#fff", fontWeight: 500, fontSize: "0.9rem" }}>
            <span>Tip: Swipe right for Like, left for Dislike!</span>
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