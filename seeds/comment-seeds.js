const{Comment}  = require('../models');

const commentData = [
    {
        id:1,
        content:'This is a great article',
        user_name:'John',
        date_created:'2021-10-12',
        dashboard_id:1
    },
    {
        id:2,
        content:'I agree with this article',
        user_name:'Jane',
        date_created:'2021-10-12',
        dashboard_id:2
    },
    {
        id:3,
        content:'This is a great article',
        user_name:'Bob',
        date_created:'2021-10-12',
        dashboard_id:3
    },
    {
        id:4,
        content:'I agree with this article',
        user_name:'Mike',
        date_created:'2021-10-12',
        dashboard_id:4
    },
    {
        id:5,
        content:'This is a great article',
        user_name:'Joe',
        date_created:'2021-10-12',
        dashboard_id:5
    },
    {
        id:6,
        content:'I agree with this article',
        user_name:'John',
        date_created:'2021-10-12',
        dashboard_id:6
    },
    {
        id:7,
        content:'This is a great article',
        user_name:'Jane',
        date_created:'2021-10-12',
        dashboard_id:7
    },
    {
        id:8,
        content:'I agree with this article',
        user_name:'Bob',
        date_created:'2021-10-12',
        dashboard_id:8
    },
    {
        id:9,
        content:'This is a great article',
        user_name:'Mike',
        date_created:'2021-10-12',
        dashboard_id:1
    },
];
const seedComment = () => Comment.bulkCreate(commentData);  
module.exports = seedComment;