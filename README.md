# LearnSmart: Swipe-Based Learning Recommendation System

A modern, interactive application that helps users discover personalized learning techniques through an intuitive swipe interface. The system intelligently learns from user preferences to provide increasingly relevant recommendations.

![LearnSmart Demo](images/demo.gif)

## Features

- **Intuitive Swipe Interface**: Like or dislike learning techniques with simple swipe gestures
- **Smart Recommendation Engine**: Uses feature vectors and cosine similarity to learn user preferences
- **Personalization**: Tracks preferences across five key dimensions:
  - Visual learning
  - Focus intensity 
  - Interactive learning
  - Academic rigor
  - Creativity
- **Beautiful UI**: High-resolution images, engaging descriptions, and inspirational quotes
- **Subject Filtering**: Filter recommendations by specific subjects or learning domains
- **Goal Tracking**: Set and manage personal learning goals
- **Progress Visualization**: Track tried techniques and view preference profiles
- **Local Storage**: Preferences and progress saved between sessions
- **Responsive Design**: Works seamlessly on mobile and desktop devices
- **Keyboard Controls**: Navigation using arrow keys for accessibility

## Technology Stack

- React.js
- CSS3 with custom animations and transitions
- Local storage for persistent data
- Custom recommendation algorithm

## Installation

1. Clone the repository:


2. Install dependencies:


3. Start the development server:


4. Build for production:


## How It Works

### The Recommendation Engine

LearnSmart uses a machine learning approach based on feature vectors and cosine similarity:

1. Each learning technique is represented by a 5-dimensional feature vector
2. The system maintains a user preference vector that starts neutral (0.5 in each dimension)
3. When users like or dislike a technique, the preference vector is updated:
   - For likes: The vector moves toward the technique's features
   - For dislikes: The vector moves away from the technique's features
4. Cosine similarity is used to score and rank future recommendations
5. The system continuously improves recommendations as users interact with more items

### User Experience Flow

1. Users are presented with learning techniques one at a time
2. They swipe right (or use the 👍 button) if interested, left (or 👎) if not interested
3. The system learns from these interactions
4. After several interactions, personalized recommendations are generated
5. Users can track which techniques they've tried and set learning goals
6. Preferences and progress are saved between sessions

## Project Structure

```
learn-smart/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js         # Main application logic and recommendation engine
│   ├── App.css        # Styling and animations
│   ├── index.js       # Entry point
│   └── ...
└── README.md
```



## Future Enhancements

- User accounts with cloud synchronization
- Social sharing of favorite learning techniques
- Advanced filtering options (difficulty, time commitment)
- Guided learning paths combining multiple techniques
- Integration with calendar for scheduled learning sessions
- Community features and technique ratings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Unsplash for the beautiful images
- Font Awesome for icons
- React-Swipeable for swipe detection 
