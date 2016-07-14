"use strict";angular.module("passionDrivenPortfolio",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ngFitText","ui.controllers","ui.directives","ui.services"]).config(["$routeProvider","$locationProvider",function(a,b){var c,d;return b.html5Mode(!0),c=["main","traveler","developer","livit","relivit","resume","uplabs","voray","thedyrt","adsvise","404","main_legacy"],d=function(b){var c,d;return d="/"+b,c={templateUrl:"views/"+b+".html"},a.when(d,c),a},c.forEach(function(a){return d(a)}),a.when("/",{redirectTo:"/main"}).otherwise({redirectTo:"/404"})}]);var controllers=angular.module("ui.controllers",[]);controllers.controller("PassionDrivenController",["$scope","$location","anchorSmoothScroll",function(a,b,c){a.brand="Tyler Goelz",a.linkPrefix="",a.pageLinks={base:"/main",traveler:"/traveler",developer:"/developer"},a.$on("$locationChangeStart",function(){switch(b.path()){case a.pageLinks.traveler:a.navigationBackgroundColor="navbar-traveler",a.jumbotronBackgroundColor="bg-traveler",a.currentPage="traveler";break;case a.pageLinks.developer:a.navigationBackgroundColor="navbar-developer",a.jumbotronBackgroundColor="bg-developer",a.currentPage="developer";break;default:a.navigationBackgroundColor="navbar-default",a.jumbotronBackgroundColor="",a.currentPage="main"}var d=document.getElementById("body");null!==d&&c.scrollTo(d)})}]),controllers.controller("HeaderController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()},a.isCollapsed=!0}]),controllers.controller("MainController",function(){}),controllers.controller("TravelerController",function(){}),controllers.controller("DeveloperController",["$scope",function(a){a.skills=[{svg:"images/icons/svg/flask.svg",image:"/images/icons/png/flask.png",title:"Cutting Edge Technology",description:"Whether it's stable, cutting edge technology in client work or experimental, bleeding edge technology in personal projects, I'm constantly reading about, learning, contrinbuting to, and implementing the most modern technologies.",extra:""},{svg:"images/icons/svg/infinity-loop.svg",image:"/images/icons/png/infinity-loop.png",title:"Lean UX & Product Development",description:"A Front-End Developers job of aligning interface and business needs is never done.",extra:""},{svg:"images/icons/svg/spaceship.svg",image:"/images/icons/png/spaceship.png",title:"Scalability, From Code-To-Product",description:"From modern scaffolding tools to intuitive interface design, I build products and apps that scale to the needs of the user, as well as future developers.",extra:""},{svg:"images/icons/svg/retina-ready.svg",image:"/images/icons/png/retina-ready.png",title:"Customer Validation",description:"From startups to corporations, knowing your customer is the first step to any successful app or product. Once you've validated your customer, you can build a successful web app, website, or product.",extra:""}],a.projects=[{url:"https://www.giftstarter.com?ref=tylergoelz",image:"images/developer/projects/giftstarter/large.png",thumbnail:"images/developer/projects/giftstarter/logo.png",title:"GiftStarter",description:"While working with GiftStarter, I helped rebuild the app experience with a standardized, higher converting front-end stack. We graduated from 500 Startups as the 7th fastest growing company of the batch.",cta:{url:"https://www.giftstarter.com?ref=tylergoelz",text:"Give Something Thoughtful"}},{url:"https://www.wayup.com?ref=tylergoelz",image:"images/developer/projects/wayup/large.png",thumbnail:"images/developer/projects/wayup/logo.png",title:"WayUp",description:"WayUp contracted me to create a public-facing student profile page for 77k+ college students - now used by half a million college students. I accompanied WayUp through Y Combinator where they graduated with a $7.8M Series A round.",cta:{url:"https://www.wayup.com?ref=tylergoelz",text:"Get Hired Today"}},{url:"https://www.organicbeardsupply.com",image:"images/developer/projects/obs/large.png",thumbnail:"images/developer/projects/obs/logo.png",title:"Organic Beard Supply",description:"I built Organic Beard Supply from an idea to a staple business found at local markets and online. It's grown to be a completely functioning business with products, customers, and community support.",cta:{url:"https://www.organicbeardsupply.com?ref=tylergoelz",text:"Shop Organic Beard Care"}},{url:"http://writeon.io?ref=tylergoelz",image:"images/developer/projects/writeon/large.gif",thumbnail:"images/developer/projects/writeon/logo.png",title:"WriteOn",description:"WriteOn originated as a passion project and quickly became a product with traction and users. WriteOn is a clean, refined, minimal writing experience stripped of distraction.",cta:{url:"http://writeon.io?ref=tylergoelz",text:"Start Writing Now"}},{url:"http://variant.ninja?ref=tylergoelz",image:"images/developer/projects/variant_ninja/large.png",thumbnail:"images/developer/projects/variant_ninja/logo.png",title:"Variant Ninja",description:"Variant Ninja was created out of necessity. After pin-pointing redundant workflow while building high conversion landing pages, Variant Ninja was built to iterate quickly while adding conversion tracking, lead nurturing, and more.",cta:{url:"http://variant.ninja?ref=tylergoelz",text:"Build Converting Landing Pages"}}],a.pastProjects=[{image:"images/developer/projects/sproutcamp/logo.png",title:"SproutCamp",cta:{url:"http://www.sproutcamp.co?ref=tylergoelz",text:"Learn More"}},{image:"images/developer/projects/hashtag_creative/logo.png",title:"Hashtag Creative",cta:{url:"http://hashtagcreative.co?ref=tylergoelz",text:"Learn More"}},{image:"images/developer/projects/lifetime/logo.png",title:"Life Time Fitness",cta:{url:"https://www.lifetimefitness.com?ref=tylergoelz",text:"Learn More"}},{image:"images/developer/projects/redwood/logo.png",title:"Redwood Agile",cta:{url:"https://angel.co/redwood-agile?ref=tylergoelz",text:"Learn More"}},{image:"images/developer/projects/leanlabs/logo.png",title:"Lean Labs",cta:{url:"https://www.lean-labs.com/work/appsfreedom?ref=tylergoelz",text:"Learn More"}},{image:"images/developer/projects/activprayer/logo.png",title:"ActivPrayer",cta:{url:"http://www.activprayer.com?ref=tylergoelz",text:"Learn More"}},{image:"images/developer/projects/gffb/logo.png",title:"Fit For Birth",cta:{url:"http://getfitforbirth.com/?ref=tylergoelz",text:"Learn More"}}]}]),controllers.controller("ResumeController",["$scope",function(a){a.googleDriveLink="https://drive.google.com/file/d/0B_oLYF0iNvi4VmF2cU1TT2hiS2c/view?usp=sharing",a.experiences=[{company:"GiftStarter",url:"giftstarter.com",braggingImage:"images/resume/bragging/500.png",braggingUrl:"http://500.co/startup/giftstarter/?ref=tylergoelz",startDate:"August 2015",endDate:"Present",description:"GiftStarter was the 7th fastest growing startup in Batch14 of 500 Startups and gives users an easy, intuitive way to give gifts together.",title:"Front-End Engineer, Product Developer",details:["Rebuilt front-end with a standardized, modern stack delivering higher conversion.","Accompanied GiftStarter through Batch14 of 500 Startups.","Automated social distribution for in-house and partner content."]},{company:"WayUp",url:"wayup.com",braggingImage:"images/resume/bragging/ycomb.png",braggingUrl:"https://www.ycombinator.com/?ref=tylergoelz",startDate:"February 2015",endDate:"June 2015",description:"WayUp is the largest online marketplace for college students to find full-time jobs, part-time jobs, and internships. Started in 2014, they have already grown to a user-base of half a million students.",title:"Front-End Developer, Contractor",details:["Own creation of public-facing student profile page for half a million students.","Accompany Campus Job through Y Combinator ending in a $7.8m Series A round.","Work directly alongside CTO to enhance and improve an increasingly successful platform."]},{company:"WriteOn",url:"writeon.io",startDate:"October 2014",endDate:"Present",description:"WriteOn is a clean, minimal writing tool built for authors by authors. Made with &heart; by Canso.",title:"Front-End Developer, Co-Founder",details:["Launched private beta in three months using Lean UX methodology.","User acquisition & engagement, email marketing, social media marketing, ideation on product development, and branding."]},{company:"Organic Beard Supply",url:"organicbeardsupply.com",startDate:"July 2015",endDate:"Present",description:"Organic Beard Supply is on a journey to provide men with sustainable, earth-friendly beard care.",title:"Founder, Product Developer",details:["Built Shopify eCommerce platform with recurring payments, optimized user funnels, A/B testing, and tracking - including heat maps, content analytics, and Google Analytics.","Created online & in-person brand awareness throughout local community in less than six months."]}],a.technologies=["Angular","MVVM","jQuery","javascript","Semantic HTML","Sass/Less"],a.contactInfo=[{url:"mailto:tyler@tylergoelz.com",name:"Email"},{url:"http://www.tylergoelz.com",name:"Website"},{url:"https://github.com/yaboi",name:"Github"},{url:"https://www.angel.co/tylergoelz",name:"Angel"},{url:"https://www.linkedin.com/in/tylergoelz",name:"LinkedIn"},{url:"",name:"727-342-0319"}]}]),controllers.controller("LivitController",["$scope",function(a){a.video=!1,a.toggleVideo=function(){a.video=!a.video},a.companyName="Liv.it"}]),controllers.controller("VorayController",["$scope",function(a){a.video=!1,a.toggleVideo=function(){a.video=!a.video},a.companyName="Voray"}]),controllers.controller("UplabsController",["$scope",function(a){a.video=!1,a.toggleVideo=function(){a.video=!a.video},a.companyName="Uplabs"}]),controllers.controller("DyrtController",["$scope",function(a){a.video=!1,a.toggleVideo=function(){a.video=!a.video},a.companyName="The Dyrt"}]),controllers.controller("AdsviseController",["$scope",function(a){a.video=!1,a.toggleVideo=function(){a.video=!a.video},a.companyName="Adsvise"}]),controllers.controller("SmoothScrollController",["$scope","$location","anchorSmoothScroll",function(a,b,c){a.gotoAnchor=function(a){var b=document.getElementById(a);null!==b&&c.scrollTo(b)}}]);var directives=angular.module("ui.directives",[]);directives.directive("videoPlayer",function(){return{restrict:"AE",replace:!0,template:function(a,b){var c="";return c+='<div class="video-thumb">',c+='   <img ng-click="toggleVideo();" src="'+b.videoPlacholder+'" alt="'+b.videoPlaceholderAlt+'" class="center-block img-responsive img-rounded" />',c+='   <div ng-if="video" class="video-container" ng-click="toggleVideo();">                                <div class="container">                                    <div class="row">                                        <div class="col-xs-12 col-lg-10 col-lg-offset-1">                                            <div class="video-content">',c+='                       <button type="button" class="btn close" ng-click="toggleVideo();">                                                    <span class="fui-cross"></span> Close Video                                                </button>',c+='                       <iframe src="'+b.videoSrc+'" width="100%" frameborder="0" autoplay="true" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',c+="                   </div>                                        </div>                                    </div>                                </div>",c+="   </div>",c+="</div>"}}}),directives.directive("resumeCta",function(){return{restrict:"AE",replace:!0,template:function(a,b){var c="";return c+='   <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">',c+='       <div class="well">',c+="            <p>"+b.headline+"</p>",c+='            <a href="'+b.link+'" class="btn btn-wide btn-primary" target="_blank">'+b.btnText+"</a>",c+="        </div>",c+="    </div>"}}}),directives.directive("project",function(){return{restrict:"AE",template:function(a,b){var c="";return c+='<div class="hero">',c+='    <div class="container">',c+='        <div class="row">',c+='            <div class="col-md-7 content">',c+='                <a ng-href="'+b.url+'" class="thumbnail">',c+='                    <img src="'+b.thumbnailSrc+'" alt="">',c+="                </a>",c+="                <h3>"+b.title+"</h3>",c+="                <p>"+b.desc+"</p>",c+='                <a ng-href="'+b.url+'" class="btn" role="button">'+b.cta+"</a>",c+="            </div>",c+='            <div class="col-md-5 image">',c+='                <img src="'+b.imageSrc+'" alt="">',c+="            </div>",c+="        </div>",c+="    </div>",c+="</div>"}}});var services=angular.module("ui.services",[]);services.service("anchorSmoothScroll",function(){this.scrollTo=function(a){function b(){return d.pageYOffset?d.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function c(b){for(var c=a;c.offsetParent&&c.offsetParent!==document.body;)c=c.offsetParent,b+=c.offsetTop;return b}var d=this,e=b(),f=c(a.offsetTop),g=f>e?f-e:e-f;if(100>g)return void scrollTo(0,f);var h=Math.round(g/50);h>=20&&(h=20);var i=Math.round(g/25),j=f>e?e+i:e-i,k=0;if(f>e)for(var l=e;f>l;l+=i)setTimeout("window.scrollTo(0, "+j+")",k*h),j+=i,j>f&&(j=f),k++;else for(var m=e;m>f;m-=i)setTimeout("window.scrollTo(0, "+j+")",k*h),j-=i,f>j&&(j=f),k++}});