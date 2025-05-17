import React, { useState, } from 'react';

const data = [
  {
    id: 1,
    title: "Sunset Beach",
    description: "A beautiful sunset at the beach, perfect for evening walks and relaxation.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Mountain Trail",
    description: "A scenic mountain hiking trail for adventure seekers and nature lovers.",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "City Skyline",
    description: "The city skyline at night, illuminated with dazzling lights and vibrant energy.",
    imageUrl: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Forest Retreat",
    description: "A peaceful forest retreat surrounded by tall trees and the sounds of nature.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Desert Adventure",
    description: "Golden sands and endless dunes await in this breathtaking desert landscape.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Historic Castle",
    description: "Step back in time and explore the mysteries of this ancient castle.",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Tropical Paradise",
    description: "Crystal clear waters and palm trees make this island a true paradise.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Winter Wonderland",
    description: "Snow-covered trees and a cozy cabin create the perfect winter escape.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Cherry Blossom Park",
    description: "Enjoy the beauty of cherry blossoms in full bloom during springtime.",
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Modern Art Museum",
    description: "Explore innovative and inspiring works at this world-class art museum.",
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [fade, setFade] = useState(false);

  const handleLike = () => {
    setFeedback("You liked this!");
    triggerNextCard();
  };

  const handleDislike = () => {
    setFeedback("You disliked this!");
    triggerNextCard();
  };

  const triggerNextCard = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % data.length);
      setFade(false);
      setFeedback("");
    }, 500);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Swipe Recommender</h1>
      
      <div
        style={{
          ...styles.card,
          opacity: fade ? 0 : 1,
          transform: fade ? 'translateX(100px) rotate(10deg)' : 'translateX(0)',
          transition: 'all 0.5s ease',
        }}
      >
        <img src={data[index].imageUrl} alt={data[index].title} style={styles.image} />
        <h2 style={styles.title}>{data[index].title}</h2>
        <p style={styles.description}>{data[index].description}</p>
      </div>

      <div style={styles.buttons}>
        <button
          style={{ ...styles.button, backgroundColor: '#ef4444' }}
          onClick={handleDislike}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#dc2626')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ef4444')}
        >
          👎 Dislike
        </button>

        <button
          style={{ ...styles.button, backgroundColor: '#22c55e' }}
          onClick={handleLike}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#16a34a')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#22c55e')}
        >
          👍 Like
        </button>
      </div>

      <p
        style={{
          ...styles.feedback,
          opacity: feedback ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {feedback}
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 420,
    margin: '40px auto',
    padding: 24,
    fontFamily: "'Montserrat', sans-serif",
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    borderRadius: 16,
  },
  heading: {
    marginBottom: 24,
    color: '#111827',
    fontWeight: 700,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    cursor: 'grab',
    userSelect: 'none',
  },
  image: {
    width: '100%',
    height: 240,
    objectFit: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    margin: '16px 0 8px',
    color: '#1f2937',
  },
  description: {
    marginBottom: 16,
    color: '#4b5563',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    border: 'none',
    color: 'white',
    padding: '14px 28px',
    fontSize: 18,
    borderRadius: 12,
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  feedback: {
    marginTop: 24,
    fontStyle: 'italic',
    color: '#374151',
    minHeight: 24,
  },
};

export default App;
