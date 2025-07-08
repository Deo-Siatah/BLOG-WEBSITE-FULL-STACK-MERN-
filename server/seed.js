require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');
const Category = require('./models/Category');

//Connect to MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB for seeding'))
  .catch((err) => console.error('❌ DB connection error:', err));

const categoryMap = {
        "Web Development": new mongoose.Types.ObjectId(),
        "General": new mongoose.Types.ObjectId(),
        "Design": new mongoose.Types.ObjectId(),
        "Productivity": new mongoose.Types.ObjectId(),
        "Lifestyle": new mongoose.Types.ObjectId(),
        "Tools & Gear": new mongoose.Types.ObjectId(),
        "Career Growth": new mongoose.Types.ObjectId(),
        "Programming Basics": new mongoose.Types.ObjectId(),
        "Artificial Intelligence": new mongoose.Types.ObjectId(),
};

const categories = Object.entries(categoryMap).map(([name, _id]) => ({
    _id,
    name,
    slug: name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')
}));

const posts = [{
    _id: new mongoose.Types.ObjectId(),
    title: "Juggling Code Like a Pro💻",
    content:`Managing multiple devices while coding may seem extreme,  but it highlights the power of multitasking and focus. 
            This blog explores how professional developers often use different screens for debugging, researching, coding, and testing simultaneously. 
            It’s not about being flashy, but about maximizing efficiency.`,
    excerpt:`Ever seen a dev juggling 4 laptops? 🧠 Here's why it might actually make sense.`,
    featuredImage: `https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    tags: ['coding','productivity','workflow'],
    category: categoryMap["Productivity"],
    isPublished: true
},
    {
        _id:new mongoose.Types.ObjectId(),
        title: `The Rise of Artificial Intelligence 🤖`,
        content: `Artificial Intelligence (AI) is revolutionizing how we live and work. From chatbots and self-driving cars to advanced data analysis and medical diagnostics, AI is making waves across industries. This blog unpacks how AI impacts developers and the tools they use daily.`,
        excerpt: `From smart assistants to code-suggesting bots 🤖—AI is changing everything.`,
        featuredImage: `https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['AI', 'technology', 'future'],
        category: categoryMap["Artificial Intelligence"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `Why Developers Still Love PHP 🐘`,
        content: `Despite newer frameworks and languages, PHP remains widely used and loved in web development. Its massive ecosystem, WordPress support, and simplicity keep it alive. This post dives into reasons why PHP isn’t going anywhere soon.`,
        excerpt: `Still writing PHP in 2025? Here's why that’s NOT crazy. 🐘`,
        featuredImage: `https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['php', 'backend', 'legacy'],
        category: categoryMap["Web Development"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `The Power of 'Hello World' 👶`,
        content: `'Hello World' might be the most famous phrase in tech. It's the very first program many developers write, and it symbolizes the beginning of every learning journey. But beyond that, it reminds us how simple things can lead to big adventures.`,
        excerpt: `It’s more than just two words. 👋 'Hello World' is where it all begins.`,
        featuredImage: `https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['beginners', 'coding', 'hello world'],
        category: categoryMap["Programming Basics"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `Why Devs Code at Night 🌙`,
        content: `Ask any developer and you’ll hear it: nighttime is prime time for writing code. This blog explores why many coders find peace and focus in the quiet hours—whether it's due to fewer distractions, creative flow, or just being night owls.`,
        excerpt: `When the world sleeps, devs rise. 🌙 Here's why we code at midnight.`,
        featuredImage: `https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['workflow', 'habits', 'developer life'],
        category: categoryMap["Lifestyle"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `Tech Grows Faster with Teamwork 🤝`,
        content: `Behind every great product is a team that communicates and collaborates. In this post, we discuss how working with others—whether in open source or at work—enhances skills, exposes you to new ideas, and leads to stronger projects.`,
        excerpt: `Code alone, grow slowly. Code together, grow fast. 🤝`,
        featuredImage: `https://plus.unsplash.com/premium_photo-1682140999442-e9e2a5f55be6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['collaboration', 'teams', 'growth'],
        category: categoryMap["Career Growth"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `The Perfect Dev Setup 🛠️`,
        content: `How your workspace looks and feels can greatly affect your productivity. A well-organized setup with the right monitor, keyboard, and lighting makes long coding sessions smoother. This blog shows why the setup matters more than you think.`,
        excerpt: `Clean desk, focused mind. 🧘 Your dev setup is your superpower.`,
        featuredImage: `https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['workspace', 'productivity', 'hardware'],
        category: categoryMap["Productivity"],
        isPublished: true
    },

    {
        _id:new mongoose.Types.ObjectId(),
        title: `Welcome to the Blog 🌐`,
        content: `This is the homepage of our Web Dev blog—a place where coding passion meets real-world stories. Whether you're here to learn, get inspired, or stay updated, you've found your digital home.`,
        excerpt: `Your journey into Web Dev begins here 🚀—Welcome aboard!`,
        featuredImage: `https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['home', 'welcome', 'webdev'],
        category: categoryMap["General"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `Does Your PC Power Your Productivity? 💻`,
        content: `Having the right hardware isn’t a luxury—it’s a necessity. Faster machines mean quicker builds, more tabs, smoother multitasking, and fewer delays. This post talks about how your PC specs influence your work speed and comfort.`,
        excerpt: `Don’t fight your machine. 🖥️ Upgrade your dev game with better tools.`,
        featuredImage: `https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['hardware', 'pc', 'tools'],
        category: categoryMap["Tools & Gear"],
        isPublished: true
    },

    {
        _id: new mongoose.Types.ObjectId(),
        title: `UI/UX Design: The Hidden Superpower 🎨`,
        content: `Great design is often invisible, yet it makes all the difference. In a crowded web, UI/UX is what sets apart successful platforms. This blog breaks down how thoughtful design improves usability, trust, and conversion.`,
        excerpt: `Good UI makes things work. Great UX makes them *feel* right. 🎯`,
        featuredImage: `https://images.unsplash.com/photo-1657812159055-7bae416f386d?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        tags: ['design', 'ux', 'ui'],
        category: categoryMap["Design"],
        isPublished: true
    }

];
posts.forEach(post => {
    post.slug = post.title
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
    });

async function seedDatabase() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")

        await Post.deleteMany();
        await Category.deleteMany();

        await Category.insertMany(categories);
        await Post.insertMany(posts);

        console.log("✅Database seeded")
    } catch (error){
        console.error("❌seeding error:",error);
        process.exit(1);
    }
}
seedDatabase();