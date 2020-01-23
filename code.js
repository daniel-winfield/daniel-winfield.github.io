var app = new Vue({
    el: '#app',
    data: {
        fullName: 'Daniel Winfield',
        jobTitle: 'Software Engineer',
        headerImageUrl: 'images/code-coding-computer-data-574070.jpg',
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/daniel-winfield', iconClass: 'fa-github' },
            { name: 'Twitter', url: 'https://twitter.com/danielwinfield_', iconClass: 'fa-twitter' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/danielwinfield1/', iconClass: 'fa-linkedin-in' }
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
                    startDate: new Date(2019, 6),
                    endDate: null,
                    description: "Responsible for designing and implementing features and bug fixes on the Atmolytics healthcare software platform (C#, ASP.NET, TypeScript, SQL), and for developing for the Resource Allocation System (SQL) in use by councils and CCG's across the United Kingdom.",
                    companyImageUrl: '',
                    location: 'Nottingham, UK'
                },                
                { 
                    company: 'Imosphere Ltd',
                    jobTitle: 'Placement Software Engineer',
                    dates: 'July 2017 - July 2019',
                    startDate: new Date(2017, 6),
                    endDate: new Date(2019, 6),
                    description: "Worked on multiple projects during my year-long placement. This was continued in the same role during my final year of university on a one-day per week basis.",
                    companyImageUrl: '',
                    location: 'Nottingham, UK'
                },
                { 
                    company: 'One Tower Ltd',
                    jobTitle: 'Web Developer',
                    dates: 'May 2016 - Present',
                    startDate: new Date(2016, 4),
                    endDate: null,
                    description: "Responsible for designing, implementing, and maintaining the website through the WordPress platform.",
                    companyImageUrl: '',
                    location: 'Nottingham, UK'
                },
                { 
                    company: 'Blinds Fit',
                    jobTitle: 'Web and Social Media Developer',
                    dates: 'March 2016 - Present',
                    startDate: new Date(2016, 2),
                    endDate: null,
                    description: 'Responsible for improving and updating the website through the Joomla platform.',
                    companyImageUrl: '',
                    location: 'Nottingham, UK'
                }
            ]
        },
        education: {
            title: 'Education/Qualifications',
            items: [
                {
                    institution: 'Nottingham Trent University',
                    startDate: new Date(2015, 0),
                    endDate: new Date(2019, 0),
                    qualification: 'BSc (Hons) Computer Science SW',
                    info: 'Achieved a First class degree with honours',
                    location: 'Nottingham, UK'
                },{
                    institution: 'Burton and South Derbyshire College',
                    startDate: new Date(2013, 0),
                    endDate: new Date(2015, 0),
                    qualification: 'Edexcel Extended Diploma in IT',
                    info: 'Achieved a Distinction Star, Distinction, Distinction',
                    location: 'Burton-on-Trent, UK'
                },{
                    institution: 'The de Ferrers Academy',
                    startDate: new Date(2007, 0),
                    endDate: new Date(2013, 0),
                    qualification: 'GCSE',
                    info: 'Achieved 9 GCSEs at grades A-C including Maths, English and Science.',
                    location: 'Burton-on-Trent, UK'
                }
            ]
        },
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    methods: {
        handleScroll (event) {
            console.log(document.body.scrollTop + ' ' + document.documentElement.scrollTop)
            let navElement = document.getElementById("navbar");

            if (document.documentElement.scrollTop > 50) {
                navElement.classList.remove("navbar-light");
                navElement.classList.remove("navbar-transparent");

                navElement.classList.add("navbar-dark");
                navElement.classList.add("bg-dark");
            } else {
                navElement.classList.remove("navbar-dark");
                navElement.classList.remove("bg-dark");

                navElement.classList.add("navbar-light");
                navElement.classList.add("navbar-transparent");
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.addEventListener('scroll', this.handleScroll);
    }
})