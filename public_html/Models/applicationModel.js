/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//model for ther pathstarters angular application

// Define the `phonecatApp` module
var PathwayApp = angular.module('PathwayApp', []);

// Define the `Blogcontroller` controller on the `BlogApp` module
PathwayApp.controller('PathwayController', function PathwayController($scope) {
  //blog postings 
  
  //months that blogs can be a part of
  $scope.months = [
    {
        name : 'March'
    },
      
    {
        name: 'April'
    },
    
    {
        name: 'May'
    }
  ];
  
  //individual posts
  $scope.posts = [
    {
        month : 'March',
        date: '6th March',
        description: 'Bootcamp kicks off with a jam packed a jam-packed week of workshops, sessions and team building exercises, to prime the R9 ‘cohort’ with the tools and methodologies necessary to carry us forward.'
    },
    
    {
        month : 'March',
        date: '8th March',
        description: 'Mid week update – Amazing vibe here, There is content we already knew well, such as Agile, Lean, design thinking, wellness and resilience. With such a wide range of stakeholders, with different levels of skills and experience, it is no surprise Creative HQ took such a uniform approach. Awesome work!'
    },
    
    {
        month : 'March',
        date : '10th March',
        description : 'What a week! Highlights include a presentation by a Gov Tech guru, who spoke to us live from Austin Texas, inspirational talks on subject matter such as exponential technology, lean startup and market validation, and above all else our team dynamic. Teamwork is the most important contributor to success in this programme, and we are getting on ridiculously well.'
    },
    
    {
        month : 'March',
        date : '13th March',
        description : 'And so it begins, the great planning sessions. With orientation, over, it is time to set ourselves up for the next 12 weeks. After the first week of R9 workshops this was our first opportunity as a team to really get down to the business of problem validation. Because we run an agile fast paced team our week always starts with a scrum session. The to do list is high.'
    },
    
    {
        month : 'March',
        date : '16th March',
        description : 'We had a lot of tasks in this week’s sprint! We got our website up www.gotoworkonmentalhealth.co.nz and business cards printed, built a Value Proposition Canvas for our first customer segment, and ran a problem validation workshop with our agency. Off to our first R9 networking event. Let’s  see how many business cards we can hand out.'
    },
    
    {
        month : 'March',
        date : '17th March',
        description : 'Well, we’re off to celebrate St Paddy’s day now. But, because an entrepreneur spirit doesn’t have an off switch you’ll probably see us running secret problem interviews with everyone we meet! '
    },
    
    {
        month : 'March',
        date : '20th March',
        description : 'This morning started with a near disaster on google drive. For a moment there it seemed like all progress we had made so far might have been lost. Like all information on the internet things never fully disappear and through a complicated back end recovery our systems are back up and running!'
    },
    
    {
        month : 'March',
        date : '21st March',
        description : 'Fantastic workshop today with Micael around branding. Too early for us to be thinking about this however I can tell that it is going to be of vital importance later down the track. Thanks Micael!'
    },
    
    {
        month : 'March',
        date : '22nd March',
        description : 'Dead ends. It has been stressed to us since day one that failing quickly and rapidly pivoting was a necessary part of this process, but it still hurt none the less when we realised that the path we had begun to look down was a dead end. Scramble mode naturally ensued and we begun re-evaluating the problems we had validated with the agency in our earlier meetings. This led us to some possible avenues and some new ideas to investigate.'
    },
    
    {
        month : 'March',
        date : '23rd March',
        description : 'Today we went into our meeting with an agency member apprehensive that we would once again have our ideas devalued and would end up in real panic mode. But not this time - Luckily for us the meeting went amazing! Once again we are feeling like we are well on the way towards finding a viable solution. If anything, the lows have made the highs feel even higher and without them we would not have come up with the new innovative ideas that we are starting to look towards.'
    },
    
    {
        month : 'March',
        date : '24th March',
        description : 'Our team have been taking daily stand ups each morning, where we check in to see how we are tracking, and whether we are on task to complete what we set out to achieve that week.  Friday morning was the final stand up of the week, and everyone in the team was feeling tired but really upbeat.  This was a good sign of a successful and productive week.'
    },
    
    {
        month : 'March',
        date : '27th March',
        description : 'We have had an interesting development that seems worthy of its own blog post. Many pugs, many, many, many pugs, dun, dun, dun. Scott has set up a camera in his house in order to allow us a live feed of his two pugs day to day activities. Pug cam is a good look at one of the many forms innovation can take, and to be honest it’s nice to be able to take a breather from work and talk to pugs for 5 minutes.'
    },
    
    {
        month : 'March',
        date : '29th March',
        description : 'A big highlight so far is most certainly the solutions validation meeting we had today with the ministry. It seems we have managed to capture the elements of the problem the ministry was most focused on, and they seem excited about the ideas we pitched to them. Seeing this excitement has motivated us, and we are ready to get cracking with our next step.'
    },
    
    {
        month : 'March',
        date : '31st March',
        description : 'So what is our next step? We want to go and spend some serious time with the people we are going to be making something for. This would all be for naught if we did not deliver something that would really help people.'
    },
    
    {
        month : 'April',
        date : '3rd April',
        description : 'We have been anticipating a drop off in our enthusiasm and progress but alas it has not come. Week in and week out we seem to be scaling our opportunity and progressing towards our goals. We had an incredible talk with the wonderful ladies from the Resiliency Unleashed training & consultancy firm. These two are pioneers in this space and we were lucky enough to get to hear about the work they do and how they are helping to make a positive impact in this area. Both had an amazing response to our solution ideas.'
    },
    
    {
        month : 'April',
        date : '7th April',
        description : 'One of the other great things we managed to do this week was come up with our teams core values Exploration - For us this means not being happy with the status quo. We want to always be excited about the opportunity for change and make improvement. We want to actively seek chances to learn and better ourselves. Community - Fostering a dynamic environment where we can all prosper together. Our team should feel like a family. Altruism - In the end this is all for the sole reason of being able to help and improve outcomes for people who are in need of a helping hand. Optimism - Remaining optimistic and forward focused even when things get tough. Empowerment - We want to empower people to make their own decisions, we want to give people the tools they need to take their journey into their own hands, and to thrive.'
    },
    
    {
        month : 'April',
        date : '10th April',
        description : 'Scott and Paul are off to Julie Treanor’s Effective Teams workshop. It’s going to be up to them to foster a dynamic team environment!'
    },
    
    {
        month : 'April',
        date : '11th April',
        description : 'We are beginning to look towards the next phase of this process and have begun laying the groundworks for our design and development process. With this foundation laid we will be able to get straight down to creating the solution we come up with after we have talked to the clients.'
    },
    
    {
        month : 'April',
        date : '13th April',
        description : 'The main focus for the past week has been trying to get in front of the clients themselves. We have been making progress in this regard, but it has been of the slow and steady kind. We have what appears to be some solid leads in this regard and we are getting excited to get some deep insights into the problems.'
    },
    
    {
        month : 'April',
        date : '15th April',
        description : 'One of our recent highlights was meeting Doctor Ian Soosay. Ian is the Ministry of Health, Deputy Director of Mental Health and has joined our advisory board.  As you can imagine, Ian has extensive knowledge and experience in the mental health area valuable to our project helping to inform our decisions.'
    },
    
    {
        month : 'April',
        date : '16th April',
        description : 'Today we ran a workshop with HCID Case Managers in Upper Hutt, which helped to inform our questions for clients and validate potential gaps our concept can help with. What can we say, it couldn’t have gone better. Of course some more time would have been wonderful but we make do.'
    },
    
    {
        month : 'April',
        date : '18th April',
        description : 'We made the most of a recent team outing to Auckland. In the morning, we met with the Mental Health Foundation and Changing Minds and spoke to mental health advocates with lived experience.  In the afternoon, we met Doctor Rawiri from the National Hauora Coalition who helped validate some of our assumptions around our concept and the interaction between clients and health professionals.'
    },
    
    {
        month : 'April',
        date : '19th April',
        description : 'The pressure has been building recently to arrange interviews with clients.  It is vitally important for us to understand client’s problems and barriers to work in order to design an appropriate solution.'
    },
    
    {
        month : 'April',
        date : '20th April',
        description : 'Finally a breakthrough – After a fantastic meeting with Treehouse we have an in. Treehouse have kindly offered to ask their students if they would be willing to partake in some research and so far we have three expressions of interest!'
    },
    
    {
        month : 'April',
        date : '21st April',
        description : 'A new name is on the horizon! One of the exciting parts of the past week has been that we have come up with a name for our company. You probably have already seen the new branding but here we go PATHSTARTERS!'
    },
    
    {
        month : 'April',
        date : '22nd April',
        description : 'Im not going to lie to you, this has been a challenging process. We now understand the statement about R9 being like being inside a pressure cooker. I guess it is all about how committed you are to the process.  We are learning a lot about mental health, the ministry and the highs and lows across government.'
    },
    
    {
        month : 'April',
        date : '25th April',
        description : 'Today we began to interview clients at Work and Income and at Treehouse which was kindly supported by my Investment Approach colleagues.  After a substantial effort to get in front of clients it has all paid off.'
    },
    
    {
        month : 'April',
        date : '28th April',
        description : 'At this stage, we have only completed 7 interviews with clients but we have begun to draw the outlines of a picture of their problems.  Next week we will continue to interview at Service Centre’s in both Wellington and Upper Hutt.'
    },
    
    {
        month : 'May',
        date : '1st May',
        description : 'We have a huge week of interviews ahead of us. This week we are living divide and conquer, sending everyone everywhere so we can get as much validation as possible!'
    },
    
    {
        month : 'May',
        date : '3rd May',
        description : 'We had our advisory board meeting today, and it is seeming as clear as ever that we need to focus in on a single idea. Apart from that it went really well and it was amazing to finally have all our advisors in the same room. This lead to some riveting discussion and we were all in awe of the depth of knowledge Dr Ian Soosay brought to the table. One word. Wow.'
    },
    
    {
        month : 'May',
        date : '3rd May',
        description : 'Today we had a hackathon style design session. This was very useful in helping us decide on a single idea and also was a great way to bring the team back together after a hectic week of interviews. Back to basics, the whole team in one room working towards the same goal. With the validation of the interviews we now feel like we are aiming towards a clear target rather than into the murky distance.'
    }
  ];
  
  $scope.counter = true;
  
  $scope.setCounter = function(bool){
      
      $scope.counter = bool;
      
  };
  
  
});

