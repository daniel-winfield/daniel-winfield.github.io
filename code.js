var app = new Vue({
    el: '#app',
    data: {
        fullName: 'Daniel Winfield',
        jobTitle: 'Software Engineer',
        headerImageUrl: 'images/code-coding-computer-data-574070.jpg',
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/daniel-winfield' },
            { name: 'Twitter', url: 'https://twitter.com/danielwinfield_' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/danielwinfield1/' }
        ],
        about: {
            title: 'About me',
            description: "I am an early career developer, currently employed as a Graduate Software Developer. I have recently graduated with a first-class degree in BSc (Hons) Computer Science at Nottingham Trent University. I currently work as a Graduate Software Engineer at a company in Nottingham, where I have worked mostly with ASP.NET, C#, TypeScript and SQL.",
            photoUrl: 'https://avatars0.githubusercontent.com/u/17948376'
        },
        workExperience: {
            title: 'Work Experience/Employment',
            items: [
                { 
                    company: 'Imosphere Ltd',
                    jobTitle: 'Gradate Software Engineer',
                    dates: 'July 2019 - Present',
                    description: "Responsible for designing and implementing features and bug fixes on the Atmolytics healthcare software platform (C#, ASP.NET, TypeScript, SQL), and for developing for the Resource Allocation System (SQL) in use by councils and CCG's across the United Kingdom."
                },                
                { 
                    company: 'Imosphere Ltd',
                    jobTitle: 'Placement Software Engineer',
                    dates: 'July 2017 - July 2019',
                    description: "Worked on multiple projects during my year-long placement. This was continued in the same role during my final year of university on a one-day per week basis."
                },
                { 
                    company: 'One Tower Ltd',
                    jobTitle: 'Web Developer',
                    dates: 'May 2016 - Present',
                    description: "Responsible for designing, implementing, and maintaining the website through the WordPress platform."
                },
                { 
                    company: 'Blinds Fit',
                    jobTitle: 'Web and Social Media Developer',
                    dates: 'March 2016 - Present',
                    description: 'Responsible for improving and updating the website through the Joomla platform.'
                }
            ]
        },
        education: {
            title: 'Education/Qualifications',
            items: [
                {
                    institution: 'Nottingham Trent University',
                    dates: '2015-2019',
                    info: 'BSc (Hons) Computer Science SW (First class honours)'
                },{
                    institution: 'Burton and South Derbyshire College',
                    dates: '2013-2015',
                    info: 'Edexcel Extended Diploma in IT (Distinction Star, Distinction, Distinction)'
                },{
                    institution: 'The de Ferrers Academy',
                    dates: '2007-2013',
                    info: 'Achieved 9 GCSEs at grades A-C including Maths, English and Science.'
                }
            ]
        }
    }
})