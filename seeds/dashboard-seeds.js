const {Dashboard} = require('../models');
  const dashboardData = [
    {
    id:1,
    title:'How to workout at home',
    content:'There are many ways to workout at home, you can do pushups, situps, squats, and many more. You can also use your own body weight to workout.',
    user_name:'John',
    date_created:'2021-10-12'
    },
    {
    id:2,
    title:'eating healthy',
    content:'   Eating healthy is very important, you can eat fruits and vegetables, and also drink lots of water. You can also eat lean meats like chicken and fish.',
    user_name:'Jane',
    date_created:'2021-10-12'
    },
    {
        id:3,
        title:'Supplements',
        content:'Supplements are very important to take, they can help you get the nutrients you need. You can take protein, creatine, and many more.',
        user_name:'Bob',
        date_created:'2021-10-12'
    },

    {
        id:4,
        title:'is liftin heavy really important for muscle growth?',
        content:'Lifting heavy is not really important for muscle growth, you can do high reps and low weight and still get the same results.',
        user_name:'Mike',
        date_created:'2021-10-12'
    },
    {
        id:5,
        title:'How to lose weight',
        content:'You can lose weight by eating healthy and working out. You can also do cardio, and drink lots of water.',
        user_name:'Joe',
        date_created:'2021-10-12'
    },
    {
        Id:6,
        title:'How to gain weight',
        content:'You can gain weight by eating more calories than you burn, you can also eat more protein and carbs.',
        user_name:'John',
        date_created:'2021-10-12'
    },
    {
        id:7,
        title:'How to get abs',
        content:'You can get abs by eating healthy and working out, you can also do cardio and drink lots of water.',
        user_name:'Jane',
        date_created:'2021-10-12'
    },
    {
        id:8,
        title:'How to get big arms',
        content:'You can get big arms by doing bicep curls and tricep extensions, you can also do pushups and pullups.',
        user_name:'Bob',
        date_created:'2021-10-12'
    } ];
    const seedDashboard = () => Dashboard.bulkCreate(dashboardData);
    module.exports= seedDashboard;