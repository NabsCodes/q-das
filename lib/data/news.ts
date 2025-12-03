import { NewsPortableText } from "@/lib/types/news";

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: NewsPortableText;
  category: "All" | "Tech" | "Inside QDAS" | "Featured" | "Newsroom" | "Press";
  date: string;
  author: string;
  image: string;
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "team-qdas-hosts-annual-innovation-week-2025",
    title: "Team Q-DAS Hosts Annual Innovation Week 2025",
    excerpt:
      "Creativity took center stage at QDAS Global's Innovation Week, where teams showcased cutting-edge ideas and collaborative projects shaping the future of technology and connectivity.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "At QDAS Global, innovation is more than a buzzword — it’s part of our DNA. This year’s Annual Innovation Week 2025 brought together bright minds from across departments to collaborate, experiment, and showcase forward-thinking solutions that reflect our commitment to shaping the future of technology.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        children: [
          {
            _type: "span",
            text: '"The greatest benefit of AI is that it allows us to solve problems that were previously unsolvable, at a scale that was previously unimaginable."',
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Key Benefits of AI Integration" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Organizations adopting AI are seeing tangible improvements in several key areas:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Operational Efficiency: Automating routine tasks to free up human talent for creative work.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Data-Driven Decision Making: Analyzing vast datasets to uncover actionable insights.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Comparative Analysis" }],
      },
      {
        _type: "table",
        caption: "Model Performance Comparison",
        headers: [
          "Feature",
          "Model A (Lightweight)",
          "Model B (High Performance)",
        ],
        rows: [
          { cells: ["Inference Speed", "< 50ms", "~ 200ms"] },
          { cells: ["Accuracy", "92.5%", "98.7%"] },
          {
            cells: [
              "Resource Usage",
              "Low (CPU friendly)",
              "High (Requires GPU)",
            ],
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Implementation Example" }],
      },
      {
        _type: "codeBlock",
        language: "python",
        filename: "prediction.py",
        code: `def predict(model, input_data):
    """
    Run a prediction using the loaded model.
    """
    try:
        prediction = model.predict(input_data)
        return prediction
    except Exception as e:
        print(f"Error during prediction: {e}")
        return None`,
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "As we look to the future, the synergy between human intelligence and artificial intelligence will define the next era of technological advancement.",
          },
        ],
      },
    ],
    category: "Inside QDAS",
    date: "November 12, 2025",
    author: "Hassan Umar",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "2",
    slug: "ai-powered-insights-transforming-business",
    title: "AI-Powered Insights: Transforming Business Decision-Making",
    excerpt:
      "The latest QDAS Innovation leverages artificial intelligence to deliver real-time analytics and predictive insights, empowering organizations to make smarter, data-driven decisions.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "In today's fast-paced business environment, data is the new oil. However, raw data alone is not enough; it's the insights derived from that data that drive competitive advantage. QDAS Global is proud to announce its latest suite of AI-powered analytics tools designed to transform how businesses make decisions.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Key features include:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Predictive Analytics: Forecast market trends and customer behavior with high accuracy.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _type: "span",
            text: "Automated Reporting: Generate comprehensive reports instantly, saving hours of manual work.",
          },
        ],
      },
    ],
    category: "Tech",
    date: "November 10, 2025",
    author: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&auto=format&q=80",
    featured: true,
  },
  {
    id: "3",
    slug: "future-of-work-digital-transformation",
    title: "The Future of Work: QDAS Global on Digital Transformation Trends",
    excerpt:
      "As industries embrace hybrid models and automation, QDAS Global shares insights on how businesses can stay agile in the evolving digital landscape.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "The workplace is undergoing a seismic shift. Remote work, once a necessity, has become a preference for many. Automation is reshaping job roles, and digital tools are becoming the backbone of collaboration.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [
          {
            _type: "span",
            text: "Hybrid Work Models: Finding the right balance between remote and in-office work.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [
          {
            _type: "span",
            text: "Digital Collaboration Tools: Implementing platforms that enable seamless communication.",
          },
        ],
      },
    ],
    category: "Featured",
    date: "November 9, 2025",
    author: "David Chen",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop&auto=format&q=80",
    featured: true,
  },
  {
    id: "4",
    slug: "driving-sustainability-through-tech",
    title: "Driving Sustainability Through Tech Innovation",
    excerpt:
      "QDAS Global is championing eco-conscious technology by integrating green data solutions and sustainable practices into its operations and client offerings.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Sustainability is no longer a choice; it's a responsibility. The technology sector has a significant role to play in reducing carbon footprints and promoting environmental stewardship.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: 'We are integrating sustainable practices into every aspect of our operations, from energy-efficient data centers to green coding practices. Our "Green Tech" initiative aims to help our clients reduce their environmental impact.',
          },
        ],
      },
    ],
    category: "Featured",
    date: "November 9, 2025",
    author: "Amara Okeke",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "6",
    slug: "the-rise-of-quantum-computing-in-finance",
    title: "The Rise of Quantum Computing in Finance",
    excerpt:
      "How quantum algorithms are set to revolutionize financial modeling and risk assessment in the next decade.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Quantum computing promises to solve complex financial problems that are currently intractable for classical computers. From portfolio optimization to fraud detection, the potential applications are vast.",
          },
        ],
      },
    ],
    category: "Tech",
    date: "October 5, 2025",
    author: "James Wilson",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "7",
    slug: "q-das-charity-run-2025-running-for-a-cause",
    title: "Q-DAS Charity Run 2025: Running for a Cause",
    excerpt:
      "Our annual charity run raised over $50,000 for local STEM education programs. See the highlights from the event.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "We are incredibly proud of our employees who participated in the Q-DAS Charity Run. The funds raised will go directly to supporting STEM education in our local schools.",
          },
        ],
      },
    ],
    category: "Inside QDAS",
    date: "September 28, 2025",
    author: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "8",
    slug: "cybersecurity-trends-to-watch",
    title: "Cybersecurity Trends to Watch",
    excerpt:
      "As cyber threats evolve, so must our defenses. Here are the key cybersecurity trends that organizations need to be aware of.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "From ransomware to supply chain attacks, the threat landscape is constantly shifting. Staying ahead requires a proactive approach to security.",
          },
        ],
      },
    ],
    category: "Tech",
    date: "September 15, 2025",
    author: "Robert Brown",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "9",
    slug: "new-partnership-with-techgiant-corp",
    title: "New Partnership with TechGiant Corp",
    excerpt:
      "We are excited to announce a strategic partnership with TechGiant Corp to accelerate the development of next-gen cloud solutions.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "This partnership combines Q-DAS's expertise in specialized software with TechGiant's robust cloud infrastructure. Together, we will deliver unparalleled value to our customers.",
          },
        ],
      },
    ],
    category: "Newsroom",
    date: "September 1, 2025",
    author: "Lisa Zhang",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "10",
    slug: "understanding-6g-networks",
    title: "Understanding 6G Networks",
    excerpt:
      "While 5G is still rolling out, researchers are already looking ahead to 6G. What will the next generation of connectivity look like?",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "6G networks promise even faster speeds, lower latency, and the ability to connect billions of devices seamlessly. It will be the backbone of the future internet of things.",
          },
        ],
      },
    ],
    category: "Tech",
    date: "August 20, 2025",
    author: "Kevin White",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "11",
    slug: "employee-spotlight-meet-our-design-team",
    title: "Employee Spotlight: Meet Our Design Team",
    excerpt:
      "Get to know the creative minds behind Q-DAS's award-winning user interfaces and experiences.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Our design team is a diverse group of talented individuals who are passionate about creating intuitive and beautiful products. In this spotlight, we interview our lead designer, Maria.",
          },
        ],
      },
    ],
    category: "Inside QDAS",
    date: "August 10, 2025",
    author: "Maria Garcia",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "12",
    slug: "the-impact-of-remote-work-on-productivity",
    title: "The Impact of Remote Work on Productivity",
    excerpt:
      "A deep dive into how remote work policies have affected employee productivity and well-being over the past year.",
    content: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Remote work has become the new normal for many organizations. But what is the long-term impact on productivity? Our internal study reveals some surprising findings.",
          },
        ],
      },
    ],
    category: "Newsroom",
    date: "July 25, 2025",
    author: "John Doe",
    image:
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=2000&auto=format&fit=crop",
  },
];
