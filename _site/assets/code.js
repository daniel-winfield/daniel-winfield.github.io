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
                            <p class="mb-2">{{ position.jobTitle }} <span style="float:right;" class="text-muted">{{ months[position.startDate.getMonth()] + ' ' + position.startDate.getFullYear() }} - {{ position.endDate ? months[position.endDate.getMonth()] + ' ' + position.endDate.getFullYear() : 'Present' }}</span></p>
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
    delimiters: ["((", "))"],
    el: '#app',
    data: {
        months: months,
        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/daniel-winfield', iconClass: 'fa-github' },
            { name: 'Twitter', url: 'https://twitter.com/danielwinfield_', iconClass: 'fa-twitter' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/danielwinfield1/', iconClass: 'fa-linkedin-in' }
        ],
        about: {
            fullName: 'Daniel Winfield',
            jobTitle: 'Full Stack Software Engineer',
            title: 'About me',
            description: "I have recently graduated with a first-class degree in BSc (Hons) Computer Science at Nottingham Trent University. I currently work as a Graduate Software Engineer at a company in Nottingham, where I have worked mostly with ASP.NET, C#, TypeScript and SQL.",
            photoUrl: 'https://avatars0.githubusercontent.com/u/17948376'
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
                    { name: 'Azure Devops (TFS)', iconClass: 'fas fa-terminal' },
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
                            jobTitle: 'Gradate Software Engineer',
                            startDate: new Date(2019, 6),
                            endDate: null,
                            description: "Responsible for designing and implementing features and bug fixes on the Atmolytics healthcare software platform (C#, ASP.NET, TypeScript, SQL), and for developing for the Resource Allocation System (SQL) in use by councils and CCG's across the United Kingdom."
                        },
                        {
                            jobTitle: 'Placement Software Engineer',
                            startDate: new Date(2017, 6),
                            endDate: new Date(2019, 6),
                            description: "Worked on multiple projects during my year-long placement. This was continued in the same role during my final year of university on a one-day per week basis."
                        }
                    ],
                    imageUrl: 'assets/images/imosphere-logo.png',
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
                    imageUrl: 'assets/images/one-tower-logo.jpg',
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
                    imageUrl: 'assets/images/blinds-fit-logo.jpg',
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
                    imageUrl: 'assets/images/ntu-logo.jpg'
                },{
                    institution: 'Burton and South Derbyshire College',
                    qualifications: [{
                        startDate: new Date(2013, 0),
                        endDate: new Date(2015, 0),
                        qualification: 'Edexcel Extended Diploma in IT',
                        info: 'Achieved a Distinction Star, Distinction, Distinction'
                    }],
                    location: 'Burton-on-Trent, UK',
                    imageUrl: 'assets/images/bsdc-logo.jpg'
                }, {
                    institution: 'Microsoft',
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
                    imageUrl: 'assets/images/microsoft-logo.png'
                }
            ]
        },
        projects: {
            title: "Projects",
            items: [
                {
                    title: "",
                    description: "",
                    imageUrl: "",
                    linkUrl: ""
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