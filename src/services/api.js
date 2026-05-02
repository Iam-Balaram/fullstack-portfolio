const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const RESUME_DATA = `
Name: Balaram Mukhi
Location: Odisha, India
Email: balarammukhi245@gmail.com

Professional Summary:
Aspiring Software Engineer with hands-on experience in Full Stack Development (MERN). Skilled in building scalable web applications, RESTful APIs, authentication systems, and real-time apps. Experienced in deploying applications on cloud platforms and integrating payment gateways and AI APIs.

Technical Skills:
- Languages: JavaScript, TypeScript, Python
- Frontend: HTML, CSS, React, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, MySQL
- Cloud & Deployment: AWS EC2, Vercel, Render
- Tools: Git, GitHub, Docker, Postman, CI/CD, Chrome DevTools

Internship:
Full Stack Development Intern – Saiket Systems (Dec 2025 – Jan 2026)
- Built responsive web apps using HTML, CSS, JS, Tailwind
- Developed React To-Do app with CRUD and API integration
- Designed and tested REST APIs using Node.js, Express, Postman

Projects:
1. E-Commerce App (MERN Stack)
- Full-stack app with user/admin roles and JWT authentication
- REST APIs for products, cart, and orders
- Integrated Razorpay, Stripe, COD payments

2. Streamify – Chat & Video App
- Real-time chat and video calling platform (MERN)
- Authentication, friend system, messaging
- Integrated real-time APIs

3. Pear Media AI Studio
- AI-powered text-to-image & image tools
- Integrated AI APIs for generation & analysis
- Built with modular React architecture

Certifications:
- Python, JavaScript, React, Node.js – NxtWave
- Static, Responsive, Dynamic Web Development
- Introduction to Databases

Education:
B.Tech in Electrical & Electronics Engineering
Gurukul Institute of Technology (2022–2026)
CGPA: 7.85
`;

const SYSTEM_INSTRUCTION = `
You are a helpful personal assistant chatbot for Balaram Mukhi.

Answer ONLY based on the resume below.
Keep answers short (2–3 lines).
If question is unrelated, redirect politely.

Resume:
${RESUME_DATA}
`;

export async function sendChatMessage(messages) {
  if (!GROQ_API_KEY) {
    throw new Error(
      "Groq API key not found. Please add VITE_GROQ_API_KEY to your .env file."
    );
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model:  "openai/gpt-oss-120b", // fast & free
          messages: [
  { role: "system",  content: SYSTEM_INSTRUCTION},
            ...messages, // your chat history
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Groq Error:", errorData);
      throw new Error(
        errorData?.error?.message || "Failed to get response from Groq AI"
      );
    }

    const data = await response.json();

    return (
      data?.choices?.[0]?.message?.content || "Sorry, no response from AI."
    );
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
}
