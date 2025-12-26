// Optional: OpenAI Integration for Advanced Chatbot
// Requires OPENAI_API_KEY in Netlify environment variables
// Uncomment and configure when ready to use

/*
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message, history, context: userContext } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Build conversation context
    const systemPrompt = `You are a helpful assistant for ${userContext.name}, a ${userContext.title}. 
Your role is to answer questions about their services, skills, and experience.

Key Information:
- Name: ${userContext.name}
- Title: ${userContext.title}
- Skills: ${userContext.skills.join(', ')}

Frequently Asked Questions:
${userContext.faq.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}

Be friendly, professional, and helpful. If asked about rates or specific project details, 
suggest using the contact form for a personalized quote.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(h => ({
        role: h.type === 'user' ? 'user' : 'assistant',
        content: h.text
      })),
      { role: 'user', content: message }
    ];

    // Call OpenAI API
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.data.choices[0].message.content;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ reply })
    };
  } catch (error) {
    console.error('OpenAI Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to get AI response',
        message: error.message 
      })
    };
  }
};
*/

// Placeholder for when OpenAI is not configured
exports.handler = async (event, context) => {
  return {
    statusCode: 501,
    body: JSON.stringify({ 
      error: 'OpenAI integration not configured',
      message: 'Configure OPENAI_API_KEY in Netlify to enable AI chat' 
    })
  };
};
