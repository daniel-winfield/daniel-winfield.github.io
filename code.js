var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

Vue.component('qualification-item', {
    props: ['item'],
    template: `
        <div class="row">
            <div class="col-lg-2 col-3">
                <img :src="item.imageUrl" style="width: 100%;"/>
            </div>
            <div class="col-lg-10 col-7">
                <div class="row">
                    <div class="col-12">
                        <p><span class="h5">{{ item.institution }}</span> <span style="float:right;" class="text-muted"><i v-if="item.location" class="fas fa-map-marker-alt"></i> {{ item.location }}</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div v-for="qualification in item.qualifications">
                            <p class="mb-2">{{ qualification.qualification }} <span style="float:right;" class="text-muted">{{ qualification.startDate ? qualification.startDate.getFullYear() + ' - ' : '' }}{{ qualification.endDate.getFullYear() }}</span></p>
                            <p>{{ qualification.info }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
})

Vue.component('employment-item', {
    props: ['item', 'months'],
    template: `
        <div class="row">
            <div class="col-lg-2 col-3">
                <img :src="item.imageUrl" style="width: 100%;"/>
            </div>
            <div class="col-lg-10 col-9">
                <div class="row">
                    <div class="col-12">
                        <p><span class="h5">{{ item.company }}</span> <span style="float:right;" class="text-muted"><i class="fas fa-map-marker-alt"></i> {{ item.location }}</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div v-for="position in item.positions">
                            <p class="mb-2" style="font-weight:bold">{{ position.jobTitle }} <span style="float:right;" class="text-muted">{{ months[position.startDate.getMonth()] + ' ' + position.startDate.getFullYear() }} - {{ position.endDate ? months[position.endDate.getMonth()] + ' ' + position.endDate.getFullYear() : 'Present' }}</span></p>
                            <p>{{ position.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

Vue.component('skill-item', {
    props: ['item'],
    template: `
        <span class="badge badge-pill badge-dark background-colour-primary">{{ item.name }}<i class="ml-2" v-bind:class="item.iconClass"></i></span>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        fullName: 'Daniel Winfield',
        months: months,
        jobTitle: 'Full-Stack Software Engineer',
        headerImageUrl: 'images/code-coding-computer-data-574070.jpg',
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/daniel-winfield', iconClass: 'fab fa-github' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/danielwinfield1/', iconClass: 'fab fa-linkedin-in' },
            { name: 'Email', url: 'mailto:me@danielwinfield.uk', iconClass: 'fas fa-envelope' }
        ],
        about: {
            title: 'About me',
            description: "I am a full-stack Software Engineer working in Nottingham. I currently work on a suite of products at Imosphere where I work with JavaScript, TypeScript, HTML, CSS, C# and T-SQL. I have previously worked as a Web Developer and I hold a first-class undergraduate degree, BSc (Hons) Computer Science, from Nottingham Trent University.",
            photoUrl: 'https://avatars0.githubusercontent.com/u/17948376'
        },
        projects: {
            title: 'Projects',
            items: [
                { 
                    name: 'UK Coronavirus Vaccine Tracker', 
                    description: 'This application tracks the rollout of vaccines in the United Kingdom. The data is sourced directly from the GOV.UK API in JSON format. A GitHub action is used to update the data periodically throughout the day on a set cron schedule.', 
                    imageUrl: 'images/projects/uk-covid-tracker.png', 
                    projectUrl: 'https://danielwinfield.uk/uk-covid-vaccine-tracker/',
                    codeUrl: 'https://github.com/daniel-winfield/uk-covid-vaccine-tracker/'
                },
            ]
        },
        skills: {
            title: 'Skills',
            languages: {
                title: 'Programming languages',
                items: [
                    { name: 'C#', iconClass: 'fas fa-code' },
                    { name: 'T-SQL', iconClass: 'fas fa-code' },
                    { name: 'ASP.NET', iconClass: 'fas fa-code' },
                    { name: 'TypeScript', iconClass: 'fas fa-code' },
                    { name: 'JavaScript', iconClass: 'fab fa-js-square' },
                    { name: 'KnockoutJS', iconClass: 'fas fa-code' },
                    { name: 'Vue', iconClass: 'fab fa-vuejs' },
                    { name: 'HTML5', iconClass: 'fab fa-html5' },
                    { name: 'CSS3', iconClass: 'fab fa-css3-alt' }
                ]
            },
            tools: {
                title: 'Tools',
                items: [
                    { name: 'Visual Studio', iconClass: 'fas fa-laptop-code' },
                    { name: 'Azure DevOps (TFS)', iconClass: 'fas fa-terminal' },
                    { name: 'Git', iconClass: 'fab fa-git' }
                ]
            },
            platforms: {
                title: 'Platforms',
                items: [
                    { name: 'WordPress', iconClass: 'fab fa-wordpress' },
                    { name: 'Joomla', iconClass: 'fab fa-joomla' }
                ]
            },
        },
        workExperience: {
            title: 'Employment',
            items: [
                {
                    company: 'Imosphere Ltd',
                    positions: [
                        {
                            jobTitle: 'Software Engineer',
                            startDate: new Date(2020, 8),
                            endDate: null,
                            description: "A full-stack software engineer on the Health and Research Analytics (HaRA) team, responsible for developing features and fixing bugs on all products in the HaRA suite. The tech stack consists of JavaScript, TypeScript, HTML and CSS on the front end, and C# and T-SQL on the back end. I have also gained experience with Azure DevOps pipelines and both TFS and GIT repositories."
                        },
                        {
                            jobTitle: 'Graduate Software Engineer',
                            startDate: new Date(2019, 6),
                            endDate: new Date(2020, 8),
                            description: "Responsible for designing and implementing features and bug fixes on the Atmolytics healthcare software platform (C#, ASP.NET, TypeScript, SQL), and for developing for the Resource Allocation System (SQL) in use by councils and CCG's across the United Kingdom."
                        },
                        {
                            jobTitle: 'Placement Software Engineer',
                            startDate: new Date(2017, 6),
                            endDate: new Date(2019, 6),
                            description: "A one-year full-time placement which was undertaken as a part of my undergraduate degree. During this time I worked on multiple projects ranging from web-based analytics software to a SQL based resource allocation algorithm product. After the year was completed, this was continued on a one-day per week basis during the final year of my undergraduate degree."
                        }
                    ],
                    imageUrl: 'images/imosphere-logo.png',
                    location: 'Nottingham, UK'
                },
                {
                    company: 'One Tower Ltd',
                    positions: [
                        {
                            jobTitle: 'Web Developer',
                            startDate: new Date(2016, 4),
                            endDate: new Date(2019, 6),
                            description: "Responsible for designing, implementing, and maintaining the website through the WordPress platform."
                        }
                    ],
                    imageUrl: 'images/one-tower-logo.jpg',
                    location: 'Nottingham, UK'
                },
                {
                    company: 'Blinds Fit',
                    positions: [
                        {
                            jobTitle: 'Web and Social Media Developer',
                            startDate: new Date(2016, 2),
                            endDate: new Date(2019, 6),
                            description: 'Responsible for improving and updating the website through the Joomla platform.'
                        }
                    ],
                    imageUrl: 'images/blinds-fit-logo.jpg',
                    location: 'Nottingham, UK'
                }
            ]
        },
        education: {
            title: 'Education',
            items: [
                {
                    institution: 'Nottingham Trent University',
                    qualifications: [{
                        startDate: new Date(2015, 0),
                        endDate: new Date(2019, 0),
                        qualification: 'BSc (Hons) Computer Science SW',
                        info: 'Achieved a First-class degree with honours'
                    }],
                    location: 'Nottingham, UK',
                    imageUrl: 'images/ntu-logo.jpg'
                },{
                    institution: 'Burton and South Derbyshire College',
                    qualifications: [{
                        startDate: new Date(2013, 0),
                        endDate: new Date(2015, 0),
                        qualification: 'Edexcel Extended Diploma in IT',
                        info: 'Achieved a Distinction Star, Distinction, Distinction'
                    }],
                    location: 'Burton-on-Trent, UK',
                    imageUrl: 'images/bsdc-logo.jpg'
                }, {
                    institution: 'Microsoft Certificates',
                    qualifications: [
                        {
                            startDate: null,
                            endDate: new Date(2015, 0),
                            qualification: 'MTA: Database Fundamentals',
                            info: null
                        }, {
                            startDate: null,
                            endDate: new Date(2015, 0),
                            qualification: 'MTA: Windows® Server Administration Fundamentals',
                            info: null
                        }, {
                            startDate: null,
                            endDate: new Date(2015, 0),
                            qualification: 'MTA: Software Development Fundamentals (C#)',
                            info: null
                        }, {
                            startDate: null,
                            endDate: new Date(2015, 0),
                            qualification: 'MTA: Security Fundamentals',
                            info: null
                        }, {
                            startDate: null,
                            endDate: new Date(2015, 0),
                            qualification: 'MTA: Networking Fundamentals',
                            info: null
                        }, {
                            startDate: null,
                            endDate: new Date(2014, 0),
                            qualification: 'MTA: Windows® Operating System Fundamentals',
                            info: null
                        }, {
                            startDate: null,
                            endDate: new Date(2014, 0),
                            qualification: 'MTA: Web Development Fundamentals (C#)',
                            info: null
                        }
                    ],
                    location: null,
                    imageUrl: 'images/microsoft-logo.png'
                }
            ]
        }
    },
    methods: {
        handleScroll (event) {
            let navElement = document.getElementById("navbar");

            if (document.documentElement.scrollTop > window.innerHeight / 2) {
                navElement.classList.remove("hidden");
            } else {
                navElement.classList.add("hidden");
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