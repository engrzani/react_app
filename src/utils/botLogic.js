import { profileData } from '../data/profileData';

/**
 * Simple bot logic to provide FAQ responses
 * Can be enhanced with OpenAI API for more intelligent responses
 */

// Keywords for matching user questions
const keywordMap = {
  rate: ['rate', 'price', 'cost', 'charge', 'fee', 'budget', 'expensive', 'affordable'],
  tech: ['technology', 'technologies', 'tech', 'stack', 'tools', 'framework', 'language', 'programming'],
  availability: ['available', 'availability', 'time', 'hours', 'schedule', 'when'],
  longterm: ['long-term', 'long term', 'ongoing', 'contract', 'permanent', 'continuous'],
  ai: ['ai', 'artificial intelligence', 'openai', 'gpt', 'chatbot', 'machine learning', 'ml'],
  process: ['process', 'workflow', 'methodology', 'approach', 'work', 'develop'],
  support: ['support', 'maintenance', 'after', 'post-launch', 'help', 'fix'],
  quality: ['quality', 'code quality', 'best practices', 'testing', 'clean code'],
  experience: ['experience', 'years', 'worked', 'background', 'expertise'],
  portfolio: ['portfolio', 'projects', 'work', 'examples', 'showcase'],
  skills: ['skills', 'know', 'can you', 'able to'],
  contact: ['contact', 'reach', 'email', 'phone', 'call', 'message'],
  hire: ['hire', 'start', 'begin', 'work together', 'collaborate']
};

// Find the best matching FAQ based on keywords
const findBestMatch = (userInput) => {
  const input = userInput.toLowerCase();
  
  // Check each keyword category
  for (const [category, keywords] of Object.entries(keywordMap)) {
    if (keywords.some(keyword => input.includes(keyword))) {
      // Find matching FAQ
      const faq = profileData.faq.find(f => 
        f.question.toLowerCase().includes(category) ||
        f.answer.toLowerCase().includes(category)
      );
      
      if (faq) return faq.answer;
    }
  }
  
  // Check for direct question match
  const directMatch = profileData.faq.find(faq => 
    input.includes(faq.question.toLowerCase().substring(0, 15))
  );
  
  if (directMatch) return directMatch.answer;
  
  return null;
};

// Greeting detection
const isGreeting = (input) => {
  const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'];
  return greetings.some(greeting => input.toLowerCase().includes(greeting));
};

// Thanks detection
const isThanks = (input) => {
  const thanks = ['thank', 'thanks', 'appreciate', 'grateful'];
  return thanks.some(word => input.toLowerCase().includes(word));
};

/**
 * Main bot response function
 */
export const getBotResponse = (userInput) => {
  if (!userInput || !userInput.trim()) {
    return "I didn't quite catch that. Could you please ask your question again?";
  }

  // Handle greetings
  if (isGreeting(userInput)) {
    return `Hello! 👋 Great to meet you! I'm here to help answer any questions about ${profileData.name}'s services, skills, and experience. What would you like to know?`;
  }

  // Handle thanks
  if (isThanks(userInput)) {
    return "You're very welcome! Feel free to ask if you have any other questions. I'm here to help! 😊";
  }

  // Try to find a matching FAQ
  const match = findBestMatch(userInput);
  if (match) {
    return match;
  }

  // Special cases
  if (userInput.toLowerCase().includes('name')) {
    return `I'm the Portfolio Assistant for ${profileData.name}! I can answer questions about skills, rates, availability, and more.`;
  }

  if (userInput.toLowerCase().includes('who are you')) {
    return `I'm an AI assistant helping showcase ${profileData.name}'s portfolio and answer common questions. ${profileData.name} is ${profileData.title}.`;
  }

  // Default response with helpful suggestions
  return `That's a great question! While I don't have a pre-programmed answer for that specific query, I can help you with:

• Hourly rates and pricing
• Technical skills and expertise
• Availability and scheduling
• Project types and experience
• AI and technology capabilities

Feel free to use the contact form to reach out directly for more specific inquiries!`;
};

/**
 * Get suggested follow-up questions based on current conversation
 */
export const getSuggestedQuestions = () => {
  const allQuestions = profileData.faq.map(f => f.question);
  // Return 4 random questions
  return allQuestions.sort(() => 0.5 - Math.random()).slice(0, 4);
};

/**
 * Enhanced version with OpenAI (optional - requires API key)
 * Uncomment and configure when ready to use
 */
/*
export const getAIBotResponse = async (userInput, conversationHistory = []) => {
  try {
    const response = await fetch('/.netlify/functions/openai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userInput,
        history: conversationHistory,
        context: {
          name: profileData.name,
          title: profileData.title,
          skills: profileData.skills,
          faq: profileData.faq
        }
      })
    });

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('AI response error:', error);
    return getBotResponse(userInput); // Fallback to simple bot
  }
};
*/
