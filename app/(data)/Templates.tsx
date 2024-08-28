export default  [
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on yout blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
                
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
        name: 'Twitter Post Generator',
        desc: 'AI tool that generates engaging Twitter posts based on your topic and keywords.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        slug: 'twitter-post-generator',
        aiPrompt: 'Generate 3 engaging Twitter posts based on the topic and keywords in rich text editor format',
        form: [
            {
                label: 'Enter Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Facebook Ad Copy Generator',
        desc: 'Generate engaging Facebook ad copy with catchy headlines and CTA based on the product description.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/124/124010.png',
        slug: 'facebook-ad-copy-generator',
        aiPrompt: 'Generate Facebook ad copy with catchy headline and call-to-action based on product description in rich text editor format',
        form: [
            {
                label: 'Enter Product/Service Description',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        desc: 'Generate high-conversion email subject lines based on campaign details.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
        slug: 'email-subject-line-generator',
        aiPrompt: 'Generate 5 high-conversion email subject lines based on campaign details in rich text editor format',
        form: [
            {
                label: 'Enter Campaign Details',
                field: 'textarea',
                name: 'campaignDetails',
                required: true
            }
        ]
    },
    {
        name: 'Email Body Generator',
        desc: 'Generate professional and engaging email body content based on the email outline.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/561/561127.png',
        slug: 'email-body-generator',
        aiPrompt: 'Generate professional email body content based on the given outline in rich text editor format',
        form: [
            {
                label: 'Enter Email Outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Pinterest Pin Description Generator',
        desc: 'Generate optimized Pinterest pin descriptions based on the image and topic.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733572.png',
        slug: 'pinterest-pin-description-generator',
        aiPrompt: 'Generate optimized Pinterest pin descriptions based on the image topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter Pin Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Pin Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'LinkedIn Post Generator',
        desc: 'Generate professional LinkedIn posts based on industry keywords and topics.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
        slug: 'linkedin-post-generator',
        aiPrompt: 'Generate 3 LinkedIn posts based on industry keywords and topics in rich text editor format',
        form: [
            {
                label: 'Enter Industry Keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter Topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Press Release Generator',
        desc: 'Generate a professional press release based on company information and announcement.',
        category: 'PR',
        icon: 'https://cdn-icons-png.flaticon.com/128/595/595676.png',
        slug: 'press-release-generator',
        aiPrompt: 'Generate a press release based on company information and announcement in rich text editor format',
        form: [
            {
                label: 'Enter Company Information',
                field: 'textarea',
                name: 'companyInfo',
                required: true
            },
            {
                label: 'Enter Announcement Details',
                field: 'textarea',
                name: 'announcement'
            }
        ]
    },
    {
        name: 'Website Meta Description Generator',
        desc: 'Generate SEO-optimized meta descriptions for your website pages.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/151/151773.png',
        slug: 'meta-description-generator',
        aiPrompt: 'Generate an SEO-optimized meta description based on page content in rich text editor format',
        form: [
            {
                label: 'Enter Page Content Summary',
                field: 'textarea',
                name: 'contentSummary',
                required: true
            }
        ]
    },
    {
        name: 'SEO Keyword Generator',
        desc: 'Generate the best SEO keywords for your content based on the given niche.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/561/561199.png',
        slug: 'seo-keyword-generator',
        aiPrompt: 'Generate the top SEO keywords based on niche and content outline in rich text editor format',
        form: [
            {
                label: 'Enter Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter Content Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Video Script Generator',
        desc: 'Generate video scripts based on your video outline and topic.',
        category: 'Video Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/2303/2303437.png',
        slug: 'video-script-generator',
        aiPrompt: 'Generate a video script based on the given topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter Video Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Video Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Podcast Script Generator',
        desc: 'Generate engaging podcast scripts based on the topic and outline.',
        category: 'Podcast',
        icon: 'https://cdn-icons-png.flaticon.com/128/2249/2249393.png',
        slug: 'podcast-script-generator',
        aiPrompt: 'Generate a podcast script based on the topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter Podcast Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Podcast Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Resume Builder',
        desc: 'Generate a professional resume based on your input and job experience.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050387.png',
        slug: 'resume-builder',
        aiPrompt: 'Generate a professional resume based on the given details in rich text editor format',
        form: [
            {
                label: 'Enter Job Experience Details',
                field: 'textarea',
                name: 'experience',
                required: true
            },
            {
                label: 'Enter Education Details',
                field: 'textarea',
                name: 'education',
                required: true
            }
        ]
    },
    {
        name: 'Cover Letter Generator',
        desc: 'Generate a personalized cover letter based on job title and description.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/876/876751.png',
        slug: 'cover-letter-generator',
        aiPrompt: 'Generate a cover letter based on the job title and description in rich text editor format',
        form: [
            {
                label: 'Enter Job Title',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Enter Job Description',
                field: 'textarea',
                name: 'jobDescription'
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'Generate SEO-optimized product descriptions based on product details.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888859.png',
        slug: 'product-description-generator',
        aiPrompt: 'Generate a product description based on product details in rich text editor format',
        form: [
            {
                label: 'Enter Product Details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            }
        ]
    },
    {
        name: 'Slogan Generator',
        desc: 'Generate catchy slogans for your brand based on product name and niche.',
        category: 'Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2345/2345737.png',
        slug: 'slogan-generator',
        aiPrompt: 'Generate 5 catchy slogans based on the product name and niche in rich text editor format',
        form: [
            {
                label: 'Enter Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter Niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Newsletter Content Generator',
        desc: 'Generate engaging content for your newsletter based on the topic and audience.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1799/1799480.png',
        slug: 'newsletter-content-generator',
        aiPrompt: 'Generate engaging newsletter content based on topic and audience in rich text editor format',
        form: [
            {
                label: 'Enter Newsletter Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Audience Information',
                field: 'textarea',
                name: 'audience'
            }
        ]
    },
    {
        name: 'Hashtag Generator',
        desc: 'Generate popular hashtags for social media posts based on topic and niche.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/6941/6941917.png',
        slug: 'hashtag-generator',
        aiPrompt: 'Generate a list of popular hashtags based on topic and niche in rich text editor format',
        form: [
            {
                label: 'Enter Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'Video Title Generator',
        desc: 'Generate engaging video titles based on content topic and keywords.',
        category: 'Video Content',
        icon: 'https://cdn-icons-png.flaticon.com/128/3048/3048126.png',
        slug: 'video-title-generator',
        aiPrompt: 'Generate 5 engaging video titles based on content topic and keywords in rich text editor format',
        form: [
            {
                label: 'Enter Content Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Ebook Title Generator',
        desc: 'Generate catchy ebook titles based on your ebook topic and target audience.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/2051/2051767.png',
        slug: 'ebook-title-generator',
        aiPrompt: 'Generate 5 catchy ebook titles based on the ebook topic and target audience in rich text editor format',
        form: [
            {
                label: 'Enter Ebook Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Target Audience',
                field: 'input',
                name: 'audience'
            }
        ]
    },
    {
        name: 'Article Outline Generator',
        desc: 'Generate a detailed article outline based on the topic and keywords.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/3061/3061232.png',
        slug: 'article-outline-generator',
        aiPrompt: 'Generate a detailed article outline based on topic and keywords in rich text editor format',
        form: [
            {
                label: 'Enter Article Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter Keywords',
                field: 'input',
                name: 'keywords'
            }
        ]
    }
];